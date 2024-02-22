<template>
  <div>
    <nav class="navbar header align-items-center position-sticky top-0 z-1">
      <div class="container">
        <div class="d-flex gap-2 p-2 align-items-center">
          <div>
            <router-link to="/HomePage" class="text-decoration-none text-black">
              <i class="ri-arrow-left-line text-black"
                ><span class="ps-2 quotationsfs">Contacts&nbsp;List </span></i
              ></router-link
            >
          </div>
        </div>
        <div class="ri-search-line1">
          <i class="ri-search-line"></i>
        </div>
      </div>
    </nav>
    <div class="p-3 container">
      <div class="position-relative" v-if="show1">
        <table class="mt-2 w-100">
          <thead>
            <tr class="position123">
              <th>S.no</th>
              <th>Names</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in lead" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                {{ item.first_name }}
                <div>
                  <div class="line-height">
                    <span class="idNumbers"
                      >Phoneno : {{ item.phone || "Null" }}</span
                    >
                  </div>
                </div>
              </td>
              <td>
                <span
                  ><i class="ri-eye-line" @click="toDetails(item)"></i
                ></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="" v-if="show2">
        <form @submit.prevent="submitForm()">
          <div class="form-outline">
            <label class="form-label" for="typeNumber">Name:</label>
            <input
              type="text"
              class="form-control"
              id="typeNumber"
              placeholder="Name"
              v-model="customerContact.first_name"
            />
            <p class="error-message text-danger">{{ errors.first_name }}</p>

            <label class="form-label" for="typeNumber">MobileNumber:</label>
            <input
              type="number"
              id="typeNumber"
              class="form-control"
              :v-model="customerContact.phone_nos[0].phone"
            />
            <p class="error-message text-danger">{{ errors.phone }}</p>

            <label class="form-label" for="typeNumber">Email_id:</label>
            <input
              type="email"
              class="form-control"
              id="typeNumber"
              placeholder="email_id"
              v-model="customerContact.email_id"
            />
            <p class="error-message text-danger">{{ errors.email_id }}</p>

            <button type="submit" class="btn submitbtn mt-3">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { Doctypes, ApiUrls } from "@/shared/apiUrls";
import "vue3-toastify/dist/index.css";
import { toast } from "vue3-toastify";

export default {
  data() {
    return {
      lead: [],
      showOne: true,
      showTwo: false,
      showThree: false,
      show1: true,
      show2: false,

      newPhoneNumber: "",
      customerContact: {},
      errors: {
        first_name: "",
        phone: "",
        email_id: "",
      },
    };
  },
  mounted() {
    this.LeadData();

    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.$router.push({ name: "LoginPage" });
    }
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.customerContact.first_name.trim()) {
        this.errors.first_name = "Name is required";
      }

      const mobileNumber = this.customerContact.phone.toString().trim();
      if (!mobileNumber) {
        this.errors.phone = "MobileNumber is required";
      } else if (!/^\d{10}$/.test(mobileNumber)) {
        this.errors.phone = "MobileNumber must contain exactly 10 digits";
      }

      if (!this.customerContact.email_id.trim()) {
        this.errors.email_id = "Email_id is required";
      } else if (!/^\S+@\S+\.\S+$/.test(this.customerContact.email_id)) {
        this.errors.email_id = "Invalid email address";
      }

      return Object.keys(this.errors).length === 0;
    },
    submitForm() {
      if (this.validateForm()) {
        if (this.customerContact.phone_nos.length === 0) {
          this.customerContact.phone_nos.push({
            phone: this.newPhoneNumber,
          });
        } else {
          this.customerContact.phone_nos[0].phone = this.newPhoneNumber;
        }

        console.log("Updated Contact Data:", this.customerContact);

        axios
          .put(
            ApiUrls.resource +
              "/" +
              Doctypes.contacts +
              "/" +
              this.customerContact?.name,
            this.customerContact,

            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              withCredentials: true,
            }
          )
          .then((response) => {
            console.log(response);

            console.log(this.customerContact);

            toast.success("Successfully updated contact", {});
            this.show1 = true;
            this.show2 = false;
          })
          .catch((error) => {
            console.error(error);
            toast.error("Failed to update contact", {});
          });
      }
    },

    toDetails(quota) {
      (this.show1 = false), (this.show2 = true);
      console.log(quota.name);
      this.$router.push({
        query: {
          id: quota.name,
        },
      });

      let quotationQueryParams = {
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
      };

      axios
        .get(ApiUrls.resource + "/" + Doctypes.contacts + "/" + quota.name, {
          params: quotationQueryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((quotationResponse) => {
          this.customerContact = quotationResponse.data.data;
          console.log(this.customerContact);
        })
        .catch((quotationError) => {
          console.error(
            "Error fetching quotation data:",
            quotationError.message
          );
        });
    },

    LeadData() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      queryParams.limit_page_length = null;
      queryParams.filters = JSON.stringify(queryParams?.filters);
      axios
        .get(ApiUrls.resource + "/" + Doctypes.contacts, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          this.lead = response.data.data;
          console.log(this.lead.phone_nos, "adfasjhk");
          console.log(this.lead.length, "Lead count======", this.lead);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    Addlead() {
      this.showOne = false;
      this.showTwo = false;
      this.showThree = true;
    },
    backtolist() {
      this.showOne = true;
      this.showTwo = false;
      this.showThree = false;
    },
    // toDetails(name) {
    //   (this.show1 = false), (this.show2 = true);
    //   this.lead.filter((lead) => {
    //     if (lead.name == name) {
    //       this.customerContact = lead;
    //       console.log(this.customerContact);
    //     }
    //   });
    // },
  },
};
</script>
<style  scoped>
.error-message {
  font-size: 12px;
}
.submitbtn {
  border-radius: 4px;
  border: 0.7px solid #3b43f9;
  background: #ecedff;
  color: #3b43f9;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  /* margin-top: 10px; */
  align-items: center;
  gap: 10px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
}
.form-label {
  font-size: 12px;
}
.form-control {
  font-size: 14px;
}
.position123 {
  position: sticky;
  top: 60px;
  z-index: 10;
  background: white;
}
.navbar {
  background: white !important;
  z-index: 10;
  position: sticky;
  top: 0%;
}
.ri-eye-line {
  cursor: pointer;
}

table tr {
  border: 1px solid #eee;
  border-collapse: collapse;
  text-align: start;
  vertical-align: middle !important;
}

table thead {
  position: sticky;
  top: 40px;
  z-index: 1;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

thead th {
  padding: 10px;
}

tbody td {
  color: #111;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 50px;
  padding: 0px 10px;
}

tbody tr {
  transition: all 0.3s ease;
}

tbody tr:hover {
  background: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.idNumbers {
  color: #999;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  margin: 0;
}

.line-height {
  line-height: normal;
  padding: 3px 0px;
}

.idStatus {
  color: #878787;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
}

.back-to {
  color: #111;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.navigated {
  border-bottom: 1px solid #eee;
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: white;
}

.lead-heading {
  color: #111;
  font-family: Montserrat;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 37px;
}

.card-para {
  color: #999;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  padding-left: 20px;
}

.image-center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.all-cards {
  border-bottom: 1px solid#EEE !important;
  border: none;
}

.Getstart {
  display: flex;
  width: 366px;
  height: 42px;
  padding: 8px 17px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 24px;
  /* background-color: #fff;
    color: #3B43F9; */
  color: #fff;
  background-color: #3b43f9;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: 1px solid #3b43f9;
}

/* .Getstart:hover {
    color: #fff;
    background-color: #3B43F9;
} */

.started-div {
  background-color: #fff;
  padding: 20px 5px;
  position: sticky;
  bottom: 0px;
}

.optional {
  color: #999;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (max-width: 575px) {
  .title-div {
    width: 80%;
  }

  .img-div {
    width: 20%;
  }
}

@media (min-width: 575px) and (max-width: 2560px) {
  .all-cards {
    width: 565px;
  }
}
.quotationsfs {
  color: #111;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 8px;
}

.ri-arrow-left-line {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 20px;
  color: black;
}

.ri-search-line {
  font-size: 15px;
  flex-shrink: 0;
  color: #3b43f9;
}

.header {
  border-bottom: 1px solid #eee;

  background: #fff;
  /* width: 430px; */
  height: 62px;
  flex-shrink: 0;
}
</style>
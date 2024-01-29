<template>
  <div class="">
    <nav class="navbar header">
      <div class="container">
        <div class="d-flex gap-2 p-2 align-items-center">
          <div>
            <i class="ri-arrow-left-line"
              ><span class="ps-2 quotationsfs"
                >Quotations &nbsp;({{ totalQuotations }})</span
              ></i
            >
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <div class="header2">
        <div
          class="d-flex justify-content-between align-items-center buttonsall"
        >
          <ul
            class="d-flex list-unstyled justify-content-between flex-wrap list-group flex-row"
          >
            <!-- Add click event handlers to the filter buttons -->
            <li
              class="list-group-item btn2"
              :class="{ active: activeFilter === 'All' }"
              @click="setFilter('All')"
            >
              All
            </li>
            <li
              class="list-group-item btn2"
              :class="{ active: activeFilter === 'Lead' }"
              @click="setFilter('Lead')"
            >
              Lead
            </li>
            <li
              class="list-group-item btn2"
              :class="{ active: activeFilter === 'Customer' }"
              @click="setFilter('Customer')"
            >
              Customer
            </li>
            <li
              class="list-group-item btn2"
              :class="{ active: activeFilter === 'Ordered' }"
              @click="setFilter('Ordered')"
            >
              Ordered
            </li>
            <!-- ... other filter buttons ... -->

            <li
              class="list-group-item btn2"
              :class="{ active: activeFilter === 'This Month' }"
              @click="setFilter('This Month')"
            >
              This Month
            </li>
            <!-- <select class="border-0 selectback">
                <option class="border-0 bg-none">This Month</option> 
              </select> -->
          </ul>
        </div>
      </div>
      <div class="content">
        <div class="row">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
            <div
              class="card card1 mb-4"
              v-for="(employee, index) in filteredQuotations"
              :key="index"
            >
              <div
                class="d-flex justify-content-between p-2 align-items-baseline"
                style="border-bottom: 1px solid #eeeeee"
              >
                <div class="d-flex gap-3 align-items-center">
                  <div class="d-flex justify-content-center ri-file-edit-line1">
                    <i class="ri-file-edit-line"></i>
                  </div>
                  <div>
                    <p style="font-size: 13px" class="align-items-center mt-3">
                      {{ employee.name }}<br /><span
                        class="text-muted"
                        style="font-size: 11px"
                        >{{ employee.transaction_date }}</span
                      >
                    </p>
                  </div>
                </div>
                <div>
                  <button class="savedbutton">{{ employee.status }}</button>
                </div>
              </div>
              <div class="p-3">
                <h6 class="" style="font-size: 13px">
                  {{ employee.customer_name }}
                </h6>
                <p style="font-size: 11px; color: #3b43f9">
                  {{ employee.quotation_to }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          class="btn btn-primary circle-with-plus"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasBottom"
          aria-controls="offcanvasBottom"
        >
          +
        </button>

        <div
          class="offcanvas offcanvas-bottom h-50"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel"></h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small">
            <h5 class="offcanvastext text-center">
              <b>Specify the quotation's <br />intended recipient.</b>
            </h5>
            <div class=" ">
              <router-link to="/NewQuate" class="text-decoration-none">
                <button class="btn btncustomer w-100">
                  To Customer
                </button></router-link
              >
              <div class="mt-3 d-flex justify-content-center">
                <button class="btn btncustomer">To Lead</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      allQuotation: [],
      filterType: "All",
      employeeFilterType: "Lead",
      activeFilter: "All",
      filterType1: "Customer",
      filterType2: "Lead",
      filterType3: "This Month",
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalQuotations() {
      return this.filteredQuotations.length;
    },
    filteredQuotations() {
      if (this.filterType === "All") {
        return this.allQuotation;
      } else if (this.filterType1 === "Customer") {
        return this.allQuotation.filter(
          (employee) => employee.quotation_to === this.filterType1
        );
      } else if (this.filterType2 === "Lead") {
        return this.allQuotation.filter(
          (employee) => employee.quotation_to === this.filterType2
        );
      } else if (this.filterType3 === "This Month") {
        return this.allQuotation.filter(
          (employee) => employee.transaction_date === this.filterType3
        );
      } else {
        return this.allQuotation.filter(
          (employee) => employee.status === this.filterType
        );
      }
    },
  },
  methods: {
    setFilter(type) {
      this.activeFilter = type;
      this.filterType = type;
      this.filterType1 = type;
      this.filterType2 = type;
      this.filterType3 = type;
    },

    fetchData() {
      this.loading = true;
      axios
        .get(
          "http://192.168.1.177:8000/api/resource/Quotation?fields=[%22*%22]",
          {
            params: {
              fields: JSON.stringify(["*"]),
            },
          }
        )
        .then((response) => {
          this.allQuotation = JSON.parse(JSON.stringify(response.data.data));
          console.log(this.allQuotation);
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>
  <style scoped>
.selectback {
  background: none !important;
}
.draftbtn {
  border-radius: 4px;
  border: 0.7px solid #999;
  background: #f1f1f1;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #999;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.btncustomer {
  border-radius: 30px;
  background: #3b43f9;
  color: white;
  width: 100%;
}

.offcanvastext {
  color: #111;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.ri-search-line1 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 21px;
}

.ri-file-edit-line1 {
  width: 32px;
  height: 32px;
  border-radius: 24px;
  background: #979bff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 25px;
}

.circle-with-plus {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3b43f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 25px;
  position: fixed;
  /* top: 100%; */
  bottom: 10%;
  right: 6%;
}

.quotationsfs {
  color: #111;
  font-family: Montserrat;
  font-size: 15px;
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
}

.ri-search-line {
  font-size: 15px;
  flex-shrink: 0;
  color: #3b43f9;
}

.header {
  border-bottom: 1px solid #eee;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  background: #fff;
  flex-shrink: 0;
  position: sticky;
  top: 0%;
  z-index: 10;
}

.header2 {
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 11px 24px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.buttonsall {
  padding: 10px 10px;
}

.btn2 {
  border-radius: 20px;
  /* background: #f3f3f3;
  color: #3c3c3c; */
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 5px 14px;
  margin: 3px 5px;
}
li {
  margin-top: 10px;
}

.content {
  background: #f9f9f9;
  padding: 6px 14px;
  align-items: center;
  gap: 10px;
}

.card1 {
  border-radius: 4px;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.05);
}

.ri-file-edit-line {
  font-size: 15px;
  color: white;
}

.savedbutton {
  border-radius: 4px;
  border: 0.7px solid #3b43f9;
  background: #ecedff;
  color: #3b43f9;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
@media (min-width: 500px) and (max-width: 2096px) {
  .btncustomer {
    width: 30%;
  }
}
.list-group-item.active {
  background: #3b43f9 !important;
  color: white !important;
  padding: 7px 14px;
  border: none;
  margin-top: 0 !important;
  /* border-top-width: 1 !important; */
}
/* .list-group-item + .list-group-item.active {
  margin-top: 0 !important;
  border-top-width: 0 !important;
} */
</style>
<script setup>
</script>
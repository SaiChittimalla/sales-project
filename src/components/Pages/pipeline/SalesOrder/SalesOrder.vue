<template>
  <nav class="navbar header align-items-center" >
    <div class="container">
      <div class="d-flex gap-2 p-2 align-items-center" v-if="show">
        <div>
          <router-link to="/HomePage" class="text-decoration-none text-black">
            <i class="ri-arrow-left-line text-black"><span class="ps-2 quotationsfs">SalesOrders &nbsp;({{ totalQuotations
            }})</span></i></router-link>
        </div>
      </div>
      <div v-if="!show">
          <span class=" quotationsfs" @click="backMove()"><i
              class="ri-arrow-left-line text-black me-2 "></i>Sales Order Details</span>
      </div>
      <div class="ri-search-line1">
        <i class="ri-search-line"></i>
      </div>
    </div>
  </nav>
  
  <div class="container" v-if="show">
    <div class="header2">
      <div class="d-flex justify-content-between align-items-center buttonsall">
        <ul class="d-flex flex-wrap list-unstyled list-group flex-row gap-1">
          <div></div>
          <li class="list-group-item btn2" :class="{ active: activeFilter === 'All' }" @click="setFilter('All')">
            All
          </li>
          <li class="list-group-item btn2" :class="{ active: activeFilter === 'Draft' }" @click="setFilter('Draft')">
            Draft
          </li>
          <li class="list-group-item btn2" :class="{ active: activeFilter === 'Completed' }"
            @click="setFilter('Completed')">
            Completed
          </li>
          <li class="list-group-item btn2" @click="setFilter('This Month')">
            <select class="border-0 bg-white">
              <option class="border-0">This Month</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
          <div class="card card1 mb-4" v-for="(sales, index) in filteredQuotations" :key="index">
            <div class="d-flex justify-content-between p-2 align-items-baseline" style="border-bottom: 1px solid #eeeeee">
              <div class="d-flex gap-3 align-items-center">
                <div class="d-flex justify-content-center ri-file-edit-line1">
                  <i class="ri-file-edit-line"></i>
                </div>
                <div>
                  <p style="font-size: 13px" class="align-items-center mt-3">
                    {{ sales.name }}<br /><span class="text-muted" style="font-size: 11px">{{ sales.transaction_date
                    }}</span>
                  </p>
                </div>
              </div>
              <div>
                <button class="savedbutton1" @click="salesDetails(sales.name)">View</button>
              </div>
            </div>
            <div class="d-flex justify-content-between p-2 align-items-center ">
              <div class="p-3">
                <h6 class="" style="font-size: 13px">{{ sales.customer_name }}</h6>
                <p style="font-size: 11px; color: #3b43f9">Customer</p>
              </div>
              <div>
                <button class="savedbutton">{{ sales.status }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-link to="/NewSalesOrder" class="text-decoration-none">
        <button class="btn btn-primary circle-with-plus" type="button">+</button>
      </router-link>
    </div>
  </div>

  <div class="container" v-if="!show">
    <div class="card card1 p-3">
      <div class="card card1 p-4">
        <p style="font-size: 13px" class="text-black">
          Sales Order NO :- <span class=" text-muted ">{{ currentEmployee.name }}</span>
        </p>
        <p style="font-size: 13px">Customer Name :- <span class=" text-muted ">{{ currentEmployee.customer_name }}</span></p>

        <!-- <p style="font-size: 13px">Primary Contact Details:</p> -->
        <div>
          <p style="font-size: 13px">
           Mobile NO :- <span class="text-muted">&nbsp;{{ currentEmployee.contact_mobile }}</span>
          </p>
          <p style="font-size: 13px">
            E-mail :- <span class="text-muted">
              &nbsp;{{ currentEmployee.contact_email }}</span>
          </p>
        </div>
      </div>

      <div class="card card1 p-4 mt-3">
        <p style="font-size: 14px">Address:</p>
        <div class="">
          <p style="font-size: 13px">
            Billing Address:<br /><span class="text-muted">{{ currentEmployee.shipping_address }}</span>
          </p>
          <p style="font-size: 13px">
            Shipping Address:<br /><span class="text-muted">{{ currentEmployee.shipping_address }}</span>
          </p>
        </div>
      </div>
      <div class="card card1 mt-3 p-4">
        <div class="d-flex justify-content-between mt-2 p-1" style="border-bottom: 1px dashed #eee">
          <h6>Total Items Value</h6>
          <h6>₹{{ currentEmployee.base_rounded_total }}</h6>
        </div>
        <div class="d-flex justify-content-between p-1 mt-3">
          <div>
            <h6>
              {{ currentEmployee.account_head }}{{ currentEmployee.rate }}
            </h6>
          </div>
          <div>
            <h6 class="text-muted">
              ₹ {{ currentEmployee.tax_amount || 0 }}
            </h6>
          </div>
        </div>
        <div class="d-flex justify-content-between p-1 mt-3">
          <div>
            <h6>SGST:&nbsp;9%</h6>
          </div>
          <div>
            <h6 class="text-muted">₹ 5434</h6>
          </div>
        </div>
        <div class="d-flex justify-content-between p-1 mt-3">
          <div>
            <h6>IGST:&nbsp;0</h6>
          </div>
          <div>
            <h6 class="text-muted">₹ 0.00</h6>
          </div>
        </div>

        <div class="d-flex justify-content-between p-1 mt-3" style="border-bottom: 1px dashed LIGHTGREY">
          <div>
            <h6>Total:</h6>
          </div>
          <div>
            <h6>₹ {{ currentEmployee.base_rounded_total }}</h6>
          </div>
        </div>
        <div class="d-flex justify-content-between p-1 mt-3">
          <div>
            <h6>Discount</h6>
            <p class="text-muted">Give additional discount before tax</p>
          </div>
          <div class="d-flex gap-2">
            <!-- <div class="circle-with-plus">+</div> -->
            <div>
              <p style="color: #3b43f9" class="text-nowrap">
                Add Discount
              </p>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between">
            <h6>Grand Total</h6>
            <h6 class="text-muted">{{ currentEmployee.qty }}</h6>
            <h6>{{ currentEmployee.base_rounded_total }}</h6>
          </div>
        </div>
      </div>
    </div>
    <div>
      <router-link to="/NewSalesOrder" class="text-decoration-none">
        <button class="btn btn-primary circle-with-plus" type="button">+</button>
      </router-link>
    </div>
  </div>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      show: true,
      saleOrders: [],
      filterType: "All",
      activeFilter: "All",
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
        return this.saleOrders;
      } else {
        // Filter quotations based on the selected type
        return this.saleOrders.filter(
          (sales) => sales.status === this.filterType
        );
      }
    },
  },
  methods: {
    setFilter(type) {
      this.activeFilter = type;
      this.filterType = type;
    },
    backMove() {
      // if (this.show == true) this.$router.push();
      this.show = !this.show;
    },
    fetchData() {
      this.loading = true;
      let queryParams = {
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        filters: JSON.stringify([]),
      };
      axios
        .get("api/resource/Sales%20Order", {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          this.saleOrders = JSON.parse(JSON.stringify(response.data.data));
          console.log(this.saleOrders);
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    salesDetails(name) {
      this.show = false;
      this.saleOrders.filter((sales) => {
        if (sales.name == name) {
          this.currentEmployee = sales;
          console.log(this.currentEmployee);
        }
      });
    },

    //  fetchData() {
    //   let queryParams = { filters: [] };
    //   // queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
    //   queryParams.filters.push(["section", "=", "Main LT Panel"]);
    //   queryParams.filters = JSON.stringify(queryParams.filters);
    //   queryParams.fields = JSON.stringify(["*"]);
    //   console.log("name:", this.$route.query.id);
    //   console.log("tab name :" + this.fetchData);
    //   axios
    //     .get(
    //       "http://192.168.1.177:8000/api/resource",
    //       {
    //         params: queryParams,
    //       }
    //     )
    //     .then((response) => {
    //       this.data = JSON.parse(JSON.stringify(response.data.data));
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },


  },
};
</script>
<style scoped>
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
  right: 17%;
}

.buttonsall {
  padding: 10px 10px;
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

.header2 {
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 11px 24px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.active {
  border-radius: 20px;
  background: #3b43f9;
  color: white;
  border: 0px;
  /* color: #3C3C3C; */
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 4px 15px;
  /* margin: 0px 5px; */
}

.btn2 {
  border-radius: 20px;

  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 4px 15px;

  margin: 3px 5px;
}

.list-group-item+.list-group-item.active {
  border-top-width: 1px !important;
  background: #3b43f9;
  color: white;
  padding: 5px 14px;
}

li {
  margin-top: 10px;
}

.content {
  background: #f9f9f9;
  /* display: inline-flex; */
  padding: 6px 14px;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  /* height: 932px; */
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
  margin-bottom: 20px;
  font-weight: 500;
  line-height: normal;
  padding: 6px 14px;
}

.savedbutton1 {
  border: none;
  background: none;
  text-decoration: underline;
  font-size: 13px;
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

*:focus {
  outline: none;
}

@media (min-width: 300px) and (max-width: 420px) {}

.card1 {
  border-radius: 4px;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.05);
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
</style>
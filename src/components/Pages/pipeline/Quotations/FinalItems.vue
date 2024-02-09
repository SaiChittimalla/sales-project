<template>
  <div class="">
    <nav class="navbar header">
      <div class="container">
        <div class="p-1">
          <i class="ri-arrow-left-line quotationsfs"
            ><span class="ps-2">New Quotation - Customer</span></i
          >
        </div>
      </div>
    </nav>
    <div class="d-flex justify-content-center">
      <div class="bg-1">
        <div class="inputheader mt-3">
          <div class="p-3">
            <label for="Companyselect">
              <p class="text-muted">Customer</p> </label
            ><br />
            <select
              class="form-select formfocus w-100 border-0"
              aria-label="Default select example"
              v-model="selectedCustomer"
              @change="fetchItemsForCustomer"
            >
              <option
                v-for="(customer, index) in customerList"
                :key="index"
                :value="customer.customer_name"
              >
                {{ customer.customer_name }}
              </option>
            </select>

            <!-- <select name="customer" id=" Companyselect" class="border-0 bg-white w-100 dropdown-select">
              <option class="bg-light border-0 text-muted " value="caratRed Technologies Pvt Ltd">
                <h6></h6>
              </option>
            </select> -->
          </div>
        </div>
        <div v-if="selectedCustomer">
          <div v-for="(item, index) in selectedCustomerItems" :key="index">
            <div class="card card1 mt-4">
              <div class="card-header border-bottom-0">
                <div
                  class="d-flex justify-content-between p-1 align-items-center"
                >
                  <div>
                    <h6>Products</h6>
                    <p>Add items to your quotation.</p>
                  </div>
                  <div class="d-flex gap-1 align-items-center">
                    <div class="">
                      <img
                        src="../../../../assets/gridicons_add-outline.png"
                        alt="icon"
                        class="img-fluid mb-3"
                      />
                    </div>
                    <div>
                      <p class="">Add Item</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card-body card-body123">
                <div class="d-flex justify-content-between">
                  <div>
                    <h6>{{ item.item_name }}</h6>
                    <p>
                      {{ item.description }}
                    </p>
                  </div>
                  <div class="d-flex align-items-center gap-2">
                    <button class="btn border-1 increment">
                      <button class="btn border-0 p-0" @click="decrement(item)">
                        -
                      </button>
                      <h6>
                        <span id="count">{{ item.qty }}</span>
                      </h6>
                      <button class="btn p-0 border-0" @click="increment(item)">
                        +
                      </button>
                    </button>
                  </div>
                  <div>
                    <h6>₹ {{ item.base_price_list_rate }}</h6>
                    <p class="text-end" style="color: #3b43f9">Edit</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card card1 mt-3 p-1">
              <div
                class="d-flex justify-content-between mt-2 p-1"
                style="border-bottom: 1px dashed #eee"
              >
                <h6>Total Items Value</h6>
                <h6>₹{{ item.base_amount }}</h6>
              </div>
              <div class="d-flex justify-content-between p-1 mt-3">
                <div>
                  <h6>CGST:&nbsp;9%</h6>
                </div>
                <div>
                  <h6 class="text-muted">₹ 5689.30</h6>
                </div>
              </div>
              <div class="d-flex justify-content-between p-1 mt-3">
                <div>
                  <h6>SGST:&nbsp;9%</h6>
                </div>
                <div>
                  <h6 class="text-muted">
                    ₹ {{ item.total_taxes_and_charges }}
                  </h6>
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

              <div class="d-flex justify-content-between p-1 mt-3">
                <div>
                  <h6>VAT:&nbsp;0</h6>
                </div>
                <div>
                  <h6 class="text-muted">₹ 0.00</h6>
                </div>
                <div>
                  <h6 class="text-muted">₹ 0.00</h6>
                </div>
              </div>
              <div class="d-flex justify-content-between p-1 mt-3">
                <div>
                  <h6>SEZ:&nbsp;0</h6>
                </div>
                <div>
                  <h6 class="text-muted">₹ 0.00</h6>
                </div>
              </div>
              <div
                class="d-flex justify-content-between p-1 mt-3"
                style="border-bottom: 1px dashed LIGHTGREY"
              >
                <div>
                  <h6>Total:</h6>
                </div>
                <div>
                  <h6>₹ 11,614.00</h6>
                </div>
              </div>
              <div class="d-flex justify-content-between p-1 mt-3">
                <div>
                  <h6>Discount</h6>
                  <p class="text-muted">Give additional discount before tax</p>
                </div>
                <div class="d-flex gap-2">
                  <div class="circle-with-plus">+</div>
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
                  <h6 class="text-muted">{{ item.qty }}</h6>
                  <h6>₹ {{ item.base_rounded_total }}</h6>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-between mt-3 positionbtn mb-1">
              <div class="mt-2 mb-2">
                <button class="btn btndraft">
                  <h6 class="m-0">Save as draft</h6>
                </button>
              </div>
              <div class="mt-2 mb-2">
                <button class="btn btn-quot text-decoration-none">
                  <router-link
                    to="/QuotationsList"
                    class="text-decoration-none"
                  >
                    <h6 class="text-white m-0">
                      Create Quotation
                    </h6></router-link
                  >
                </button>
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
      count: 0,
      data: [],
      customerList: [],
      selectedCustomer: null,
      selectedCustomerItems: [],
      searchQuery: "",
    };
  },
  mounted() {
    this.fetchData();
    this.fetchItemsForCustomer();
  },
  methods: {
    increment(item) {
      this.count = this.count + 1;
      item.qty = this.count;
      item.base_rounded_total = item.qty * item.base_price_list_rate;
      item.base_amount = item.qty * item.base_price_list_rate;
    },
    decrement(item) {
      if (this.count > 0) {
        this.count = this.count - 1;
        item.qty = this.count;
        item.base_rounded_total = item.qty * item.base_price_list_rate;
        item.base_amount = item.qty * item.base_price_list_rate;
      }
    },

    // ...

    fetchData() {
      this.loading = true;
      axios
        .get("http://192.168.1.177:8000/api/resource/Quotation", {
          params: {
            fields: JSON.stringify(["*"]),
            search: this.searchQuery,
          },
        })
        .then((response) => {
          this.customerList = JSON.parse(JSON.stringify(response.data.data));
          console.log(this.customerList);
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    fetchItemsForCustomer() {
      if (this.selectedCustomer) {
        axios
          .get(
            `http://192.168.1.177:8000/api/resource/Quotation/SAL-QTN-2024-00003?fields=[%22*%22]`,
            {
              params: {
                fields: JSON.stringify(["*"]),
                customer_name: this.selectedCustomer,
              },
            }
          )
          .then((response) => {
            this.selectedCustomerItems = response.data.data.items;
          })
          .catch((error) => {
            console.error(error.message);
          });
      } else {
        this.selectedCustomerItems = [];
      }
    },
  },
};
</script>
<style scoped>
.btn:focus {
  box-shadow: none;
}
.formfocus:focus {
  box-shadow: none;
}
select option {
  background-color: white !important;
  color: black !important;
  border: none !important;
  border-radius: 10px !important;
}

.dropdown-select {
  outline: none;
  border: none;
}

.positionbtn {
  position: sticky;
  bottom: 0%;
  background: white;
  z-index: 100;
}

.circle-with-plus {
  width: 18px;
  height: 18px;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b43f9 !important;
  font-size: 15px;
  border: 1px solid;
}

.btndraft {
  border-radius: 40px;
  background: #f8f8ff;
  color: #3b43f9;
  padding: 10px 10px;
}

.btn-quot {
  border-radius: 40px;
  background: #3b43f9;
  color: white;
  padding: 10px 10px;
  text-decoration-line: none !important;
}

.increment {
  display: inline-flex;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid #eee;
  background: #fff;
  display: inline-flex;
  padding: 8px 10px;

  gap: 15px;
}

.circle-with-plus1 {
  width: 15px;
  height: 15px;
  border-radius: 10px 10px 10px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-size: 13px;
  border: 1px solid;
}

.bg-1 {
  background-color: #f9f9f9;
}

.ri-arrow-left-line {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 20px;
}

.select {
  border: none !important;
  background: white;
}

.quotationsfs {
  color: #111;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
*:focus {
  outline: none;
}

.header {
  border-bottom: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  flex-shrink: 0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}

.inputheader {
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
}

.card1 {
  border-radius: 10px 10px 0px 0px;
  background: #fafafa;
}

.card-body123 {
  border-bottom: 1px solid #eeeeee;
}

h6 {
  color: #111;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

p {
  color: #444;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (min-width: 500px) and (max-width: 2096px) {
  .card {
    width: 500px;
  }

  .positionbtn {
    width: 500px;
  }

  .inputheader {
    width: 500px;
  }
}
</style>

  
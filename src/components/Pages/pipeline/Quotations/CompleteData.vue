<template>
  <section v-if="show1">
    <section>
      <div class="container-fluid">
        <div class="row">
          <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
          <div class="shadow-lg">
            <router-link to="/QuotationsList" class="text-decoration-none">
              <h6 class="fw-bold py-2">
                <i class="bi bi-arrow-left me-2 mt-5"></i>New Quotation -
                Customer
              </h6></router-link
            >
          </div>
        </div>

        <div class="row">
          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="mt-4 mx-2">
              <div class="card p-2 rounded-3 shadow-sm dropdown-card">
                <h6 class="m-2 label-name">Customer</h6>
                <div class="custom-select">
                  <input
                    class="input-search w-100 border-0 ms-2"
                    placeholder="search or select a customer"
                    type="text"
                    v-model="searchQuery"
                  />
                  <ul v-show="isOpen" class="ul-tag w-100 ms-2">
                    <li
                      v-for="customer in customers"
                      :key="customer.id"
                      class="list-items"
                      @click="selectCustomer(customer)"
                    >
                      {{ customer.name }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div class="mt-4 mx-2">
              <div class="card rounded-3 shadow-sm product-card">
                <div class="row">
                  <div class="col-8">
                    <h6 class="m-2 label-name">Product</h6>
                    <p class="text-secondary ms-2 m-0 product">
                      Add items to your quotation.
                    </p>
                  </div>
                  <div
                    class="col-4 d-flex align-items-center justify-content-center text-nowrap"
                  >
                    <button
                      type="button"
                      class="border-0 bg-white add-item-btn"
                      @click="addItems()"
                    >
                      <i class="bi bi-plus-circle me-2"></i>Add Item
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
  <div class="show" v-if="show2">
    <div class="container-fluid">
      <section class="add-item-section">
        <div class="add-item">
          <h6 class="fw-bold py-2">
            <i class="bi bi-arrow-left me-2 mt-5" @click="NewQuote"></i>Add
            Items
          </h6>
        </div>
        <div class="row mt-3 px-2">
          <div class="col-sm-9 col-md-7 col-lg-7 col-xl-7 col-search">
            <div class="form-group has-search">
              <span class="form-control-feedback"
                ><i class="bi bi-search"></i
              ></span>
              <input
                type="search"
                class="form-control bg-light"
                placeholder="Search item name"
                @input="SearchDetails"
              />
            </div>
          </div>

          <div class="col-sm-3 col-md-5 col-lg-5 col-xl-5 col-category">
            <button type="button" class="border-0 text-nowrap catogory-btn">
              Category<i class="bi bi-sliders"></i>
            </button>
          </div>
        </div>
      </section>
      <div class="row">
        <div class="p-3 main-heading">
          <h6 class="fw-bold ms-2 Category-txt">LED Panel & Surface Ring</h6>
        </div>
      </div>
      <section>
        <div class="row">
          <div
            class="col-sm-12 col-md-6 col-lg-4 col-xl-4"
            v-for="(item, index) in itemData"
            :key="index"
          >
            <div class="row p-3">
              <div class="col-3">
                <div>
                  <img :src="item.image" class="img-fluid item-img" />
                </div>
              </div>
              <div class="col-6">
                <div class="item-details">
                  <h6 class="heading">
                    {{ item.item_name }}
                  </h6>
                  <div class="d-flex text-nowrap">
                    <p>₹ {{ item.last_purchase_rate }}</p>
                    <li class="ms-1 text-muted">{{ item.item_code }}</li>
                  </div>
                  <p class="text-muted item-info">
                    It features scrambled Latin text, which emphasizes the
                    design i....More
                  </p>
                </div>
              </div>
              <div class="col-3">
                <button
                  type="button"
                  class="add-btn shadow-sm rounded-5 bg-white"
                  data-bs-toggle="offcanvas"
                  :data-bs-target="'#item_' + item.idx"
                  role="button"
                  aria-controls="offcanvasExample"
                  v-show="!item?.qty"
                  @click="priceZero"
                >
                  Add
                </button>

                <div
                  class="d-flex align-items-center justify-content-center gap-2 count-btn"
                >
                  <button
                    type="button"
                    class="border-0 rounded-1"
                    @click="Decrease(item)"
                    v-show="item?.qty"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <p class="mt-3" v-show="item?.qty">{{ item.qty }}</p>
                  <button
                    type="button"
                    class="border-0 rounded-1"
                    @click="Increase(item)"
                    v-show="item?.qty"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>

                <router-link to="#" class="text-nowrap">
                  <h6 class="editPrice mt-3 ms-2" v-show="item?.qty">
                    edit price
                  </h6>
                </router-link>
                <div
                  class="offcanvas offcanvas-bottom h-75"
                  tabindex="-1"
                  :id="'item_' + item.idx"
                  aria-labelledby="offcanvasExampleLabel"
                >
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                      Add Item
                    </h5>
                    <button
                      type="button"
                      class="btn-close text-reset"
                      data-bs-dismiss="offcanvas"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="offcanvas-body">
                    <div class="row">
                      <div class="col-sm-10 offcanvas-txt">
                        <h6 class="label-heading">{{ item.item_name }}</h6>
                        <p class="label-name">Item Name</p>
                      </div>
                      <div class="col-sm-2 offcanvas-txt1 text-end">
                        <h6 class="label-heading">{{ item.item_code }}</h6>
                        <p class="label-name">Item Code</p>
                      </div>
                    </div>
                    <div class="row mb-3 mt-3">
                      <div>
                        <h6 class="label-heading">
                          ₹ {{ item.last_purchase_rate }}
                        </h6>
                        <p class="label-name">Actual Price 1x</p>
                      </div>
                    </div>
                    <div class="row mb-2 m-1">
                      <div class="card rounded-2 price-card">
                        <div class="p-1">
                          <p class="price">1x Price</p>
                          <span
                            >₹<input
                              type="text"
                              placeholder="Enter negotiated value"
                              class="border-0 ms-1 ps-2 input-price w-75"
                          /></span>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4 qty-row">
                      <div class="col-sm-9 qty-div">
                        <span class="total-qty ms-2">Total Qty</span>
                      </div>
                      <div class="col-sm-3 qty-div1">
                        <div
                          class="d-flex align-items-center justify-content-center gap-2"
                        >
                          <button
                            type="button"
                            class="border-0 rounded-1"
                            @click="Decrease(item, index)"
                            :disabled="item.qty == 0"
                          >
                            <i class="bi bi-dash"></i>
                          </button>
                          <p class="mt-3">{{ item.qty }}</p>
                          <button
                            type="button"
                            class="border-0 rounded-1"
                            @click="Increase(item, index)"
                          >
                            <i class="bi bi-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="row mb-4 m-1">
                      <div class="card rounded-2 total-price-card">
                        <div class="p-1">
                          <p class="total-price">Total Price</p>
                          <span class="amount">₹ {{ item.rate || 0 }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-12">
                        <button
                          type="button"
                          class="border-0 add-item-btn text-white w-100"
                          data-bs-dismiss="offcanvas"
                          @click="showData"
                        >
                          Add Item
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
    <section
      class="submit-section d-flex align-items-center justify-content-center w-100 mt-1"
    >
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-12 col-md-12">
            <p class="text-muted ms-2 submit-info pt-2">
              <i class="bi bi-question-circle me-1"></i>Please select at least
              one item to submit.
            </p>
            <div class="submit-div mb-3 w-100">
              <div class="row">
                <div class="col-sm-11 total-purchase">
                  <div>
                    <span class="fw-bold">Total price:₹{{ totalPrice }}</span>
                    <!-- <span
                      >Total quantity: <b>{{ totalQuantity }}</b></span -->
                  </div>
                </div>
                <div
                  class="col-sm-1 submit-col text-end d-flex align-items-center justify-content-center"
                >
                  <button
                    @click="mySubmit()"
                    class="border-0 bg-transparent p-2 submit-btn"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div v-if="show3">
    <div>
      <nav class="navbar header">
        <div class="container">
          <div class="p-1">
            <i @click="backSide()" class="ri-arrow-left-line quotationsfs"
              ><span class="ps-2">New Quotation - Customer</span></i
            >
          </div>
        </div>
      </nav>
      <div class="container d-flex justify-content-center">
        <div class="bg-1">
          <div class="inputheader mt-3">
            <div class="p-3">
              <label for="Companyselect">
                <h6 class="text-muted">
                  {{ this.selectedCustomer.customer_name }}
                </h6>
              </label>
            </div>
          </div>
          <div>
            <div>
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
                <div v-for="(item, index) in arr" :key="index">
                  <div class="card-body card-body123">
                    <div class="d-flex justify-content-between">
                      <div>
                        <h6>{{ item.item_name }}</h6>
                        <p>{{ item.item_code }}</p>
                      </div>
                      <div class="d-flex align-items-center gap-2">
                        <button class="btn border-1 increment">
                          <button
                            type="button"
                            class="border-0 bg-transparent rounded-1"
                            @click="Decrease(item, index)"
                            :disabled="item.qty == 0"
                          >
                            <i class="bi bi-dash"></i>
                          </button>
                          <h6>
                            <span id="count">{{ item.qty }}</span>
                          </h6>
                          <button
                            type="button"
                            class="border-0 bg-transparent rounded-1"
                            @click="Increase(item, index)"
                          >
                            <i class="bi bi-plus"></i>
                          </button>
                        </button>
                      </div>
                      <div>
                        <h6>{{ item.rate }}</h6>
                        <p class="text-end" style="color: #3b43f9">Edit</p>
                      </div>
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
                  <h6>₹ {{ this.totalPrice }}</h6>
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
                    <h6 class="text-muted">₹ 5345</h6>
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
                    <h6></h6>
                  </div>
                </div>
                <div class="d-flex justify-content-between p-1 mt-3">
                  <div>
                    <h6>Discount</h6>
                    <p class="text-muted">
                      Give additional discount before tax
                    </p>
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
                    <h6 class="text-muted">Qty:{{ totalQuantity }}</h6>
                    <h6>{{ totalPrice }}</h6>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-between mt-3 positionbtn mb-1">
                <div class="mt-2 mb-2">
                  <button class="btn btndraft" @click="mySubmit()">
                    <h6 class="m-0">Save as draft</h6>
                  </button>
                </div>
                <div class="mt-2 mb-2">
                  <button
                    class="btn btn-quot text-decoration-none"
                    @click="createQuotation()"
                  >
                    <h6 class="text-white m-0">Create Quotation</h6>
                  </button>
                </div>
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
import { Doctypes, ApiUrls } from "@/shared/apiUrls";

export default {
  data() {
    return {
      data: [],
      show1: true,
      show3: false,
      show2: false,
      itemData: [],
      searchQuery: "",
      isOpen: false,
      customers: [],
      qty: 0,
      selectedItems: [],
      selectedCustomer: null,
      showBtn: true,
      addBtn: true,
      totalPrice: 0,
      totalQuantity: 0,
      obj: new Set(),
      arr: [],
      newComplete: [],
      savedData: [],
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    backMove() {
      this.$router.push("/QuotationsList");
    },
    backPage() {
      this.show2 = false;
      this.show1 = true;
    },
    backSide() {
      this.show3 = false;
      this.show2 = true;
    },
    NewQuote() {
      this.show2 = false;
      this.show1 = true;
    },
    addItems() {
      this.show2 = true;
      this.show3 = false;
      this.show1 = false;
    },
    fetchData() {
      this.loading = true;
      axios
        .get(ApiUrls.resource + "/" + Doctypes.items)
        .then((response) => {
          this.itemData = response.data.data.map((item) => ({
            ...item,
            qty: 0,
          }));
        })
        .catch((error) => console.error(error.message))
        .finally(() => (this.loading = false));
    },
    fetchCustomers() {
      axios
        .get(ApiUrls.resource + "/" + Doctypes.customer)
        .then((response) => {
          this.customers = response.data.data;
          this.isOpen = true;
        })
        .catch((error) =>
          console.error("Error fetching customer data:", error)
        );
    },
    selectCustomer(customer) {
      this.searchQuery = customer.name;
      this.selectedCustomer = customer;
      this.isOpen = false;
    },
    Increase(item) {
      item.qty++;
      item.amount = item.rate;
      item.rate = item.qty * item.last_purchase_rate;
      this.selectedItems.push(item);
      if (item.qty) this.updateTotalQuantityAndPrice();
      this.addBtn = false;
    },
    Decrease(item) {
      this.selectedItems.push(item);
      if (item.qty) {
        item.qty--;
        item.amount = item.rate;
        item.rate = item.qty * item.last_purchase_rate;
        this.addBtn = false;
        this.updateTotalQuantityAndPrice();
      } else {
        this.addBtn = true;
      }
    },
    showData() {
      this.showBtn = false;
    },
    duplicate(val) {
      const objectString = JSON.stringify(val);
      if (!this.obj.has(objectString)) {
        this.obj.add(objectString);
        this.arr.push(val);
      }
    },
    mySubmit() {
      if (!this.selectedCustomer) {
        alert("Please select a customer before submitting.");
        return;
      }
      this.selectedItems.forEach((val) => this.duplicate(val));

      this.selectedCustomer.party_name = this.selectedCustomer.customer_name;
      const postData = {
        ...this.selectedCustomer,
        items: this.arr,
        docstatus: 0,
        name: "",
      };

      axios
        .post(ApiUrls.resource + "/" + Doctypes.quotations, postData)
        .then((res) => (this.savedData = res.data));

      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
    },
    createQuotation() {
      if (this.savedData) {
        const customerName = this.selectedCustomer.customer_name;
        axios
          .get(
            ApiUrls.resource +
              "/" +
              Doctypes.quotations +
              "?filters=[['customer_name', '=', '" +
              customerName +
              "']]"
          )
          .then((response) => {
            const existingData = response.data.data[0];
            if (existingData) {
              existingData.docstatus = 1;
              existingData.items = this.arr;
              existingData.party_name = customerName;

              axios
                .put(
                  ApiUrls.resource +
                    "/" +
                    Doctypes.quotations +
                    "/" +
                    existingData.name,
                  existingData
                )
                .then((response) => (this.newComplete = response.data))
                .catch((error) => console.error("Error updating data:", error));
            } else {
              console.error(
                "No matching record found for the customer name:",
                customerName
              );
            }
          })
          .catch((error) =>
            console.error("Error fetching existing data:", error)
          );
        this.savedData = null;
      }
    },
    updateTotalQuantityAndPrice() {
      let arr = [];
      let quantity = [];
      this.selectedItems.forEach((data) => {
        if (!quantity.includes(data.qty)) quantity.push(data.qty);
        this.totalQuantity = quantity.reduce((a, b) => a + b);
        const price = data.qty * data.last_purchase_rate;
        if (!arr.includes(price)) arr.push(price);
      });
      this.totalPrice = arr.reduce((a, b) => a + b);
      console.log(
        "quantity:",
        this.totalQuantity + " Total Price:" + this.totalPrice
      );
    },
  },
  watch: {
    searchQuery() {
      this.searchQuery.length > 0
        ? this.fetchCustomers()
        : (this.isOpen = false);
    },
  },
};
</script>

<style scoped>
.heading {
  color: #111;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.main-heading {
  background-color: #fafafa;
}

.Category-txt {
  color: #111;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 14px;
}

.add-item-section {
  position: sticky;
  top: 0px;
  z-index: 10;
  background-color: white;
  margin-bottom: 5px;
}

.add-item {
  border-bottom: 1px solid #e2e0e0;
  background-color: white;
  position: sticky;
  top: 0px;
  z-index: 100;
}

.item-img {
  border-radius: 5%;
  height: 14vh;
}

.bi-arrow-left {
  font-size: 20px;
  color: black;
}

.has-search .form-control {
  padding-left: 40px;
  margin: -7px;
  border-radius: 30px;
  background: #fafafa;
  border: 1px solid #eee;
}

.has-search .form-control-feedback {
  position: absolute;
  z-index: 2;
  display: block;
  margin-left: 10px;
  line-height: 2.375rem;
  text-align: center;
  pointer-events: none;
  color: #aaa;
}

input::placeholder {
  font-size: 11px !important;
}

@media (min-width: 200px) and (max-width: 570px) {
  .col-search {
    width: 65%;
  }

  .col-category {
    width: 30%;
  }
}

.catogory-btn {
  color: #444;
  margin: -7px;
  font-size: 12px;
  margin-bottom: 6px;
  margin-left: -17px;
  border-radius: 20px;
  background: #eee;
  padding: 10px 29px 10px 29px;
}

.item-details {
  line-height: 5px;
  font-size: 12px;
}

.item-info {
  color: #555;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.add-btn {
  border: 1px solid #eeeeee;
  color: #3b43f9;
  padding: 3px 25px;
  margin-left: -7px;
  border-radius: 20px;
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.07);
}

.editPrice {
  color: #3b43f9;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
}

.bi-gift-fill {
  padding: 7px 10px;
  border-radius: 24px;
  background-color: #979bff;
  color: white;
  font-size: 13px;
}

.main-heading {
  background-color: #fafafa;
}

.submit-div {
  border: 1px solid #979bff;
  border-radius: 40px;
  padding: 8px 28px;
  background-color: rgb(241, 242, 255);
}

@media (min-width: 200px) and (max-width: 570px) {
  .total-purchase {
    width: 70%;
  }

  .submit-col {
    width: 30%;
  }
}

.submit-btn {
  color: #3b43f9;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 15px;
}

@media (min-width: 200px) and (max-width: 570px) {
  .offcanvas-txt {
    width: 70%;
    line-height: 10px;
  }

  .offcanvas-txt1 {
    width: 30%;
    line-height: 10px;
  }
}

.label-heading {
  color: #111;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.label-name {
  color: #999;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.price-card {
  border-radius: 13px;
  border: 1px solid #eee;
  background: #fff;
}

.price {
  color: #444;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.input-price::placeholder {
  color: #ababab;
  font-size: 13px !important;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

@media (min-width: 200px) and (max-width: 570px) {
  .qty-div {
    width: 70%;
  }

  .qty-div1 {
    width: 30%;
  }
}

.add-qty-btn {
  color: #fff;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 2px;
  background: #001b4e;
  padding: 4px;
  white-space: nowrap;
}

.qty-row {
  border-bottom: 2px solid #eee;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.total-price {
  color: #444;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.amount {
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.total-price-card {
  border-radius: 10px;
  border: 1px solid #eee;
  background: #f5f5f5;
  padding: 10px;
}

.add-item-btn {
  border-radius: 30px;
  background: #3b43f9;
  color: #fff;
  text-align: center;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 12px;
}

.submit-section {
  position: sticky;
  z-index: 10;
  bottom: 0px;
  background-color: white;
}

.submit-info {
  color: #777;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.total-qty {
  color: #444;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.catogory-heading {
  color: #111;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

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
  width: 100%;
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

* {
  font-family: "Montserrat", sans-serif;
}

.dropdown-card {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
}

.product-card {
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid #eee;
  padding: 12px 10px;
}

.bi-arrow-left {
  font-size: 20px;
  color: black;
}

.product {
  color: #444;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: Montserrat;
}

.customer-input {
  color: #999;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.add-item-btn {
  color: #444;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

select,
.select-option {
  color: #111;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.label-name {
  color: #444;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.custom-select {
  position: relative;
}

input {
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}

.ul-tag {
  position: absolute;
  z-index: 1;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: 200px;
  overflow-y: auto;
}

.list-items {
  padding: 5px;
  cursor: pointer;
  color: #111;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-size: 14px;
}

.list-items:hover {
  background-color: #f0f0f0;
}

.input-search::placeholder {
  color: #999;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: 14px;
}
</style>



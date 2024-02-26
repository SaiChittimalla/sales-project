<template>
  <template v-if="!twoSteps">
    <div class="">
      <nav class="navbar header" v-if="show">
        <div class="container">
          <div class="d-flex gap-2 p-2 align-items-center">
            <div>
              <i @click="backgo()" class="ri-arrow-left-line"
                ><span class="ps-2 quotationsfs"
                  >Quotations &nbsp;({{ totalQuotations }})</span
                ></i
              >
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar header" v-if="!show">
        <div class="container">
          <div class="d-flex gap-2 p-2 align-items-center">
            <div>
              <i @click="backMove()" class="ri-arrow-left-line"
                ><span class="ps-2 quotationsfs">QuotationDetails</span></i
              >
            </div>
          </div>
        </div>
      </nav>
      <div class="">
        <div class="header2" v-if="show">
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
            <div
              class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4"
              v-if="show"
            >
              <div
                class="card card1 my-3"
                v-for="(quotation, index) in filteredQuotations"
                :key="index"
              >
                <div class="p-2">
                  <div
                    class="d-flex justify-content-between align-items-baseline"
                    style="border-bottom: 1px solid #eeeeee"
                  >
                    <div class="d-flex gap-3 align-items-center">
                      <div
                        class="d-flex justify-content-center ri-file-edit-line1"
                      >
                        <img
                          src="../../../../assets/lets-icons_paper-fill.svg"
                          alt=""
                        />
                      </div>
                      <div>
                        <p
                          style="font-size: 13px"
                          class="align-items-center mt-3"
                        >
                          {{ quotation.name }}<br /><span
                            class="text-muted"
                            style="font-size: 11px"
                            >{{ quotation.transaction_date }}</span
                          >
                        </p>
                      </div>
                    </div>
                    <div>
                      <button class="savedbutton1" @click="quotData(quotation)">
                        View
                        <hr class="m-0" />
                      </button>
                    </div>
                  </div>
                  <div
                    class="d-flex justify-content-between align-items-center py-3"
                  >
                    <div>
                      <h6 class="" style="font-size: 13px">
                        {{ quotation.customer_name }}
                      </h6>
                      <p style="font-size: 11px; color: #3b43f9">
                        {{ quotation.quotation_to }}
                      </p>
                    </div>

                    <div v-if="quotation.status !== 'Draft'">
                      <button class="savedbutton">
                        {{ quotation.status }}
                      </button>
                    </div>
                    <div v-if="quotation.status == 'Draft'">
                      <button class="draftbutton">
                        {{ quotation.status }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="" v-if="!show">
            <div class="">
              <div class="card card1 mt-3 p-4">
                <span class="data-span">
                  ID :
                  <span class="data-id-tags">
                    {{ singleQuotation.name }}
                  </span>
                </span>
                <span class="data-span">
                  Title :
                  <span class="data-id-tags">
                    {{ singleQuotation.title }}
                  </span>
                </span>

                <span class="data-span">Primary Contact Details:</span>

                <span class="data-span">
                  Number:<span class="text-muted"
                    >&nbsp;{{ singleQuotation.contact_mobile }}</span
                  >
                </span>
                <span class="data-span">
                  E-mail:<span class="text-muted">
                    &nbsp;{{ singleQuotation.contact_email }}</span
                  >
                </span>
              </div>

              <div class="card card1 p-4 mt-3">
                <span class="data-span">Address:</span>
                <div class="">
                  <div class="data-span">
                    Billing Address:<br />
                    <div class="text-muted">
                      {{ removeBrTags(singleQuotation.shipping_address) }}
                    </div>
                  </div>
                  <div class="data-span">
                    Shipping Address:<br />
                    <div class="text-muted">
                      {{ removeBrTags(singleQuotation.shipping_address) }}
                    </div>
                  </div>
                </div>
              </div>

              <div class="card card1 mt-3">
                <div
                  v-for="(item, index) in singleQuotation.items"
                  :key="index"
                >
                  <div
                    class="card-body card-body123 d-flex justify-content-between"
                  >
                    <div>
                      <h6>{{ item.item_name }}</h6>
                      <p>{{ item.item_code }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <button class="btn border-1 increment">
                        <button
                          type="button"
                          class="border-0 bg-transparent rounded-1"
                          @click="Decrease2(item, index)"
                          :disabled="item.qty == 0"
                        >
                          <i class="bi bi-dash"></i>
                        </button>
                        <h6>
                          <span id="count" :v-model="singleQuotation.items">{{
                            item.qty
                          }}</span>
                        </h6>
                        <button
                          type="button"
                          class="border-0 bg-transparent rounded-1"
                          @click="Increase2(item, index)"
                        >
                          <i class="bi bi-plus"></i>
                        </button>
                      </button>
                    </div>
                    <div>
                      <h6 :v-model="item.rate">{{ item.rate }}</h6>
                      <p class="text-end" style="color: #3b43f9">Edit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card card1 mt-3 p-4">
                <div
                  class="d-flex justify-content-between mt-2"
                  style="border-bottom: 1px dashed #eee"
                >
                  <h6 @click="taxesGetData()">Total Items Value</h6>
                  <h6 :v-modal="singleQuotation.net_total">
                    ₹{{ singleQuotation.net_total }}
                  </h6>
                </div>
                <div
                  v-for="(taxe, index) in singleQuotation.taxes"
                  :key="index"
                >
                  <div class="d-flex justify-content-between mt-3">
                    <div>
                      <h6>
                        {{ taxe.account_head }}
                      </h6>
                    </div>
                    <div>
                      <h6 class="text-muted">₹ {{ taxe.tax_amount || 0 }}</h6>
                    </div>
                  </div>
                </div>

                <div
                  class="d-flex justify-content-between p-1 mt-3"
                  style="border-bottom: 1px dashed LIGHTGREY"
                >
                  <div>
                    <h6>Total Taxes:</h6>
                  </div>
                  <div>
                    <h6>₹ {{ singleQuotation.total_taxes_and_charges }}</h6>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <h6>Discount</h6>
                    <p class="text-muted">
                      Give additional discount before tax
                    </p>
                  </div>
                  <div>
                    <h6>{{ singleQuotation.discount_amount }}</h6>
                  </div>
                  <!-- <div class="d-flex gap-2">
                    <div class="circle-with-plus">+</div>
                    <div>
                      <p
                        style="color: #3b43f9"
                        class="text-nowrap m-0"
                        @click="toggleDiscountInput"
                      >
                        Add Discount
                      </p>
                      <input
                        v-model="singleQuotation.additional_discount_percentage"
                        v-if="showDiscountInput"
                        type="text"
                        class="form-control-sm"
                        placeholder="Enter discount amount"
                      />
                    </div>
                  </div> -->
                </div>
                <div class="card-foot">
                  <div class="d-flex justify-content-between">
                    <h6>Grand Total</h6>
                    <h6 class="text-muted">{{ singleQuotation.total_qty }}</h6>
                    <h6>{{ singleQuotation.grand_total }}</h6>
                  </div>
                </div>
              </div>
              <div class="mt-2 mb-2 d-flex justify-content-end create-quote">
                <button
                  class="btn btn-quot text-decoration-none"
                  @click="quotationExits()"
                >
                  <h6 class="text-white m-0">Create Quotation</h6>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div>
          <button
            class="btn btn-primary circle-with-plus offcnv text-white"
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
            data-bs-scroll="true"
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
                <div class="mt-3 d-flex justify-content-center">
                  <button
                    type="button"
                    class="btn btncustomer"
                    @click="toCustomer()"
                  >
                    To Customer
                  </button>
                </div>
                <div class="mt-3 d-flex justify-content-center">
                  <button @click="toLead()" class="btn btncustomer">
                    To Lead
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div
              class="modal-dialog modal-dialog-centered modal-dialog-scrollable"
            >
              <div class="modal-content">
                <div class="modal-header">
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h5 class="offcanvastext text-center">
                    <b>Specify the quotation's <br />intended recipient.</b>
                  </h5>

                  <div class=" ">
                    <div class="mt-3 d-flex justify-content-center">
                      <router-link
                        to="/completedata"
                        class="btn btncustomer w-100"
                      >
                        To Customer
                      </router-link>
                    </div>
                    <div class="mt-3 d-flex justify-content-center">
                      <button class="btn btncustomer w-100">To Lead</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <template v-if="twoSteps">
    <section v-if="show1">
      <section>
        <div class="container-fluid">
          <div class="row">
            <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
            <div class="header-bottom">
              <h6 class="fw-bold py-2">
                <i
                  class="bi bi-arrow-left me-2 mt-5"
                  @click="QuotationBack()"
                ></i
                >New Quotation - Customer
              </h6>
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
                      @click="isOpen = true"
                      @input="filterOptions"
                    />
                    <ul v-show="isOpen" class="ul-tag w-100 ms-2">
                      <li
                        v-for="customer in filteredData"
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
            <!-- <div>
              <select class="form-select form-select-lg" name="customer" id="customer" v-model="customers.party_name">
                <option v-for=" (customer, index)  in  customers" :key="index" :value="customer.party_name">{{
                  customer.name }}
                </option>
              </select>
              {{ customers.party_name }}
            </div> -->
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
                  v-model="secondQuery"
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
              v-for="(item, index) in itemsData"
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
                      <p>₹ {{ item.valuation_rate }}</p>
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

                  <button
                    type="button"
                    class="editPrice border-0 bg-white text-nowrap mt-3 ms-2"
                    v-show="item?.qty"
                    data-bs-toggle="offcanvas"
                    :data-bs-target="'#item_' + item.idx"
                    role="button"
                    aria-controls="offcanvasExample"
                  >
                    edit price
                  </button>

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
                            ₹ {{ item.valuation_rate }}
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
                            <span class="amount">₹ {{ item.amount || 0 }}</span>
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
                    </div>
                    <span class="fw-bold"
                      >Qty: <b>{{ totalQuantity }}</b></span
                    >
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
              <h6>
                <i @click="backSide()" class="ri-arrow-left-line quotationsfs"
                  ><span class="ps-2 quotationsfs"
                    >New Quotation - Customer</span
                  ></i
                >
              </h6>
            </div>
          </div>
        </nav>
        <div class="container d-flex justify-content-center">
          <div class="bg-1">
            <div class="inputheader mt-3">
              <div class="p-3">
                <label for="Companyselect">
                  <h6 class="text-muted">
                    {{ this.selectedCustomer.name }}
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
                          <button
                            class="border-0 bg-white add-item-btn"
                            @click="moreItems()"
                          >
                            <img
                              src="../../../../assets/gridicons_add-outline.png"
                              alt="icon"
                              class="img-fluid"
                            />

                            Add Item
                          </button>
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
                          <h6>{{ item.amount }}</h6>
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
                  <div v-for="(taxe, index) in customers.taxes" :key="index">
                    <div class="d-flex justify-content-between mt-3">
                      <div>
                        <h6>
                          {{ taxe.account_head }}
                        </h6>
                      </div>
                      <div>
                        <h6 class="text-muted">₹ {{ taxe.tax_amount || 0 }}</h6>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="d-flex justify-content-between p-1 mt-3">
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
                  </div> -->
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
                    <div>
                      <p
                        style="color: #3b43f9"
                        class="text-nowrap d-flex justify-content-end"
                        @click="toggleDiscountInput"
                      >
                        <i class="ri-add-circle-line"></i>Add Discount
                      </p>
                      <input
                        v-if="showDiscountInput"
                        type="text"
                        class="form-control w-75 d-flex justify-content-end"
                        placeholder="Enter discount amount"
                        v-model="postData.additional_discount_percentage"
                      />
                    </div>
                  </div>
                  <div class="card-footer">
                    <div class="d-flex justify-content-between">
                      <h6>Grand Total</h6>
                      <h6 class="text-muted">Qty:{{ this.totalQuantity }}</h6>
                      <h6>{{ totalPrice }}</h6>
                    </div>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-between mt-3 positionbtn mb-1"
                >
                  <div class="mt-2 mb-2">
                    <button class="btn btndraft" @click="saveDraft()">
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
</template>
<script>
import axios from "axios";
import { Doctypes, ApiUrls } from "@/shared/apiUrls";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
export default {
  data() {
    return {
      data: [],
      show1: true,
      show3: false,
      show2: false,
      itemData: [],
      searchQuery: "",
      secondQuery: "",
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
      twoSteps: false,
      allQuotation: [],
      filterType: "All",
      quotationFilterType: "Lead",
      activeFilter: "All",
      filterType1: "Customer",
      filterType2: "Lead",
      filterType3: "This Month",
      show: true,
      currentquotation: [],
      postData: {
        additional_discount_percentage: 0,
      },
      singleQuotation: [],
      filteredData: [],
      duplicateArr: [],
      returnUpdate: {},
      showDiscountInput: false,
      taxesCharges: [],
      fullCustomerData: [],
    };
  },
  mounted() {
    this.fetchData();
    this.quotationData();
    this.fetchCustomers();
    this.taxesGetData();
  },
  methods: {
    backMove() {
      this.show = true;
      this.$router.push({
        path: "/completedata",
      });
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
    QuotationBack() {
      this.twoSteps = false;
    },
    fetchData() {
      this.loading = true;
      let queryParams = {
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        filters: JSON.stringify([]),
      };
      axios
        .get(ApiUrls.resource + "/" + Doctypes.items, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
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
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      queryParams.limit_page_length = null;
      queryParams.order_by = "creation DESC";
      if (queryParams.filters) {
        queryParams.filters = JSON.stringify(queryParams.filters);
      }
      axios
        .get(ApiUrls.resource + "/" + Doctypes.customer, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response.data);
          this.customers = response.data.data;
          this.duplicateArr = response.data.data;
          // this.isOpen = false;
        })
        .catch((error) =>
          console.error("Error fetching customer data:", error)
        );
    },
    // selectCustomer(customer) {
    //   this.searchQuery = customer.name;
    //   this.selectedCustomer = customer;
    //   console.log(this.selectedCustomer);
    //   this.isOpen = false;
    // },
    selectCustomer(customer) {
      this.searchQuery = customer.name;
      this.selectedCustomer = customer;
      this.isOpen = false;

      console.log(customer.name);

      let quotationQueryParams = {
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        order_by: "creation DESC",
      };

      axios
        .get(ApiUrls.resource + "/" + Doctypes.customer + "/" + customer.name, {
          params: quotationQueryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((quotationResponse) => {
          this.fullCustomerData = quotationResponse.data.data;
          if (this.selectedCustomer.tax_category == "In-State") {
            this.taxesCharges = this.taxesCharges[1];
          } else {
            this.taxesCharges = this.taxesCharges[0];
          }
          console.log(this.fullCustomerData);
        })
        .catch((quotationError) => {
          console.error(
            "Error fetching quotation data:",
            quotationError.message
          );
        });
    },

    filterOptions() {
      console.log(this.customers);
      this.filteredData = this.duplicateArr.filter((item) =>
        item.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
      console.log(this.filteredData);
    },
    Increase(item) {
      this.selectedItems.push(item);
      item.qty++;
      if (item.qty) {
        item.rate = item.valuation_rate;
        item.amount = item.qty * item.rate;
        this.updateTotalQuantityAndPrice();
      } else {
        this.addBtn = false;
      }
    },
    Decrease(item) {
      this.selectedItems.push(item);
      if (item.qty) {
        item.qty--;
        item.rate = item.valuation_rate;
        item.amount = item.qty * item.rate;
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
      console.log(this.selectedCustomer, "Customer");
      this.selectedCustomer.party_name = this.selectedCustomer.name;

      this.postData = {
        ...this.selectedCustomer,
        items: this.arr,
        docstatus: 0,
        taxes: this.taxesCharges,
        // taxes: this.fullCustomerData.taxes,
      };
      console.log(this.postData);
      this.show1 = false;
      this.show2 = false;
      this.show3 = true;
    },
    saveDraft() {
      this.postData.additional_discount_percentage = parseInt(
        this.postData.additional_discount_percentage,
        10
      );
      axios
        .post(ApiUrls.resource + "/" + Doctypes.quotations, this.postData)
        .then((res) => {
          this.savedData = res.data.data;

          toast.success("Saved As Drafts", {
            position: "top-right",
          });
          this.twoSteps = false;

          console.log(res);
        });
    },
    createQuotation() {
      if (this.savedData) {
        this.savedData.docstatus = 1;
        this.savedData.items = this.arr;
        this.savedData.party_name = this.selectedCustomer.party_name;
        axios
          .put(
            ApiUrls.resource +
              "/" +
              Doctypes.quotations +
              "/" +
              this.savedData.name,
            this.savedData
          )
          .then(
            (response) => (this.newComplete = response.data),
            toast.success("Quotation Created", {
              position: "top-right",
            })
          )

          .catch((error) => console.error("Error updating data:", error));
      } else {
        console.error("No matching record found for the customer name:");
      }
    },
    Increase2(item) {
      item.qty++; // Increase the quantity locally
      item.rate = item.valuation_rate;
      item.amount = item.qty * item.rate;
      this.singleQuotation.net_total += item.valuation_rate;
      this.updateTotalQuantity();
      console.log(this.singleQuotation);
    },
    Decrease2(item) {
      if (item.qty > 0) {
        item.qty--; // Decrease the quantity locally
        item.rate = item.valuation_rate;
        item.amount = item.qty * item.rate;
        this.singleQuotation.net_total -= item.valuation_rate;
        this.updateTotalQuantity();
        console.log(this.singleQuotation);
      }
    },
    updateTotalQuantity() {
      let totalQty = 0;
      for (let item of this.singleQuotation.items) {
        totalQty += item.qty;
      }
      this.singleQuotation.total_qty = totalQty;
    },
    quotationExits() {
      if (this.singleQuotation) {
        this.singleQuotation.docstatus = 1;
        axios
          .put(
            ApiUrls.resource +
              "/" +
              Doctypes.quotations +
              "/" +
              this.singleQuotation?.name,
            this.singleQuotation
          )
          .then((response) => {
            this.newComplete = response.data;
            toast.success("Quotation Created", {
              position: "top-right",
            });
            this.show = true;
          })
          .catch((error) => console.error("Error updating data:", error));
      } else {
        console.error("No matching record found for the customer name:");
      }
    },

    quotData(quota) {
      this.show = false;
      console.log(quota.name);
      let quotationQueryParams = {
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        order_by: "creation DESC",
      };

      axios
        .get(ApiUrls.resource + "/" + Doctypes.quotations + "/" + quota.name, {
          params: quotationQueryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((quotationResponse) => {
          this.singleQuotation = quotationResponse.data.data;
          console.log(this.singleQuotation);
          console.log(this.singleQuotation.taxes, "ghfgh");
        })
        .catch((quotationError) => {
          console.error(
            "Error fetching quotation data:",
            quotationError.message
          );
        });
    },

    removeBrTags(address) {
      if (address) {
        // Remove <br> tags from the address data
        return address.replace(/<br\s*\/?>/g, " ");
      } else {
        return " "; // or handle the case where address is undefined
      }
    },
    // backMove() {
    //   // if (this.show == true) this.$router.push();
    //   this.show = !this.show;
    // },
    backgo() {
      this.$router.push("HomePage");
    },
    quotationData() {
      this.loading = true;
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      queryParams.limit_page_length = "none";
      queryParams.order_by = "creation DESC";
      queryParams.filters = JSON.stringify(queryParams?.filters);
      axios
        .get(ApiUrls.resource + "/" + Doctypes.quotations, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          this.allQuotation = response.data.data;
          console.log(response);
        })
        .catch((error) => {
          console.error("error message:" + error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    updateTotalQuantityAndPrice() {
      let arr = [];
      let quantity = [];
      this.selectedItems.forEach((data) => {
        if (!quantity.includes(data.qty)) quantity.push(data.qty);
        this.totalQuantity = quantity.reduce((a, b) => a + b);
        const price = data.qty * data.valuation_rate;
        if (!arr.includes(price)) arr.push(price);
      });
      this.totalPrice = arr.reduce((a, b) => a + b);
      console.log(
        "quantity:",
        this.totalQuantity + " Total Price:" + this.totalPrice
      );
    },
    setFilter(type) {
      this.activeFilter = type;
      this.filterType = type;
      this.filterType1 = type;
      this.filterType2 = type;
      this.filterType3 = type;
    },
    toCustomer() {
      this.twoSteps = true;
      this.selectedCustomer = {};
    },

    toLead() {
      this.$router.push("/LeadNewQuate");
    },
    moreItems() {
      this.show1 = false;
      this.show2 = true;
      this.show3 = false;
    },
    toggleDiscountInput() {
      this.showDiscountInput = !this.showDiscountInput;
    },
    taxesGetData() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      queryParams.limit_page_length = "none";
      queryParams.order_by = "creation DESC";
      queryParams.filters = JSON.stringify(queryParams?.filters);
      axios
        .get(ApiUrls.resource + "/" + Doctypes.taxes, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          this.taxesCharges = res.data.data;
        });
    },
  },
  watch: {
    searchQuery() {
      this.searchQuery.length > 0
        ? this.fetchCustomers()
        : (this.isOpen = false);
    },
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
          (quotation) => quotation.quotation_to === this.filterType1
        );
      } else if (this.filterType2 === "Lead") {
        return this.allQuotation.filter(
          (quotation) => quotation.quotation_to === this.filterType2
        );
      } else if (this.filterType3 === "This Month") {
        return this.allQuotation.filter(
          (quotation) => quotation.transaction_date === this.filterType3
        );
      } else {
        return this.allQuotation.filter(
          (quotation) => quotation.status === this.filterType
        );
      }
    },
    itemsData() {
      return this.itemData.filter((item) => {
        return Object.values(item).some((value) => {
          return String(value)
            .toLowerCase()
            .includes(this.secondQuery.toLowerCase());
        });
      });
    },
  },
};
</script>

<style scoped>
.offcanvas-bottom {
  border-radius: 15px 15px 0px 0px;
}

.create-quote {
  position: sticky;
  bottom: 0px;
  background: white;
}

.data-span {
  color: #444;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
}

.data-id-tags {
  color: #111;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  line-height: normal;
}

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
  border-bottom: 1px solid #eeeeee;
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

  font-size: 15px;
  border: none;
  color: white;
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
  /* box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); */
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

@media (min-width: 575px) and (max-width: 2560px) {
  .offcnv {
    display: none !important;
  }

  .mdl-btn {
    display: block !important;
  }
}

@media (min-width: 300px) and (max-width: 574px) {
  .offcnv {
    display: block !important;
  }

  .mdl-btn {
    display: none !important;
  }
}

.selectback {
  background: none !important;
}

.btn-clicked {
  background-color: #ff0000;
  /* Change to the desired color */
  color: #ffffff;
  /* Change to the desired text color */
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

.circle-with-plus2 {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3b43f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff !important;
  font-size: 25px;
  position: fixed;
  /* top: 100%; */
  bottom: 20%;
  right: 12%;
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
  /* box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2); */
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
.header-bottom {
  border-bottom: 1px solid #eeeeee;
  box-shadow: 0px 0px 20px 0px #00000033;
}
.buttonsall {
  padding: 10px 10px;
}

.btn2 {
  border-radius: 20px;
  background: #f3f3f3;
  color: #3c3c3c;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 4px 15px;
  margin: 3px 5px;
  border: none;
}

li {
  margin-top: 10px;
}

.content {
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

.savedbutton1 {
  border: none;
  background: none;
  /* text-decoration: underline; */
  font-size: 13px;
}
.draftbutton {
  border-radius: 4px;
  border: 0.7px solid #999999;
  /* background: #999999; */
  background: #f1f1f1;
  color: #999999;
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
  /* margin-top: 10px; */
  align-items: center;
  gap: 10px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
}

h6 {
  color: #111;
  font-family: Montserrat;
  border: none;
  background: none;
  /* text-decoration: underline; */
  font-size: 15px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 10px;
}

p {
  color: #444;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px;
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

@media (min-width: 560px) and (max-width: 2096px) {
  .btncustomer {
    width: 30%;
  }

  .circle-with-plus {
    display: block;
  }
}

.list-group-item.active {
  background: #3b43f9 !important;
  color: white !important;
  padding: 4px 15px;
  border: none;
  /* margin-top: 1px !important; */
  /* border-top-width: none !important; */
}

.list-group-item {
  cursor: pointer;
}

.list-group-item + .list-group-item.active {
  /* border-top-width: 0px; */
  margin-top: 1px !important;
}

*:focus {
  outline: none;
}
</style>



<template>
  <template v-if="!twoSteps">
    <div class="">
      <nav class="navbar header" v-if="show">
        <div class="container">
          <div class="d-flex gap-2 p-2 align-items-center">
            <div>
              <i @click="backgo()" class="ri-arrow-left-line"><span class="ps-2 quotationsfs">Quotations &nbsp;({{
    totalQuotations }})</span></i>
            </div>
          </div>
        </div>
      </nav>
      <nav class="navbar header" v-if="!show">
        <div class="container">
          <div class="d-flex gap-2 p-2 align-items-center">
            <div>
              <i @click="backMove()" class="ri-arrow-left-line"><span
                  class="ps-2 quotationsfs">QuotationDetails</span></i>
            </div>
          </div>
        </div>
      </nav>
      <div class=" container p-0">
        <div class="header2" v-if="show">
          <div class="d-flex justify-content-between align-items-center buttonsall">
            <ul class="d-flex list-unstyled justify-content-between flex-wrap list-group flex-row">
              <!-- Add click event handlers to the filter buttons -->
              <li class="list-group-item btn2" :class="{ active: activeFilter === 'All' }" @click="setFilter('All')">
                All
              </li>
              <li class="list-group-item btn2" :class="{ active: activeFilter === 'Lead' }" @click="setFilter('Lead')">
                Lead
              </li>
              <li class="list-group-item btn2" :class="{ active: activeFilter === 'Customer' }"
                @click="setFilter('Customer')">
                Customer
              </li>
              <li class="list-group-item btn2" :class="{ active: activeFilter === 'Ordered' }"
                @click="setFilter('Ordered')">
                Ordered
              </li>
              <!-- ... other filter buttons ... -->

              <li class="list-group-item btn2" :class="{ active: activeFilter === 'This Month' }"
                @click="setFilter('This Month')">
                This Month
              </li>
              <!-- <select class="border-0 selectback">
                <option class="border-0 bg-none">This Month</option> 
              </select> -->
            </ul>
          </div>
        </div>
        <div class="content container ">
          <div class="row">
            <div class=" col-sm-12 mb-4" v-if="show">
              <div class="card card1 my-3" v-for="(quotation, index) in filteredQuotations" :key="index">
                <div class="p-2">
                  <div class="d-flex justify-content-between align-items-baseline"
                    style="border-bottom: 1px solid #eeeeee">
                    <div class="d-flex gap-3 align-items-center">
                      <div class="d-flex justify-content-center ri-file-edit-line1">
                        <img src="../../../../assets/lets-icons_paper-fill.svg" alt="" />
                      </div>
                      <div>
                        <p style="font-size: 13px" class="align-items-center mt-3">
                          {{ quotation.name }}<br /><span class="text-muted" style="font-size: 11px">{{
    quotation.transaction_date }}</span>
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
                  <div class="d-flex justify-content-between align-items-center py-3">
                    <div>
                      <h6 class="" style="font-size: 13px">
                        {{ quotation.customer_name }}
                      </h6>
                      <p style="font-size: 11px; color: #3b43f9">
                        {{ quotation.quotation_to }}
                      </p>
                    </div>

                    <div v-if="quotation.status == 'Open'">
                      <button class="savedbutton">
                        {{ quotation.status }}
                      </button>
                    </div>
                    <div v-if="quotation.status == 'Draft'">
                      <button class="draftbutton">
                        {{ quotation.status }}
                      </button>
                    </div>
                    <div v-if="quotation.status == 'Cancelled'">
                      <button class="Cancelledbutton">
                        {{ quotation.status }}
                      </button>
                    </div>
                    <div v-if="quotation.status == 'Ordered'">
                      <button class="Orderedbutton">
                        {{ quotation.status }}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="" v-if="!show">
            <div v-if="cardShow" class="">
              <div class="card card1 mt-3 p-3">
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
                  Number:<span class="text-muted">&nbsp;{{ singleQuotation.contact_mobile }}</span>
                </span>
                <span class="data-span">
                  E-mail:<span class="text-muted">
                    &nbsp;{{ singleQuotation.contact_email }}</span>
                </span>
              </div>

              <div class="card card1 p-3 mt-3">
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

              <div v-if="singleQuotation.status == 'Draft'" class="card card1 mt-3">
                <div v-for="(item, index) in singleQuotation.items" :key="index">
                  <div class="card-body card-body123 d-flex justify-content-between">
                    <div>
                      <h6>{{ item.item_name }}</h6>
                      <p>{{ item.item_code }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <button class="btn border-1 increment">
                        <button type="button" class="border-0 bg-transparent rounded-1" @click="Decrease2(item, index)"
                          :disabled="item.qty == 0">
                          <i class="bi bi-dash"></i>
                        </button>
                        <h6>
                          <span id="count" :v-model="singleQuotation.items">{{
    item.qty
  }}</span>
                        </h6>
                        <button type="button" class="border-0 bg-transparent rounded-1" @click="Increase2(item, index)">
                          <i class="bi bi-plus"></i>
                        </button>
                      </button>
                    </div>
                    <div>
                      <h6 :v-model="item.amount">{{ item.amount }}</h6>
                      <p class="text-end" style="color: #3b43f9">Edit</p>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="singleQuotation.status == 'Open'" class="card card1 mt-3">
                <div v-for="(item, index) in singleQuotation.items" :key="index">
                  <div class="card-body card-body123 d-flex justify-content-between">
                    <div>
                      <h6>{{ item.item_name }}</h6>
                      <p>{{ item.item_code }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <button class="btn  increment border-0 ">
                        <h6>
                          <span id="count">{{
    item.qty
  }}</span>
                        </h6>
                      </button>
                    </div>
                    <div>
                      <h6 :v-model="item.amount">{{ item.amount }}</h6>
                      <p class="text-end" style="color: #3b43f9">Edit</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card card1 mt-3 p-3">
                <div class="d-flex justify-content-between mt-2" style="border-bottom: 1px dashed #eee">
                  <h6 @click="taxesGetData()">Total Items Value</h6>
                  <h6 :v-model="singleQuotation.net_total">
                    ₹{{ singleQuotation.net_total }}
                  </h6>
                </div>
                <div v-for="(taxe, index) in singleQuotation.taxes" :key="index">
                  <div class="d-flex justify-content-between mt-3">
                    <div>
                      <h6>
                        {{ taxe.account_head }}
                      </h6>
                    </div>
                    <div>
                      <h6 :v-model="taxe.tax_amount" class="text-muted">₹ {{ taxe.tax_amount || 0 }}</h6>
                    </div>
                  </div>
                </div>

                <div class="d-flex justify-content-between mt-3" style="border-bottom: 1px dashed LIGHTGREY">
                  <div>
                    <h6 @click="taxesAndCharges()">Total Taxes:</h6>
                  </div>
                  <div>
                    <h6 :v-model="singleQuotation.total_taxes_and_charges">₹ {{ singleQuotation.total_taxes_and_charges
                      }}
                    </h6>
                  </div>
                </div>
                <div class="d-flex justify-content-between mt-3">
                  <div>
                    <h6 class="mb-0">Discount</h6>
                    <p class="text-muted">
                      Give additional discount before tax
                    </p>
                  </div>
                  <div>

                    <div class=" d-flex  justify-content-end ">
                      <div>
                        <div style="color: #3b43f9" class="text-nowrap d-flex justify-content-end"
                          @click="toggleDiscountInput">
                          <h6>{{ singleQuotation.discount_amount || 0 }}</h6>
                        </div>
                        <input v-if="showDiscountInput" type="text" class="form-control w-75 d-flex justify-content-end"
                          placeholder="Enter discount amount"
                          v-model="singleQuotation.additional_discount_percentage" />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-foot">
                  <div class="d-flex justify-content-between">
                    <h6>Grand Total</h6>
                    <h6 class="text-muted">{{ singleQuotation.total_qty }}</h6>
                    <h6>{{ singleQuotation.grand_total }}</h6>
                  </div>
                </div>
              </div>
              <div class="my-2 py-2 d-flex justify-content-between create-quote">
                <div class="mt-2 mb-2">
                  <button v-if="singleQuotation.status == 'Draft' == !show" class="btn btn-Update text-decoration-none"
                    @click="createQuotation()">
                    Save
                  </button>
                </div>
                <button v-if="singleQuotation.status == 'Draft' == !show" class="btn btn-quot text-decoration-none"
                  @click="quotationExits()">
                  <h6 class="text-white m-0">Create Quotation</h6>
                </button>
                <button v-if="singleQuotation.status == 'Open' == !show" class="btn btn-quot text-decoration-none"
                  @click="createSalesOrder()">
                  <h6 class="text-white m-0">Create Sales Order</h6>
                </button>
              </div>
            </div>
            <div v-if="!cardShow">
              <label><b>title : </b></label><br><input class=" form-control mb-3 mt-2  "
                v-model="singleQuotation.title">
              <label><b>naming_series : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.naming_series">
              <label><b>transaction_date : </b></label><br>
              <input class=" form-control mb-3 mt-2 " v-model="singleQuotation.transaction_date">
              <label><b>customer : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.title">
              <label><b>company : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.company">
              <label><b>order_type : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.order_type">
              <label><b>currency : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.currency">
              <label><b>conversion_rate : </b></label><br> <input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.conversion_rate">
              <label><b>selling_price_list : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.selling_price_list">
              <label><b>price_list_currency : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.price_list_currency">
              <label><b>plc_conversion_rate : </b></label><br><input class=" form-control mb-3 mt-2 "
                v-model="singleQuotation.plc_conversion_rate">
              <div class="card card1 mb-3 mt-2">
                <div v-for="(item, index) in singleQuotation.items" :key="index">
                  <div class="card-body card-body123 d-flex justify-content-between">
                    <div>
                      <h6>{{ item.item_name }}</h6>
                      <p>{{ item.item_code }}</p>
                    </div>
                    <div class="d-flex align-items-center gap-2">
                      <button class="btn  increment border-0 ">
                        <h6>
                          <span id="count">{{
    item.qty
  }}</span>
                        </h6>
                      </button>
                    </div>
                    <div>
                      <h6 :v-model="item.amount">{{ item.amount }}</h6>
                      <p class="text-end" style="color: #3b43f9">Edit</p>
                    </div>
                  </div>
                </div>
              </div>
              <label for="form-control"><b>Delivery Date</b></label>
              <input class=" form-control mb-3 mt-2 " v-model="delivery_date
    " type="date"><br>
              <label for=" form-select">Set Source Warehouse</label>
              <select v-model="set_warehouse" class=" form-select mb-3 ">
                <option value="All Warehouses - CTD">All Warehouses - CTD</option>
                <option value="Finished Goods - CTD">Finished Goods - CTD</option>
                <option value="Goods In Transit - CTD">Goods In Transit - CTD</option>
                <option value="Stores - CTD">Stores - CTD</option>
              </select>
              <div class="mb-5 mt-5  d-flex justify-content-between">
                <button v-if="hide" class="btn border-0  rounded-3 btncustomer1" @click="tosaleee()">save</button>
                <button v-if="hide" class="btn border-0 rounded-3 btncustomer1" @click="tosaleee2()">submit</button>

              </div>
            </div>
          </div>
        </div>

        <div v-if="show">
          <button class="btn btn-primary circle-with-plus offcnv text-white" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
            +
          </button>
          <div class="offcanvas offcanvas-bottom h-50" tabindex="-1" id="offcanvasBottom"
            aria-labelledby="offcanvasBottomLabel" data-bs-scroll="true">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasBottomLabel"></h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
            </div>
            <div class="offcanvas-body small">
              <h5 class="offcanvastext text-center">
                <b>Specify the quotation's <br />intended recipient.</b>
              </h5>

              <div class=" ">
                <div class="mt-3 d-flex justify-content-center">
                  <button type="button" class="btn btncustomer" @click="toCustomer()">
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
                <i class="bi bi-arrow-left me-2 mt-5" @click="QuotationBack()"></i>New Quotation - Customer
              </h6>
            </div>
          </div>

          <div class="row">
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
              <div class="mt-4 mx-2">
                <div class="card p-2 rounded-3 shadow-sm dropdown-card">
                  <h6 class="m-2 label-name">Customer</h6>
                  <div class="custom-select">
                    <input class="input-search w-100 border-0 ms-2" placeholder="search or select a customer"
                      type="text" v-model="searchQuery" @click="isOpen = true" @input="filterOptions" />
                    <ul v-show="isOpen" class="ul-tag w-100 ms-2">
                      <li v-for="customer in filteredData" :key="customer.id" class="list-items"
                        @click="selectCustomer(customer)">
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
                    <div class="col-4 d-flex align-items-center justify-content-center text-nowrap">
                      <button type="button" class="border-0 bg-white add-item-btn" @click="addItems()">
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
                <span class="form-control-feedback"><i class="bi bi-search"></i></span>
                <input type="search" class="form-control bg-light" placeholder="Search item name" v-model="secondQuery"
                  @input="SearchDetails" />
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
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in itemsData" :key="index">
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
                  <button type="button" class="add-btn shadow-sm rounded-5 bg-white" data-bs-toggle="offcanvas"
                    :data-bs-target="'#item_' + item.idx" role="button" aria-controls="offcanvasExample"
                    v-show="!item?.qty" @click="priceZero">
                    Add
                  </button>

                  <div class="d-flex align-items-center justify-content-center gap-2 count-btn">
                    <button type="button" class="border-0 rounded-1" @click="Decrease(item)" v-show="item?.qty">
                      <i class="bi bi-dash"></i>
                    </button>
                    <p class="mt-3" v-show="item?.qty">{{ item.qty }}</p>
                    <button type="button" class="border-0 rounded-1" @click="Increase(item)" v-show="item?.qty">
                      <i class="bi bi-plus"></i>
                    </button>
                  </div>

                  <button type="button" class="editPrice border-0 bg-white text-nowrap mt-3 ms-2" v-show="item?.qty"
                    data-bs-toggle="offcanvas" :data-bs-target="'#item_' + item.idx" role="button"
                    aria-controls="offcanvasExample">
                    edit price
                  </button>

                  <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" :id="'item_' + item.idx"
                    aria-labelledby="offcanvasExampleLabel">
                    <div class="offcanvas-header">
                      <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                        Add Item
                      </h5>
                      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
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
                            <span>₹<input type="text" placeholder="Enter negotiated value" v-model="item.valuation_rate"
                                class="border-0 ms-1 ps-2 input-price w-75" /></span>
                          </div>
                        </div>
                      </div>
                      <div class="row mb-4 qty-row">
                        <div class="col-sm-9 qty-div">
                          <span class="total-qty ms-2">Total Qty</span>
                        </div>
                        <div class="col-sm-3 qty-div1">
                          <div class="d-flex align-items-center justify-content-center gap-2">
                            <button type="button" class="border-0 rounded-1" @click="Decrease(item, index)"
                              :disabled="item.qty == 0">
                              <i class="bi bi-dash"></i>
                            </button>
                            <p class="mt-3">{{ item.qty }}</p>
                            <button type="button" class="border-0 rounded-1" @click="Increase(item, index)">
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
                          <button type="button" class="border-0 add-item-btn text-white w-100"
                            data-bs-dismiss="offcanvas" @click="showData">
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
      <section class="submit-section d-flex align-items-center justify-content-center w-100 mt-1">
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
                      <span class="fw-bold">Total :₹{{ totalPrice }}</span>
                    </div>
                    <span class="fw-bold">Qty: <b>{{ totalQuantity }}</b></span>
                  </div>
                  <div class="col-sm-1 submit-col text-end d-flex align-items-center justify-content-center">
                    <button @click="mySubmit()" class="border-0 bg-transparent p-2 submit-btn">
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
                <i @click="backSide()" class="ri-arrow-left-line quotationsfs"><span class="ps-2 quotationsfs">New
                    Quotation - Customer</span></i>
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
                    <div class="d-flex justify-content-between p-1 align-items-center">
                      <div>
                        <h6>Products</h6>
                        <p>Add items to your quotation.</p>
                      </div>
                      <div class="d-flex gap-1 align-items-center">
                        <div class="">
                          <button class="border-0 bg-white add-item-btn" @click="moreItems()">
                            <img src="../../../../assets/gridicons_add-outline.png" alt="icon" class="img-fluid" />

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
                            <button type="button" class="border-0 bg-transparent rounded-1"
                              @click="Decrease(item, index)" :disabled="item.qty == 0">
                              <i class="bi bi-dash"></i>
                            </button>
                            <h6>
                              <span id="count">{{ item.qty }}</span>
                            </h6>
                            <button type="button" class="border-0 bg-transparent rounded-1"
                              @click="Increase(item, index)">
                              <i class="bi bi-plus"></i>
                            </button>
                          </button>
                        </div>
                        <div>
                          <h6>{{ item.amount }}</h6>
                          <!-- <p class="text-end" style="color: #3b43f9">Edit</p> -->
                          <button type="button" class="edit border-0 bg-white text-nowrap " v-show="item?.qty"
                            data-bs-toggle="offcanvas" :data-bs-target="'#item_' + item.idx" role="button"
                            aria-controls="offcanvasExample">
                            edit
                          </button>
                          <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" :id="'item_' + item.idx"
                            aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                              <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                                Add Item
                              </h5>
                              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
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
                                    <span>₹<input type="text" placeholder="Enter negotiated value"
                                        v-model="item.valuation_rate"
                                        class="border-0 ms-1 ps-2 input-price w-75" /></span>
                                  </div>
                                </div>
                              </div>
                              <div class="row mb-4 qty-row">
                                <div class="col-sm-9 qty-div">
                                  <span class="total-qty ms-2">Total Qty</span>
                                </div>
                                <div class="col-sm-3 qty-div1">
                                  <div class="d-flex align-items-center justify-content-center gap-2">
                                    <button type="button" class="border-0 rounded-1" @click="Decrease(item, index)"
                                      :disabled="item.qty == 0">
                                      <i class="bi bi-dash"></i>
                                    </button>
                                    <p class="mt-3">{{ item.qty }}</p>
                                    <button type="button" class="border-0 rounded-1" @click="Increase(item, index)">
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
                                  <button type="button" class="border-0 add-item-btn text-white w-100"
                                    data-bs-dismiss="offcanvas" @click="showData">
                                    Add Item
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card1 mt-3 p-3 ">
                  <div class="d-flex justify-content-between mt-2 " style="border-bottom: 1px dashed #eee">
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
                  <div class="d-flex justify-content-between  mt-3" style="border-bottom: 1px dashed LIGHTGREY">
                    <div>
                      <h6>Total:</h6>
                    </div>
                    <div>
                      <h6></h6>
                    </div>
                  </div>
                  <div class="d-flex justify-content-between mt-3">
                    <div>
                      <h6 class="m-0">Discount</h6>
                      <p class="text-muted">
                        Give additional discount before tax
                      </p>
                    </div>
                    <div class=" d-flex  justify-content-end ">
                      <div>
                        <p style="color: #3b43f9" class="text-nowrap d-flex justify-content-end"
                          @click="toggleDiscountInput">
                          <i class="ri-add-circle-line"></i>Add Discount
                        </p>
                        <input v-if="showDiscountInput" type="text" class="form-control w-75 d-flex justify-content-end"
                          placeholder="Enter discount amount" v-model="postData.additional_discount_percentage" />
                      </div>
                    </div>
                  </div>
                  <div class="card-f">
                    <div class="d-flex justify-content-between">
                      <h6>Grand Total</h6>
                      <h6 class="text-muted">Qty:{{ this.totalQuantity }}</h6>
                      <h6>{{ totalPrice }}</h6>
                    </div>
                  </div>
                </div>
                <div class=" d-flex  justify-content-end  mt-3 positionbtn mb-1">
                  <div class="mt-2 mb-2">
                    <button class="btn btn-save " @click="saveDraft()">
                      <h6 class="m-0 text-white ">Save</h6>
                    </button>
                  </div>
                  <!-- <div class="mt-2 mb-2">
                    <button class="btn btn-quot text-decoration-none" v-show="showCreateQuotationButton"
                      @click="createQuotation()">
                      <h6 class="text-white m-0">Create Quotation</h6>
                    </button>
                  </div> -->
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
      additional_discount_percentage: 0,
      singleQuotation: [],
      singlesales: [],
      filteredData: [],
      duplicateArr: [],
      returnUpdate: {},
      showDiscountInput: false,
      taxesCharges: [],
      taxValue: [],
      fullCustomerData: [],
      cardShow: true,
      delivery_date: '',
      set_warehouse: '',
      saiSale: []
    };
  },
  mounted() {
    this.fetchData();
    this.quotationData();
    this.fetchCustomers();
    this.taxesGetData();
    this.taxesAndCharges();
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

          if (this.fullCustomerData.tax_category == "Out-State") {
            this.fullCustomerData.taxes = [...this.taxValue]
            console.log("outstate", this.fullCustomerData);
          }
          else {
            this.fullCustomerData.taxes = [...this.taxesCharges]
            console.log("In State===", this.fullCustomerData);

          }
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
      if (!this.selectedItems.includes(item)) {
        this.selectedItems.push(item);
      }
      item.qty++;
      item.amount = item.qty * item.valuation_rate;
      this.updateTotalQuantityAndPrice();
      this.addBtn = false;
    },
    Decrease(item) {
      if (item.qty > 0) {
        item.qty--;
        item.amount = item.qty * item.valuation_rate;
        this.updateTotalQuantityAndPrice();
        if (item.qty === 0) {
          const index = this.selectedItems.indexOf(item);
          if (index !== -1) {
            this.selectedItems.splice(index, 1);
          }
          this.addBtn = true;
        }
      }
    },
    updateTotalQuantityAndPrice() {
      let totalQuantity = 0;
      let totalPrice = 0;

      this.selectedItems.forEach((data) => {
        totalQuantity += data.qty;
        totalPrice += data.amount;
      });

      this.totalQuantity = totalQuantity;
      this.totalPrice = totalPrice;

      console.log("quantity:", this.totalQuantity, "Total Price:", this.totalPrice);
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


      this.arr.forEach(item => {
        item.prevdoc_docname = '';
      });

      console.log(this.selectedCustomer, "Customer");
      this.selectedCustomer.party_name = this.selectedCustomer.name;
      this.selectedCustomer.naming_series = "Q-"

      this.postData = {
        ...this.selectedCustomer,
        items: this.arr,
        docstatus: 0,
        taxes: this.fullCustomerData.taxes
      };

      console.log(this.postData, 'postData');
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
        .post(ApiUrls.resource + "/" + Doctypes.quotations, this.postData, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          this.savedData = res.data.data;
          toast.success("Quotation Saved", {
            position: "top-right",
          });
          window.location.reload();
          this.twoSteps = false
        });
    },
    createQuotation() {
      if (this.singleQuotation) {
        axios
          .put(
            ApiUrls.resource +
            "/" +
            Doctypes.quotations +
            "/" +
            this.singleQuotation.name,
            this.singleQuotation,
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              withCredentials: true,
            }
          )
          .then(
            (response) => (this.newComplete = response.data),
            toast.success("Quotation Updated", {
              position: "top-right",
            }),
            this.show = true


          )

          .catch((error) => console.error("Error updating data:", error));
      } else {
        console.error("No matching record found for the customer name:");
      }
    },
    Increase2(item) {
      item.qty++;
      item.rate = item.valuation_rate;
      item.amount = item.qty * item.rate;
      this.singleQuotation.net_total += item.valuation_rate;
      this.updateTotalQuantity();
      console.log(this.singleQuotation);
    },
    Decrease2(item) {
      if (item.qty > 0) {
        item.qty--;
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
        this.singleQuotation.items
        this.singleQuotation.net_total
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
            this.newComplete = response.data.data;
            toast.success("Quotation Created", {
              position: "top-right",
            });
            window.location.reload();
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
    createSalesOrder() {
      this.cardShow = false
      this.singleQuotation.items.prevdoc_docname = this.singleQuotation.name,
        console.log(this.singleQuotation.items.prevdoc_docname = this.singleQuotation.name, 'narenreddy');
      // console.log(quota.name);
      // let quotationQueryParams = {
      //   fields: JSON.stringify(["*"]),
      //   limit_page_length: "none",
      //   order_by: "creation DESC",
      // };

      // axios
      //   .get(ApiUrls.resource + "/" + Doctypes.quotations + "/" + quota.name, {
      //     params: quotationQueryParams,
      //     headers: {
      //       "Content-Type": "application/json",
      //       Accept: "application/json",
      //     },
      //     withCredentials: true,
      //   })
      //   .then((salesResponse) => {
      //     this.singlesales = salesResponse.data.data;
      //     console.log(this.singlesales);
      //     console.log(this.singlesales.taxes, "ghfgh");
      //   })
      //   .catch((salesError) => {
      //     console.error(
      //       "Error fetching sales data:",
      //       salesError.message
      //     );
      //   });
    },

    taxesAndCharges() {
      let queryParams = {
        filters: [["master_name", "=", "Output GST Out-State - CTD"]],
        include_children: JSON.stringify({
          taxes: {
            fields: ["*"],
            limit_page_length: "none",
            order_by: "creation DESC",
          },
        }),
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        order_by: "creation DESC",
      };
      axios
        .get(
          "http://192.168.1.177:8000/api/method/erpnext.controllers.accounts_controller.get_taxes_and_charges?master_doctype=Sales Taxes and Charges Template&master_name=Output GST Out-State - CTD",

          {
            params: queryParams,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          this.taxValue = res.data.message;
        })
        .catch((error) => {
          console.error("Error fetching taxes data:", error);
        });
    },

    taxesGetData() {
      let queryParams = {
        filters: [["master_name", "=", "Output GST In-State - CTD"]],
        include_children: JSON.stringify({
          taxes: {
            fields: ["*"],
            limit_page_length: "none",
            order_by: "creation DESC",
          },
        }),
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        order_by: "creation DESC",
      };

      axios
        .get(
          //  ApiUrls.resource + "/" + Doctypes.taxes,
          "http://192.168.1.177:8000/api/method/erpnext.controllers.accounts_controller.get_taxes_and_charges?master_doctype=Sales Taxes and Charges Template&master_name=Output GST In-State - CTD",

          {
            params: queryParams,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          console.log(res);
          this.taxesCharges = res.data.message;
          console.log(this.taxesCharges, "taxescharges");
        })
        .catch((error) => {
          console.error("Error fetching taxes data:", error);
        });
    },
    tosaleee() {
      if (!this.delivery_date) {
        alert("Please select a Delivery Date and Set Warehouse before submitting.");
        return;
      }
      if (!this.set_warehouse) {
        alert("Please select a Delivery Date and Set Warehouse before submitting.");
        return;
      }
      this.singleQuotation.docstatus = 0;
      this.singleQuotation.delivery_date = this.delivery_date;
      this.singleQuotation.doctype = 'Sales Order';
      this.singleQuotation.naming_series = 'SAL-ORD-.YYYY.-';
      this.singleQuotation.set_warehouse = this.set_warehouse;
      this.singleQuotation.customer = this.singleQuotation.title;
      this.singleQuotation.status = 'Draft';

      this.singleQuotation.items.forEach(item => {
        item.prevdoc_docname = this.singleQuotation.name;
      });
      axios
        .post(ApiUrls.resource + "/" + Doctypes.salesorder, this.singleQuotation, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          this.saiSale = res.data.data;
          toast.success("Sales Order Saved", {
            position: "top-right",
          }),
            this.tosaleee2 = this.show
          console.log(this.saiSale, "poseted responce");
        });
    },
    tosaleee2() {
      // if (!this.delivery_date) {
      //   alert("Please select a Delivery Date and Set Warehouse before submitting.");
      //   return;
      // }
      // if (!this.set_warehouse) {
      //   alert("Please select a Delivery Date and Set Warehouse before submitting.");
      //   return;
      // }

      this.saiSale.docstatus = 1;
      axios
        .put(ApiUrls.resource + "/" + Doctypes.salesorder + "/" + this.saiSale?.name, this.saiSale, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res, "lastSale responce");
          toast.success("Sales Order Submitted", {
            position: "top-right",
          })
        });

      this.twoSteps = false
    }
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

.edit {
  color: #3b43f9;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

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
  text-decoration-line: none !important;
  padding: 10px;
}

.btn-Update {
  border-radius: 4px;
  border: 0.7px solid #3b43f9;
  background: #ecedff;
  color: #3b43f9;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  padding: 6px 30px;
  justify-content: center;
}

.btn-save {
  border-radius: 40px;
  background: #3b43f9;
  color: white;
  padding: 10px 10px;
  text-decoration-line: none !important;
  width: 100px;
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

.btncustomer1 {
  border-radius: 30px;
  background: #3b43f9;
  color: white;

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
  /* border: 0.7px solid #999999; */
  border: none;
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

.Cancelledbutton {
  border-radius: 4px;
  border: none;
  background: #f1f1f1;
  color: #b52a2a;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
}

.Orderedbutton {
  border-radius: 4px;
  border: none;
  background: #f1f1f1;
  color: #16794c;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  align-items: center;
  gap: 10px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
}

.savedbutton {
  border-radius: 4px;
  /* border: 0.7px solid #3b43f9; */
  border: none;
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

.list-group-item+.list-group-item.active {
  /* border-top-width: 0px; */
  margin-top: 1px !important;
}

*:focus {
  outline: none;
}
</style>

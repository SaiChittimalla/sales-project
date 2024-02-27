<template>
    <section v-if="salesorder">
        <nav class="navbar header align-items-center">
            <div class="container">
                <div class="d-flex gap-2 p-2 align-items-center" v-if="show">
                    <div>
                        <router-link to="/HomePage" class="text-decoration-none text-black">
                            <i class="ri-arrow-left-line text-black"><span class="ps-2 quotationsfs">SalesOrders &nbsp;({{
                                totalQuotations
                            }})</span></i></router-link>
                    </div>
                </div>
                <div v-if="!show">
                    <span class=" quotationsfs" @click="backMove()"><i class="ri-arrow-left-line text-black me-2 "></i>Sales
                        Order Details</span>
                </div>

            </div>
        </nav>

        <div class="container" v-if="show">
            <div class="header2">
                <div class=" buttonsall">
                    <ul class="d-flex flex-wrap list-unstyled list-group flex-row gap-1">
                        <li class="list-group-item btn2" :class="{ active: activeFilter === 'All' }"
                            @click="setFilter('All')">
                            All
                        </li>
                        <li class="list-group-item btn2" :class="{ active: activeFilter === 'Draft' }"
                            @click="setFilter('Draft')">
                            Draft
                        </li>
                        <li class="list-group-item btn2" :class="{ active: activeFilter === 'Completed' }"
                            @click="setFilter('Completed')">
                            Completed
                        </li>
                        <li class="list-group-item btn2" @click="setFilter('This Month')">
                            <span> This Month</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
                        <div class="card card1 mb-4" v-for="(sales, index) in filteredQuotations" :key="index">
                            <div class="d-flex justify-content-between p-2 align-items-baseline"
                                style="border-bottom: 1px solid #eeeeee">
                                <div class="d-flex ms-2 gap-3 align-items-center">
                                    <div class="d-flex justify-content-center ri-file-edit-line1">
                                        <i class="ri-file-edit-line"></i>
                                    </div>
                                    <div>
                                        <p style="font-size: 13px" class="align-items-center mt-3">
                                            {{ sales.name }}<br /><span class="text-muted" style="font-size: 11px">{{
                                                sales.transaction_date }}</span>
                                        </p>
                                    </div>
                                </div>
                                <div>
                                    <button class="savedbutton1" @click="salesDetails(sales)">View</button>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between p-2 align-items-center ">
                                <div class="p-3">
                                    <h6 class="" style="font-size: 13px">{{ sales.customer_name }}</h6>
                                    <!-- <p style="font-size: 11px; color: #3b43f9">Customer</p> -->
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
                <button class="btn btn-primary circle-with-plus" type="button" @click="plusIcon()">+</button>
            </div>
        </div>

        <div class="container" v-if="!show">
            <div class="card card1 p-3">
                <div class="card card1 p-4">
                    <p style="font-size: 13px" class="text-black">ID :- <span class=" text-muted ">{{ currentEmployee.name
                    }}</span></p>
                    <p style="font-size: 13px">Customer Name :- <span class=" text-muted ">{{ currentEmployee.customer_name
                    }}</span></p>
                    <div>
                        <p style="font-size: 13px">Mobile NO :- <span class="text-muted">&nbsp;{{
                            currentEmployee.contact_mobile }}</span>
                        </p>
                        <p style="font-size: 13px">E-mail :- <span class="text-muted">&nbsp;{{
                            currentEmployee.contact_email }}</span>
                        </p>
                    </div>
                </div>

                <div class="card card1 p-4 mt-3">
                    <p style="font-size: 14px">Address:</p>
                    <div class="">
                        <p style="font-size: 13px">Billing Address:<br /><span class="text-muted">{{
                            removeBrTags(currentEmployee.shipping_address) }}</span>
                        </p>
                        <p style="font-size: 13px">Shipping Address:<br /><span class="text-muted">{{
                            removeBrTags(currentEmployee.shipping_address) }}</span>
                        </p>
                    </div>
                </div>
                <div class=" card card1 mt-3">
                    <div v-for="(item, index) in currentEmployee.items" :key="index">
                        <div class="card-body card-body123">
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h6>{{ item.item_name }}</h6>
                                    <p class="paragraph-txt">{{ item.item_code }}</p>
                                </div>
                                <div class="d-flex align-items-center gap-2">
                                    <button class="btn border-1 increment">
                                        <button type="button" class="border-0 bg-transparent rounded-1"
                                            @click="Decrease2(item, index)" :disabled="item.qty == 0">
                                            <i class="bi bi-dash"></i>
                                        </button>
                                        <h6>
                                            <span id="count" :v-model="currentEmployee.items">{{ item.qty }}</span>
                                        </h6>
                                        <button type="button" class="border-0 bg-transparent rounded-1"
                                            @click="Increase2(item, index)">
                                            <i class="bi bi-plus"></i>
                                        </button>
                                    </button>
                                </div>
                                <div>
                                    <h6 :v-model="item.rate">{{ item.amount }}</h6>
                                    <p class="paragraph-txt text-end" style="color: #3b43f9">Edit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="card tax-card mt-3">
                    <div class="d-flex justify-content-between mt-2 p-1" style="border-bottom: 1px dashed #eee">
                        <h6>Total Items Value</h6>
                        <h6 :v-modal="currentEmployee.net_total">₹{{ currentEmployee.net_total }}</h6>

                    </div>
                    <div v-for="(taxe, index) in currentEmployee.taxes" :key="index">
                        <div class="d-flex justify-content-between p-1 mt-3">
                            <div>
                                <h6>
                                    {{ taxe.account_head }}
                                </h6>
                            </div>
                            <div>
                                <h6 class="text-muted">
                                    ₹ {{ taxe.tax_amount || 0 }}
                                </h6>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between p-1 mt-3" style="border-bottom: 1px dashed LIGHTGREY">
                        <div>
                            <h6>Total Taxes:</h6>
                        </div>
                        <div>
                            <h6>₹ {{ currentEmployee.total_taxes_and_charges }}</h6>
                        </div>
                    </div>
                    <div class="d-flex card2 justify-content-between p-1 mt-3">
                        <div>
                            <h6>Discount</h6>
                            <p class="text-muted">Give additional discount before tax</p>
                        </div>
                        <!-- <div class="d-flex gap-2">
                            <div>
                                <p style="color: #3b43f9" class="text-nowrap">
                                    Add Discount
                                </p>

                            </div>
                        </div> -->
                    </div>
                    <div class="card-footer">
                        <div class="d-flex justify-content-between">
                            <h6 class="fw-bold">Grand Total</h6>
                            <h6 class="fw-bold">Qty - {{ currentEmployee.total_qty }}</h6>
                            <h6 class="fw-bold">{{ currentEmployee.grand_total }}</h6>
                        </div>
                    </div>
                    <div class="mt-2 mb-2 d-flex justify-content-end create-quote ">
                        <button class="btn btn-quot1 text-decoration-none" @click="quotationExits()">
                            Create Sales
                        </button>
                    </div>
                </div>

            </div>

            <div>
                <button class="btn btn-primary circle-with-plus" type="button" @click="plusIcon()">+</button>
            </div>

        </div>
    </section>

    <section v-if="show1">
        <div class="container-fluid">
            <div class="row">
                <div class="shadow-lg">
                    <h6 class="fw-bold py-2"><i class="bi bi-arrow-left me-2 mt-5" @click="sales()"></i>Sales Order</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="mt-4 mx-2">
                        <div class="card p-2 rounded-3 shadow-sm dropdown-card">
                            <h6 class="m-2 label-name">Customer</h6>
                            <div class="custom-select">
                                <input class="input-search form-control  w-100 border-0 "
                                    placeholder="search or select a customer" type="text" v-model="searchQuery"
                                    @click="isOpen = true" @input="filterOptions">
                                <ul v-show="isOpen" class="ul-tag w-100 ms-2">
                                    <li class="list-items" v-for="item in filteredData" :key="item.id"
                                        @click="selectOption(item)">
                                        {{ item.customer_name }}
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="mt-4 mx-2">
                        <div class="card rounded-3 shadow-sm product-card1">
                            <div class="row">

                                <div class="col-8" v-show="showdata">
                                    <h6 class="m-2 label-name">Customer's PO Detail</h6>
                                </div>
                                <div v-show="!showdata">
                                    <div class="d-flex justify-content-between">
                                        <h6 class=" m-2 label-name">Purchase Order Number</h6>
                                        <span><i class="bi bi-pencil-fill me-2 " data-bs-toggle="offcanvas"
                                                data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"></i></span>
                                    </div>
                                    <P class="formdata ms-2 mb-4">{{ formdata.po_no }}</P>
                                    <h6 class="m-2 label-name">Purchase Order Date</h6>
                                    <P class="formdata mt-2 ms-2">{{ formdata.po_date }}</P>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-center text-nowrap">
                                    <button type="button" class="border-0 bg-white add-item-btn1" data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" v-show="showdata">
                                        <i class="bi bi-plus-circle me-2"></i>Add P.O.</button>
                                    <div class="offcanvas offcanvas-bottom h-50" tabindex="-1" id="offcanvasTop"
                                        aria-labelledby="offcanvasTopLabel">
                                        <div class="offcanvas-header">
                                            <h5 id="offcanvasTopLabel">Customer's PO Detail</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <div class="row mb-3 m-1">
                                                <div class="card lead-card">
                                                    <div>
                                                        <p class="lead">Purchase Order Date</p>
                                                        <input type="date"
                                                            class="border-0 form-control input-date p-1 w-100"
                                                            v-model="formdata.po_date" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mb-3 m-1">
                                                <div class="card lead-card">
                                                    <div>
                                                        <p class="lead">Purchase Order Number</p>
                                                        <input type="number" placeholder="Enter Purchase order number"
                                                            class="border-0 input-date form-control p-1 w-100"
                                                            v-model="formdata.po_no" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="text-end">
                                                        <button type=" reset"
                                                            class="btn border-0 cancel-btn mt-2 shadow-none ">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="text-end">
                                                        <button type="submit"
                                                            :disabled="!formdata.po_no || !formdata.po_date"
                                                            data-bs-dismiss="offcanvas" @click="SubmitPurchaseData"
                                                            class="btn border-0 save-btn text-white">
                                                            Save
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
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="mt-4 mx-2">
                        <div class="card rounded-3 shadow-sm product-card1">
                            <div class="row">
                                <div class="col-6">
                                    <div>
                                        <h6 class="m-2 label-name">Delivery date</h6>
                                        <p v-show="!date" class="formdata mt-3 ms-2 mb-4">{{ DeliveryData.delivery_date }}
                                        </p>
                                    </div>
                                </div>

                                <div class="col-6 d-flex align-items-center justify-content-center text-nowrap ">
                                    <button v-show="date" type="button" class="border-0  bg-white add-item-btn1"
                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight">
                                        <i class="bi bi-plus-circle me-2"></i>Add Delivery date</button>

                                    <div class="offcanvas offcanvas-bottom h-50" tabindex="-1" id="offcanvasRight"
                                        aria-labelledby="offcanvasRightLabel">
                                        <div class="offcanvas-header">
                                            <h5 id="offcanvasRightLabel">Delivery date</h5>
                                            <button type="reset" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <div class="row mb-3 m-1">
                                                <div class="card lead-card">
                                                    <div>
                                                        <p class="lead">Delivery Date</p>
                                                        <input type="date"
                                                            class="border-0 form-control input-date p-1 w-100"
                                                            v-model="DeliveryData.delivery_date" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="text-end">
                                                        <button type="reset"
                                                            class="btn border-0 cancel-btn mt-2 shadow-none ">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="text-end">
                                                        <button type="submit" @click="Submitdelivery_date"
                                                            :disabled="!DeliveryData.delivery_date"
                                                            data-bs-dismiss="offcanvas"
                                                            class="btn border-0 save-btn text-white">
                                                            Save
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
                                    <button @click="additem()" type="button" class="border-0 bg-white add-item-btn1">
                                        <i class="bi bi-plus-circle me-2"></i>Add Item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section v-if="show2">
        <div class="show">
            <div class="container-fluid">
                <section class="add-item-section">
                    <div class="add-item">
                        <h6 class="fw-bold py-2">
                            <i class="bi bi-arrow-left me-2 mt-5" @click="NewQuote"></i>Add Items
                        </h6>
                    </div>
                    <div class="row mt-3 px-2">
                        <div class="col-sm-9 col-md-7 col-lg-7 col-xl-7 col-search">
                            <div class="form-group has-search">
                                <span class="form-control-feedback"><i class="bi bi-search"></i></span>
                                <input type="search" class="form-control bg-light" placeholder="Search item name"
                                    v-model="secondQuery" @input="SearchDetails" />

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
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="(item, index) in itemData" :key="index">
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
                                    <button type="button" class="add-btn shadow-sm rounded-5 bg-white"
                                        data-bs-toggle="offcanvas" :data-bs-target="'#item_' + item.idx" role="button"
                                        aria-controls="offcanvasExample" v-show="!item?.qty" @click="priceZero">
                                        Add
                                    </button>

                                    <div class="d-flex align-items-center justify-content-center gap-2 count-btn">
                                        <button type="button" class="border-0 rounded-1" @click="Decrease(item)"
                                            v-show="item?.qty">
                                            <i class="bi bi-dash"></i>
                                        </button>
                                        <p class="mt-3" v-show="item?.qty">{{ item.qty }}</p>
                                        <button type="button" class="border-0 rounded-1" @click="Increase(item)"
                                            v-show="item?.qty">
                                            <i class="bi bi-plus"></i>
                                        </button>
                                    </div>

                                    <router-link to="#" class="text-nowrap">
                                        <h6 class="editPrice mt-3 ms-2" v-show="item?.qty">
                                            edit price
                                        </h6>
                                    </router-link>
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
                                                        <button type="button" class="border-0 rounded-1"
                                                            @click="Decrease(item, index)" :disabled="item.qty == 0">
                                                            <i class="bi bi-dash"></i>
                                                        </button>
                                                        <p class="mt-3">{{ item.qty }}</p>
                                                        <button type="button" class="border-0 rounded-1"
                                                            @click="Increase(item, index)">
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
                                            <span class="fw-bold">Total price :- ₹ {{ totalPrice }}</span><br>
                                            <span class="fw-bold">Qty :- {{ totalQuantity }}</span>
                                        </div>
                                    </div>
                                    <div
                                        class="col-sm-1 submit-col text-end d-flex align-items-center justify-content-center">
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
    </section>

    <section v-if="show3">
        <div>
            <nav class="navbar header shadow-sm">
                <div class="container w-100 ">
                    <h6 class="fw-bold ">
                        <span class=""><i @click="backSide()" class="bi bi-arrow-left me-2 mt-5 navbar-heading"></i>New
                            Sales Order</span>
                    </h6>
                </div>
            </nav>
            <div class="container ">
                <div class="bg-1">
                    <div class="inputheader mt-3">
                        <div class="p-3">
                            <label for="Companyselect">
                                <h6>
                                    {{ this.selectedCustomer.customer_name }}
                                </h6>
                            </label>
                        </div>
                    </div>

                    <div class="inputheader mt-3 p-2">
                        <div class="d-flex justify-content-between">
                            <h6 class=" m-2 label-name">Purchase Order Number</h6>
                        </div>
                        <P class="formdata ms-2 mb-4">{{ formdata.po_no }}</P>
                        <h6 class="m-2 label-name">Purchase Order Date</h6>
                        <P class="formdata mt-2 ms-2">{{ formdata.po_date }}</P>
                    </div>

                    <div class="inputheader mt-3 p-2">
                        <h6 class="m-2 label-name">Delivery date</h6>
                        <p v-show="!date" class="formdata mt-3 ms-2 mb-4">{{ DeliveryData.delivery_date }}</p>
                    </div>

                    <div>
                        <div>
                            <div class="card card1 mt-4">
                                <div class="card-header border-bottom-0">
                                    <div class="d-flex justify-content-between p-1 align-items-center">
                                        <div>
                                            <h6 class="m-1 label-name">Product</h6>
                                            <p class="text-secondary ms-2 m-0 product">
                                                Add items to your quotation.
                                            </p>
                                        </div>

                                        <button type="button" class="border-0 add-item-btn1" @click="backSide()">
                                            <i class="bi bi-plus-circle me-2"></i>Add Item</button>

                                    </div>
                                </div>
                                <div v-for="(item, index) in arr" :key="index">
                                    <div class="card-body card-body123">
                                        <div class="d-flex justify-content-between">
                                            <div>
                                                <h6>{{ item.item_name }}</h6>
                                                <p class="paragraph-txt">{{ item.item_code }}</p>
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
                                                <p class="paragraph-txt text-end" style="color: #3b43f9">Edit</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card card1 mt-3 p-2">
                                <div class="d-flex justify-content-between mt-2 p-1" style="border-bottom: 1px dashed #eee">
                                    <h6 @click="taxesGetData()">Total Items Value</h6>
                                    <h6>₹ {{ this.totalPrice }}</h6>
                                </div>

                                <!-- <div v-for="(taxe, index) in taxes" :key="index">
                                    <div class="d-flex justify-content-between p-1 mt-3"
                                        style="border-bottom: 1px dashed LIGHTGREY">
                                        <div>
                                            <h6>
                                                {{ taxe.account_head }}
                                            </h6>
                                        </div>
                                        <div>
                                            <h6 class="text-muted">
                                                ₹ {{ taxe.tax_amount || 0 }}
                                            </h6>
                                        </div>
                                    </div>
                                </div> -->

                                <div class="d-flex justify-content-between p-1 mt-3">
                                    <div>
                                        <h6>Discount</h6>
                                        <p class="paragraph-txt text-muted">
                                            Give additional discount before tax
                                        </p>
                                    </div>
                                    <div class="d-flex gap-1 align-items-center ">
                                        <div class="mb-3" style="color: #3b43f9">+</div>
                                        <div>
                                            <p style="color: #3b43f9" class=" paragraph-txt text-nowrap"
                                                @click="toggleDiscountInput">
                                                Add Discount
                                            </p>
                                            <input v-if="showDiscountInput" type="text"
                                                class="form-control w-75 d-flex justify-content-end"
                                                placeholder="Enter discount amount"
                                                v-model="postData.additional_discount_percentage" />
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
                                    <button class="btn btndraft" @click="saveDraft()">Save as draft</button>
                                </div>
                                <div class="mt-2 mb-2">
                                    <button class="btn btn-quot text-decoration-none" @click="createSales()">
                                        <h6 class="text-white m-0">Create Sales Order</h6>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- </div> -->
    </section>
</template>

<script>
import axios from 'axios';
import { Doctypes, ApiUrls } from "@/shared/apiUrls";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
    data() {
        return {

            show: true,
            saleOrders: [],
            filterType: "All",
            activeFilter: "All",

            salesorder: true,
            show1: false,
            show2: false,
            show3: false,
            data: [],
            filteredData: [],
            currentEmployee: [],
            postData: {
                additional_discount_percentage: 0,
            },
            searchQuery: '',
            secondQuery: '',
            isOpen: false,
            showdata: true,
            selectedCustomer: null,
            date: true,
            formdata: {
                po_no: '',
                po_date: '',
            },
            DeliveryData: {
                delivery_date: '',
            },
            customers: [],
            qty: 0,
            selectedItems: [],
            duplicateArr: [],
            showBtn: true,
            addBtn: true,
            totalPrice: 0,
            totalQuantity: 0,
            obj: new Set(),
            arr: [],
            newComplete: [],
            savedData: [],
            items: [],
            showDiscountInput: false,
            taxesCharges: [],
            fullCustomerData: [],
        }

    },
    mounted() {
        this.fetchData();
        this.fetchItem();
        this.fetchSales();
        this.taxesGetData();
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
        itemsData() {
            return this.itemData.filter(item => {
                return Object.values(item).some(value => {
                    return String(value).toLowerCase().includes(this.secondQuery.toLowerCase());
                });
            });
        }
    },
    methods: {
        removeBrTags(address) {
            if (address) {
                return address.replace(/<br\s*\/?>/g, ' ');
            }
        },
        setFilter(type) {
            this.activeFilter = type;
            this.filterType = type;
        },
        backMove() {
            // if (this.show == true) this.$router.push();
            this.show = !this.show;
        },
        sales() {
            this.salesorder = true,
                this.show1 = false
        },
        fetchSales() {
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
        // salesDetails(name) {
        //     this.items = []
        //     console.log(name, "name");
        //     // console.log(this.items,'hgsfd');
        //     this.show = false;
        //     this.saleOrders.filter((sales) => {
        //         if (sales == name) {
        //             this.currentEmployee = sales;
        //             let quotationQueryParams = {
        //                 fields: JSON.stringify(["*"]),
        //                 limit_page_length: "none"
        //             };
        //             axios
        //                 .get(ApiUrls.resource + "/" + Doctypes.salesorder + '/' + this.currentEmployee?.name, {
        //                     params: quotationQueryParams,
        //                     headers: {
        //                         "Content-Type": "application/json",
        //                         Accept: "application/json",
        //                     },
        //                     withCredentials: true,
        //                 })
        //                 .then((quotationResponse) => {
        //                     this.currentmEployee = quotationResponse.data.data;
        //                     this.items = this.currentmEployee?.items
        //                     console.log("zbvhjvdv", this.items);
        //                     console.log(this.currentmEployee.taxes ,'14352');

        //                 })
        //                 .catch((quotationError) => {
        //                     console.error("Error fetching quotation data:", quotationError.message);
        //                 });
        //         }
        //     });
        // },

        salesDetails(quota) {
            this.show = false;
            console.log(quota.name);

            let quotationQueryParams = {
                fields: JSON.stringify(["*"]),
                limit_page_length: "none",
                order_by: 'creation DESC'
            };

            axios
                .get(ApiUrls.resource + "/" + Doctypes.salesorder + '/' + quota.name, {
                    params: quotationQueryParams,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    withCredentials: true,
                })
                .then((quotationResponse) => {
                    this.currentEmployee = quotationResponse.data.data;
                    console.log(this.currentEmployee, "7213465");
                    console.log(this.currentEmployee.taxes, "ghfgh");
                })
                .catch((quotationError) => {
                    console.error("Error fetching quotation data:", quotationError.message);
                });

        },

        plusIcon() {
            this.salesorder = false,
                this.show1 = true,
                this.show2 = false,
                this.show3 = false
        },

        fetchData() {
            this.loading = true;
            let queryParams = {
                fields: JSON.stringify(["*"]),
                limit_page_length: "none",
                filters: JSON.stringify([]),
            };
            axios
                .get(ApiUrls.resource + "/" + Doctypes.salesorder, {
                    params: queryParams,
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                    withCredentials: true,
                })
                .then((response) => {
                    this.duplicateArr = JSON.parse(JSON.stringify(response.data.data));
                    console.log(this.duplicateArr);
                })
                .catch((error) => {
                    console.error(error.message);
                })
                .finally(() => {
                    this.loading = false;
                });
        },

        filterOptions() {
            this.filteredData = this.duplicateArr.filter(item =>
                item.customer_name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        selectOption(item) {
            this.selectedCustomer = item;
            this.searchQuery = item.customer_name;
            this.isOpen = false;
        },

        selectCustomer(customer) {
            this.searchQuery = customer.name;
            this.selectedCustomer = customer;
            this.isOpen = false;

            let quotationQueryParams = {
            fields: JSON.stringify(["*"]),
            imit_page_length: "none",
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
          if (this.selectedCustomer.tax_category=="In-State") {
            this.taxesCharges = this.taxesCharges[1];
          } else {
            this.taxesCharges = this.taxesCharges[0];
          }
          console.log(this.fullCustomerData ,'7365435');
        })
        .catch((quotationError) => {
          console.error(
            "Error fetching quotation data:",
            quotationError.message
          );
        });

        },
        SubmitPurchaseData() {
            this.showdata = false;
            console.log(this.formdata);
        },
        Submitdelivery_date() {
            this.date = false;
            console.log(this.DeliveryData);
        },
        additem() {
            this.salesorder = false,
                this.show1 = false,
                this.show2 = true,
                this.show3 = false
        },
        fetchItem() {
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
                    console.log(this.itemData);
                })
                .catch((error) => console.error(error.message))
                .finally(() => (this.loading = false));
        },
        NewQuote() {
            this.show2 = false;
            this.show1 = true;
        },
        backSide() {
            this.show3 = false;
            this.show2 = true;
        },
        toggleDiscountInput() {
            this.showDiscountInput = !this.showDiscountInput;
        },
        Increase(item) {
            console.log(item, "sdv");
            item.qty++;
            item.rate = item.valuation_rate;
            item.amount = item.qty * item.rate;
            this.selectedItems.push(item);
            if (item.qty) {
                // item.valuation_rate += item.qty;
                this.updateTotalQuantityAndPrice();
            }
            this.addBtn = false;
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
            console.log(this.arr, "array");
        },

        Increase2(item) {
            item.qty++;
            item.rate = item.valuation_rate;
            item.amount = item.qty * item.rate;
            this.currentEmployee.net_total += item.valuation_rate;
            this.updateTotalQuantity();
            // console.log(this.currentEmployee.net_total);

        },
        Decrease2(item) {
            if (item.qty > 0) {
                item.qty--;
                item.rate = item.valuation_rate;
                item.amount = item.qty * item.rate;
                this.currentEmployee.net_total -= item.valuation_rate;
                this.updateTotalQuantity();
                // console.log(this.currentEmployee.net_total);
            }
        },
        updateTotalQuantity() {
            let totalQty = 0;
            for (let item of this.currentEmployee.items) {
                totalQty += item.qty;
            }
            this.currentEmployee.total_qty = totalQty;
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

        mySubmit() {
            this.show1 = false,
                this.show2 = false,
                this.show3 = true
            if (!this.selectedCustomer) {
                alert("Please select a customer before submitting.");
                return;
            }
            this.selectedItems.forEach((val) => this.duplicate(val));
            this.selectedCustomer.party_name = this.selectedCustomer.customer_name;
            const postData = {
                ...this.selectedCustomer,
                items: this.arr,
                ...this.formdata,
                ...this.DeliveryData,
                docstatus: 0,
                taxes: this.taxesCharges,
            };
            this.savedData = postData;
            // console.log(postData);
            console.log(postData, 'postData')
        },

        saveDraft() {
            this.postData.additional_discount_percentage = parseInt(
                this.postData.additional_discount_percentage,
                10
            );
            axios.post(ApiUrls.resource + "/" + Doctypes.salesorder, this.savedData)
                .then((res) => (this.savedData = res.data.data));
            console.log(this.savedData);
        },

        createSales() {
            if (this.savedData) {
                this.savedData.docstatus = 1;
                this.savedData.items = this.arr;
                this.savedData.party_name = this.selectedCustomer.party_name;
                console.log("this.savedData.name:", this.savedData.name);
                axios
                    .put(ApiUrls.resource + "/" + Doctypes.salesorder + "/" + this.savedData.name, this.savedData)
                    .then((response) => {
                        this.newComplete = response.data;
                        console.log(this.newComplete);
                    })
                    .catch((error) => {
                        console.error("Error submitting data:", error);
                    });
            } else {
                alert("No data to submit. Please submit data first.");
            }
        },
        quotationExits() {
            if (this.currentEmployee) {
                this.currentEmployee.docstatus = 1;
                // this.currentEmployee.items = this.arr;
                axios
                    .put(
                        ApiUrls.resource +
                        "/" +
                        Doctypes.salesorder +
                        "/" +
                        this.currentEmployee?.name,
                        this.currentEmployee
                    )
                    .then((response) => (this.newComplete = response.data
                    ),
                        toast.success("Quotation Created", {
                            position: "top-right",
                        }),
                        this.show = true

                    )
                    .catch((error) => console.error("Error updating data:", error));
            } else {
                console.error(
                    "No matching record found for the customer name:",

                );
            }
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
                    this.taxesCharges = res.data.data;
                    console.log(this.taxesCharges, 'taxes');
                });
        },


    },

    watch: {
        searchQuery() {
            if (this.searchQuery.length > 0) {
                this.fetchItem();
            } else {
                this.isOpen = true;
            }
        },
    },
}
</script>

<style scoped>
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
    padding: 17px 10px;
}

.product-card1 {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
    padding: 25px 10px;
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

.add-item-btn1 {
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
    /* color: #444; */
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.custom-select {
    position: relative;
}

/* input {
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
} */
.form-control:focus {
    box-shadow: none;
}

.form-control {
    font-size: 14px;
    font-weight: 600;
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
    font-size: 13px !important;
}

.lead-card {
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #fff;
    padding: 10px 10px;
    margin-bottom: 17px;
}

.lead {
    color: #444;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}


.input-lead::placeholder {
    color: #ababab;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.input-date {
    color: black !important;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.formdata {
    color: black !important;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 8px;
}

.search-input::placeholder {
    color: #999;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 13px;
}

.save-btn {
    border-radius: 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    background: #3b43f9;
    padding: 10px 55px;
}

.offcanvas {
    border-radius: 10px;
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

.inputheader {
    border-radius: 10px;
    border: 1px solid #eee;
    background: #fff;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
}

.card1 {
    border-radius: 10px 10px 0px 0px;
    background: #fafafa !important;
}

.tax-card {
    border-radius: 10px 10px 0px 0px;
    background: #fafafa;
    padding: 17px 20px 0px 20px;
}

.card2 {
    font-size: 12px;
}

.card-body123 {
    border-bottom: 1px solid #eeeeee;
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

/* .circle-with-plus {
    width: 18px;
    height: 18px;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3b43f9 !important;
    font-size: 15px;
    border: 1px solid;
} */

.positionbtn {
    position: sticky;
    bottom: 0%;
    background: white;
    z-index: 100;
}

.btndraft {
    border-radius: 40px;
    background: #F8F8FF;
    padding: 11px 38px;
    color: #3b43f9;
}

.btn-quot {
    border-radius: 40px;
    background: #3b43f9;
    color: white;
    padding: 14px 15px;
    text-decoration-line: none !important;
}

.btn-quot1 {
    border-radius: 40px;
    background: #3b43f9;
    color: white;
    padding: 10px 30px;
    text-decoration-line: none !important;
}

h6 {
    color: #111;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.paragraph-txt {
    color: #444;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
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
    bottom: 15%;
    right: 14%;
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
    position: sticky;
    top: 0px;
    z-index: 10;
    background-color: white;
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
    /* color: white; */
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

.create-quote {
    position: sticky;
    bottom: 0px;
    background: white;
}
</style>
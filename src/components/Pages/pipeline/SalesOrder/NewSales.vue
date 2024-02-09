<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="shadow-lg">
                    <h6 class="fw-bold py-2"><router-link to="/SalesOrder" class=" text-decoration-none "><i
                                class="bi bi-arrow-left me-2 mt-5"></i></router-link> Sales Order</h6>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="mt-4 mx-2">
                        <div class="card p-2 rounded-3 shadow-sm dropdown-card">
                            <h6 class="m-2 label-name">Customer</h6>
                            <div class="custom-select">
                                <input class="input-search form-control  w-100 border-0 " placeholder="search or select a customer"
                                    type="text" v-model="searchQuery" @click="isOpen = true" @input="filterOptions">
                                <ul v-show="isOpen" class="ul-tag w-100 ms-2">
                                    <li class="list-items" v-for="item in data" :key="item.id" @click="selectOption(item)">
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
                                        <h6 class="m-2 label-name">Purchase Order Number</h6>
                                    <span><i class="bi bi-pencil-fill me-2 " data-bs-toggle="offcanvas"
                                        data-bs-target="#offcanvasTop" aria-controls="offcanvasTop"></i></span>
                                    </div>
                                    <P class="formdata mt-2 ms-2 mb-4">{{ formdata.OrderNumber }}</P>
                                    <h6 class="m-2 label-name">Purchase Order Date</h6>
                                    <P class="formdata mt-2 ms-2">{{ formdata.OrderDate }}</P>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-center text-nowrap">
                                    <button type="button" class="border-0 bg-white add-item-btn" data-bs-toggle="offcanvas"
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
                                                        <p class="lead">Purchase Order Number</p>
                                                        <input type="text" placeholder="Enter Purchase order number"
                                                            class="border-0 input-date form-control p-1 w-100"
                                                            v-model="formdata.OrderNumber" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row mb-3 m-1">
                                                <div class="card lead-card">
                                                    <div>
                                                        <p class="lead">Purchase Order Date</p>
                                                        <input type="date" class="border-0 form-control input-date p-1 w-100"
                                                            v-model="formdata.OrderDate" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="text-end">
                                                        <button type="button" class="btn border-0 cancel-btn mt-2 shadow-none ">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="text-end">
                                                        <button type="submit" :disabled="!formdata.OrderNumber||!formdata.OrderDate"
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
                                    <h6 class="m-2 label-name">Delivery date</h6>
                                        <p v-show="!date" class="formdata mt-3 ms-2 mb-4">{{ DeliveryData.DeliveryDate }}</p>
                                </div>

                                <div class="col-6 d-flex align-items-center justify-content-center text-nowrap">
                                    <button type="button" class="border-0 ms-3 bg-white add-item-btn"
                                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                                        aria-controls="offcanvasRight" v-show="date">
                                        <i class="bi bi-plus-circle me-2"></i>Add Delivery date</button>
                                        <span v-show="!date"><i class="bi bi-x"></i></span>

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
                                                        <input type="date" class="border-0 form-control input-date p-1 w-100"
                                                            v-model="DeliveryData.DeliveryDate" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-4">
                                                    <div class="text-end">
                                                        <button type="reset" class="btn border-0 cancel-btn mt-2 shadow-none ">
                                                            Cancel
                                                        </button>
                                                    </div>
                                                </div>
                                                <div class="col-8">
                                                    <div class="text-end">
                                                        <button type="submit" @click="SubmitDeliveryDate" :disabled="!DeliveryData.DeliveryDate"
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
                                    <router-link to="/AddItems" class=" text-decoration-none "><button type="button"
                                            class="border-0 bg-white add-item-btn">
                                            <i class="bi bi-plus-circle me-2"></i>Add Item</button></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            data: [],
            searchQuery: '',
            isOpen: false,
            showdata: true,
            selectedCustomer: null,
            date: true,
            formdata: {
              OrderNumber: '',
                OrderDate: '',
            },
            DeliveryData: {
                DeliveryDate: '',
            }
        }

    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch(
                    'http://192.168.1.177:8000/api/resource/Sales%20Order?fields=[%22*%22]');
                const res = await response.json();
                this.data = res.data;
                this.duplicateArr = res.data;

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        filterOptions() {
            this.data = this.duplicateArr.filter(item =>
                item.customer_name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        selectOption(item) {
            this.selectedCustomer = item;
            this.searchQuery = item.customer_name;
            this.isOpen = false;

        },
        SubmitPurchaseData() {
            this.showdata = false;
            console.log(this.formdata);
        },
        SubmitDeliveryDate() {
            this.date = false;
            console.log(this.DeliveryData);
        }
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
    padding: 12px 10px;
}

.product-card1 {
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
    padding: 20px 10px;
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

/* input {
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
} */
.form-control:focus{
    box-shadow: none;
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
    font-size: 15px;
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

.input-date{
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
}</style>
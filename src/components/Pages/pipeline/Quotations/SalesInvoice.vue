<template>
    <div class="">
        <nav class="navbar header" v-if="show">
            <div class="container">
                <div class="d-flex gap-2 p-2 align-items-center">
                    <div>
                        <i @click="backgo()" class="ri-arrow-left-line"><span class="ps-2 quotationsfs">Sales Invoices
                                &nbsp;({{
            totalInvoices }})</span></i>
                    </div>
                </div>
            </div>
        </nav>
        <nav class="navbar header" v-if="!show">
            <div class="container">
                <div class="d-flex gap-2 p-2 align-items-center">
                    <div>
                        <i @click="backMove()" class="ri-arrow-left-line"><span class="ps-2 quotationsfs">Invoice
                                &nbsp;Details</span></i>
                    </div>
                </div>
            </div>
        </nav>
        <div class=" container p-0">
            <div class="header2" v-if="show">
                <div class="d-flex justify-content-between align-items-center buttonsall">
                    <ul class="d-flex list-unstyled justify-content-between flex-wrap list-group flex-row">
                        <!-- Add click event handlers to the filter buttons -->
                        <li class="list-group-item btn2" :class="{ active: activeFilter === 'All' }"
                            @click="setFilter('All')">
                            All
                        </li>
                        <li class="list-group-item btn2" :class="{ active: activeFilter === 'Paid' }"
                            @click="setFilter('Paid')">
                            Paid
                        </li>
                        <li class="list-group-item btn2" :class="{ active: activeFilter === 'Unpaid' }"
                            @click="setFilter('Unpaid')">
                            Unpaid
                        </li>
                        <li class="list-group-item btn2" :class="{ active: activeFilter === 'overdue' }"
                            @click="setFilter('overdue')">
                            overdue
                        </li>
                        <!-- ... other filter buttons ... -->


                        <!-- <select class="border-0 selectback">
                <option class="border-0 bg-none">This Month</option> 
              </select> -->
                    </ul>
                </div>
            </div>
            <div class="content container ">
                <div class="row">
                    <div class=" col-sm-12 mb-4" v-if="show">
                        <div class="card card1 my-3" v-for="(quotation, index) in salesInvoicesfiltered " :key="index">
                            <div class="p-2">
                                <div class="d-flex justify-content-between align-items-baseline"
                                    style="border-bottom: 1px solid #eeeeee">
                                    <div class="d-flex gap-3 align-items-center">
                                        <div class="d-flex justify-content-center ri-file-edit-line1">
                                            <img src="../../../../assets/lets-icons_paper-fill.svg" alt="" />
                                        </div>
                                        <div>
                                            <p style="font-size: 13px" class="align-items-center mt-3">
                                                {{ quotation.name }}<br /><span class="text-muted"
                                                    style="font-size: 11px">{{
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

                                    <div v-if="quotation.status == 'Paid'">
                                        <button class="savedbutton">
                                            {{ quotation.status }}
                                        </button>
                                    </div>
                                    <div v-if="quotation.status == 'overdue'">
                                        <button class="draftbutton">
                                            {{ quotation.status }}
                                        </button>
                                    </div>
                                    <div v-if="quotation.status == 'Unpaid'">
                                        <button class="Cancelledbutton">
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
                                            <button type="button" class="border-0 bg-transparent rounded-1"
                                                @click="Decrease2(item, index)" :disabled="item.qty == 0">
                                                <i class="bi bi-dash"></i>
                                            </button>
                                            <h6>
                                                <span id="count" :v-model="singleQuotation.items">{{
            item.qty
        }}</span>
                                            </h6>
                                            <button type="button" class="border-0 bg-transparent rounded-1"
                                                @click="Increase2(item, index)">
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
                                        <h6 :v-model="taxe.tax_amount" class="text-muted">₹ {{ taxe.tax_amount || 0 }}
                                        </h6>
                                    </div>
                                </div>
                            </div>

                            <div class="d-flex justify-content-between mt-3"
                                style="border-bottom: 1px dashed LIGHTGREY">
                                <div>
                                    <h6 @click="taxesAndCharges()">Total Taxes:</h6>
                                </div>
                                <div>
                                    <h6 :v-model="singleQuotation.total_taxes_and_charges">₹ {{
            singleQuotation.total_taxes_and_charges
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
                                            <input v-if="showDiscountInput" type="text"
                                                class="form-control w-75 d-flex justify-content-end"
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

                    </div>

                </div>
            </div>


        </div>
    </div>
</template>

<script>
import axios from "axios";
// import apiUrls from "@/shared/apiUrls";
// import Doctypes from "@/shared/apiUrls";
// import apiUrls from "@/shared/apiUrls";
import { Doctypes, ApiUrls } from "@/shared/apiUrls";
// import HomePageVue from "@/components/HomePage.vue";
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
            show: true,
            singleQuotation: [],
        };
    },
    mounted() {
        this.invoicesData();
        // console.log(Doctypes.quotations);
    },
    computed: {
        totalInvoices() {
            return this.salesInvoicesfiltered.length;
        },
        salesInvoicesfiltered() {
            if (this.filterType === "All") {
                return this.allQuotation;
            } else if (this.filterType1 === "Paid") {
                return this.allQuotation.filter(
                    (customer) => customer.status === this.filterType1
                );
            } else if (this.filterType2 === "Unpaid") {
                return this.allQuotation.filter(
                    (customer) => customer.status === this.filterType2
                );
            } else if (this.filterType3 === "This Month") {
                return this.allQuotation.filter(
                    (customer) => customer.transaction_date === this.filterType3
                );
            } else {
                return this.allQuotation.filter(
                    (customer) => customer.status === this.filterType
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
        toLead() {
            this.$router.push("/LeadNewQuate");
        },
        quotData(quota) {
            this.show = false;

            let quotationQueryParams = {
                fields: JSON.stringify(["*"]),
                limit_page_length: "none",
                order_by: "creation DESC",
            };

            axios
                .get(ApiUrls.resource + "/" + Doctypes.invoices + "/" + quota.name, {
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
        backMove() {
            // if (this.show == true) this.$router.push();
            this.show = !this.show;
        },
        backgo() {
            this.$router.push("HomePage");
        },
        removeBrTags(address) {
            if (address) {
                // Remove <br> tags from the address data
                return address.replace(/<br\s*\/?>/g, " ");
            } else {
                return " "; // or handle the case where address is undefined
            }
        },
        invoicesData() {
            this.loading = true;
            let queryParams = {
                fields: JSON.stringify(["*"]),
                limit_page_length: "none",
                filters: JSON.stringify([]),
            };
            axios
                .get(ApiUrls.resource + "/" + Doctypes.invoices, {
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
    },
};
</script>

<style scoped>
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
    color: #ffffff;
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
    background: #f9f9f9;
    padding: 6px 14px;
    align-items: center;
    gap: 10px;
}

.card1 {
    border-radius: 4px;
    font-size: 13px;
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

/* .list-group-item + .list-group-item.active {
    margin-top: 0 !important;
    border-top-width: 0 !important;
  } */
</style>

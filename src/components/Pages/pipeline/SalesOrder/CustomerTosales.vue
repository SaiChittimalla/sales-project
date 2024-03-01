<template>
    <nav class="navbar header">
        <div class="container">
            <div class="d-flex gap-2 p-2 align-items-center">
                <div>
                    <i @click="backMove()" class="ri-arrow-left-line"><span
                            class="ps-2 quotationsfs">QuotationDetails</span></i>
                </div>
            </div>
        </div>
    </nav>
    <div>
        <div class="">
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
                                {{ singleQuotation.shipping_address }}
                            </div>
                        </div>
                        <div class="data-span">
                            Shipping Address:<br />
                            <div class="text-muted">
                                {{ singleQuotation.shipping_address }}
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
                                <h6 :v-model="taxe.tax_amount" class="text-muted">₹ {{ taxe.tax_amount || 0 }}</h6>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex justify-content-between mt-3" style="border-bottom: 1px dashed LIGHTGREY">
                        <div>
                            <h6 @click="taxesAndCharges()">Total Taxes:</h6>
                        </div>
                        <div>
                            <h6 :v-model="singleQuotation.total_taxes_and_charges">₹ {{
                                singleQuotation.total_taxes_and_charges }}
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
                <div class="my-2 py-2 d-flex justify-content-between create-quote">
                    <div class="mt-2 mb-2">
                        <button v-if="singleQuotation.status == 'Draft' == !show"
                            class="btn btn-Update text-decoration-none" @click="createQuotation()">
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
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { Doctypes, ApiUrls } from "@/shared/apiUrls";
export default {
    data() {
        return {
            singleQuotation: []

        };
    },
    methods: {
        quotData(quota) {
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
                })
                .catch((quotationError) => {
                    console.error(
                        "Error fetching quotation data:",
                        quotationError.message
                    );
                });
        },
    }
}
</script>


<style  scoped>
header {
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
</style>
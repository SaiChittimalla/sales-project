<template>
    <div>
        <nav class="navbar navigated">
            <div class=" container ">
                <h4 class="back-to"><i class="bi bi-arrow-left ps-3" @click="backstep()"></i> New Lead</h4>
            </div>
        </nav>
        <div>
            <div class="container">
                <form @submit.prevent="submitForm()" class=" ">
                    <div class=" d-flex  justify-content-center ">
                        <div class="">
                            <template v-if="currentStep == 1">
                                <div class=" data-height">
                                    <div>
                                        <h2 class="lead-heading mt-3 ">
                                            Specify the particulars of the lead.
                                        </h2>
                                    </div>
                                    <div>
                                        <div class="card input-cards " :class="{ 'border-danger': error.first_name }">
                                            <div class="padding-div border-top-0 ">
                                                <div class="">
                                                    <label for="Name" class="form-label text-muted">First Name
                                                        <span v-if="!error.first_name" class=" required">(required)</span>
                                                        <span class="text-danger required "
                                                            v-if="error.first_name">(required)
                                                        </span>
                                                    </label>
                                                    <input type="text" class="form-control " name="Name" id="Name"
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.first_name" @input="isInputEmpty" />
                                                </div>
                                            </div>

                                            <div class="padding-div">
                                                <div class="">
                                                    <label for="Name" class="form-label text-muted">Name</label>
                                                    <input type="text" class="form-control  " name="Name" id="Name"
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.lead_name" />
                                                </div>
                                            </div>


                                        </div>
                                        <div class="card input-cards " :class="{ 'border-danger': error.mobile_no }">
                                            <div class="padding-div border-top-0 ">
                                                <div class="">
                                                    <label for="Name" class="form-label text-muted">Mobile
                                                        <span v-if="!error.mobile_no" class=" required">(required)</span>
                                                        <span class="text-danger required "
                                                            v-if="error.mobile_no">(required)
                                                        </span>
                                                    </label>
                                                    <input type="text" class="form-control  " name="Name" id="Name"
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.mobile_no" @input="isNumberEmpty" />
                                                </div>
                                            </div>

                                            <div class="padding-div">
                                                <div class="">
                                                    <label for="Name" class="form-label text-muted">Mail ID</label>
                                                    <input type="email " class="form-control  " name="Name" id="Name"
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.email_id" />
                                                </div>
                                            </div>

                                            <div class="padding-div">
                                                <div class="">
                                                    <label for="Name" class="form-label text-muted"> Whatsapp number
                                                    </label>
                                                    <input type="text" class="form-control  " name="Name" id="Name"
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.whatsapp_no" />
                                                </div>
                                            </div>
                                            <div class="padding-div">
                                                <div class="">
                                                    <label for="Name" class="form-label text-muted"> Alternate mobile number
                                                    </label>
                                                    <input type="text" class="form-control  " name="Name" id="Name"
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.phone" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </template>
                            <template v-if="currentStep == 2">
                                <div class=" data-height">
                                    <div class=" text-end mt-3  ">
                                        <span class="text-muted" @click="next()">Skip <span><i
                                                    class="ri-skip-forward-fill"></i></span></span>
                                    </div>
                                    <div>
                                        <h2 class="lead-heading mt-3 ">
                                            Does the lead belong to any organization?
                                        </h2>
                                    </div>
                                    <div>
                                        <div class=" card input-cards">
                                            <div class="padding-div border-top-0 ">
                                                <div class="">
                                                    <label for="" class="form-label">Organization</label>
                                                    <input type="text" class="form-control" name="" id=""
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.company_name" />

                                                </div>
                                            </div>

                                        </div>
                                        <div class=" card input-cards">
                                            <div class="padding-div  border-top-0  ">
                                                <div class="">
                                                    <label for="" class="form-label">City</label>
                                                    <input type="text" class="form-control" name="" id=""
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.city" />

                                                </div>
                                            </div>
                                            <div class="padding-div  ">
                                                <div class="">
                                                    <label for="" class="form-label">State</label>
                                                    <input type="text" class="form-control" name="" id=""
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.state" />

                                                </div>
                                            </div>
                                            <div class="padding-div  ">
                                                <div class="">
                                                    <label for="" class="form-label">Country</label>
                                                    <input type="text" class="form-control" name="" id=""
                                                        aria-describedby="helpId" placeholder=""
                                                        v-model="this.formData.country" />

                                                </div>
                                            </div>
                                        </div>
                                        <div class=" card input-cards">
                                            <div class="padding-div  border-top-0  ">
                                                <div class="">
                                                    <div class="mb-3">
                                                        <label for="" class="form-label">Tax Category</label>
                                                        <select class="form-select form-select-lg" name="" id=""
                                                            v-model="this.formData.tax_category">
                                                            <option selected>Select Tax Category</option>
                                                            <option class="tax-option ps-3 " value="In-State">In-Statee
                                                            </option>
                                                            <option class="tax-option ps-3 " value="Out-State">Out-State
                                                            </option>
                                                        </select>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-if="currentStep == 3">
                                <div class="lead-org data-height">
                                    <div class=" text-end "><span class="text-muted" @click="next()">Skip <span><i
                                                    class="ri-skip-forward-fill"></i></span></span></div>
                                    <div>
                                        <h2 class="lead-heading mt-3 ">
                                            Which of these best describes your lead type?
                                        </h2>
                                    </div>
                                    <div>
                                        <div>
                                            <div class="my-2">
                                                <input type="radio" class="btn-check " name="btnradio-1" id="btnradio1"
                                                    v-model="this.formData.type" v-bind:value="'Client'" autocomplete="off">
                                                <label class="btn btn-primary checking-box  " for="btnradio1">
                                                    <div class="padding-div border-top-0 ">
                                                        <h4 class="lead-type text-start ">Client</h4>
                                                        <p class="lead-discription text-start  text-muted">A client receives
                                                            services or
                                                            products
                                                            from a
                                                            business or
                                                            service provider.</p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="my-2">
                                                <input type="radio" class="btn-check" name="btnradio-1" id="btnradio2"
                                                    v-model="this.formData.type" v-bind:value="'Channel Partner'"
                                                    autocomplete="off">
                                                <label class="btn btn-primary checking-box " for="btnradio2">
                                                    <div class="padding-div border-top-0 ">
                                                        <h4 class="lead-type text-start ">Channel Partner</h4>
                                                        <p class="lead-discription text-start  text-muted">A channel partner
                                                            collaborates with a company to market and distribute its
                                                            products.
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="my-2">
                                                <input type="radio" class="btn-check" name="btnradio-1" id="btnradio3"
                                                    v-model="this.formData.type" v-bind:value="'Consultant'"
                                                    autocomplete="off">
                                                <label class="btn btn-primary checking-box " for="btnradio3">
                                                    <div class="padding-div border-top-0 ">
                                                        <h4 class="lead-type text-start ">Consultant</h4>
                                                        <p class="lead-discription text-start  text-muted">A consultant
                                                            offers
                                                            expert advice and solutions to address specific challenges.</p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-if="currentStep == 4">
                                <div class=" d-flex justify-content-center ">
                                    <div class="m-2 organization data-height">
                                        <div class="">
                                            <div class=" text-end "><span class="text-muted" @click="next()">Skip <span><i
                                                            class="ri-skip-forward-fill"></i></span></span></div>
                                            <div>
                                                <h2 class="lead-heading mt-3 ">
                                                    Which source did your lead contact you through?
                                                </h2>
                                            </div>
                                            <div class="oraganizations " role="group"
                                                aria-label="Basic radio toggle button group ">
                                                <div class=" row">
                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check " name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Advertisement'"
                                                            id="btnradio11" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none" for="btnradio11">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/game-icons_bugle-call.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Advertisement</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Campaign'"
                                                            id="btnradio12" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio12">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/material-symbols_camping-outline.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Campaign</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Cold_Calling'"
                                                            id="btnradio13" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio13">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/tdesign_service.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Cold Calling</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>


                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Vendor'"
                                                            id="btnradio14" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio14">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/icon-park-solid_manual-gear.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Customer’s
                                                                        Vendor</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Exhibition'"
                                                            id="btnradio15" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio15">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/tdesign_museum-1.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Exhibition</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source"
                                                            v-bind:value="'Existing Customer'" id="btnradio16"
                                                            autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio16">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/mingcute_building-2-line.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Existing Customer</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>


                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Mailing'"
                                                            id="btnradio17" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio17">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/ri_mail-send-fill.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Mass Mailing</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Reference'"
                                                            id="btnradio18" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio18">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/ic_baseline-search.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Reference</h4>
                                                                </div>
                                                            </div>
                                                        </label>

                                                    </div>
                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source"
                                                            v-bind:value="'Supplier_Reference'" id="btnradio19"
                                                            autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio19">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/clarity_users-line.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Supplier
                                                                        Reference</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>


                                                    <div class="col-4 mb-3">
                                                        <input type="radio" class="btn-check" name="btnradio"
                                                            v-model="this.formData.source" v-bind:value="'Walk-in'"
                                                            id="btnradio20" autocomplete="off">
                                                        <label class="btn h-100 btn-primary bg-check-none "
                                                            for="btnradio20">
                                                            <div>
                                                                <div class=" text-center py-4  ">
                                                                    <img src="../../../../assets/healthicons_walking-outline.svg"
                                                                        alt="img-fluid">
                                                                </div>
                                                                <div class=" card-body px-0 py-2 text-center ">
                                                                    <h4 class="contact-through">Walk-in</h4>
                                                                </div>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <template v-if="currentStep == 5">
                                <div class="m-2 data-height ">
                                    <div>
                                        <h2 class="lead-heading mt-3 ">
                                            What category of request is the lead making?
                                        </h2>
                                    </div>
                                    <div>
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-3 cat-div">
                                                <div class="">
                                                    <input type="radio" class="btn-check" name="categoryradio"
                                                        v-model="this.formData.request_type"
                                                        v-bind:value="'Product Enquiry'" id="btnradio22" autocomplete="off">
                                                    <label class="btn h-100 btn-primary bg-check-none " for="btnradio22">
                                                        <div class=" card-body  d-flex  justify-content-evenly ">
                                                            <div>
                                                                <img src="../../../../assets/fluent-mdl2_product-variant.svg"
                                                                    alt="">
                                                            </div>
                                                            <div class="text-center ">
                                                                <h4 class="cate-head ">Product Enquiry</h4>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-3 cat-div">
                                                <div class="">
                                                    <input type="radio" class="btn-check" name="categoryradio"
                                                        v-model="this.formData.request_type"
                                                        v-bind:value="'Request for Information'" id="btnradio23"
                                                        autocomplete="off">
                                                    <label class="btn h-100 btn-primary bg-check-none " for="btnradio23">
                                                        <div class=" card-body  d-flex  justify-content-evenly ">
                                                            <div>
                                                                <img src="../../../../assets/mingcute_information-line.svg"
                                                                    alt="">
                                                            </div>
                                                            <div class="text-center ">
                                                                <h4 class="cate-head ">Information</h4>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-3 cat-div">
                                                <div class="">
                                                    <input type="radio" class="btn-check" name="categoryradio"
                                                        v-model="this.formData.request_type" v-bind:value="'Suggestions'"
                                                        id="btnradio24" autocomplete="off">
                                                    <label class="btn h-100 btn-primary bg-check-none " for="btnradio24">
                                                        <div class=" card-body  d-flex  justify-content-evenly ">
                                                            <div>
                                                                <img src="../../../../assets/ic_outline-settings-suggest.svg"
                                                                    alt="">
                                                            </div>
                                                            <div class="text-center ">
                                                                <h4 class="cate-head ">Suggestions</h4>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6 mb-3 cat-div">
                                                <div class="">
                                                    <input type="radio" class="btn-check" name="categoryradio"
                                                        v-model="this.formData.request_type" v-bind:value="'Other'"
                                                        id="btnradio25" autocomplete="off">
                                                    <label class="btn h-100 btn-primary bg-check-none " for="btnradio25">
                                                        <div class=" card-body  d-flex  justify-content-evenly ">
                                                            <div>
                                                                <img src="../../../../assets/icon-park-outline_more-four.svg"
                                                                    alt="">
                                                            </div>
                                                            <div class="text-center ">
                                                                <h4 class="cate-head ">Other</h4>
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class=" bottom-div">
                        <div class=" container ">
                            <div class="  d-flex  justify-content-evenly ">
                                <div v-for="step in totalSteps" :key="step" class="step-bar">
                                    <div :class="getStepClasses(step)"></div>
                                </div>
                            </div>
                            <div class="d-flex  justify-content-between my-2 ">
                                <div> <button type="button" class=" btn btn-white text-decoration-underline  back-btn "
                                        @click="back()">Back</button></div>
                                <div>
                                    <div v-if="currentStep !== totalSteps">
                                        <button type="button" :disabled="!this.formData.first_name || !isMobileValid()"
                                            class="btn btn-primary next-btn" @click="next()">Next</button>
                                    </div>
                                    <!-- Submit button appears only on the last step -->
                                    <div v-else>
                                        <button type="submit" class="btn btn-primary next-btn">Submit</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import 'vue3-toastify/dist/index.css';
import { toast } from 'vue3-toastify';

export default {
    name: 'LeadForm',

    data() {
        return {
            currentStep: 1,
            totalSteps: 5,
            completedSteps: [],
            formData: {

            },
            error: {}
        }
    },
    mounted() {
        // this.currentStep = this.$route.params.id
        console.log(this.currentStep);

    },


    methods: {
        next() {

            if (this.currentStep < this.totalSteps) {
                this.currentStep++;
                // let id = this.currentStep
                // this.$router.push({ path: `/leadform/${id}` })
            }

        },
        back() {
            if (this.currentStep > 1) {
                this.currentStep--;
                // let id = this.currentStep
                // this.$router.push({ path: `/leadform/${id}` })
            }
        },
        submitForm() {
            console.log(this.formData);
            axios.post('http://192.168.1.177:8000/api/resource/Lead', this.formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }, withCredentials: true
            })
                .then((response) => {
                    console.log(response);
                    this.formData = {};
                    this.currentStep = 1
                    this.$router.push({ name: 'AddLeads' })
                });
            toast.success("Successfully Lead Added ", {
                // toast options here
            });
        },
        getStepClasses(step) {
            return {
                'move': this.currentStep !== step,
                'move Active': this.currentStep === step,
                'active-step': this.currentStep >= step || this.completedSteps.includes(step),

            };
        },
        backstep() {
            this.$router.push({
                name: 'AddLeads',
            });
        },
        isInputEmpty() {
            if (!this.formData.first_name) {
                this.error.first_name = "First Name"
            }
            else {
                delete this.error.first_name;


            }
        },
        isNumberEmpty() {
            const mobileNumberRegex = /^\d{10}$/;

            if (!this.formData.mobile_no) {
                this.error.mobile_no = "Mobile number is required";
            } else if (!mobileNumberRegex.test(this.formData.mobile_no)) {
                this.error.mobile_no = "Invalid mobile number format";
            } else {
                delete this.error.mobile_no;
            }
        },
        isMobileValid() {
            return this.formData.mobile_no && this.formData.mobile_no.length === 10 && !this.error.mobile_no;
        },
    }
}


</script>

<style scoped>
.border-danger {
    border: 1px solid red;
}

.errsize {
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 10px;
}

.select-options {
    color: #111;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    padding: 3px 0px 3px 5px !important;
}

@media (max-width: 575px) {
    .cat-div {
        width: 50% !important;
    }
}

.back-btn {
    color: #000;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
}

.back-btn:focus {
    box-shadow: none;
}

.data-height {
    height: 100vh;
}

.active-step {
    background-color: black;
    width: 100%;
}

.cat-div {
    widows: 50%;
}

.cate-head {
    color: #111;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.next-btn {
    display: inline-flex;
    height: 42px;
    padding: 8px 17px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 24px;
    background: #3B43F9;
    border: transparent;
}

.next-btn:focus {
    box-shadow: none;
}

.bottom-div {
    position: sticky;
    bottom: 0;
    background-color: white !important;
    padding: 15px 5px;

}

.step-bar {
    height: 8px;
    width: 100%;
    margin: 5px 3px;
    background-color: #EEEEEE;
}

.move {
    height: 8px;
    width: 100%;

}

.lead-org {
    margin: 30px 10px;
}



.bg-check-none {
    background-color: rgba(255, 255, 255, 0) !important;
    border: 1px solid #E5E5E5;
    /* margin: 3px 3px; */
    border-radius: 10px;
    width: 100%;
    min-width: 100px;


}

.checking-box {
    background-color: rgba(255, 255, 255, 0) !important;
    border: 1px solid #E5E5E5;
    border-radius: 10px;
    width: 100%;
}

.btn-check:checked+.btn-primary {
    background-color: rgba(255, 255, 255, 0) !important;
    border: 1px solid #3B43F9;
    box-shadow: none;


}

.contact-through {
    color: #111;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.lead-type {
    color: #111;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px;
}

.lead-discription {
    color: #999;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.input-cards {
    border-radius: 10px;
    margin: 30px 10px;
}

.padding-div {
    padding: 5px 15px;
    border-top: 1px solid #E5E5E5;

}

.client-active {
    border: 1px solid #3B43F9;
}

.required {
    color: #999;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.form-control {
    border: none;
    color: #111;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px;
    padding: 0;

}

.form-control:focus {
    box-shadow: none;
}

.form-label {
    color: #999;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 37px;
    margin: 0;
}


.lead-heading {
    color: #111;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px;

}

.back-to {
    color: #111;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

}

.navigated {
    border-bottom: 1px solid #EEE;
    position: sticky;
    z-index: 10;
    top: 0;
    background-color: white;
}
</style>
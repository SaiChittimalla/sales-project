<template>
    <div>

        <template v-if="showOne">
            <nav class="navbar navigated">
                <div class=" container ">
                    <router-link to="/Homepage" class=" text-decoration-none ">
                        <h4 class="back-to"><i class="bi bi-arrow-left ps-3"></i> New Lead</h4>
                    </router-link>
                </div>
            </nav>
            <div class="container ">
                <div class=" d-flex  justify-content-center   ">
                    <div class=" position-relative ">
                        <table class="mt-3 w-100  ">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Names</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (item, index) in  lead " :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>{{ item.first_name }}
                                        <div>
                                            <div class=" line-height">
                                                <span class="idNumbers">ID : {{ item.name }}</span>
                                            </div>
                                            <div class=" line-height">
                                                <span class="idStatus  "> Status : {{ item.status }}</span>

                                            </div>
                                        </div>
                                    </td>
                                    <td><span><i class="ri-eye-line" @click="toDetails()"></i></span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class=" d-flex started-div   justify-content-center ">
                            <button type="button" class=" btn btn-outline-primary  Getstart" @click="Addlead()">
                                ADD LEAD
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="showTwo">
            <nav class="navbar navigated">
                <div class=" container ">
                    <h4 class="back-to"><i class="bi bi-arrow-left ps-3" @click="backtolist()"></i> New Lead</h4>
                </div>
            </nav>
            <div class=" d-flex  justify-content-center ">
                <div>

                </div>
            </div>

        </template>
        <template v-if="showThree">
            <nav class="navbar navigated">
                <div class=" container ">
                    <h4 class="back-to"><i class="bi bi-arrow-left ps-3" @click="backtolist()"></i> New Lead</h4>
                </div>
            </nav>
            <div class=" d-flex  justify-content-center ">
                <div>
                    <div class="p-4">
                        <h2 class="lead-heading mt-3 ">
                            It’s easy to create lead with very few steps.
                        </h2>
                        <div class="card mt-5  all-cards">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-10 col-md-10 col-sm-10 title-div">
                                        <h3><span>1</span>&nbsp;Enter lead’s personal details</h3>
                                        <p class="card-para">These particulars are indispensable for the ease of identifying
                                            leads
                                            during later stages
                                            of sales.</p>
                                    </div>
                                    <div class=" col-lg-2 col-md-2 col-sm-2 img-div">
                                        <div class="image-center">
                                            <img src='../../../../assets/idcardofwomaninglasses.svg' alt=""
                                                class=" img-fluid ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-5  all-cards">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-10 col-md-10 col-sm-10 title-div">
                                        <h3><span>2</span>&nbsp;Lead Source
                                            <span class=" optional"> (optional)</span>
                                        </h3>
                                        <p class="card-para">Define the Lead Type (Client, Partner, Consultant) and Disclose
                                            the
                                            Source (Mail, Advertisement,Call)</p>
                                    </div>
                                    <div class=" col-lg-2 col-md-2 col-sm-2 img-div">
                                        <div class="image-center">
                                            <img src='../../../../assets/Group 237650.svg' alt="" class=" img-fluid ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-5  all-cards">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-10 col-md-10 col-sm-10 title-div">
                                        <h3><span>3</span>&nbsp;Request
                                            <span class="optional"> (optional)</span>
                                        </h3>
                                        <p class="card-para">Defines the underlying purpose driving the lead's request.</p>
                                    </div>
                                    <div class=" col-lg-2 col-md-2 col-sm-2 img-div">
                                        <div class="image-center">
                                            <img src='../../../../assets/Friendrequestaccepted.svg' alt=""
                                                class=" img-fluid ">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class=" d-flex started-div   justify-content-center ">
                        <router-link to="/leadform/1" class=" text-decoration-none "> <button type="button"
                                class="Getstart">
                                Get started
                            </button></router-link>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios';
import { Doctypes, ApiUrls } from "@/shared/apiUrls";

export default {
    name: 'AddLeads',
    data() {
        return {
            lead: [],
            showOne: true,
            showTwo: false,
            showThree: false
        }
    },
    mounted() {
        this.LeadData();
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            this.$router.push({ name: 'LoginPage' })
        }
    },
    methods: {
        LeadData() {
            let queryParams = { filters: [] };
            queryParams.fields = JSON.stringify(['*']);
            queryParams.limit_page_length = null;
            queryParams.filters = JSON.stringify(queryParams?.filters);
            axios.get(ApiUrls.resource + "/" + Doctypes.lead, {
                params: queryParams,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }, withCredentials: true
            })
                .then((response) => {
                    console.log(response);
                    this.lead = response.data.data;
                    console.log(this.lead.length, 'Lead count======', this.lead);
                }).catch((error) => {
                    console.error(error);
                });
        },

        Addlead() {
            this.showOne = false;
            this.showTwo = false;
            this.showThree = true;
        },
        backtolist() {
            this.showOne = true
            this.showTwo = false
            this.showThree = false
        },
        toDetails() {
            this.showOne = false
            this.showTwo = true
            this.showThree = false


        }

    }
}
</script>

<style  scoped>
.ri-eye-line {
    cursor: pointer;
}

table tr {
    border: 1px solid #EEE;
    border-collapse: collapse;
    text-align: start;
    vertical-align: middle !important;

}

table thead {
    position: sticky;
    top: 40px;
    z-index: 1;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

thead th {
    padding: 10px;
}

tbody td {
    color: #111;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
    padding: 0px 10px;
}

tbody tr {
    transition: all 0.3s ease;
}

tbody tr:hover {
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.idNumbers {
    color: #999;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    margin: 0;
}

.line-height {
    line-height: normal;
    padding: 3px 0px;
}

.idStatus {
    color: #878787;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;

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

.lead-heading {
    color: #111;
    font-family: Montserrat;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 37px;

}

.card-para {
    color: #999;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    padding-left: 20px;

}

.image-center {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.all-cards {
    border-bottom: 1px solid#EEE !important;
    border: none;
}

.Getstart {
    display: flex;
    width: 366px;
    height: 42px;
    padding: 8px 17px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 24px;
    /* background-color: #fff;
    color: #3B43F9; */
    color: #fff;
    background-color: #3B43F9;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border: 1px solid #3B43F9;
}

/* .Getstart:hover {
    color: #fff;
    background-color: #3B43F9;
} */

.started-div {
    background-color: #fff;
    padding: 20px 5px;
    position: sticky;
    bottom: 0px;
}

.optional {
    color: #999;
    font-family: Montserrat;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media (max-width:575px) {
    .title-div {
        width: 80%;
    }

    .img-div {
        width: 20%;
    }
}

@media(min-width: 575px) and (max-width: 2560px) {
    .all-cards {
        width: 565px;
    }
}
</style>
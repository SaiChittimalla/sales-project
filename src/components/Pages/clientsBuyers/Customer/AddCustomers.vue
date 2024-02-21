<template>
    <div>

        <template v-if="!show">
            <nav class="navbar navigated">
                <div class=" container ">
                    <router-link to="/Homepage" class=" text-decoration-none ">
                        <h4 class="back-to"><i class="bi bi-arrow-left ps-3"></i> New Customer</h4>
                    </router-link>
                </div>
            </nav>
            <div class=" container ">
                <div class=" d-flex  justify-content-center ">
                    <div class=" position-relative ">
                        <table class="mt-3 w-100 ">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Names</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for=" (item, index) in  Customer " :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <div>{{ item.name }}</div>
                                        <div>
                                            <span class="idNumbers">ID : {{ item.customer_name }}</span>
                                        </div>
                                        <div>
                                            <span class="idStatus">Customer Type : {{ item.customer_type }}</span>
                                        </div>
                                    </td>
                                    <td><span><i class="ri-pencil-fill"></i></span></td>
                                </tr>
                            </tbody>
                        </table>
                        <div class=" d-flex started-div   justify-content-center w-100  ">
                            <button type="button" class=" btn btn-outline-primary  Getstart" @click="AddCustomers()">
                                ADD CUSTOMERS
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="show">
            <nav class="navbar navigated">
                <div class=" container ">
                    <h4 class="back-to"><i class="bi bi-arrow-left ps-3" @click="backtolist()"></i> New Customer</h4>
                </div>
            </nav>
            <div class=" d-flex  justify-content-center ">
                <div>
                    <div class="p-4">
                        <h2 class="lead-heading mt-3 ">
                            It’s easy to create Customer with very few steps.
                        </h2>
                        <div class="card mt-5  all-cards">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-10 col-md-10 col-sm-10 title-div">
                                        <h3><span>1</span>&nbsp;Enter Customer’s personal details</h3>
                                        <p class="card-para">These particulars are indispensable for the ease of identifying
                                            Customers
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
                                        <h3><span>2</span>&nbsp;Customer Source
                                            <span class=" optional"> (optional)</span>
                                        </h3>
                                        <p class="card-para">Define the Customer Type (Client, Partner, Consultant) and
                                            Disclose
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
                                        <p class="card-para">Defines the underlying purpose driving the Customer's request.
                                        </p>
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
                        <button type="button" @click="started()" class="Getstart">
                            Get started
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AddCustomers',
    data() {
        return {
            Customer: [],
            show: false
        }
    },
    mounted() {
        this.CustomerData();
        let user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            this.$router.push({ name: 'LoginPage' })
        }
    },
    methods: {
        CustomerData() {
            let queryParams = { filters: [] };
            queryParams.fields = JSON.stringify(['*']);
            queryParams.limit_page_length = null;
            queryParams.order_by = 'creation DESC';
            if (queryParams.filters) {
                queryParams.filters = JSON.stringify(queryParams.filters);
            }
            axios.get('http://192.168.1.177:8000/api/resource/Customer?fields=[%22*%22]', {
                params: queryParams,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }, withCredentials: true
            })
                .then((response) => {
                    console.log(response);
                    this.Customer = response.data.data;
                    console.log(this.Customer.length, 'Customer======', this.Customer);
                }).catch((error) => {
                    console.error(error);
                });
        },
        AddCustomers() {
            this.show = true;
        },
        backtolist() {
            this.show = false;
        },
        started() {
            this.$router.push({
                // path: '/CustomerForm'
                name: 'CustomerForm'

            })
        }
    }
}
</script>

<style  scoped>
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
    line-height: 25px;
    padding: 0px 10px;
}

tbody tr {
    transition: all 0.5s ease;
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

.idStatus {
    color: #878787;
    font-family: Montserrat;
    font-size: 11px;
    font-style: normal;
    font-weight: 600;
    margin: 0;
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

.Getstart:hover {
    color: #fff;
    background-color: #3B43F9;
}

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
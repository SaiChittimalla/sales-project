<template>
        <div class="container-fluid">
            <section>
                    <div class="add-item">
                        <h6 class="fw-bold py-2">
                            <router-link to="/NewQuate" class=" text-decoration-none"><i class="bi bi-arrow-left me-2 mt-5"></i></router-link> Items
                        </h6>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-9 col-md-7 col-lg-7 col-xl-7">
                            <div class="form-group has-search">
                                <span class="form-control-feedback"><i class="bi bi-search"></i></span>
                                <input type="search" class="form-control bg-light" placeholder="Search item name" @input="SearchDetails" />
                            </div>
                        </div>

                        <div class="col-sm-3 col-md-5 col-lg-5 col-xl-5">
                            <button type="button" class="border-0 text-nowrap catogory-btn">
                                Category<i class="bi bi-sliders ms-2"></i>
                            </button>
                        </div>
                        <hr />
                    </div>

                    <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4">
                        <div class="row p-3">
                            <div class="col-1 text-end">
                                <div class="d-flex align-items-center justify-content-center">
                                    <i class="bi bi-gift-fill"></i>
                                </div>
                            </div>
                            <div class="col-7">
                                <div class="item-details">
                                    <h6 class="heading">Item Name</h6>
                                    <div class="d-flex text-nowrap">
                                        <p>Price not defined</p>
                                        <li class="ms-3 text-muted">Cake mukka</li>
                                    </div>
                                    <p class="text-muted item-info">
                                        It features scrambled Latin text, which emphasizes the design
                                        i....More
                                    </p>
                                </div>
                            </div>
                            <div class="col-4">
                                <button type="button" class="add-btn shadow-sm rounded-5 bg-white"
                                    data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                    aria-controls="offcanvasExample">
                                    Add
                                </button>
                                <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="offcanvasExample"
                                    aria-labelledby="offcanvasExampleLabel">
                                    <div class="offcanvas-header">
                                        <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add Item</h5>
                                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="offcanvas-body">
                                        <div class="row">
                                            <div class="col-sm-10 offcanvas-txt">
                                                <h6 class="label-heading">Cake mukka</h6>
                                                <p class="label-name">Item Name</p>
                                            </div>
                                            <div class="col-sm-2 offcanvas-txt1">
                                                <h6 class="label-heading">HGYFg76yy_d7y</h6>
                                                <p class="label-name">Item Code</p>
                                            </div>
                                        </div>
                                        <div class="row mb-3 mt-3">
                                            <div>
                                                <h6 class="label-heading">₹ 9,82,82,002.55</h6>
                                                <p class="label-name">Actual Price 1x</p>
                                            </div>
                                        </div>
                                        <div class="row mb-2 m-1">
                                            <div class="card rounded-2 price-card">
                                                <div class="p-1">
                                                    <p class="price">1x Price</p>
                                                    <span>$<input type="text" placeholder="Enter negotiated value"
                                                            class="border-0 ms-2 input-price w-75"></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-4 qty-row">
                                            <div class="col-sm-9 qty-div">
                                                <span>Total Qty</span>
                                            </div>
                                            <div class="col-sm-3 qty-div1">
                                                <div class="d-flex align-items-center justify-content-center gap-2">
                                                    <button type="button" class="border-0"><i
                                                            class="bi bi-dash"></i></button>
                                                    <p class="mt-3">6</p>
                                                    <button type="button" class="border-0"><i
                                                            class="bi bi-plus"></i></button>
                                                    <button type="button" class="border-0 add-qty-btn"><i
                                                            class="bi bi-plus "></i>10</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row mb-4 m-1">
                                            <div class="card rounded-2 total-price-card">
                                                <div class="p-1">
                                                    <p class="total-price">Total Price</p>
                                                    <span class="amount">₹ 9,82,82,00200.55</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class=" col-sm-12">
                                                <router-link to="/ItemEdit">
                                                    <button type="button" class="border-0 add-item-btn w-100">Add
                                                        Item</button>
                                                </router-link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
            </section>
            <!-- <section> -->
                <!-- <div class="container"> -->
                    <div class="row" >
                        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-4" v-for="item in data" :key="item">
                            <div class="row p-3">
                                <div class="col-2">
                                    <div> 
                                        <img :src="item.image" class="img-fluid item-img">
                                    </div>
                                </div>
                                <div class="col-7">
                                    <div class="item-details">
                                        <h6 class="heading">{{ item.item_name }}</h6>
                                        <div class="d-flex text-nowrap">
                                            <p>Price not defined</p>
                                            <li class="ms-1 text-muted">{{ item.item_name }}</li>
                                        </div>
                                        <p class="text-muted item-info">
                                            It features scrambled Latin text, which emphasizes the design
                                            i....More
                                        </p>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <button type="button" class="add-btn shadow-sm rounded-5 bg-white"
                                        data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                        aria-controls="offcanvasExample">
                                        Add
                                    </button>
                                    <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="offcanvasExample"
                                        aria-labelledby="offcanvasExampleLabel">
                                        <div class="offcanvas-header">
                                            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Add Item</h5>
                                            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <div class="row">
                                                <div class="col-sm-10 offcanvas-txt">
                                                    <h6 class="label-heading">{{ details.item_name }}</h6>
                                                    <p class="label-name">Item Name</p>
                                                </div>
                                                <div class="col-sm-2 offcanvas-txt1 text-end ">
                                                    <h6 class="label-heading">{{ details.item_code }}</h6>
                                                    <p class="label-name">Item Code</p>
                                                </div>
                                            </div>
                                            <div class="row mb-3 mt-3">
                                                <div>
                                                    <h6 class="label-heading">₹ 9,82,82,002.55</h6>
                                                    <p class="label-name">Actual Price 1x</p>
                                                </div>
                                            </div>
                                            <div class="row mb-2 m-1">
                                                <div class="card rounded-2 price-card">
                                                    <div class="p-1">
                                                        <p class="price">1x Price</p>
                                                        <span>₹<input type="text" placeholder="Enter negotiated value"
                                                                class="border-0 ms-2 input-price w-75"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-4 qty-row">
                                                <div class="col-sm-9 qty-div">
                                                    <span>Total Qty</span>
                                                </div>
                                                <div class="col-sm-3 qty-div1">
                                                    <div class="d-flex align-items-center justify-content-center gap-2">
                                                        <button type="button" class="border-0 rounded-1"
                                                            @click="decrease"><i class="bi bi-dash"></i></button>
                                                        <p class="mt-3">{{ count }}</p>
                                                        <button type="button" class="border-0 rounded-1"
                                                            @click="Increase"><i class="bi bi-plus"></i></button>
                                                        <button type="button" class="border-0 add-qty-btn"><i
                                                                class="bi bi-plus "></i>10</button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row mb-4 m-1">
                                                <div class="card rounded-2 total-price-card">
                                                    <div class="p-1">
                                                        <p class="total-price">Total Price</p>
                                                        <span class="amount">₹ 9,82,82,00200.55</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class=" col-sm-12">
                                                    <button type="button" class="border-0 add-item-btn w-100">
                                                        Add Item</button>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                        <hr />
                    </div>

                </div>
            <!-- </section> -->
        <!-- </div> -->
        <section class="submit-section d-flex align-items-center justify-content-center w-100 mt-1 ">
            <div class="row">
                <div class="col-sm-12 col-md-12">
                    <p class="text-muted ms-2">
                        <i class="bi bi-question-circle me-1"></i>Please select at least one
                        item to submit.
                    </p>
                    <div class="submit-div mb-3 w-100">
                        <div class="row">
                            <div class="col-sm-10">
                                <div>
                                    <span class="fw-bold">$ 0.00</span><br />
                                    <span>Qty : 0</span>
                                </div>
                            </div>
                            <div class="col-sm-2 text-end d-flex align-items-center justify-content-center">
                                <button class="border-0 bg-transparent p-2 submit-btn">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    <!-- </section> -->
</template>

<script>
export default {
    data() {
        return {
            count: 0,
            data: [],
            duplicateArr:[],
            details: {},
        }
    },
    mounted() {
        this.fetchData();
    },

    methods: {
        async fetchData() {
            const response = await fetch(
                "http://192.168.1.177:8000/api/resource/Item?fields=[%22*%22]"
            );
            let res = await response.json();
            this.data = res.data;
            this.duplicateArr = res.data;
        },
        SearchDetails(search){
            let value = search.target.value;
            this.data= this.duplicateArr.filter(each=>each.item_name.toLowerCase().includes(value.toLowerCase())?each:null)
        },
        Increase() {        
            this.count++;
        },
        decrease() {
            this.count--;
        },
       

    },
}
</script>

<style scoped>
.heading {
    color: #111;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.add-item {
    border-bottom: 1px solid #e2e0e0;
    background-color: white;
    position: sticky;
    top: 0px;
    z-index: 100;
}
.item-img{
    border-radius: 25%;
}

.bi-arrow-left {
    font-size: 20px;
    color: black;
}

.has-search .form-control {
    padding-left: 40px;
    margin: -7px;
    border-radius: 30px;
    background: #FAFAFA;
    border: 1px solid #EEE;
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
    .col-sm-9 {
        width: 60%;
    }

    .col-sm-3 {
        width: 40%;
    }
}

.catogory-btn {
    color: #444;
    margin: -7px;
    font-size: 12px;
    margin-bottom: 6px;
    border-radius: 20px;
    background: #EEE;
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
    /* margin-left: 23px; */
    border-radius: 20px;
    background: #FFF;
    border: 1px solid #EEE;
    box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.07);
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
    .col-sm-10 {
        width: 70%;
    }

    .col-sm-2 {
        width: 30%;
    }
}

.submit-btn {
    color: #b1b5fd;
    font-weight: bold;
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
    border: 1px solid #EEE;
    background: #FFF;
}

.price {
    color: #444;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

.input-price::placeholder {
    color: #ABABAB;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

@media (min-width: 200px) and (max-width: 570px) {
    .qty-div {
        width: 55%;
    }

    .qty-div1 {
        width: 45%;
    }
}

.add-qty-btn {
    color: #FFF;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 2px;
    background: #001B4E;
    padding: 4px;
    white-space: nowrap;
}

.qty-row {
    border-bottom: 2px solid #EEE;
    background: #FFF;
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
    border: 1px solid #EEE;
    background: #F5F5F5;
    padding: 10px;
}

.add-item-btn {
    border-radius: 30px;
    background: #3B43F9;
    color: #FFF;
    text-align: center;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding: 12px;
}

.submit-section {
    position: fixed;
    z-index: 100;
    bottom: 0px;
    background-color: white;
}</style>
<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="shadow-lg">
                    <h6 class="fw-bold py-2">
                        <router-link to="/QuotationsList" class="text-decoration-none"><i
                                class="bi bi-arrow-left me-2 mt-5"></i></router-link>New Quotation - Lead
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
                                    type="text" v-model="searchQuery" @click="isOpen = true" @input="filterOptions">
                                <ul v-show="isOpen" class="ul-tag w-100 ms-2">
                                    <li class="list-items" v-for="item in data" :key="item.id" @click="selectOption(item)">
                                        {{ item.lead_name }}
                                    </li>
                                    <li>
                                        <div>
                                            <button type="button" class="new-lead-btn rounded-3 mt-2"
                                                data-bs-toggle="offcanvas" href="#offcanvasExample" role="button"
                                                aria-controls="offcanvasExample">
                                                <i class="bi bi-plus me-2"></i>Add New Lead
                                            </button>
                                            <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="offcanvasExample"
                                                aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title new-lead-offcanvas"
                                                        id="offcanvasExampleLabel">
                                                        Add New Lead
                                                    </h5>
                                                    <button type="button" class="btn-close text-reset"
                                                        data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <div class="row mb-3 m-1">
                                                        <div class="card lead-card">
                                                            <div>
                                                                <p class="lead">Lead Name</p>
                                                                <input type="text" placeholder="Enter name of the lead"
                                                                    class="border-0 input-lead p-1" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3 m-1">
                                                        <div class="card lead-card">
                                                            <div>
                                                                <p class="lead">Full Name</p>
                                                                <input type="text" placeholder="Enter Full Name"
                                                                    class="border-0 input-lead p-1" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3 m-1">
                                                        <div class="card lead-card">
                                                            <div>
                                                                <p class="lead">Mobile Number</p>
                                                                <span>+91<input type="Number" placeholder="0 0 0 0 0 0 0 "
                                                                        class="border-0 ms-2 input-lead p-1" /></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3 m-1">
                                                        <div class="card lead-card">
                                                            <div>
                                                                <p class="lead">Email Address</p>
                                                                <input type="text" placeholder="Enter Email Address"
                                                                    class="border-0 input-lead p-1" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row mb-3 m-1">
                                                        <div class="card lead-card">
                                                            <div>
                                                                <p class="lead">Enter Source</p>
                                                                <input type="text" placeholder="Enter Source"
                                                                    class="border-0 input-lead p-1" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="row">
                                                        <div class="col-4">
                                                            <div class="text-end">
                                                                <button type="button" class="btn border-0 cancel-btn mt-2">
                                                                    Cancel
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div class="col-8">
                                                            <div class="text-end">
                                                                <button type="button"
                                                                    class="btn border-0 save-btn text-white">
                                                                    Save
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                    <router-link to="/AddItems" class="text-decoration-none">
                                        <button type="button" class="border-0 bg-white add-item-btn">
                                            <i class="bi bi-plus-circle me-2"></i>Add Item</button>
                                    </router-link>
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
            filteredData: [],
            isOpen: false,
            selectedCustomer: null,
        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch("http://192.168.1.177:8000/api/resource/Lead?fields=[%22*%22]");
                const res = await response.json();
                this.data = res.data;
                this.duplicateArr = res.data;
            } catch (error) {
                console.error("Error fetch data:", error);
            }
        },
        filterOptions() {
            this.filteredData = this.duplicateArr.filter(item =>
                item.lead_name.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        selectOption(item) {
            this.selectedCustomer = item;
            this.searchQuery = item.lead_name;
            this.isOpen = false;
        },

    },
};
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
    font-family: Montserrat;
}

.add-item-btn {
    color: #444;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-family: Montserrat;
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

.new-lead-btn {
    /* border: 1px solid #d4d3d3; */
    border-radius: 0px 0px 10px 10px;
    border: 1px solid #e5e5e5;
    background: #fff;
}

.new-lead-offcanvas {
    color: #111;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 15px;
}

.lead-card {
    border-radius: 10px;
    border: 1px solid #e5e5e5;
    background: #fff;
    padding: 10px 10px;
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
</style>
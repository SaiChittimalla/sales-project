<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
                <div class="shadow-lg">
                    <h6 class="fw-bold py-2">
                        <router-link to="/QuotationsList" class="text-decoration-none"><i
                                class="bi bi-arrow-left me-2 mt-5"></i></router-link>New Quotation - Customer
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
                                <select v-show="isOpen" class="ul-tag w-100 ms-2">
                                    <option class="list-items" v-for="item in filteredData" :key="item.id"
                                        @click="selectOption(item)">
                                        {{ item.customer_name }}
                                    </option>
                                </select>
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
                                        <button type="button" class="border-0 bg-white add-item-btn" @click="postData">
                                            <i class="bi bi-plus-circle me-2"></i>Add Item
                                        </button>
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
// import axios from 'axios'
export default {
    data() {
        return {
            data: [],
            filteredData: [],
            searchQuery: '',
            isOpen: false,
            selectedCustomer: null

        };
    },
    mounted() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch(
                    "http://192.168.1.177:8000/api/resource/Quotation?fields=[%22*%22]"
                );
                const res = await response.json();
                this.data = res.data;
                this.duplicateArr = res.data;

                this.filteredData = res.data.filter(
                    (item) => item.quotation_to === "Customer"
                );
            } catch (error) {
                console.error("Error  data:", error);
            }
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

        }

        // async postData() {
            
        //     try {
        //         // Define your data to be posted
        //         const postData = {
        //             company: this.selectedCustomer.customer_name,
        //             // Add other properties as needed
        //         };

        //         // Send POST request using Axios
        //         const response = await axios.post("http://192.168.1.177:8000/api/resource/Quotation?fields=[%22*%22]", postData,{
        //             headers: {
        //         'Expect': '', // Disable the Expect header
        //         'Content-Type': 'application/json' // Add Content-Type header if needed
        //         }

        //         });

        //         // Check if request was successful
        //         if (response.status === 200) {
        //             console.log('Data posted successfully');
        //             console.log(postData);
        //         } else {
        //             console.error('Failed to post data');
        //         }
        //     } 
        //     catch (error) {
        //         console.error('Error:', error);
        //     }
        // },

        

        // filterCustomers(event) {
        //     const selectedCustomer = event.target.value;
        //     if (selectedCustomer === '') {
        //         this.filteredData = this.data.filter(item => item.quotation_to === "Customer");
        //     } else {
        //         this.filteredData = this.data.filter(item => item.customer_name === selectedCustomer);
        //     }
        // },
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
</style>
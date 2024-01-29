<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
                <div class="shadow-lg ">
                    <h6 class=" fw-bold py-2"><i class="bi bi-arrow-left me-2 mt-5"></i>New Quotation - Customer</h6>
                </div>
                <!-- </div> -->
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                    <div class="mt-4 mx-2">
                        <div class="card p-2 rounded-3 shadow-sm  dropdown-card">
                            <h6 class="m-2">Customer</h6>
                            <!-- <select class="border-0 bg-white p-1 text-secondary" >
                    <option v-for="item in data" :key="item">{{ item.customer_name }}</option>
                    <option value="1">caratRED Technologies Pvt. Ltd</option>
                    <option value="2">Welham Bride Solutions</option>
                    <option value="3">More Super mart Pvt ltd</option>  
                    <option value="4">Evergreen solutions</option>    
                    <option value="5">Fenner Group of Industries</option>    
                    <option value="6">Fig Jam Software</option>    
                    <option value="7">Super Saver Company</option>    
                    <option value="8">Tiny Solutions LLC</option>    
                    <option value="9">Facebook LLC</option>    
                </select> -->

                            <input list="select" placeholder="search or Select a customer" class="border-0 mx-2" />
                            <datalist id="select">
                                <option v-for="item in data" :key="item">{{ item.customer_name }} </option>
                            </datalist>
                        </div>

                        <input list="select" placeholder="search or Select a customer" class="border-0 mx-2" />
                        <datalist id="select">
                            <option v-for="item in data" :key="item">{{ item.customer_name }} </option>
                        </datalist>
                    </div>

                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                        <div class="mt-4 mx-2">
                            <div class="card p-2 rounded-3 shadow-sm dropdown-card">
                                <div class="row">
                                    <div class="col-8">
                                        <h6 class="m-2">Product</h6>
                                        <p class=" text-secondary ms-2 m-0">Add items to your quotation.</p>
                                    </div>
                                    <div class="col-4 d-flex align-items-center justify-content-center text-nowrap ">
                                        <router-link to="/AddItems" class="text-decoration-none ">
                                            <button type="button" class="border-0 bg-white "><i
                                                    class="bi bi-plus-circle me-2"></i>Add Item</button>
                                        </router-link>
                                    </div>
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
            details: {},
        }
    },
    mounted() {
        this.fetchData();
    },

    methods: {
        async fetchData() {
            const response = await fetch(
                "http://192.168.1.177:8000/api/resource/Quotation?fields=[%22*%22]");
            let res = await response.json();
            this.data = res.data;
            console.log(this.data);
        },

    },
}
</script>

<style scoped>
* {
    font-family: 'Montserrat', sans-serif;
}

.dropdown-card {
    border: 1px solid #EEEEEE;
    padding: 10px;
}

.bi-arrow-left {
    font-size: 20px;
}
</style>
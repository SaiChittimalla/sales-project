<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
                <div class="shadow-lg">
                    <h6 class="fw-bold py-2">
                        <i class="bi bi-arrow-left me-2 mt-5"></i>New Quotation - Lead
                    </h6>
                </div>
                <!-- </div> -->
                </div>
                <div class="container">
            <div class="row">
                <div class="col-sm-12 col-xl-6 col-lg-6 col-md-6">
                    <div class="mt-4 mx-2">
                        <div class="card p-2 rounded-3 shadow-sm select-card">
                            <h6 class="m-2">Lead</h6>
                            <!-- <select class="border-0 bg-white p-1 text-secondary" >
                        <option selected  class="text-secondary ">search or select a customer</option>
                        <option value="1">caratRED Technologies Pvt. Ltd</option>
                        <option value="2">Welham Bride Solutions</option>
                        <option value="3">More Super mart Pvt ltd</option>  
                        <option value="4">Evergreen solutions</option>    
                        <option value="5">Fenner Group of Industries</option>    
                        <option value="6">Fig Jam Software</option>    
                        <option value="7">Super Saver Company</option>    
                        <option value="8">Tiny Solutions LLC</option>    
                        <option value="9">Facebook LLC</option> 
                        <option><button type="button" class="border-0 bg-transparent">Add Lead</button></option>
                    </select> -->

                            <input list="select" placeholder="search or select a customer" class="border-0 mx-2 search-input" />
                            <datalist id="select">
                                <option value="search or select a customer"></option>
                                <option value="caratRED Technologies Pvt. Ltd"></option>
                                <option value="Welham Bride Solutions"></option>
                                <option value="More Super mart Pvt ltd"></option>
                                <option value="Evergreen solutions"></option>
                                <option value="Fenner Group of Industries"></option>
                                <option value="Fig Jam Software"></option>
                                <option value="Super Saver Company"></option>
                                <option value="Tiny Solutions LLC"></option>
                                <option value="Facebook LLC"></option>
                            </datalist>
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-xl-6 col-lg-6 col-md-6">
                    <div class="mt-4 mx-2">
                        <div class="card p-2 rounded-3 shadow-sm select-card">
                            <div class="row">
                                <div class="col-8">
                                    <h6 class="m-2">Product</h6>
                                    <p class="text-secondary ms-2 m-0 add-items-quote">
                                        Add items to your quotation.
                                    </p>
                                </div>
                                <div class="col-4 d-flex align-items-center justify-content-center text-nowrap">
                                    <router-link to="AddItems" class=" text-decoration-none ">
                                    <button type="button" class="border-0 bg-white">
                                        <i class="bi bi-plus-circle me-2"></i>Add Item
                                    </button>
                                </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 

                <div class="col-sm-12 col-xl-6 col-lg-6 col-md-6">
                    <div>
                        <button type="button" class="new-lead-btn rounded-3 ms-2 p-2 mt-2" data-bs-toggle="offcanvas"
                            href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <i class="bi bi-plus me-2"></i>Add New Lead
                        </button>
                        <div class="offcanvas offcanvas-bottom h-75" tabindex="-1" id="offcanvasExample"
                            aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title new-lead-offcanvas" id="offcanvasExampleLabel">
                                    Add New Lead
                                </h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div class="row mb-3 m-1">
                                    <div class="card lead-card">
                                        <div>
                                            <p class="lead">Lead Name</p>
                                            <input type="text" placeholder="Enter name of the lead" class="border-0 input-lead p-1">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3 m-1">
                                    <div class="card lead-card">
                                        <div>
                                            <p class="lead">Full Name</p>
                                            <input type="text" placeholder="Enter Full Name" class="border-0 input-lead p-1">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3 m-1">
                                    <div class="card lead-card">
                                        <div>
                                            <p class="lead">Mobile Number</p>
                                            <span>+91<input type="Number" placeholder="0 0 0 0 0 0 0 " class="border-0 ms-2 input-lead p-1"></span>
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3 m-1">
                                    <div class="card lead-card">
                                        <div>
                                            <p class="lead">Email Address</p>
                                            <input type="text" placeholder="Enter Email Address" class="border-0 input-lead p-1">
                                        </div>
                                    </div>
                                </div>

                                <div class="row mb-3 m-1">
                                    <div class="card lead-card">
                                        <div>
                                            <p class="lead">Enter Source</p>
                                            <input type="text" placeholder="Enter Source" class="border-0 input-lead p-1">
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="row">
                                    <div class="col-4">
                                        <div class="text-end">
                                            <button type="button" class=" btn border-0 cancel-btn mt-2">Cancel</button>
                                        </div>
                                    </div>
                                    <div class="col-8">
                                        <div class="text-end">
                                            <button type="button" class=" btn border-0 save-btn text-white ">Save</button>
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
    </section>
</template>

<style scoped>
* {
    font-family: "Montserrat", sans-serif;
}

.select-card {
    border: 1px solid #eeeeee;
}
.search-input::placeholder{
    color: #999;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    font-size: 13px;
}
.add-items-quote{
    color: #444;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
}

.bi-arrow-left {
    font-size: 20px;
}

.new-lead-btn {
    /* border: 1px solid #d4d3d3; */
    border-radius: 0px 0px 10px 10px;
    border: 1px solid #e5e5e5;
    background: #fff;
}
.lead-card{
    border-radius: 10px;
    border: 1px solid #E5E5E5;
    background: #FFF;
    padding: 10px 10px;
}
.lead{
    color: #444;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
.input-lead::placeholder{
    color: #ABABAB;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.cancel-btn{
    color: #444;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 15px;
}
.save-btn{
    border-radius: 30px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
    background: #3B43F9;
    padding: 10px 55px;
}
.new-lead-offcanvas{
    color: #111;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    font-size: 15px;
}
</style>
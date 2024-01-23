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
                    <select class="border-0 bg-white p-1 text-secondary" >
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
                </select>
                </div>
               </div>
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
                                <button type="button" class="border-0 bg-white "><i class="bi bi-plus-circle me-2"></i>Add Item</button>
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
</script>

<style scoped>
*{
font-family: 'Montserrat', sans-serif;
}
.dropdown-card{
    border: 1px solid #EEEEEE;
}
.bi-arrow-left{
    font-size: 20px;
}
</style>
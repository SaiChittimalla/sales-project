<template>
    <section>
        <div class="container-fluid">
            <div class="row">
                <!-- <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12"> -->
                        <div class="shadow-lg ">
                            <h6 class=" fw-bold py-2"><i class="bi bi-arrow-left me-2 mt-5"></i>New Quotation - Lead</h6>
                        </div>
                <!-- </div> -->
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                <div class="mt-4 mx-2">
                <div class="card p-2 rounded-3 shadow-sm  dropdown-card">
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
                        <option><button type="button" class="border-0 bg-transparent ">Add Lead</button></option>
                </select> -->

                <!-- <input list="select" placeholder="search or select a customer" class="border-0">
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
                    
                    <button type=" button" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">Add Lead</button>
                    
                    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div class="offcanvas-header">
                         <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                    <div class="offcanvas-body">
                    <div>
                         Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                    </div>
                    </div>
                </datalist>   -->
                   
                <label for="search">Search:</label>
  <input type="text" v-model="search" id="search" placeholder="Type to search">

  <select v-model="selectedOption">
    <option v-for="option in filteredOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
  </select>

  <p>Selected Option: {{ selectedOption }}</p>


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

export default ({
    data() {
        return{
            
        }
    },
})
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
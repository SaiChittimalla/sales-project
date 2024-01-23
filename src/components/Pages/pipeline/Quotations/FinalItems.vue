<template>
    <div class="container-fluid">
      <div class="header mt-3">
        <div class="d-flex gap-3 p-3 align-items-center">
          <div>
            <i class="ri-arrow-left-line quotationsfs "><span class="ps-2">New Quotation - Customer</span></i>
          </div>
         
        </div>
      </div>
      <div class="bg-1">
        <div class="inputheader mt-3">
          <div class="p-3">
            <label for="Companyselect"><p class="text-muted">Customer</p></label><br />
            <select class="form-select w-100 border-0" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="caratRed Technologies Pvt Ltd">caratRed Technologies Pvt Ltd</option>
  <option value="Naren Technologies Pvt Ltd">Naren Technologies Pvt Ltd</option>
  <option value="SAi Technologies Pvt Ltd"> SaiTechnologies Pvt Ltd</option>
</select>
  
            <!-- <select name="customer" id=" Companyselect" class="border-0 bg-white w-100 dropdown-select">
              <option class="bg-light border-0 text-muted " value="caratRed Technologies Pvt Ltd">
                <h6></h6>
              </option>
            </select> -->
          </div>
        </div>
        <div class="card card1 mt-4">
          <div class="card-header border-bottom-0">
            <div class="d-flex justify-content-between p-1 align-items-center">
              <div>
                <h6>Product</h6>
                <p>Add items to your quotation.</p>
              </div>
              <div class="d-flex gap-2 align-items-center">
                <div class="circle-with-plus1">+</div>
                <div>Add Item</div>
              </div>
            </div>
          </div>
          <div class="card-body card-body123">
            <div class="d-flex gap-3">
              <div>
                <h6>HGYFg76yy d7y</h6>
                <p>
                  Cake mukka lava<br />
                  choco candy delight
                </p>
              </div>
              <div class="d-flex align-items-center gap-2">
                <button class="btn border-1 increment">
                  <button class="btn border-0" onclick="decrement()">-</button>
                  <h6><span id="count">0</span></h6>
                  <button class="btn border-0" onclick="increment()">+</button>
                </button>
              </div>
              <div>
                <h6>₹ 87,236.00</h6>
                <p class="text-end" style="color: #3b43f9">Edit</p>
              </div>
            </div>
          </div>
          <div class="card-body card-body123">
            <div class="d-flex gap-3">
              <div>
                <h6>HGYFg76yy d7y</h6>
                <p>
                  Cake mukka lava<br />
                  choco candy delight
                </p>
              </div>
              <div class="d-flex align-items-center gap-2">
                <button class="btn border-1 increment">
                  <button class="btn border-0" onclick="decrement()">-</button>
                  <h6><span id="count">0</span></h6>
                  <button class="btn border-0" onclick="increment()">+</button>
                </button>
              </div>
              <div>
                <h6>₹ 87,236.00</h6>
                <p class="text-end" style="color: #3b43f9">Edit</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card card1 mt-3 p-2">
          <div
            class="d-flex justify-content-between mt-2 p-1"
            style="border-bottom: 1px dashed #eee"
          >
            <h6>Total Items Value</h6>
            <h6>₹ 87,236.00</h6>
          </div>
  
          <div class="d-flex justify-content-between p-1 mt-3">
            <div>
              <h6>VAT:&nbsp;0</h6>
            </div>
            <div><h6 class="text-muted">₹ 0.00</h6></div>
          </div>
          <div class="d-flex justify-content-between p-1 mt-3">
            <div>
              <h6>SEZ:&nbsp;0</h6>
            </div>
            <div><h6 class="text-muted">₹ 0.00</h6></div>
          </div>
          <div
            class="d-flex justify-content-between p-1 mt-3"
            style="border-bottom: 1px dashed LIGHTGREY"
          >
            <div>
              <h6>Total:</h6>
            </div>
            <div><h6>₹ 11,614.00</h6></div>
          </div>
          <div class="d-flex justify-content-between p-1 mt-3">
            <div>
              <h6>Discount</h6>
              <p class="text-muted">Give additional discount before tax</p>
            </div>
            <div class="d-flex gap-2">
              <div class="circle-with-plus">+</div>
              <div>
                <h6 style="color: #3b43f9 " class="text-nowrap">Add Discount</h6>
              </div>
            </div>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-between">
              <h6>Grand Total</h6>
              <h6 class="text-muted">QTY:9</h6>
              <h6><span>₹</span> 91,236.00</h6>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-between mt-3 positionbtn">
          <div class="mt-2 mb-2">
            <button class="btn btndraft">Save as draft</button>
          </div>
          <div class="mt-2 mb-2">
            <button class="btn btn-quot">Create Quotation</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <style scoped>
    select option{
        background-color: white !important;
        color: black !important;
        border: none !important;
        border-radius: 10px !important;
    }
    .dropdown-select{
        outline: none;
  border: none;
    }
    .positionbtn{
        position: sticky;
    bottom: 0px;
    background: white;
    z-index: 10;
    }
.circle-with-plus {
  width: 18px;
  height: 18px;
  border-radius: 10px 10px 10px 10px;
  /* background-color: #3b43f9; */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3b43f9 !important;
  font-size: 15px;
   border: 1px solid;
}
.btndraft {
  border-radius: 40px;
  background: #f8f8ff;
  color: #3b43f9;
  padding: 10px 10px;
}
.btn-quot {
  border-radius: 40px;
  background: #3b43f9;
  color: white;
  padding: 10px 10px;
}
.increment {
  display: inline-flex;
  padding: 5px 5px;
  justify-content: center;
  align-items: center;
 
  border-radius: 20px;
  border: 1px solid #eee;
  background: #fff;
}
.circle-with-plus1 {
  width: 18px;
  height: 18px;
  border-radius: 10px 10px 10px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-size: 15px;
  border: 1px solid;
}
.bg-1 {
  background-color: #f9f9f9;
}
.ri-arrow-left-line {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 20px;
}
.select {
  border: none !important;
  background: white;
}
.quotationsfs {
  color: #111;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
.header {
  border-bottom: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  height: 62px;
  flex-shrink: 0;
}
.inputheader {
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
  /* height: 66px; */
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
}
.card1 {
  border-radius: 10px 10px 0px 0px;
  background: #fafafa;
}
.card-body123 {
  border-bottom: 1px solid #eeeeee;
}
h6 {
  color: #111;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}
p {
  color: #444;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>

  
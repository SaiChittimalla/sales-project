<template>
  <div>
    <nav class="navbar header">
      <div class="container">
        <div class="d-flex gap-2">
          <div><i class="ri-arrow-left-line quotationsfs"></i></div>
          <div><h6>New SalesOders</h6></div>
        </div>
      </div>
    </nav>
  </div>
  <div class="container">
    <div class="bg1">
      <div class="inputheader mt-3">
        <div class="p-3">
          <label for="Companyselect"><p class="text-muted">Customer</p></label
          ><br />
          <select
            class="form-select w-100 border-0"
            aria-label="Default select example"
          >
            <option selected>Open this select menu</option>
            <option value="caratRed Technologies Pvt Ltd">
              caratRed Technologies Pvt Ltd
            </option>
            <option value="Naren Technologies Pvt Ltd">
              Naren Technologies Pvt Ltd
            </option>
            <option value="SAi Technologies Pvt Ltd">
              SaiTechnologies Pvt Ltd
            </option>
          </select>

          <!-- <select name="customer" id=" Companyselect" class="border-0 bg-white w-100 dropdown-select">
              <option class="bg-light border-0 text-muted " value="caratRed Technologies Pvt Ltd">
                <h6></h6>
              </option>
            </select> -->
        </div>
      </div>
      <div class="p-2">
        <div class="card card1 mt-2 p-2">
          <div class="d-flex justify-content-between">
            <div>
              <h6 class="text-muted">PurchaseOrder</h6>
              <h6>566545151515</h6>
            </div>
            <div>
              <i class="ri-pencil-line"></i>
            </div>
          </div>
          <div>
            <h6 class="text-muted">Purchase Order Date</h6>
            <h6>20/05/2023</h6>
          </div>
        </div>
        <div class="card card1 mt-2 p-2">
          <form>
            <div class="form-group">
              <label for="exampleDate"><h6>Delivery Date</h6></label>
              <input
                type="date"
                class="form-control"
                id="exampleDate"
                name="exampleDate"
              />
            </div>
          </form>
        </div>

        <div class="card card1 mt-4">
          <div class="card-header border-bottom-0">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <h6>Product</h6>
                <p>Add items to your quotation.</p>
              </div>
              <div class="d-flex gap-1 align-items-center">
                <div class="">
                  <img
                    src="../../../assets/gridicons_add-outline.png"
                    alt="icon"
                    class="img-fluid mb-3"
                  />
                </div>
                <div><p class="">Add Item</p></div>
              </div>
            </div>
          </div>
          <div class="card-body card-body123">
            <div class="d-flex justify-content-between">
              <div>
                <h6>HGYFg76yy d7y</h6>
                <p>
                  Cake mukka lava<br />
                  choco candy delight
                </p>
              </div>
              <div class="d-flex align-items-center gap-2">
                <button class="btn border-1 increment">
                  <button class="btn border-0 p-0" onclick="decrement()">
                    -
                  </button>
                  <h6><span id="count">0</span></h6>
                  <button class="btn p-0 border-0" onclick="increment()">
                    +
                  </button>
                </button>
              </div>
              <div>
                <h6>₹ 87,236.00</h6>
                <p class="text-end" style="color: #3b43f9">Edit</p>
              </div>
            </div>
          </div>
          <div class="card-body card-body123">
            <div class="d-flex justify-content-between">
              <div>
                <h6>HGYFg76yy d7y</h6>
                <p>
                  Cake mukka lava<br />
                  choco candy delight
                </p>
              </div>
              <div class="d-flex align-items-center gap-2">
                <button class="btn border-1 increment">
                  <button class="btn border-0 p-0" onclick="decrement()">
                    -
                  </button>
                  <h6><span id="count">0</span></h6>
                  <button class="btn border-0 p-0" onclick="increment()">
                    +
                  </button>
                </button>
              </div>
              <div>
                <h6>₹ 87,236.00</h6>
                <p class="text-end" style="color: #3b43f9">Edit</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card card1 mt-3 p-1">
          <div
            class="d-flex justify-content-between mt-2 p-1"
            style="border-bottom: 1px dashed #eee"
          >
            <h6>Total Items Value</h6>
            <h6>₹ 87,236.00</h6>
          </div>
          <div class="d-flex justify-content-between p-1 mt-3">
            <div>
              <h6>CGST:&nbsp;9%</h6>
            </div>
            <div><h6 class="text-muted">₹ 5689.30</h6></div>
          </div>
          <div class="d-flex justify-content-between p-1 mt-3">
            <div>
              <h6>SGST:&nbsp;9%</h6>
            </div>
            <div><h6 class="text-muted">₹ 5689.30</h6></div>
          </div>
          <div class="d-flex justify-content-between p-1 mt-3">
            <div>
              <h6>IGST:&nbsp;0</h6>
            </div>
            <div><h6 class="text-muted">₹ 0.00</h6></div>
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
                <h6 style="color: #3b43f9" class="text-nowrap">Add Discount</h6>
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
        <div class="d-flex justify-content-between mt-3 positionbtn mb-1">
          <div class="mt-2 mb-2">
            <button class="btn btndraft"><h6>Save as draft</h6></button>
          </div>
          <div class="mt-2 mb-2">
            <button class="btn btn-quot">
              <h6 class="text-white">Create Quotation</h6>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
.positionbtn {
  position: sticky;
  bottom: 0%;
  background: white;
  z-index: 100;
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
.increment {
  display: inline-flex;

  justify-content: center;
  align-items: center;

  border-radius: 20px;
  border: 1px solid #eee;
  background: #fff;
  display: inline-flex;
  padding: 8px 10px;

  gap: 15px;
}
.card-body123 {
  border-bottom: 1px solid #eeeeee;
}
.circle-with-plus1 {
  width: 18px;
  height: 18px;
  border-radius: 10px 10px 10px 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  color: #444444;
  font-size: 13px;
  border: 1px solid;
}
.form-control {
  font-size: 13px;
}
.card1 {
  border-radius: 10px 10px 0px 0px;
  background: #fafafa;
  box-shadow: 0px 2px 0px 0px rgba(0, 0, 0, 0.05);
}
.ri-pencil-line {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}
.bg1 {
  background-color: #f9f9f9;
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

  flex-shrink: 0;
  position: sticky;
  top: 0;
  background: white;
  z-index: 10;
}
.ri-arrow-left-line {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 20px;
}
</style>
<template>
  <div class="container-fluid">
    <div class="d-flex justify-content-between align-items-center mt-2 header">
      <div class="d-flex gap-2 p-3 align-items-center">
        <div>
          <router-link to="/Homepage" class="text-decoration-none  ">
            <span class="ps-2 quotationsfs"><i class="ri-arrow-left-line"></i> SalesOders(199)</span>
          </router-link>
        </div>

      </div>
      <div class="ri-search-line1">
        <i class="ri-search-line"></i>
      </div>
    </div>
    <div class="header2">
      <div class="d-flex justify-content-between align-items-center buttonsall">
        <ul class="d-flex flex-wrap list-unstyled justify-content-between list-group  flex-row gap-1 ">
          <div></div>
          <li class=" list-group-item active btn1">All</li>
          <li class=" list-group-item btn2">Draft</li>
          <li class=" list-group-item btn2">Saved</li>
          <li class=" list-group-item btn2">
            <select class="border-0">
              <option class="border-0">This Month</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="row">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card card1 h-100">
            <div class="d-flex justify-content-between p-2 align-items-baseline" style="border-bottom: 1px solid #eeeeee">
              <div class="d-flex gap-3 align-items-center">
                <div class="d-flex justify-content-center ri-file-edit-line1">
                  <i class="ri-file-edit-line"></i>
                </div>
                <div>
                  <p style="font-size: 13px" class="align-items-center mt-3">
                    SAL-QTN-2023-00001 <br /><span class="text-muted" style="font-size: 11px">12 Dec</span>
                  </p>
                </div>
              </div>
              <div>
                <button class="savedbutton">Saved</button>
              </div>
            </div>
            <div class="p-3">
              <h6 class="" style="font-size: 13px">Anasuya karthula</h6>
              <p style="font-size: 11px; color: #3b43f9">Customer</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card card1 h-100">
            <div class="d-flex justify-content-between p-3 align-items-baseline" style="border-bottom: 1px solid #eeeeee">
              <div class="d-flex gap-3 align-items-center">
                <div class="d-flex justify-content-center ri-file-edit-line1">
                  <i class="ri-file-edit-line"></i>
                </div>
                <div>
                  <p style="font-size: 13px" class="align-items-center mt-3">
                    SAL-QTN-2023-00001 <br /><span class="text-muted" style="font-size: 11px">12 Dec</span>
                  </p>
                </div>
              </div>
              <div>
                <button class="savedbutton">Saved</button>
              </div>
            </div>
            <div class="p-3">
              <h6 class="" style="font-size: 13px">Anasuya karthula</h6>
              <p style="font-size: 11px; color: #3b43f9">Lead</p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
          <div class="card card1 h-100">
            <div class="d-flex justify-content-between p-3 align-items-baseline" style="border-bottom: 1px solid #eeeeee">
              <div class="d-flex gap-3 align-items-center">
                <div class="d-flex justify-content-center ri-file-edit-line1">
                  <i class="ri-file-edit-line"></i>
                </div>
                <div>
                  <p style="font-size: 13px" class="align-items-center mt-3">
                    SAL-QTN-2023-00001 <br /><span class="text-muted" style="font-size: 11px">12 Dec</span>
                  </p>
                </div>
              </div>
              <div>
                <button class="draftbtn">Draft</button>
              </div>
            </div>
            <div class="p-3">
              <h6 class="" style="font-size: 13px">Anasuya karthula</h6>
              <p style="font-size: 11px; color: #3b43f9">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-primary circle-with-plus" type="button" data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">
        +
      </button>

      <!-- <div
          class="offcanvas offcanvas-bottom h-50"
          tabindex="-1"
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasBottomLabel"></h5>
            <button
              type="button"
              class="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body small">
            <h5 class="offcanvastext text-center">
              <b>Specify the quotation's <br />intended recipient.</b>
            </h5>
            <div>
              <div class="mt-3">
                <button class="btn btncustomer w-100">To Customer</button>
              </div>
              <div class="mt-3">
                <button class="btn btncustomer w-100">To Lead</button>
              </div>
            </div>
          </div>
        </div>  -->
    </div>
  </div>
</template>
<style scoped>
/* .offcanvas-bottom { 
  height: 30%;
} */

.draftbtn {
  border-radius: 4px;
  border: 0.7px solid #999;
  background: #f1f1f1;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #999;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.btncustomer {
  border-radius: 30px;
  background: #3b43f9;
  color: white;
}

.offcanvastext {
  color: #111;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.ri-search-line1 {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f3f3f3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 21px;
}

.ri-file-edit-line1 {
  width: 32px;
  height: 32px;
  border-radius: 24px;
  background: #979bff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 25px;
}

.circle-with-plus {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #3b43f9;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 25px;
  position: fixed;
  /* top: 100%; */
  bottom: 10%;
  right: 6%;
}

.quotationsfs {
  color: #111;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 8px;
}

.ri-arrow-left-line {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  font-size: 20px;
}

.ri-search-line {
  font-size: 15px;
  flex-shrink: 0;
  color: #3b43f9;
}

.header {
  border-bottom: 1px solid #eee;

  background: #fff;
  /* width: 430px; */
  height: 62px;
  flex-shrink: 0;
}

.header2 {

  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 11px 24px 0px rgba(0, 0, 0, 0.05);
  width: 100%;
}

.buttonsall {
  padding: 10px 10px;
}

.active {
  border-radius: 20px;
  background: #3b43f9;
  color: white;
  /* color: #3C3C3C; */
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 4px 15px;
  /* margin: 0px 5px; */
}

.btn2 {
  border-radius: 20px;
  background: #f3f3f3;
  color: #3c3c3c;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding: 4px 15px;
  /* margin: 0px 5px; */
}

li {
  margin-top: 10px;
}

.content {
  background: #f9f9f9;
  /* display: inline-flex; */
  padding: 6px 14px;
  /* justify-content: center; */
  align-items: center;
  gap: 10px;
  /* height: 932px; */
}

.card1 {
  border-radius: 4px;
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 3px 2px 0px rgba(0, 0, 0, 0.05);
}

.ri-file-edit-line {
  font-size: 15px;
  color: white;
}

.savedbutton {
  border-radius: 4px;
  border: 0.7px solid #3b43f9;
  background: #ecedff;
  color: #3b43f9;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 10px;
  display: inline-flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

@media (min-width: 300px) and (max-width: 420px) {}
</style>
<script setup>

</script>
<template>
  <div>


    <nav class="navbar navigation-main">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/Morgan-Logo.jpg" alt="Morgan" class="logo">
        </a>
        <div>
          <!-- Button trigger modal -->
          <button type="button" class="btn btn-primary profile-modal " data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            A
          </button>


        </div>
      </div>
    </nav>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Morgan</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
    <div class="total-amount">
      <div>
        <div class="text-center month-tag pt-3">
          <span>
            <i class="bi bi-chevron-left"></i>
            This Month
            <i class="bi bi-chevron-right"></i>
          </span>
        </div>
        <div>
          <div class=" text-center mt-5 ">
            <label for="" class="amount-attainable ">Total Amount Attainable</label>
          </div>
        </div>
        <div>
          <h3 class="total-blance"> <span>₹</span> 23,54,345.09</h3>
        </div>
        <div>
          <div class=" container  text-center ">
            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0"
              aria-valuemax="100">
              <div class="progress-bar  bg-warning " style="width: 75%"></div>
            </div>
          </div>
        </div>
        <div class=" container">
          <div class="d-flex  justify-content-between  ">
            <div>
              <h4 class="collected-amt"><span>₹</span> 23,54,345.09</h4>
              <p class="amount-collected">Amount collected</p>

            </div>
            <div>
              <div>
                <h4 class="collect-amt"><span>₹</span> 23,54,345.09</h4>
                <p class="amount-collected">Amount collected</p>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="pipeline-main">
      <div class="all-status container-fluid  ">
        <div class="row pt-3">
          <div class=" col-lg-3 col-md-6 col-sm-6 my-2     ">
            <div class="card first-cards">
              <div class=" card-body d-flex  justify-content-evenly status-pad  ">
                <div>
                  <img src="../assets/iconamoon_invoice-duotone.png" alt="" class=" img-fluid status-img">
                </div>
                <div>
                  <h4 class=" num-status m-0">345</h4>
                  <span class=" num-titles"> Total Sales Orders</span>
                </div>
              </div>
            </div>
          </div>
          <div class=" col-lg-3 col-md-6 col-sm-6 my-2   ">
            <div class="card first-cards">
              <div class=" card-body d-flex  justify-content-evenly status-pad  ">
                <div>
                  <img src="../assets/mdi_invoice-outline.png" alt="" class=" img-fluid status-img">
                </div>
                <div>
                  <h4 class=" num-status m-0">345</h4>
                  <span class=" num-titles"> Total Sales Orders</span>
                </div>
              </div>
            </div>
          </div>
          <div class=" col-lg-3 col-md-6 col-sm-6 my-2  ">
            <div class="card first-cards">
              <div class=" card-body d-flex  justify-content-evenly status-pad  ">
                <div><img src="../assets/tabler_calendar-due.png" alt="" class=" img-fluid status-img"></div>
                <div>
                  <h4 class=" num-status m-0">345</h4>
                  <span class=" num-titles"> Total Sales Orders</span>
                </div>
              </div>
            </div>
          </div>
          <div class=" col-lg-3 col-md-6 col-sm-6 my-2  ">
            <div class="card first-cards">
              <div class=" card-body d-flex  justify-content-evenly status-pad  ">
                <div><img src="../assets/solar_delivery-bold.png" alt="" class=" img-fluid status-img"></div>
                <div>
                  <h4 class=" num-status m-0">345</h4>
                  <span class=" num-titles"> Total Sales Orders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card-shadow-div">
          <div>
            <h5 class="pileline-heading m-0 ps-3 pt-3   ">Piplines</h5>
            <p class="pipeline-span ps-3">Increase your sales efficiently</p>
          </div>
          <div class="d-flex justify-content-evenly my-4  g-0  ">
            <div class="">
              <router-link to="./QuotationsList" class=" text-decoration-none ">
                <div class="card border-0 ">
                  <div class="icon-quotations">
                    <div>
                      <img src="../assets/Vector.png" alt="icon" class="icon-one img-fluid ">
                      <img src="../assets/mdi_invoice-edit.png" alt="icon" class="icon-two">
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-text cards-headings quotation-only">Quotations</h5>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="">
              <div class="card border-0  ">
                <div class="icon-quotations">
                  <div class=" text-center">
                    <img src="../assets/iconamoon_invoice-duotone.png" alt="icon" class=" img-fluid pipe-imgs ">
                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Sales Orders</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0  ">
                <div class="icon-quotations">
                  <div class=" text-center">
                    <img src="../assets/mdi_invoice-outline.png" alt="icon" class=" img-fluid pipe-imgs ">

                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Sales Invoices</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0  ">
                <div class="icon-quotations">
                  <div class=" text-center">
                    <img src="../assets/carbon_delivery.png" alt="icon" class=" img-fluid pipe-imgs ">

                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Delivery Notes</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card-shadow-div">
          <div>
            <h5 class="pileline-heading m-0 ps-3 pt-3   ">Clients / Buyers</h5>
            <p class="pipeline-span ps-3">Contact your clients easily</p>
          </div>
          <div class="d-flex justify-content-evenly my-4  g-0  ">
            <div class="">
              <router-link to="/addleads" class=" text-decoration-none ">
                <div class="card border-0 ">
                  <div class="icon-quotations">
                    <div class=" text-center ">
                      <img src="../assets/Vectorperson.png" alt="icon" class="leads-icon1 img-fluid ">
                      <img src="../assets/mdi_users.png" alt="icon" class="leads-icon2 ">
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-text cards-headings">Leads</h5>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="">
              <div class="card border-0  ">
                <div class="icon-quotations">
                  <div class=" text-center position-relative ">
                    <img src="../assets/Vectorperson.png" alt="icon" class="Opportunities img-fluid ">
                    <img src="../assets/Groupraise.png" alt="icon" class=" img-fluid Opportunities2 pipe-imgs ">
                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Opportunities</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0  ">
                <div class="icon-quotations">
                  <div class=" text-center position-relative">
                    <img src="../assets/ph_buildings-fill.png" alt="icon" class="Customers img-fluid ">
                    <img src="../assets/ph_buildings-fill (1).png" alt="icon" class=" img-fluid  Customers2 ">

                  </div>

                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Customers</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0  ">
                <div class="icon-quotations">
                  <div class=" text-center">
                    <img src="../assets/system-uicons_contacts.png" alt="icon" class=" img-fluid pipe-imgs ">

                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Contacts</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class=" card-shadow-div">
          <div class=" d-flex  ">
            <div class="ps-3 pt-3">
              <div class="text-center position-relative ">
                <img src="../assets/fluent_box-search-20-filled.png" alt="">
                <img src="../assets/majesticons_search.png" alt="" class="search-img">
              </div>
            </div>
            <div>
              <h5 class="pileline-heading m-0 ps-3 pt-3   ">Catalogue</h5>
              <p class="pipeline-span ps-3">View Your Items here</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <button type="button" class="main-button">
        <span>+</span>
      </button>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.main-button {
  width: 62px;
  height: 62px;
  background-color: #3B43F9;
  border: none;
  border-radius: 50%;
  position: fixed;
  bottom: 10%;
  right: 5%;



}

.main-button span {
  font-size: 24px;
  color: white;
}

.navigation-main {
  position: sticky;
  z-index: 10;
  top: 0;
  background-color: white;
}

* {
  font-family: 'Montserrat' !important;

}

.collected-amt {
  color: #FFF;
  text-align: center;
  font-family: "Montserrat";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.collect-amt {
  color: #FF4646;
  text-align: right;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;

}

.amount-collected {
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.progress {
  height: 4px;
  margin: 15px 20px;
}

.total-blance {
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.month-tag {
  color: #FFF;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.amount-attainable {
  color: #FFF;
  text-align: center;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.logo {
  width: 68px;
  height: 37px;
  flex-shrink: 0;
}

.profile-modal {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 24px;
  background: #3B43F9 !important;
  transition: all 0.3ms ease;

}

.all-status {
  transition: all 0.3ms ease;

}

.total-amount {
  /* width: 430px; */
  transition: all 0.3ms ease;

  height: 265px;
  background: linear-gradient(180deg, #001B4E 78.49%, rgba(0, 27, 78, 0.00) 134.43%);
}

.pipeline-main {
  /* width: 430px; */
  /* height: 694px; */
  margin-top: -25px;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(180deg, #C1EBFF 0%, rgba(215, 216, 255, 0.00) 100%);
  transition: all 0.3ms ease;
}

.card-shadow-div {
  border-radius: 10px;
  border: 1px solid #EEE;
  background: #FFF;
  box-shadow: 0px 3px 0px 0px rgba(0, 0, 0, 0.08);
  margin: 15px 13px;
  transition: all 0.3ms ease;

}

.pileline-heading {
  color: #111;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.pipeline-span {
  color: #444;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
}

.icon-quotations {
  position: relative;
  /* display: flex;
  justify-content: center;
  align-items: center; */

}

.icon-one {

  position: absolute;
  left: 44%;
  width: 18px;
  height: 19px;

}

.icon-two {

  position: absolute;
  left: 38%;
  width: 22px;
  height: 22px;


}


.cards-headings {
  color: #001B4E;
  text-align: center;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  transition: all 0.3ms ease;

}

.first-cards {
  border-radius: 10px;
  border: 1px solid #EEE;
  background: #FFF;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.3ms ease;

}

.num-status {
  color: #001B4E;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.num-titles {
  color: #111;
  font-family: Montserrat;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.Opportunities {
  position: absolute;
  bottom: -4px;
  left: 42%;
  width: 14px;
  height: 14px;
  flex-shrink: 0;
}

.Customers {
  position: absolute;
  bottom: 0px;
  left: 34%;
  width: 14px;
  height: 24px;

}

.search-img {
  position: absolute;
  left: 15px;
  bottom: 2px;
}




@media (max-width:575px) {
  .col-sm-6 {
    width: 50%;
  }

  .icon-one {
    left: 40%;
    bottom: -23px;
  }

  .icon-two {
    left: 34%;
  }

  .status-pad {
    padding: 10px 5px;
  }

  .quotation-only {
    margin-top: 24px;
  }

  .Customers2 {
    padding-left: 10px;
  }

}

@media (min-width: 575px) and (max-width: 2560px) {
  .pileline-heading {
    font-size: 17px;
  }

  .pipeline-span {
    font-size: 14px;
  }

  .cards-headings {
    font-size: 17px;

  }

  .num-status {
    font-size: 17px;

  }

  .num-titles {
    font-size: 17px;
  }

  .icon-one {
    width: 26px;
    height: 24px;
    bottom: -26px;
  }

  .icon-two {
    width: 24px;
    height: 22px;
    left: 42%;
  }

  .status-img {
    width: 30px;
  }

  .pipe-imgs {
    width: 30px;
  }

  .quotation-only {
    margin-top: 30px;
  }

  .collected-amt {
    font-size: 17px;

  }

  .collect-amt {
    font-size: 17px;

  }

  .amount-collected {
    font-size: 14px;

  }

  .Opportunities {
    left: 45%;
  }

  .Customers {
    position: absolute;
    bottom: 0px;
    left: 34%;
    width: 14px;
    height: 24px;
  }

  .Customers2 {
    padding: 0px;
  }
}
</style> 
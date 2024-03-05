<template>
  <div>
    <nav class="navbar navigation-main">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/MorganLogo.svg" alt="Morgan" class="logo" />
        </a>
        <div>
          <div class="dropdown dropstart">
            <button class="btn btn-primary border-0 profile-modal" type="button" id="dropdownMenuButton1"
              data-bs-toggle="dropdown" aria-expanded="false">
              {{ usrName }}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <div class="d-flex justify-content-center align-items-center p-4">
                <div class="text-center">
                  <button class="btn btn-primary mb-3 inside-profile" type="button">
                    {{ usrName }}
                  </button>

                  <button type="button" @click="logout()" class="btn btn-primary logout">
                    LOGOUT
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <div class="total-amount">
      <div>
        <div class="text-center month-tag pt-3">
          <span>
            <i class="bi bi-chevron-left"></i>
            <button type="button" class="btn btn-dark bg-transparent month-tag border-0 shadow-none">
              This Month
            </button>
            <i class="bi bi-chevron-right"></i>
          </span>
        </div>
        <div>
          <div class="text-center mt-5">
            <label for="" class="amount-attainable">Total Amount Attainable</label>
          </div>
        </div>
        <div>
          <h3 class="total-blance"><span>₹</span> 23,54,345.09</h3>
        </div>
        <div>
          <div class="container text-center">
            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0"
              aria-valuemax="100">
              <div class="progress-bar bg-warning" style="width: 75%"></div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="d-flex justify-content-between">
            <div>
              <h4 class="collected-amt"><span>₹</span> 23,54,345.09</h4>
              <p class="amount-collected">Amount collected</p>
            </div>
            <div>
              <div>
                <h4 class="collect-amt"><span>₹</span> 23,54,345.09</h4>
                <p class="amount-collected">Amount collect</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pipeline-main">
      <div class="all-status container-fluid">
        <div class="row pt-3">
          <div class="col-lg-3 col-md-6 col-sm-6 my-2">
            <div class="card first-cards">
              <div class="card-body d-flex justify-content-evenly status-pad">
                <div>
                  <img src="../assets/totalorder.svg" alt="" class="img-fluid status-img" />
                </div>
                <div>
                  <h4 class="num-status m-0">{{ this.data.length }}</h4>
                  <span class="num-titles"> Total Sales Orders</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 my-2">
            <div class="card first-cards">
              <div class="card-body d-flex justify-content-evenly status-pad">
                <div>
                  <img src="../assets/dollar.svg" alt="" class="img-fluid status-img" />
                </div>
                <div>
                  <h4 class="num-status m-0">{{ this.data.length }}</h4>
                  <span class="num-titles"> Total Sales Invoices</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 my-2">
            <div class="card first-cards">
              <div class="card-body d-flex justify-content-evenly status-pad">
                <div>
                  <img src="../assets/Group7561.svg" alt="" class="img-fluid status-img" />
                </div>
                <div>
                  <h4 class="num-status m-0">345</h4>
                  <span class="num-titles"> Pending Payments</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 col-sm-6 my-2">
            <div class="card first-cards">
              <div class="card-body d-flex justify-content-evenly status-pad">
                <div>
                  <img src="../assets/solar_delivery-bold.svg" alt="" class="img-fluid status-img" />
                </div>
                <div>
                  <h4 class="num-status m-0">{{ this.delivery.length }}</h4>
                  <span class="num-titles"> Total Delivery Notes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="card-shadow-div">
          <div>
            <h5 class="pileline-heading m-0 ps-3 pt-3">Piplines</h5>
            <p class="pipeline-span ps-3">Increase your sales efficiently</p>
          </div>
          <div class="d-flex justify-content-evenly my-4 g-0">
            <div class="">
              <router-link to="./completedata" class="text-decoration-none">
                <div class="card border-0">
                  <div class="icon-quotations">
                    <div class="text-center">
                      <img src="../assets/Group 237652.svg" alt="icon" class="img-fluid pipe-imgs" />
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-text cards-headings">Quotations</h5>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="">
              <router-link to="/NewSalesOrder" class="text-decoration-none">
                <div class="card border-0">
                  <div class="icon-quotations">
                    <div class="text-center">
                      <img src="../assets/Group 237653.svg" alt="icon" class="img-fluid pipe-imgs" />
                    </div>
                  </div>
                  <div class="card-body px-2">
                    <h5 class="card-text cards-headings">Sales Orders</h5>
                  </div>
                </div>
              </router-link>
            </div>
            <div class="">
              <div class="card border-0">
                <div class="icon-quotations">
                  <div class="text-center">
                    <img src="../assets/dollar1.svg" alt="icon" class="img-fluid pipe-imgs" />
                  </div>
                </div>
                <div class="card-body px-2" @click="salesInvoices()">
                  <h5 class="card-text cards-headings">Sales Invoices</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0" @click="toDelivery()">
                <div class="icon-quotations">
                  <div class="text-center">
                    <img src="../assets/carbon_delivery1.svg" alt="icon" class="img-fluid pipe-imgs" />
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
            <h5 class="pileline-heading m-0 ps-3 pt-3">Clients / Buyers</h5>
            <p class="pipeline-span ps-3">Contact your clients easily</p>
          </div>
          <div class="d-flex justify-content-evenly my-4 g-0">
            <div class="">
              <div class="card border-0" @click="ToLead()">
                <div class="icon-quotations">
                  <div class="text-center">
                    <img src="../assets/Group 237656.svg" alt="icon" />
                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Leads</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0">
                <div class="icon-quotations">
                  <div class="text-center position-relative">
                    <img src="../assets/Group 237649.svg" alt="" />
                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Opportunities</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0" @click="ToCustomers()">
                <div class="icon-quotations">
                  <div class="text-center position-relative">
                    <img src="../assets/Group 237658.svg" alt="" />
                  </div>
                </div>
                <div class="card-body px-2">
                  <h5 class="card-text cards-headings">Customers</h5>
                </div>
              </div>
            </div>
            <div class="">
              <div class="card border-0" @click="toContact()">
                <div class="icon-quotations">
                  <div class="text-center">
                    <img src="../assets/Group 237659.svg" alt="icon" class="img-fluid" />
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
        <div class="card-shadow-div">
          <div class="d-flex">
            <div class="ps-3 pt-3">
              <div class="text-center position-relative">
                <img src="../assets/Group 237533.svg " alt="" />
              </div>
            </div>
            <div>
              <h5 class="pileline-heading m-0 ps-3 pt-3">Catalogue</h5>
              <p class="pipeline-span ps-3">View Your Items here</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
      <button type="button" class="main-button">
        <span>+</span>
      </button>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import { ApiUrls, Doctypes } from "@/shared/apiUrls";
export default {
  name: "HomePage",
  data() {
    return {
      data: [],
      usrName: "",
      delivery: [],
    };
  },
  mounted() {
    console.log(localStorage.getItem("user"));
    this.SalesOrder();
    this.DeliveryOrder();
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.$router.push({ name: "LoginPage" });
    } else {
      this.usrName = user.usr.charAt(0).toUpperCase();
    }
  },


  methods: {
    logout() {
      axios.get(ApiUrls.logout, {
        headers: {
          "message": "Loggend Out"
        }
      })
        .then((res) => {
          console.log(res);
          localStorage.removeItem('user');
          window.location.reload();
          this.$router.push({ name: "LoginPage" });

        })
        .catch((err) => {
          console.error(err);
        });
    },

    SalesOrder() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      queryParams.limit_page_length = "none";
      queryParams.filters = JSON.stringify(queryParams?.filters);
      axios
        .get(ApiUrls.resource + "/" + Doctypes.salesorder, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          this.data = response.data.data;
          // console.log(this.data.length, "sales orders==", this.data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    DeliveryOrder() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(["*"]);
      queryParams.limit_page_length = null;
      queryParams.filters = JSON.stringify(queryParams?.filters);
      axios
        .get(ApiUrls.resource + "/" + Doctypes.delivery, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          this.delivery = response.data.data;
          // console.log(this.delivery.length, "delivery Notes==", this.delivery);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    ToLead() {
      this.$router.push({ name: "AddLeads" });
    },
    ToCustomers() {
      this.$router.push({ name: "AddCustomers" });
    },
    toDelivery() {
      this.$router.push({
        name: 'DeliveryNotes'
      })
    },
    toContact() {
      this.$router.push({
        name: 'ContactsPage'
      })
    },
    salesInvoices() {
      this.$router.push({
        name: 'SalesInvoice'
      })
    }
  },
};
</script>

<style scoped>
.card {
  cursor: pointer;
}

.logout {
  background: #3b43f9 !important;
  font-size: 12px !important;
}

.main-button {
  width: 52px;
  height: 52px;
  background-color: #3b43f9;
  border: none;
  border-radius: 50%;
  position: fixed;
  bottom: 10%;
  right: 5%;
  animation: bounce infinite;
}

@keyframes bounce {
  0% {
    transform: translateY(20px);
  }

  100% {
    transform: translateY(10px);
  }
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
  font-family: "Montserrat" !important;
}

.collected-amt {
  color: #fff;
  text-align: center;
  font-family: "Montserrat";
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.collect-amt {
  color: #ff4646;
  text-align: right;
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
}

.amount-collected {
  color: #fff;
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
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.month-tag {
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.amount-attainable {
  color: #fff;
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
  background: #001b4e !important;
  transition: all 0.3ms ease;
}

.inside-profile {
  width: 42px;
  height: 42px;
  flex-shrink: 0;
  border-radius: 24px;
  background: white;
  transition: all 0.3ms ease;
  border: 1px solid black;
  color: black;
}

.all-status {
  transition: all 0.3ms ease;
}

.total-amount {
  /* width: 430px; */
  transition: all 0.3ms ease;

  height: 265px;
  background: linear-gradient(180deg,
      #001b4e 78.49%,
      rgba(0, 27, 78, 0) 134.43%);
}

.pipeline-main {
  /* width: 430px; */
  /* height: 694px; */
  margin-top: -25px;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(180deg, #c1ebff 0%, rgba(215, 216, 255, 0) 100%);
  transition: all 0.3ms ease;
}

.card-shadow-div {
  border-radius: 10px;
  border: 1px solid #eee;
  background: #fff;
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

.cards-headings {
  color: #001b4e;
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
  border: 1px solid #eee;
  background: #fff;
  box-shadow: 0px 4px 0px 0px rgba(0, 0, 0, 0.08);
  transition: all 0.3ms ease;
}

.num-status {
  color: #001b4e;
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

@media (max-width: 575px) {
  .col-sm-6 {
    width: 50%;
  }

  .status-pad {
    padding: 10px 5px;
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
    font-size: 15px;
  }

  .status-img {
    width: 30px;
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
}
</style>
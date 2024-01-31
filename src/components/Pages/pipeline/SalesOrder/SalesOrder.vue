<template>
  <nav class="navbar header align-items-center">
    <div class="container">
      <div class="d-flex gap-2 p-2 align-items-center">
        <div>
          <i class="ri-arrow-left-line"
            ><span class="ps-2 quotationsfs"
              >SalesOrders &nbsp;({{ totalQuotations }})</span
            ></i
          >
        </div>
      </div>
      <div class="ri-search-line1">
        <i class="ri-search-line"></i>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="header2">
      <div class="d-flex justify-content-between align-items-center buttonsall">
        <ul class="d-flex flex-wrap list-unstyled list-group flex-row gap-1">
          <div></div>
          <li
            class="list-group-item btn2"
            :class="{ active: activeFilter === 'All' }"
            @click="setFilter('All')"
          >
            All
          </li>
          <li
            class="list-group-item btn2"
            :class="{ active: activeFilter === 'Draft' }"
            @click="setFilter('Draft')"
          >
            Draft
          </li>
          <li
            class="list-group-item btn2"
            :class="{ active: activeFilter === 'Completed' }"
            @click="setFilter('Completed')"
          >
            Completed
          </li>
          <li class="list-group-item btn2" @click="setFilter('This Month')">
            <select class="border-0">
              <option class="border-0">This Month</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="row">
        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 mb-4">
          <div
            class="card card1 mb-4"
            v-for="(sales, index) in filteredQuotations"
            :key="index"
          >
            <div
              class="d-flex justify-content-between p-2 align-items-baseline"
              style="border-bottom: 1px solid #eeeeee"
            >
              <div class="d-flex gap-3 align-items-center">
                <div class="d-flex justify-content-center ri-file-edit-line1">
                  <i class="ri-file-edit-line"></i>
                </div>
                <div>
                  <p style="font-size: 13px" class="align-items-center mt-3">
                    {{ sales.name }}<br /><span
                      class="text-muted"
                      style="font-size: 11px"
                      >{{ sales.transaction_date }}</span
                    >
                  </p>
                </div>
              </div>
              <div>
                <button class="savedbutton">{{ sales.status }}</button>
              </div>
            </div>
            <div class="p-3">
              <h6 class="" style="font-size: 13px">
                {{ sales.customer_name }}
              </h6>
              <p style="font-size: 11px; color: #3b43f9">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <button
        class="btn btn-primary circle-with-plus"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        +
      </button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      data: [],
      saleOrders: [],
      filterType: "All",
      activeFilter: "All",
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    totalQuotations() {
      return this.filteredQuotations.length;
    },
    filteredQuotations() {
      if (this.filterType === "All") {
        return this.saleOrders;
      } else {
        // Filter quotations based on the selected type
        return this.saleOrders.filter(
          (sales) => sales.status === this.filterType
        );
      }
    },
  },
  methods: {
    setFilter(type) {
      this.activeFilter = type;
      this.filterType = type;
    },
    fetchData() {
      this.loading = true;
      axios
        .get(
          "http://192.168.1.177:8000/api/resource/Sales%20Order?fields=[%22*%22]",
          {
            params: {
              fields: JSON.stringify(["*"]),
            },
          }
        )
        .then((response) => {
          this.saleOrders = JSON.parse(JSON.stringify(response.data.data));
          console.log(this.saleOrders);
        })
        .catch((error) => {
          console.error(error.message);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    //  fetchData() {
    //   let queryParams = { filters: [] };
    //   // queryParams.filters.push(["audit_record_id", "=", this.$route.query.id]);
    //   queryParams.filters.push(["section", "=", "Main LT Panel"]);
    //   queryParams.filters = JSON.stringify(queryParams.filters);
    //   queryParams.fields = JSON.stringify(["*"]);
    //   console.log("name:", this.$route.query.id);
    //   console.log("tab name :" + this.fetchData);
    //   axios
    //     .get(
    //       "http://192.168.1.177:8000/api/resource",
    //       {
    //         params: queryParams,
    //       }
    //     )
    //     .then((response) => {
    //       this.data = JSON.parse(JSON.stringify(response.data.data));
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
  },
};
</script>
<style scoped>
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
  right: 17%;
}

.buttonsall {
  padding: 10px 10px;
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

  margin: 3px 5px;
}

.list-group-item + .list-group-item.active {
  border-top-width: 1px !important;
  background: #3b43f9;
  color: white;
  padding: 5px 14px;
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
*:focus {
  outline: none;
}
@media (min-width: 300px) and (max-width: 420px) {
}
</style>
<script setup>
</script>
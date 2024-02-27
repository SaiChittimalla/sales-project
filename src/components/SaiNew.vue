<template>
  <div>
    <div class="mb-3">
      <label for="" class="form-label">City</label>
      <select class="form-select form-select-lg" name="" id="" v-model="selectedCustomer">
        <option v-for="customer in customers" :key="customer.id" :value="customer">{{ customer.name }}</option>
      </select>

    </div>
    <div>
      <div></div>
    </div>
    <div>
      <button type="button" @click="Added(selectedCustomer)">
        add items
      </button>
    </div>
    <div>
      <div v-for="(item, index) in itemData" :key="index">
        <div class="card-body card-body123 d-flex justify-content-between   ">

          <div>
            <h6>{{ item.item_name }}</h6>
            <p>{{ item.item_code }}</p>
            <p>₹ {{ item.valuation_rate }}</p>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn border-1 d-flex  increment">
              <button type="button" class="border-0 rounded-1" @click="Decrease(item, index)" :disabled="item.qty == 0">
                <i class="bi bi-dash"></i>
              </button>
              <p class="mt-3">{{ item.qty || 0 }}</p>
              <button type="button" class="border-0 rounded-1" @click="Increase(item, index)">
                <i class="bi bi-plus"></i>
              </button>
            </button>
          </div>
          <div>
            <h6>{{ item.rate || 0 }}</h6>
          </div>

        </div>
      </div>
      <button type="button" @click="itemAdd()">add</button>
    </div>
    <div>
      <div v-for="(item, index) in arr" :key="index">
        <div class="card-body card-body123 d-flex justify-content-between   ">

          <div>
            <h6>{{ item.item_name }}</h6>
            <p>{{ item.item_code }}</p>
            <p>₹ {{ item.valuation_rate }}</p>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button class="btn border-1 d-flex  increment">
              <button type="button" class="border-0 rounded-1" @click="Decrease(item, index)" :disabled="item.qty == 0">
                <i class="bi bi-dash"></i>
              </button>
              <p class="mt-3">{{ item.qty || 0 }}</p>
              <button type="button" class="border-0 rounded-1" @click="Increase(item, index)">
                <i class="bi bi-plus"></i>
              </button>
            </button>
          </div>
          <div>
            <h6>{{ item.rate || 0 }}</h6>

          </div>

        </div>
      </div>
      <div>
        <button type="button" class=" btn btn-success " @click="SaveDrafts()">save as drafts</button>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import { Doctypes, ApiUrls } from "@/shared/apiUrls";
export default {
  data() {
    return {
      customers: [],
      selectedCustomer: '',
      itemData: [],
      qty: 0,
      selectedItems: [],
      obj: new Set(),
      arr: [],
      postData: {
      },
      taxCharge: [],

    }
  },
  mounted() {
    this.fetchCustomers();
    this.fetchData();
    this.salesTax();
  },
  methods: {
    fetchCustomers() {
      let queryParams = { filters: [] };
      queryParams.fields = JSON.stringify(['*']);
      queryParams.limit_page_length = null;
      queryParams.order_by = 'creation DESC';
      if (queryParams.filters) {
        queryParams.filters = JSON.stringify(queryParams.filters);
      }
      axios
        .get(ApiUrls.resource + "/" + Doctypes.customer, {
          params: queryParams,
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }, withCredentials: true
        })
        .then((response) => {
          console.log(response.data);
          this.customers = response.data.data;
        })
        .catch((error) =>
          console.error("Error fetching customer data:", error)
        );
    },
    Added(selectedCustomer) {
      console.log(selectedCustomer);
    },
    fetchData() {
      let queryParams = {
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        filters: JSON.stringify([]),
      };

      axios
        .get(ApiUrls.resource + "/" + Doctypes.items, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          this.itemData = response.data.data;
          console.log(this.itemData);

        })
        .catch((error) => {
          console.error("Error fetching item data:", error.message); // Logging the error message
        });
    },
    Increase(item) {
      this.selectedItems.push(item);

      item.qty = parseInt(item.qty) || 0; // Ensure qty is numeric
      item.valuation_rate = parseFloat(item.valuation_rate) || 0; // Ensure valuation_rate is numeric
      item.qty++;
      item.rate = item.qty * item.valuation_rate;
    },
    Decrease(item) {
      this.selectedItems.push(item);

      item.qty = parseInt(item.qty) || 0; // Ensure qty is numeric
      item.valuation_rate = parseFloat(item.valuation_rate) || 0; // Ensure valuation_rate is numeric
      if (item.qty > 0) {
        item.qty--;
        item.rate = item.qty * item.valuation_rate;
      }
    },
    itemAdd() {
      this.selectedItems.forEach((val) => this.duplicate(val));
      this.selectedCustomer.party_name = this.selectedCustomer.name;
      this.postData = {
        ...this.selectedCustomer,
        items: this.arr,
        docstatus: 0,
      };
      console.log(this.postData);

    },
    duplicate(val) {
      const objectString = JSON.stringify(val);
      if (!this.obj.has(objectString)) {
        this.obj.add(objectString);
        this.arr.push(val);
      }
    },
    SaveDrafts() {
      console.log(this.postData);
      if (this.selectedCustomer.tax_category == 'In-State') {
        console.log(this.taxCharge[0]);
        // this.TaxInside(name);
      } else {
        console.error("no TAxes:");
      }
    },
    salesTax() {
      let queryParams = {
        fields: JSON.stringify(["*"]),
        limit_page_length: "none",
        filters: JSON.stringify([]),
      };
      axios
        .get(ApiUrls.resource + "/" + Doctypes.taxes, {
          params: queryParams,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          this.taxCharge = response.data.data;

        })
        .catch((error) => {
          console.error("Error fetching item data:", error.message); // Logging the error message
        });
    },
    // TaxInside(taxCharge) {

    //   let queryParams = {
    //     fields: JSON.stringify(["*"]),
    //     limit_page_length: "none",
    //     filters: JSON.stringify([]),
    //   };
    //   axios
    //     .get(ApiUrls.resource + "/" + Doctypes.taxes + "/" + taxCharge.taxes, {
    //       params: queryParams,
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json",
    //       },
    //       withCredentials: true,
    //     })
    //     .then((response) => {
    //       this.insideTax = response.data.data;
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching item data:", error.message); // Logging the error message
    //     });
    // },

    // + "/" + tdx.name

  }
}
</script>

<style  scoped></style>
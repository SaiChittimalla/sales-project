<template>
  <router-view></router-view>
</template>


<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
export default {
  data() {
    return {};
  },

  methods: {
    submitForm() {
      const data = {
        usr: this.formData.email,
        pwd: this.formData.password,
      };
      const url = `http://${this.ipAddress}:${this.port}/api/method/login`;

      axios
        .post(url, data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          console.log(response);
          toast.success("Login Successful", {
            position: "top-right",
          });

          if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(data));
            setTimeout(() => {
              this.$router.push({ name: "HomePage" });
            }, 1000);
          }
          this.setCookies(response.data);
        })
        .catch((error) => {
          toast.error("Invalid Credentials");
          console.error(error);
        });
    },
    setCookies(data) {
      document.cookie = `user_id=${data.email}; path=/`;
      document.cookie = `full_name=${data.full_name}; path=/`;
      if (data.sid) {
        document.cookie = `sid=${data.sid}; path=/`;
      }
    },
  },
};
</script>
<style >
* {
  font-family: "Montserrat" !important;
}
</style>
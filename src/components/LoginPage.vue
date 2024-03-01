<template >
  <div v-if="load" class="load  d-flex justify-content-center h-100  w-100   align-items-center   ">
    <div class="loader"></div>
  </div>
  <div>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="../assets/MorganLogo.svg" alt="Morgan" />
        </a>
      </div>
    </nav>


    <div class="d-flex justify-content-center position-relative  align-items-center">
      <div class="from-padding mt-5">
        <form @submit.prevent="submitForm()">
          <h4 class="login-tag">Login</h4>
          <p class="credential-tag">Enter valid credentials</p>
          <!-- <div class="mb-1">
          <label for="ipPort" class="form-label">IP Address :</label>
          <input type="text" id="ipPort" class="form-control" placeholder="192.168.1.177:8000" v-model="ipPort"
            @input="parseIpPort" />
        </div> -->
          <div class="mb-2 position-relative">
            <label for="Email" class="form-label">Username </label>
            <input type="text" class="form-control input-radius" name="Email" :class="{ 'is-invalid': errors.email }"
              id="Email" aria-describedby="emailHelpId" placeholder="Enter your username" v-model="formData.email"
              @input="validatemail" />
            <i class="bi bi-person"></i>
          </div>
          <div class="text-danger errsize my-1" v-if="errors.email">
            {{ errors.email }}
          </div>
          <div class="mb-2 position-relative">
            <label for="password" class="form-label">Password </label>
            <input :type="showPassword ? 'text' : 'password'" class="form-control input-radius" name="password"
              :class="{ 'is-invalid': errors.password }" id="password" placeholder="Enter your password"
              v-model="formData.password" @input="vaildatePassword" />
            <!-- <i class="ri-lock-line"></i> -->
            <i class="bi bi-lock"></i>

            <div class="eyes">
              <i v-show="!showPassword" class="bi bi-eye-slash-fill" @click="togglePasswordVisibility"></i>
              <i v-show="showPassword" class="bi bi-eye-fill" @click="togglePasswordVisibility"></i>
            </div>
          </div>
          <div class="text-danger errsize my-1" v-if="errors.password">
            {{ errors.password }}
          </div>

          <div class="text-end mt-3">
            <a href="http://192.168.1.177:8000/#forgot" class="forget-pass text-decoration-none">Forget Password?</a>
          </div>
          <!-- <button type="submit" class=" btn btn-white login">LOGIN</button> -->
          <!-- :disabled="!formData.email || !formData.password" -->

          <button type="submit" class="btn btn-white login" :disabled="!formData.email || !formData.password">
            <!-- !ipPort -->
            <div v-if="loading" class="spinner-border spinner-border-sm"></div>
            <span v-if="!loading"> LOGIN </span>
          </button>
        </form>
        <div class="bottom-div"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";
// import apiUrls from "@/shared/apiUrls";
import { ApiUrls } from "@/shared/apiUrls";

export default {
  name: "LoginPage",

  data() {
    return {
      formData: {
        email: "",
        password: "",
      },
      errors: {},
      showPassword: false,
      loading: false,
      ipPort: "",
      load: false
    };
  },
  mounted() {
    let user = localStorage.getItem("user");
    if (user) {
      this.$router.push({ name: "HomePage" });
    }
  },

  methods: {
    submitForm() {
      const data = {
        usr: this.formData.email,
        pwd: this.formData.password,
      };
      // const url = `http://${this.ipAddress}:${this.port}/api/method/login`;

      // axios
      //   .post(url, data, {
      //     headers: {
      //       "Content-Type": "application/json",
      //       'Accept': "application/json",
      //     },
      //     withCredentials: true,
      //   })

      axios
        .post(ApiUrls.login, data, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          withCredentials: true,
        })

        .then((response) => {
          console.log(response);
          this.load = true;

          // this.loading = true;

          if (response.status === 200) {
            this.load = true;
            localStorage.setItem("user", JSON.stringify(data));
            toast.success("Login Successful", {
              position: "top-right",
            });
            setTimeout(() => {
              this.$router.push({ name: "HomePage" });
            }, 1000);
          }
        })
        .catch((error) => {
          toast.error("Invalid Credentials");
          console.error(error);
        });
    },

    validatemail() {
      if (!this.formData.email) {
        this.errors.email = "Email requried";
        console.log("=========" + this.errors.email);
      }
      // else if (!this.formData.email.includes("@gmail.com")) {
      //   this.errors.email = "Invalid email format"
      // }
      else {
        delete this.errors.email;
      }
    },
    vaildatePassword() {
      if (!this.formData.password) {
        this.errors.password = "requried";
      }
      // else if (this.formData.password.length < 5) {
      //   this.errors.password = "password Must Be 5 Charaters";
      // }
      else {
        delete this.errors.password;
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    parseIpPort() {
      const parts = this.ipPort.split(":");
      this.ipAddress = parts[0] || "";
      this.port = parts[1] || "";
    },
  },
};
</script>
<style scoped>
* {
  font-family: "Montserrat" !important;
}

.loader {
  border: 10px #f3f3f3 dotted;
  border-radius: 50%;
  border-top: 10px dotted #3b43f9;
  width: 100px;
  height: 100px;
  -webkit-animation: spin 2s linear infinite;
  /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.load {
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.347);
}

.eyes {
  position: absolute;
  top: 56%;
  right: 5%;
  cursor: pointer;
}

.bi-person {
  position: absolute;
  top: 56%;
  left: 4%;
}

.ri-lock-line {
  position: absolute;
  top: 56%;
  left: 4%;
}

.bi-lock {
  position: absolute;
  top: 56%;
  left: 4%;
}

.errsize {
  font-size: 12px;
}

.is-invalid {
  border: 1px solid red;
}

.login-tag {
  color: #575757;

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.credential-tag {
  color: #9b9b9b;

  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.form-label {
  color: #777;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.form-control {
  width: 100%;
  height: 42px;
  border-radius: 4px;
  border: 1px solid #f4f4f4;
  background: #fcfdff;
  padding-left: 40px;
}

.form-control::-webkit-input-placeholder {
  color: #cbcbcb;

  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.forget-pass {
  color: #3b43f9 !important;

  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.login {
  width: 300px;
  height: 52px;
  border-radius: 30px;
  background: #3b43f9;
  color: #fff;

  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  margin-top: 70px;
}

.bottom-div {
  width: 100%;
  height: 267.195px;
  border-radius: 267.195px;
  background: #4461f2;
  filter: blur(158.5px);
  float: right;
}
</style>

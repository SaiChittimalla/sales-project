<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/MorganLogo.svg" alt="Morgan">
      </a>
    </div>
  </nav>

  <div class=" d-flex  justify-content-center  align-items-center ">
    <div class="from-padding mt-5 ">
      <form @submit.prevent="submitForm()">
        <h4 class="login-tag">Login</h4>
        <p class="credential-tag ">Enter valid credentials</p>
        <div class="mb-2 position-relative ">
          <label for="Email" class="form-label ">Username </label>
          <input type="text" class="form-control input-radius " name="Email" :class="{ 'is-invalid': errors.email }"
            id="Email" aria-describedby="emailHelpId" placeholder="Enter your username" v-model="formData.email"
            @input="validatemail">
          <i class="bi bi-person"></i>
        </div>
        <div class="text-danger errsize my-1 " v-if="errors.email">
          {{ errors.email }}
        </div>
        <div class="mb-2 position-relative">
          <label for="password" class="form-label ">Password </label>
          <input :type="showPassword ? 'text' : 'password'" class="form-control input-radius" name="password"
            :class="{ 'is-invalid': errors.password }" id="password" placeholder="Enter your password"
            v-model="formData.password" @input="vaildatePassword">
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
        <div>
          <label for="ipAddress">IP Address:</label>
          <input type="text" id="ipAddress" class="form-control" v-model="ipAddress" @input="formatIpAddress">
        </div>
        <label for="port">Port:</label>
        <input type="text" id="port" class="form-control" v-model="port">

        <div class=" text-end mt-3">

          <a href="" class="forget-pass text-decoration-none  ">Forget
            Password?</a>
        </div>
        <!-- <button type="submit" class=" btn btn-white login">LOGIN</button> -->
        <!-- :disabled="!formData.email || !formData.password" -->

        <button type="submit" class=" btn btn-white login" :disabled="!formData.email || !formData.password">
          <div v-if="loading" class=" spinner-border  spinner-border-sm ">
          </div>
          <span v-if="!loading"> LOGIN
          </span>
        </button>
      </form>
      <div class="bottom-div">

      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import axios from 'axios';

export default {
  name: 'LoginPage',

  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      errors: {},
      showPassword: false,
      loading: false,
      ipAddress: '',
      port: ''
    }
  },
  mounted() {
    let user = localStorage.getItem('user');
    if (user) {
      this.$router.push({ name: 'HomePage' })
    }
  },
  methods: {

    submitForm() {
      this.loading = true;
      const data = {
        usr: this.formData.email,
        pwd: this.formData.password,
      };
      const url = `http://${this.ipAddress}:${this.port}/api/method/login`;

      axios.post(url, data)
        .then((response) => {
          console.log(response);
          toast.success("Login Successful", {
            position: "top-right",
          });

          if (response.status === 200) {
            this.loading = false;
            localStorage.setItem("user", JSON.stringify(data));
            setTimeout(() => {
              this.$router.push({ name: 'HomePage' });
            }, 1000);
          }
        })
        .catch((error) => {
          this.loading = false;
          toast.error("Invalid Credentials");
          console.error(error);
        });

    },

    // submitForm() {
    //   this.loading = true;  // Update to set loading to true
    //   const data = {
    //     usr: this.formData.email,
    //     pwd: this.formData.password,
    //   };
    //   axios.post('http://192.168.1.177:8000/api/method/login', { ...data })
    //     .then((response) => {
    //       console.log(response);
    //       toast.success("Login Successfull"), {
    //         position: "top-right",
    //       };
    //       if (response.status == 200) {
    //         this.loading = false;
    //         localStorage.setItem("user", JSON.stringify(data))
    //         setTimeout(() => {
    //           this.$router.push({ name: 'HomePage' })
    //         }, 1000)

    //       }
    //     })
    //     .catch((error) => {
    //       this.loading = false;  // Set loading to false on error
    //       toast.error("Invalid Credentials");
    //       console.error(error);
    //     });

    // },
    validatemail() {
      if (!this.formData.email) {
        this.errors.email = "Email requried"
        console.log('=========' + this.errors.email);
      }
      // else if (!this.formData.email.includes("@gmail.com")) {
      //   this.errors.email = "Invalid email format"
      // }
      else {
        delete this.errors.email;
      }
    }
    ,
    vaildatePassword() {
      if (!this.formData.password) {
        this.errors.password = "requried";

      } else if (this.formData.password.length < 5) {
        this.errors.password = "password Must Be 5 Charaters";
      }
      else {
        delete this.errors.password;
      }
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword;
    },
    formatIpAddress() {
      this.ipAddress = this.ipAddress.replace(/[^\d.]/g, '');
      let parts = this.ipAddress.split('.');
      parts = parts.map(part => part.slice(0, 3));
      parts = parts.slice(0, 4);
      this.ipAddress = parts.join('.');
    }

  }
}

</script>
<style scoped>
* {
  font-family: 'Montserrat' !important;

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
  color: #9B9B9B;

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
  border: 1px solid #F4F4F4;
  background: #FCFDFF;
  padding-left: 40px;
}

.form-control::-webkit-input-placeholder {
  color: #CBCBCB;

  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
}

.forget-pass {
  color: #3B43F9 !important;

  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.login {
  width: 300px;
  height: 52px;
  border-radius: 30px;
  background: #3B43F9;
  color: #FFF;

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
  background: #4461F2;
  filter: blur(158.5px);
  float: right;
}
</style>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/Morgan-Logo.jpg" alt="Morgan">
      </a>
    </div>
  </nav>

  <div class=" d-flex  justify-content-center  align-items-center ">
    <div class="from-padding mt-5 ">
      <form @submit.prevent="submitForm">
        <h4 class="login-tag">Login</h4>
        <p class="credential-tag ">Enter valid credentials</p>
        <div class="mb-3 position-relative ">
          <label for="Email" class="form-label ">Username </label>
          <input type="email" class="form-control input-radius mb-3 " name="Email" :class="{ 'is-invalid': errors.email }"
            id="Email" aria-describedby="emailHelpId" placeholder="Enter your username" v-model="formData.email"
            @input="validatemail">
          <i class="bi bi-person"></i>
        </div>
        <div class="text-danger errsize" v-if="errors.email">
          {{ errors.email }}
        </div>
        <div class="mb-3 position-relative">
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
        <div class="text-danger" v-if="errors.password">
          {{ errors.password }}
        </div>

        <a href="" class="forget-pass text-decoration-none d-flex justify-content-end mt-3">Forget
          Password?</a>
        <!-- <button type="submit" class=" btn btn-white login">LOGIN</button> -->
        <!-- :disabled="!formData.email || !formData.password" -->

      </form>
      <router-link to="/HomePage"><button type="submit" class=" btn btn-white login">LOGIN</button></router-link>
      <div class="bottom-div">

      </div>
    </div>
  </div>
</template>

<script>
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      errors: {},
      userName: "sai@gmail.com",
      password: "root123",
      showPassword: false,
    }
  }
  , methods: {
    submitForm() {
      console.log("username: " + this.formData.email);
      console.log("password: " + this.formData.password);
      console.log(this.formData);
      if (this.formData.email == this.userName && this.formData.password == this.password) {
        toast.success("Login Successfull", { autoClose: 10000, });
        this.$router.push({
          path: '/homepage',
          query: {
            page: 'HomePage'
          }
        });
      } else {
        toast.error("Invalid Credentials")
      }


    },
    validatemail() {
      if (!this.formData.email) {
        this.errors.email = "Email requried"
        console.log('=========' + this.errors.email);
      } else if (!this.formData.email.includes("@gmail.com")) {
        this.errors.email = "Invalid email format"
      }
      else {
        delete this.errors.email;
      }
    }
    ,
    vaildatePassword() {
      // console.log(this.FormData.password);
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

  }
}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  font-size: 15px;
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

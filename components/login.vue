<template>
  <div>
    <section class="contact-one">
      <div class="container">
        <h3 class="contact-one__title text-center">
          <img
            src="/assets/images/CEC2_120211.png"
            class="h-25 w-25"
          ><br>Welcome to Cedu 
        </h3><!-- /.contact-one__title -->

        <!-- alerts -->
        <div v-if="alertMessage">
          <alerts
            :message="alertMessage"
            :success="success"
          />
        </div>
        <form
          class="contact-one__form contact-form-validated"
          @submit.prevent="signIn"
        >
          <div class="row low-gutters">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="email"
                type="text"
                placeholder="Email Address"
                required
              >
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="password"
                type="password"
                placeholder="********"
                required
              >
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="text-center">
                <button
                  type="submit"
                  class="contact-one__btn thm-btn"
                >
                  <div class=" d-flex flex-row justify-content-center align-items-center">
                    <div
                      v-if="isLoading"
                      class="spinner-border"
                      role="status"
                    >
                      <span class="sr-only">Signing in...</span>
                    </div>
                    <span v-if="isLoading" class="mx-2">Signing in...</span>
                    <span v-if="!isLoading">Log In</span>
                  </div>
                </button>
              </div><!-- /.text-center -->
            </div><!-- /.col-lg-12 -->
            <nuxt-link
              class="blackLinks"
              to="/users/forgot"
            >
              forgot your password?
            </nuxt-link>
                      
            <!-- <nuxt-link class="blackLinks " to="/users/register">New Account?</nuxt-link> -->
          </div><!-- /.row -->
        </form><!-- /.contact-one__form -->
        <div class="result text-center" /><!-- /.result -->
      </div><!-- /.container -->
    </section>
  </div>
</template>

<script>
import alerts from '@/components/alerts.vue'
export default {
  name: "LogIn",
  components: {
    alerts
  },
  auth: false,
  data() {
    return {
      alertMessage: '',
      success: null,
      email: '',
      password: '',
      isLoading: false,
    }
  },
  methods: {
    async signIn() {
      try {
        this.isLoading = true;
        let response = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          }
        });
        if (response.data.success == true) {
          this.success = true;
          this.isLoading = false;
          this.alertMessage = response.data.message;
          this.$router.go(-1);
        } else {
          this.success = false;
          this.isLoading = false;
          this.alertMessage = response.data.message;
        }
      } catch (err) {
        this.success = false;
        this.isLoading = false;
        this.alertMessage = "Somthing went wrong";
        console.log(err);
      }
    }
  }
}
</script>

<style scoped>
a{
    text-decoration: none;
}

.blackLinks{
    color: #2DA297;
}
</style>

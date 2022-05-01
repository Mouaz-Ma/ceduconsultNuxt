<template>
    <div>
<section class="contact-one">
          <div class="container">
              <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png"  class="h-25 w-25"/><br>Welcome to Cedu 
                   </h3><!-- /.contact-one__title -->

                               <!-- alerts -->
            <div v-if="alertMassge">
            <alerts :message=alertMassge :success=success />
            </div>
              <form @submit.prevent="signIn" class="contact-one__form contact-form-validated">
                  <div class="row low-gutters">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" placeholder="Email Address" v-model="email" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="password" v-model="password" placeholder="********" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="text-center">
                              <button type="submit" class="contact-one__btn thm-btn">Log In</button>
                          </div><!-- /.text-center -->
                      </div><!-- /.col-lg-12 -->
                      <nuxt-link class="blackLinks" to="/users/forgot">forgot your password?</nuxt-link>
                      <hr>
                      <nuxt-link class="blackLinks " to="/users/register">New Account?</nuxt-link>
                  </div><!-- /.row -->
              </form><!-- /.contact-one__form -->
              <div class="result text-center"></div><!-- /.result -->
          </div><!-- /.container -->
      </section>

    </div>
</template>

<script>
import alerts from '@/components/alerts.vue'
export default {
  components: {
    alerts
  },
  auth: false,
  name: "logIn",
  data() {
    return {
      alertMassge: '',
      success: false,
      email: '',
      password: '',
    }
  },
  methods: {
    async signIn() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            email: this.email,
            password: this.password,
          }
        })
        if (response.data.success == true) {
          this.success = true
          this.alertMassge = response.data.message
          this.$router.go(-1)
        } else {
          this.success = false
          this.alertMassge = response.data.message
        }
      } catch (err) {
        this.success = false
        this.alertMassge = "somthing went wrong"
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

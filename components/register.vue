<template>
    <div>
<section class="contact-one">
          <div class="container">
              <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png"  class="h-25 w-25"/><br>Sign up with Cedu 
                   </h3><!-- /.contact-one__title -->

            <!-- alerts -->
            <div v-if="alertMassge">
            <alerts :message=alertMassge :success=success />
            </div>

              <form @submit.prevent="register" class="contact-one__form contact-form-validated">
                  <div class="row low-gutters">
                      <!-- userName -->
                          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" placeholder="User Name" v-model="username" required>
                      </div>
                      <!-- /.col-lg-6 -->
                      <!-- email -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" placeholder="Email Address" v-model="email" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="password" v-model="password" placeholder="********" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="text-center">
                              <button class="contact-one__btn thm-btn">Sign Up!</button>
                          </div><!-- /.text-center -->
                      </div><!-- /.col-lg-12 -->
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
  data() {
    return {
      alertMassge: '',
      success: false,
      username: '',
      email: '',
      password: '',
      strategy: '',
      checked: false,
      notchecked: "",
    }
  },
  auth: false,
  name: "Register",
  methods: {
    async register() {
      try {
        let data = {
          username: this.username,
          email: this.email,
          password: this.password,
          strategy: "local",
        };
        let response = await this.$axios.post('/api/users/register', data);
        console.log(response.data)
        if (response.data.success == true) {
          this.success =true
          this.alertMassge = response.data.message
          this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password,
            }
          }).then(() => {
            setTimeout(() => { this.$router.go(-1) }, 4000);

          }).catch((err) => {
            console.log(err)
          });
        } else if (response.data.success == false){
            this.success = false
            this.alertMassge = response.data.message
        }
      } catch (err) {
        console.log(err);
      }
    },
  }
}

</script>

<style scoped>

</style>

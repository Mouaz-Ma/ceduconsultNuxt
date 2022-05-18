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
              <form @submit.prevent="passReset" class="contact-one__form contact-form-validated">
                  <div class="row low-gutters">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="password" v-model="password" placeholder="type your password please"  required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="password" v-model="confirmPassword" placeholder="Confirm your password here" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="text-center">
                              <button type="submit" class="contact-one__btn thm-btn">confirm</button>
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
  auth: false,
  name: "PasswordReset",
  data() {
    return {
    alertMassge: '',
    success: false,
    confirmPassword: '',
    password: '',
    }
  },
  methods: {
    async passReset() {
      try {
            if(this.password === this.confirmPassword && this.password != null){
            let response = await this.$axios.post('/api/users/passReset/'+this.$route.params.rest , {password: this.password});
                if (response.data.success == true) {
                    this.$auth.loginWith('local', {
                        data: {
                        email: response.data.email,
                        password: this.password,
                        }
                    })
                this.success = true
                this.alertMassge = response.data.message
                setTimeout(() => { this.$router.push( {path : '/'}) }, 3000);
                } else {
                this.success = false
                this.alertMassge = response.data.message
                }
            } else {
                this.success = false
                this.alertMassge = "the password didn't match"
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

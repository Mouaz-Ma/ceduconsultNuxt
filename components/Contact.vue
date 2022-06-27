<template>
<v-app>
      <section class="contact-info-one">
          <div class="container">
              <div class="row">
                  <div class="col-lg-4">
                      <div class="contact-info-one__single wow fadeInDown animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInDown;">
                          <div class="contact-info-one__icon"><i class="kipso-icon-manager"></i><!-- /.kipso-icon-manager -->
                          </div><!-- /.contact-info-one__icon -->
                          <h2 class="contact-info-one__title">About Us </h2><!-- /.contact-info-one__title -->
                          <p class="contact-info-one__text">Lorem ipsum is simply free text <br> available in the market to
                              use <br>
                              deliver satisfaction.</p><!-- /.contact-info-one__text -->
                      </div><!-- /.contact-info-one__single -->
                  </div><!-- /.col-lg-4 -->
                  <div class="col-lg-4">
                      <div class="contact-info-one__single wow fadeInUp animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInUp;">
                          <div class="contact-info-one__icon"><i class="kipso-icon-placeholder"></i>
                              <!-- /.kipso-icon-manager -->
                          </div><!-- /.contact-info-one__icon -->
                          <h2 class="contact-info-one__title">Our Address</h2><!-- /.contact-info-one__title -->
                          <p class="contact-info-one__text">855 Road Broklyn Street, <br>
                              600 New York, United States of <br> America</p><!-- /.contact-info-one__text -->
                      </div><!-- /.contact-info-one__single -->
                  </div><!-- /.col-lg-4 -->
                  <div class="col-lg-4">
                      <div class="contact-info-one__single wow fadeInDown animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInDown;">
                          <div class="contact-info-one__icon"><i class="kipso-icon-contact"></i><!-- /.kipso-icon-manager -->
                          </div><!-- /.contact-info-one__icon -->
                          <h2 class="contact-info-one__title">Contact Info</h2><!-- /.contact-info-one__title -->
                          <p class="contact-info-one__text">needhelp@kipso.com <br>
                              444 888 0000 <br> &nbsp; </p><!-- /.contact-info-one__text -->
                      </div><!-- /.contact-info-one__single -->
                  </div><!-- /.col-lg-4 -->
              </div><!-- /.row -->
          </div><!-- /.container -->
      </section>
<section class="contact-one">
          <div class="container">
              <h2 class="contact-one__title text-center">Get in touch <br>
                  with us</h2><!-- /.contact-one__title -->
                                                 <!-- alerts -->
            <div v-if="alertMassge">
            <alerts :message=alertMassge :success=success />
            </div>

              <form @submit.prevent="contactForm" class="contact-one__form contact-form-validated">
                  <div class="row low-gutters">
                      <div class="col-lg-6">
                          <input type="text" v-model="name" placeholder="Your Name" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-6">
                          <input type="email" placeholder="Email Address" v-model="email" required>
                      </div><!-- /.col-lg-6 -->
                    <div class="col-lg-12">
                      <vue-tel-input-vuetify 
                      v-model="phone" 
                        placeholder="Phone Number"
                        :validate-on-blur='true'
                        :input-options="{showDialCode: true, tabIndex: 0}"
                        :valid-characters-only='true'
                        mode="international"
                        required
                      ></vue-tel-input-vuetify>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12">
                          <textarea placeholder="Write Message" v-model="message"></textarea>
                          <div class="text-center">
                              <button :disabled="isLoading" type="submit" class="contact-one__btn thm-btn">Submit Comment</button>
                          </div><!-- /.text-center -->
                      </div><!-- /.col-lg-12 -->
                  </div><!-- /.row -->
              </form><!-- /.contact-one__form -->
              <div class="result text-center"></div><!-- /.result -->
          </div><!-- /.container -->
      </section>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd" class="google-map__contact" allowfullscreen=""></iframe>
    </v-app>
</template>

<script>
import alerts from '@/components/alerts.vue'
    export default {
    auth: false,
    name: "Contact",
      data() {
        return {
        alertMassge: '',
        success: false,
        name: '',
        email: '',
        phone: '',
        message: '',
        isLoading: false,
        }
      },
        components: {
    alerts,
  },
         methods: {
    contactForm: async function () {
        try {
          this.isLoading = true;
        let data = {
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        }
        let response = await this.$axios.post('/api/users/contact', data);
        console.log(response.data)
        if (response.data.success) {
            this.success = true
            this.isLoading = false;
            this.alertMassge = response.data.message
        } else {
            this.isLoading = false;
            this.alertMassge = response.data.message
        }
        //   if response is ok flash ok if not flash error
        } catch (err) {
        this.successMessage = 'false'
        console.log(err)
        }
    },
    },
    }
    
</script>

<style scoped>

</style>

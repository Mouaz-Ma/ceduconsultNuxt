<template>
  <v-app>

    <section class="contact-one">
      <div class="container">
        <h2 class="contact-one__title text-center">{{ $t('elearning.contact.subheader1') }}<br>
          {{ $t('elearning.contact.subheader2') }}</h2><!-- /.contact-one__title -->
        <!-- alerts -->
        <div v-if="alertMassge">
          <alerts :message="alertMassge" :success="success" />
        </div>

        <form @submit.prevent="contactForm" class="contact-one__form contact-form-validated">
          <div class="row low-gutters">
            <div class="col-lg-6">
              <input type="text" v-model="name" :placeholder="$t('elearning.contact.form.name')" required>
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-6">
              <input type="email" :placeholder="$t('elearning.contact.form.email')" v-model="email" required>
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12">
              <vue-tel-input-vuetify
                v-model="phone"
                :placeholder="$t('elearning.contact.form.phone')"
                :validate-on-blur="true"
                :input-options="{showDialCode: true, tabIndex: 0}"
                :valid-characters-only="true"
                mode="international"
                :required="true"
                background-color="transparent"
              ></vue-tel-input-vuetify>
            </div><!-- /.col-lg-6 -->

            <div class="col-lg-12">
              <textarea :placeholder="$t('elearning.contact.form.message')" v-model="message"></textarea>
              <div class="text-center">
                <button :disabled="isLoading" type="submit" class="contact-one__btn thm-btn">{{ $t('elearning.contact.form.button') }}</button>
              </div><!-- /.text-center -->
            </div><!-- /.col-lg-12 -->
          </div><!-- /.row -->
        </form><!-- /.contact-one__form -->
        <div class="result text-center"></div><!-- /.result -->
      </div><!-- /.container -->
    </section>
    <section class="contact-info-one">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="contact-info-one__single wow fadeInDown animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInDown;">
              <div class="contact-info-one__icon"><i class="kipso-icon-manager"></i><!-- /.kipso-icon-manager -->
              </div><!-- /.contact-info-one__icon -->
              <h2 class="contact-info-one__title">{{ $t('elearning.contact.about.title') }}</h2><!-- /.contact-info-one__title -->
              <p class="contact-info-one__text">{{ $t('elearning.contact.about.p1') }}<br> {{ $t('elearning.contact.about.p2') }}
              </p><!-- /.contact-info-one__text -->
            </div><!-- /.contact-info-one__single -->
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <div class="contact-info-one__single wow fadeInUp animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInUp;">
              <div class="contact-info-one__icon"><i class="kipso-icon-placeholder"></i>
                <!-- /.kipso-icon-manager -->
              </div><!-- /.contact-info-one__icon -->
              <h2 class="contact-info-one__title">{{ $t('elearning.contact.address.title') }}</h2><!-- /.contact-info-one__title -->
              <p class="contact-info-one__text"> {{ $t('elearning.contact.address.add1') }} <br>
                {{ $t('elearning.contact.address.add2') }} <br> {{ $t('elearning.contact.address.add3') }}</p><!-- /.contact-info-one__text -->
            </div><!-- /.contact-info-one__single -->
          </div><!-- /.col-lg-4 -->
          <div class="col-lg-4">
            <div class="contact-info-one__single wow fadeInDown animated" data-wow-duration="1500ms" style="visibility: visible; animation-duration: 1500ms; animation-name: fadeInDown;">
              <div class="contact-info-one__icon"><i class="kipso-icon-contact"></i><!-- /.kipso-icon-manager -->
              </div><!-- /.contact-info-one__icon -->
              <h2 class="contact-info-one__title">{{ $t('elearning.contact.info.title') }}</h2><!-- /.contact-info-one__title -->
              <p class="contact-info-one__text">{{ $t('elearning.contact.info.mail') }}<br>
                {{ $t('elearning.contact.info.phone') }}<br> &nbsp; </p><!-- /.contact-info-one__text -->
            </div><!-- /.contact-info-one__single -->
          </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
      </div><!-- /.container -->
    </section>

    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
      class="google-map__contact" allowfullscreen=""
    ></iframe>
  </v-app>
</template>

<script>
import alerts from '@/components/alerts.vue'

export default {
  auth: false,
  name: "ContactComponent",
  data() {
    return {
      alertMassge: '',
      success: false,
      name: '',
      email: '',
      phone: null,
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

<style>
.vti__flag {
  margin: 5px 10px 13px 30px;
  z-index: 7 !important;
}
</style>

<template>
  <div>
    <b-row align-h="center">
      <b-col sm="12" md="6" lg="6" class="thm-base-bg text-center pt-5 ">
        <b-row align-h="center" align-v="center" class="fullHeight">
          <b-col>
            <b-row align-h="center">
              <div class="cta-two__icon mb-5">
                <span><i class="kipso-icon-professor" /><!-- /.kipso-icon-professor --></span>
              </div><!-- /.cta-two__icon -->
            </b-row>
            <div class="cta-two__content">
              <h2 class="cta-two__title">
                {{ title1 }}
              </h2><!-- /.cta-two__title -->
              <p class="cta-two__text">
                {{ intro1 }}
              </p><!-- /.cta-two__text -->
                            <p class="cta-two__text">
                            </p><!-- /.cta-two__text -->
                            <nuxt-link class="thm-btn cta-two__btn" :to="link1">{{ $t('home.btn-left') }}</nuxt-link>
            </div><!-- /.cta-two__content -->
          </b-col>
        </b-row><!-- /.cta-two__single -->
      </b-col><!-- /.col-lg-6 -->

      <b-col sm="12" md="6" lg="6" class="thm-base-bg-2 text-center pt-5 ">
        <b-row align-h="center" align-v="center" class="fullHeight">
          <b-col>
            <b-row align-h="center">
              <div class="cta-two__icon mb-5">
                <span><i class="kipso-icon-knowledge" /><!-- /.kipso-icon-knowledge --></span>
              </div><!-- /.cta-two__icon -->
            </b-row>
            <div class="cta-two__content">
              <h2 class="cta-two__title">
                {{ title2 }}
              </h2><!-- /.cta-two__title -->
              <p class="cta-two__text">
                {{ intro2 }}
              </p><!-- /.cta-two__text -->
              <nuxt-link class="thm-btn cta-two__btn" :to="link2">{{ $t('home.btn-right') }}</nuxt-link>
            </div><!-- /.cta-two__content -->
          </b-col>
        </b-row><!-- /.cta-two__single -->
      </b-col><!-- /.col-lg-6 -->
    </b-row><!-- /.row no-gutters -->
  </div><!-- /.container-fluid -->
</template>

<script>
  export default {
    auth: false,
    name: "CallToActionTwo",
    props: {
      link1: {
        type: String,
        default: null
      },
      link2: {
        type: String,
        default: null
      },
      title1: {
        type: String,
        default: null
      },
      title2: {
        type: String,
        default: null
      },
      intro1: {
        type: String,
        default: null
      },
      intro2: {
        type: String,
        default: null
      }
    }
  }

</script>

<style scoped>
  .fullHeight {
    height: 100vh;
  }

  .cta-two__single {
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
.kipso-icon-knowledge{
  color: #2da397;
}
</style>

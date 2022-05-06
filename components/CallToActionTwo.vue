<template>
  <div class="cta-two">
      <div class="container-fluid">
          <div class="row no-gutters">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 thm-base-bg fullHeight">
                  <div class="cta-two__single align-middle">
                      <div class="cta-two__icon">
                          <span><i class="kipso-icon-professor"></i><!-- /.kipso-icon-professor --></span>
                      </div><!-- /.cta-two__icon -->
                      <div class="cta-two__content">
                          <h2 class="cta-two__title">{{title1}}</h2><!-- /.cta-two__title -->
                          <p class="cta-two__text">{{intro1}}</p><!-- /.cta-two__text -->
                              <a :href=link1 class="thm-btn cta-two__btn">Start Your Journey</a><!-- /.thm-btn cta-two__btn -->
                      </div><!-- /.cta-two__content -->
                  </div><!-- /.cta-two__single -->
              </div><!-- /.col-lg-6 -->
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 thm-base-bg-2 fullHeight">
                  <div class="cta-two__single align-middle">
                      <div class="cta-two__icon">
                          <span><i class="kipso-icon-knowledge"></i><!-- /.kipso-icon-knowledge --></span>
                      </div><!-- /.cta-two__icon -->
                      <div class="cta-two__content">
                          <h2 class="cta-two__title">{{title2}}</h2><!-- /.cta-two__title -->
                          <p class="cta-two__text">{{intro2}}</p><!-- /.cta-two__text -->

                          <a :href=link2 class="thm-btn cta-two__btn">Start Learning</a><!-- /.thm-btn cta-two__btn -->
                      </div><!-- /.cta-two__content -->
                  </div><!-- /.cta-two__single -->
              </div><!-- /.col-lg-6 -->
          </div><!-- /.row no-gutters -->
      </div><!-- /.container-fluid -->
  </div>
</template>

<script>
    export default {
    auth: false,
        name: "CallToActionTwo",
        props: {link1: String, link2: String, title1: String, title2: String, intro1: String, intro2: String}
    }
</script>

<style scoped>
.fullHeight{
    height: 100vh;
}

.cta-two__single{
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
}

</style>

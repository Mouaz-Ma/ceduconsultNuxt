<template>
  <section class="video-three">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="row">
            <div class="col-md-6">
              <div class="video-three__fact thm-base-bg">
                <i class="kipso-icon-knowledge" /><!-- /.kipso-icon-knowledge -->
                <p class="video-three__fact-count counter">
                  24820
                </p><!-- /.video-three__fact-count -->
                <p class="video-three__fact-text">
                  {{ $t('university.video-three.courses') }}
                </p><!-- /.video-three__fact-text -->
              </div><!-- /.video-three__fact -->
            </div><!-- /.col-md-6 -->
            <div class="col-md-6">
              <div class="video-three__fact thm-base-bg-2">
                <i class="kipso-icon-professor" /><!-- /.kipso-icon-knowledge -->
                <p class="video-three__fact-count counter">
                  4280
                </p><!-- /.video-three__fact-count -->
                <p class="video-three__fact-text">
                  {{ $t('university.video-three.expert') }}
                </p><!-- /.video-three__fact-text -->
              </div><!-- /.video-three__fact -->
            </div><!-- /.col-md-6 -->
          </div><!-- /.row -->
          <div class="row">
            <div class="col-lg-12">
              <div class="video-three__image">
                <img
                  src="/assets/images/fact-2-1.jpg"
                  class="img-fluid"
                  alt=""
                >
              </div><!-- /.video-three__image -->
            </div><!-- /.col-lg-12 -->
          </div><!-- /.row -->
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-6">
          <div class="video-three__box">
            <img src="@/static/assets/images/video-1-2.jpg" alt="video-1-2" width="100%" height="100%" />
            <h2 class="video-three__title">
              {{ $t('university.video-three.sub-1') }} <br>
              {{ $t('university.video-three.sub-2') }} <br>
              {{ $t('university.video-three.sub-3') }}
            </h2><!-- /.video-three__title -->
            <div class="video-three__btn-box">
              <a
                href="/contact"
                class="video-three__popup"
              ><i class="fas fa-arrow-right" /><!-- /.fas fa-play --></a>
            </div><!-- /.video-three__btn-box -->
            <!-- /.video-three__btn -->
          </div><!-- /.video-three__box -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
    auth: false,
        name: "VideoThree"
    }
</script>

<style scoped>

</style>

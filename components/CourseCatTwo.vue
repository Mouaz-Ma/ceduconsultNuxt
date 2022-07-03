<template>
  <section class="course-category-two">
    <div class="container text-center">
      <div class="inner-container">
        <div class="course-category-two__carousel owl-carousel owl-theme">
          <div class="item">
            <div class="course-category-two__single color-1">
              <div class="course-category-two__icon">
                <i class="kipso-icon-desktop" /><!-- /.kipso-icon-camera -->
              </div><!-- /.course-category-two__icon -->
              <h3 class="course-category-two__title">
                <a href="#">{{ $t('elearning.carousel-two.schedule') }}</a>
              </h3>
              <!-- /.course-category-two__title -->
            </div><!-- /.course-category-two__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-category-two__single color-2">
              <div class="course-category-two__icon">
                <i class="kipso-icon-training" /><!-- /.kipso-icon-camera -->
              </div><!-- /.course-category-two__icon -->
              <h3 class="course-category-two__title">
                <a href="#">{{ $t('elearning.carousel-two.lessons') }}</a>
              </h3>
              <!-- /.course-category-two__title -->
            </div><!-- /.course-category-two__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-category-two__single color-3">
              <div class="course-category-two__icon">
                <i class="kipso-icon-strategy" /><!-- /.kipso-icon-camera -->
              </div><!-- /.course-category-two__icon -->
              <h3 class="course-category-two__title">
                <a href="#">{{ $t('elearning.carousel-two.progression') }}</a>
              </h3>
              <!-- /.course-category-two__title -->
            </div><!-- /.course-category-two__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-category-two__single color-4">
              <div class="course-category-two__icon">
                <i class="kipso-icon-knowledge" /><!-- /.kipso-icon-camera -->
              </div><!-- /.course-category-two__icon -->
              <h3 class="course-category-two__title">
                <a href="#">{{ $t('elearning.carousel-two.levels') }}</a>
              </h3>
              <!-- /.course-category-two__title -->
            </div><!-- /.course-category-two__single -->
          </div><!-- /.item -->
        </div><!-- /.course-category-two__carousel owl-carousel owl-theme -->
      </div><!-- /.inner-container -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "CourseCatTwo",

  auth: false,

  mounted() {
    setTimeout(() => {
      $(".owl-carousel").owlCarousel({
        navText: ['<i class="kipso-icon-left-arrow"></i>','<i class="kipso-icon-right-arrow"></i>']
      })
    }, 0);
  }
}
</script>

<style scoped>

</style>

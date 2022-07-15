<template>
  <section class="slider-three">
<!--    <img src="/assets/images/slider-3-icon-1-1.png" class="slider-three__icon-1" alt="slider-3-icon-1-1.png">-->
<!--    <img src="/assets/images/slider-3-icon-1-2.png" class="slider-three__icon-2" alt="slider-3-icon-1-2.png">-->
<!--    <img src="/assets/images/slider-3-icon-1-3.png" class="slider-three__icon-3" alt="slider-3-icon-1-3.png">-->
<!--    <img src="/assets/images/slider-3-icon-1-4.png" class="slider-three__icon-4" alt="slider-3-icon-1-4.png">-->
<!--    <img src="/assets/images/slider-3-icon-1-5.png" class="slider-three__icon-5" alt="slider-3-icon-1-5.png">-->
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="slider-three__content">
            <p class="slider-three__tag-line">{{ $t('university.banner.line1') }}</p><!-- /.slider-three__tag-line -->
            <h2 class="slider-three__title">{{ $t('university.banner.line2') }}</h2><!-- /.slider-three__title -->
            <p class="slider-three__text">- {{ $t('university.banner.line3') }} -</p>
            <!-- /.slider-three__text -->
            <br><br>
            <!-- <form action="#" class="slider-three__search">
                <input type="text" placeholder="Search courses">
                <button type="submit"><i class="kipso-icon-magnifying-glass"></i></button>
            </form> -->
          </div><!-- /.slider-three__content -->
        </div><!-- /.col-lg-6 -->
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "BannerThree",
  auth: false,
  mounted() {
    $('.slider-three').vegas({
      slides: [
        { src: "/assets/images/slider-3-1.jpg" },
        { src: "/assets/images/slider-3-2.jpg" },
      ],
      transition: 'slideDown2',
      timer: false
    });
  }
}
</script>

<style scoped>

</style>

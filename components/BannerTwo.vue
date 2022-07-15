<template>
  <div class="banner-wrapper">
    <section class="banner-two banner-carousel__one no-dots owl-theme owl-carousel">
      <div
        class="banner-two__slide banner-two__slide-one"
        :style="{backgroundImage: `url(/assets/images/slider-2-1.jpg)`}"
      >
        <div class="container">
          <div class="row no-gutters">
            <div class="col-xl-12">
              <p class="banner-two__tag-line">
                {{ $t('elearning.banner.quality') }}
              </p><!-- /.banner-two__tag-line -->
              <h3 class="banner-two__title banner-two__light-color">
                {{ $t('elearning.banner.read-learn') }} <br>
                {{ $t('elearning.banner.easy') }}
              </h3><!-- /.banner-two__title -->
              <a
                href="#"
                class="thm-btn banner-two__btn"
              >{{ $t('elearning.banner.learn-more') }}</a>
            </div><!-- /.col-xl-12 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.banner-two__slide -->

      <div
        class="banner-two__slide banner-two__slide-two"
        :style="{backgroundImage: `url(/assets/images/slider-2-2.jpg)`}"
      >
        <div class="container">
          <div class="row no-gutters">
            <div class="col-xl-12">
              <p class="banner-two__tag-line">
                {{ $t('elearning.banner.quality') }}
              </p><!-- /.banner-two__tag-line -->
              <h3 class="banner-two__title banner-two__light-color">
                {{ $t('elearning.banner.read-learn') }} <br>
                {{ $t('elearning.banner.easy') }}
              </h3><!-- /.banner-two__title -->
              <a
                href="#"
                class="thm-btn banner-two__btn"
              >{{ $t('elearning.banner.learn-more') }}</a>
            </div><!-- /.col-xl-12 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.banner-two__slide -->

      <div
        class="banner-two__slide banner-two__slide-three"
        :style="{backgroundImage: `url(/assets/images/slider-3-1.jpg)`}"
      >
        <div class="container">
          <div class="row no-gutters">
            <div class="col-xl-12">
              <p class="banner-two__tag-line">
                {{ $t('elearning.banner.quality') }}
              </p><!-- /.banner-two__tag-line -->
              <h3 class="banner-two__title banner-two__light-color">
                {{ $t('elearning.banner.read-learn') }} <br>
                {{ $t('elearning.banner.easy') }}
              </h3><!-- /.banner-two__title -->
              <a
                href="#"
                class="thm-btn banner-two__btn"
              >{{ $t('elearning.banner.learn-more') }}</a>
            </div><!-- /.col-xl-12 -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.banner-two__slide -->

    </section><!-- /.banner-three -->

    <div class="banner-carousel-btn">
      <a
        class="banner-carousel-btn__left-btn"
      ><i class="kipso-icon-left-arrow" /></a>
      <a
        class="banner-carousel-btn__right-btn"
      ><i class="kipso-icon-right-arrow" /></a>
    </div><!-- /.banner-carousel-btn -->
  </div>
</template>

<script>
export default {
  name: "BannerTwo",

  auth: false,

  mounted() {
    setTimeout(() => {
      $(".banner-carousel__one").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: true,
        nav: false,
        animateOut: 'slideOutDown',
        animateIn: 'fadeIn',
        active: true,
        smartSpeed: 1000,
        autoplay: 7000,
        responsive: {
          0: {
            items: 1
            // margin: 30
          },
          480: {
            items: 1
            // margin: 30
          },
          600: {
            items: 1
          },
          991: {
            items: 1
          },
          1000: {
            items: 1
          },
          1200: {
            items: 1
          }
        }
      })

      $('.banner-carousel-btn__left-btn').on('click', function () {
        $('.banner-carousel__one').trigger('next.owl.carousel');
        return false;
      });
      $('.banner-carousel-btn__right-btn').on('click', function () {
        $('.banner-carousel__one').trigger('prev.owl.carousel');
        return false;
      });
    }, 0);
  }
}
</script>

<style scoped>

</style>

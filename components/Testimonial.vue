<template>
  <section class="testimonials-one testimonials-one__home-three">
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-title__title">
          {{ $t('elearning.testimonials.title1') }} <br>
          {{ $t('elearning.testimonials.title2') }}
        </h2><!-- /.block-title__title -->
      </div><!-- /.block-title -->

      <div class="testimonials-one__carousel owl-carousel owl-theme">
        <div class="item">
          <div class="testimonials-one__single">
            <div class="testimonials-one__qoute">

            </div><!-- /.testimonials-one__qoute -->
            <p class="testimonials-one__text">
              {{ $t('elearning.testimonials.quote1.content') }}
            </p><!-- /.testimonials-one__text -->
            <img
              src="/assets/images/team-1-1.jpg"
              alt=""
              class="testimonials-one__img"
            >
            <h3 class="testimonials-one__name">
              {{ $t('elearning.testimonials.quote1.name') }}
            </h3><!-- /.testimonials-one__name -->
            <p class="testimonials-one__designation">
              {{ $t('elearning.testimonials.quote1.headline') }}
            </p><!-- /.testimonials-one__designation -->
          </div><!-- /.testimonials-one__single -->
        </div><!-- /.item -->

        <div class="item">
          <div class="testimonials-one__single">
            <div class="testimonials-one__qoute">

            </div><!-- /.testimonials-one__qoute -->
            <p class="testimonials-one__text">
              {{ $t('elearning.testimonials.quote2.content') }}
            </p><!-- /.testimonials-one__text -->
            <img
              src="/assets/images/team-1-2.jpg"
              alt=""
              class="testimonials-one__img"
            >
            <h3 class="testimonials-one__name">
              {{ $t('elearning.testimonials.quote2.name') }}
            </h3><!-- /.testimonials-one__name -->
            <p class="testimonials-one__designation">
              {{ $t('elearning.testimonials.quote2.headline') }}
            </p><!-- /.testimonials-one__designation -->
          </div><!-- /.testimonials-one__single -->
        </div><!-- /.item -->
        <div class="item">
          <div class="testimonials-one__single">
            <div class="testimonials-one__qoute">

            </div><!-- /.testimonials-one__qoute -->
            <p class="testimonials-one__text">
              {{ $t('elearning.testimonials.quote3.content') }}
            </p>
            <!-- /.testimonials-one__text -->
            <img
              src="/assets/images/team-1-3.jpg"
              alt=""
              class="testimonials-one__img"
            >
            <h3 class="testimonials-one__name">
              {{ $t('elearning.testimonials.quote3.name') }}
            </h3><!-- /.testimonials-one__name -->
            <p class="testimonials-one__designation">
              {{ $t('elearning.testimonials.quote3.headline') }}
            </p><!-- /.testimonials-one__designation -->
          </div><!-- /.testimonials-one__single -->
        </div><!-- /.item -->
        <div class="item">
          <div class="testimonials-one__single">
            <div class="testimonials-one__qoute">

            </div><!-- /.testimonials-one__qoute -->
            <p class="testimonials-one__text">
              {{ $t('elearning.testimonials.quote4.content') }}
            </p><!-- /.testimonials-one__text -->
            <img
              src="/assets/images/team-1-4.jpg"
              alt=""
              class="testimonials-one__img"
            >
            <h3 class="testimonials-one__name">
              {{ $t('elearning.testimonials.quote4.name') }}
            </h3><!-- /.testimonials-one__name -->
            <p class="testimonials-one__designation">
              {{ $t('elearning.testimonials.quote4.headline') }}
            </p><!-- /.testimonials-one__designation -->
          </div><!-- /.testimonials-one__single -->
        </div><!-- /.item -->
        <div class="item">
          <div class="testimonials-one__single">
            <div class="testimonials-one__qoute">

            </div><!-- /.testimonials-one__qoute -->
            <p class="testimonials-one__text">
              {{ $t('elearning.testimonials.quote5.content') }}
            </p><!-- /.testimonials-one__text -->
            <img
              src="/assets/images/team-1-5.jpg"
              alt=""
              class="testimonials-one__img"
            >
            <h3 class="testimonials-one__name">
              {{ $t('elearning.testimonials.quote5.name') }}
            </h3><!-- /.testimonials-one__name -->
            <p class="testimonials-one__designation">
              {{ $t('elearning.testimonials.quote5.headline') }}
            </p><!-- /.testimonials-one__designation -->
          </div><!-- /.testimonials-one__single -->
        </div><!-- /.item -->
      </div><!-- /.testimonials-one__carousel owl-carousel owl-theme -->
    </div><!-- /.container -->
  </section>
</template>

<script>
    export default {
      name: "TestimonialsComponent",
      auth: false,
      mounted() {
        $('.testimonials-one__carousel').owlCarousel({
          loop: true,
          margin: 2,
          nav: false,
          dots: true,
          autoWidth: false,
          autoplay: true,
          smartSpeed: 700,
          autoplayTimeout: 5000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            480: {
              items: 1
            },
            767: {
              items: 1
            },
            991: {
              items: 1
            },
            1000: {
              items: 2
            },
            1200: {
              items: 3
            }
          }
        })
      }
    }
</script>

<style scoped>

</style>

<template>
  <div>
    <section class="course-one__top-title home-two">
      <div class="container">
        <div class="block-title">
          <h2 class="block-title__title">
             {{ $t('elearning.courses.title1') }}<br>
            {{ $t('elearning.courses.title2') }}
          </h2><!-- /.block-title__title -->
          <p class="mt-5" style="font-size: 15pt">
            {{ $t('elearning.courses.description') }}
          </p>
        </div><!-- /.block-title -->
      </div><!-- /.container -->
    </section><!-- /.course-one__top-title -->

    <section class="course-one home-two">
      <img
        src="/assets/images/line-stripe.png"
        class="course-one__line"
        alt=""
      >
      <div class="container">
        <div class="course-one__carousel owl-carousel owl-theme">
          <div v-for="item in courses" :key="item.id" class="item" style="height: 800px; max-height: 800px">
            <div class="course-one__single color-1 m-2">
              <div class="course-one__image">
                <img
                  src="/assets/images/course-1-1.jpg"
                  alt=""
                >
                <i class="far fa-heart" /><!-- /.far fa-heart -->
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a
                  href="#"
                  class="course-one__category"
                >{{ item.category }}</a><!-- /.course-one__category -->

                <h2 class="course-one__title">
                  <a href="/course-details">{{ item.title }}</a>
                </h2>
                <!-- /.course-one__title -->
                <div class="course-one__stars">
                  <span class="course-one__stars-wrap">
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                    <i class="fa fa-star" />
                  </span><!-- /.course-one__stars-wrap -->
                  <span class="course-one__count">4.8</span><!-- /.course-one__count -->
                  <span class="course-one__stars-count">250</span><!-- /.course-one__stars-count -->
                </div><!-- /.course-one__stars -->
                <p class="heightProgram">{{ item.content }}</p>
                <div class="course-one__meta">
                  <a href="/course-details"><i class="far fa-clock" /> {{ item.duration }}</a>
                  <a href="/course-details"><i class="far fa-folder-open" /> {{ item.lectures }}</a>
                  <a href="/course-details">$18</a>
                </div><!-- /.course-one__meta -->
                <a
                  href="#"
                  class="course-one__link"
                >{{ item.preview }}</a><!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
        </div><!-- /.course-one__carousel -->
      </div><!-- /.container -->
    </section>
  </div>
</template>

<script>
    export default {
      name: "CourseTwo",
      auth: false,
      data() {
        return {
          courses: [
            {
              category: this.$t('elearning.courses.one.category'),
              title: this.$t('elearning.courses.one.title'),
              content: this.$t('elearning.courses.one.content'),
              duration: this.$t('elearning.courses.one.duration'),
              lectures: this.$t('elearning.courses.one.lectures'),
              preview: this.$t('elearning.courses.one.preview')
            },
            {
              category: this.$t('elearning.courses.two.category'),
              title: this.$t('elearning.courses.two.title'),
              content: this.$t('elearning.courses.two.content'),
              duration: this.$t('elearning.courses.two.duration'),
              lectures: this.$t('elearning.courses.two.lectures'),
              preview: this.$t('elearning.courses.two.preview')
            },
            {
              category: this.$t('elearning.courses.three.category'),
              title: this.$t('elearning.courses.three.title'),
              content: this.$t('elearning.courses.three.content'),
              duration: this.$t('elearning.courses.three.duration'),
              lectures: this.$t('elearning.courses.three.lectures'),
              preview: this.$t('elearning.courses.three.preview')
            },
            {
              category: this.$t('elearning.courses.four.category'),
              title: this.$t('elearning.courses.four.title'),
              content: this.$t('elearning.courses.four.content'),
              duration: this.$t('elearning.courses.four.duration'),
              lectures: this.$t('elearning.courses.four.lectures'),
              preview: this.$t('elearning.courses.four.preview')
            },
            {
              category: this.$t('elearning.courses.five.category'),
              title: this.$t('elearning.courses.five.title'),
              content: this.$t('elearning.courses.five.content'),
              duration: this.$t('elearning.courses.five.duration'),
              lectures: this.$t('elearning.courses.five.lectures'),
              preview: this.$t('elearning.courses.five.preview')
            }
          ]
        }
      },

      mounted() {
        $('.course-one__carousel').owlCarousel({
          loop: true,
          margin: 1,
          nav: false,
          dots: false,
          autoWidth: false,
          autoplay: true,
          smartSpeed: 700,
          autoplayTimeout: 4000,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            480: {
              items: 1
            },
            600: {
              items: 1
            },
            991: {
              items: 2
            },
            1000: {
              items: 3
            },
            1200: {
              items: 3
            }
          }
        });
      }
    }
</script>

<style scoped>
.heightProgram{
  height:10rem;
}
</style>

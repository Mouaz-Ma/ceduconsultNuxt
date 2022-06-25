<template>
  <div>
    <section class="course-one__top-title home-two">
      <div class="container">
        <div class="block-title">
          <h2 class="block-title__title">
             {{ $t('elearning.courses.title1') }}<br>
            {{ $t('elearning.courses.title2') }}
          </h2><!-- /.block-title__title -->
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
          <div class="item">
            <div class="course-one__single color-1">
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
                >{{ $t('elearning.courses.one.category') }}</a><!-- /.course-one__category -->
                <div class="course-one__admin">
                  <img
                    src="/assets/images/team-1-1.jpg"
                    alt=""
                  >
                  by <a href="/teacher-details">{{ $t('elearning.courses.one.teacher') }}</a>
                </div><!-- /.course-one__admin -->
                <h2 class="course-one__title">
                  <a href="/course-details">{{ $t('elearning.courses.one.title') }}</a>
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
                <div class="course-one__meta">
                  <a href="/course-details"><i class="far fa-clock" /> {{ $t('elearning.courses.one.duration') }}</a>
                  <a href="/course-details"><i class="far fa-folder-open" /> {{ $t('elearning.courses.one.lectures') }}</a>
                  <a href="/course-details">$18</a>
                </div><!-- /.course-one__meta -->
                <a
                  href="#"
                  class="course-one__link"
                >{{ $t('elearning.courses.one.preview') }}</a><!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-one__single color-2">
              <div class="course-one__image">
                <img
                  src="/assets/images/course-1-2.jpg"
                  alt=""
                >
                <i class="far fa-heart" /><!-- /.far fa-heart -->
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a
                  href="#"
                  class="course-one__category"
                >{{ $t('elearning.courses.two.category') }}</a><!-- /.course-one__category -->
                <div class="course-one__admin">
                  <img
                    src="/assets/images/team-1-2.jpg"
                    alt=""
                  >
                  by <a href="/teacher-details">{{ $t('elearning.courses.two.teacher') }}</a>
                </div><!-- /.course-one__admin -->
                <h2 class="course-one__title">
                  <a href="/course-details">{{ $t('elearning.courses.two.title') }}</a>
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
                <div class="course-one__meta">
                  <a href="/course-details"><i class="far fa-clock" /> {{ $t('elearning.courses.two.duration')}}</a>
                  <a href="/course-details"><i class="far fa-folder-open" /> {{ $t('elearning.courses.two.lectures') }}</a>
                  <a href="/course-details">$18</a>
                </div><!-- /.course-one__meta -->
                <a
                  href="#"
                  class="course-one__link"
                >{{ $t('elearning.courses.two.preview') }}</a><!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-one__single color-3">
              <div class="course-one__image">
                <img
                  src="/assets/images/course-1-3.jpg"
                  alt=""
                >
                <i class="far fa-heart" /><!-- /.far fa-heart -->
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a
                  href="#"
                  class="course-one__category"
                >{{ $t('elearning.courses.three.category') }}</a><!-- /.course-one__category -->
                <div class="course-one__admin">
                  <img
                    src="/assets/images/team-1-3.jpg"
                    alt=""
                  >
                  by <a href="/teacher-details">{{ $t('elearning.courses.three.teacher') }}</a>
                </div><!-- /.course-one__admin -->
                <h2 class="course-one__title">
                  <a href="/course-details">{{ $t('elearning.courses.three.title') }}</a>
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
                <div class="course-one__meta">
                  <a href="/course-details"><i class="far fa-clock" /> {{ $t('elearning.courses.three.duration') }}</a>
                  <a href="/course-details"><i class="far fa-folder-open" /> {{ $t('elearning.courses.three.lectures') }}</a>
                  <a href="/course-details">$18</a>
                </div><!-- /.course-one__meta -->
                <a
                  href="#"
                  class="course-one__link"
                >{{ $t('elearning.courses.three.preview') }}</a><!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-one__single color-4">
              <div class="course-one__image">
                <img
                  src="/assets/images/course-1-4.jpg"
                  alt=""
                >
                <i class="far fa-heart" /><!-- /.far fa-heart -->
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a
                  href="#"
                  class="course-one__category"
                >{{ $t('elearning.courses.four.category') }}</a><!-- /.course-one__category -->
                <div class="course-one__admin">
                  <img
                    src="/assets/images/team-1-4.jpg"
                    alt=""
                  >
                  by <a href="/teacher-details">{{ $t('elearning.courses.four.teacher') }}</a>
                </div><!-- /.course-one__admin -->
                <h2 class="course-one__title">
                  <a href="/course-details">{{ $t('elearning.courses.four.title') }}</a>
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
                <div class="course-one__meta">
                  <a href="/course-details"><i class="far fa-clock" /> {{ $t('elearning.courses.four.duration') }}</a>
                  <a href="/course-details"><i class="far fa-folder-open" /> {{ $t('elearning.courses.four.lectures') }}</a>
                  <a href="/course-details">$18</a>
                </div><!-- /.course- -->
                <a
                  href="#"
                  class="course-one__link"
                >{{ $t('elearning.courses.four.preview') }}</a><!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-one__single color-5">
              <div class="course-one__image">
                <img
                  src="/assets/images/course-1-5.jpg"
                  alt=""
                >
                <i class="far fa-heart" /><!-- /.far fa-heart -->
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a
                  href="#"
                  class="course-one__category"
                >{{ $t('elearning.courses.five.category') }}</a><!-- /.course-one__category -->
                <div class="course-one__admin">
                  <img
                    src="/assets/images/team-1-5.jpg"
                    alt=""
                  >
                  by <a href="/teacher-details">{{ $t('elearning.courses.five.teacher') }}</a>
                </div><!-- /.course-one__admin -->
                <h2 class="course-one__title">
                  <a href="/course-details">{{ $t('elearning.courses.five.title') }}</a>
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
                <div class="course-one__meta">
                  <a href="/course-details"><i class="far fa-clock" /> {{ $t('elearning.courses.five.duration') }}</a>
                  <a href="/course-details"><i class="far fa-folder-open" /> {{ $t('elearning.courses.five.lectures') }}</a>
                  <a href="/course-details">$18</a>
                </div><!-- /.course-one__meta -->
                <a
                  href="#"
                  class="course-one__link"
                >{{ $t('elearning.courses.five.preview') }}</a><!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
          <div class="item">
            <div class="course-one__single color-6">
              <div class="course-one__image">
                <img
                  src="/assets/images/course-1-6.jpg"
                  alt=""
                >
                <i class="far fa-heart" /><!-- /.far fa-heart -->
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a
                  href="#"
                  class="course-one__category"
                >{{ $t('elearning.courses.six.category') }}</a><!-- /.course-one__category -->
                <div class="course-one__admin">
                  <img
                    src="/assets/images/team-1-6.jpg"
                    alt=""
                  >
                  by <a href="/teacher-details">{{ $t('elearning.courses.six.teacher') }}</a>
                </div><!-- /.course-one__admin -->
                <h2 class="course-one__title">
                  <a href="/course-details">{{ $t('elearning.courses.six.title') }} </a>
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
                <div class="course-one__meta">
                  <a href="/course-details"><i class="far fa-clock" /> {{ $t('elearning.courses.six.duration') }}</a>
                  <a href="/course-details"><i class="far fa-folder-open" /> {{ $t('elearning.courses.six.lectures') }}</a>
                  <a href="/course-details">$18</a>
                </div><!-- /.course-one__meta -->
                <a
                  href="#"
                  class="course-one__link"
                >{{ $t('elearning.courses.six.preview') }}</a><!-- /.course-one__link -->
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
    auth: false,
        name: "CourseTwo"
    }
</script>

<style scoped>

</style>

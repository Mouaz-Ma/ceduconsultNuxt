<template>
  <div>
    <section class="course-one__top-title home-three">
      <div class="container">
        <div class="block-title">
          <h2 class="block-title__title">
            Explore our <br>
            offered courses
          </h2><!-- /.block-title__title -->
        </div><!-- /.block-title -->
      </div><!-- /.container -->
    </section><!-- /.course-one__top-title -->

    <section class="course-one home-three">
      <img
        src="assets/images/line-stripe.png"
        class="course-one__line"
        alt=""
      >
      <div class="container">
        <div 
          class="course-one__carousel owl-carousel owl-theme"
        >
          <div
            v-for="course in allCourseData.slice(0, 10)"
            :key="course.id"
            class="item"
          >
            <div
              class="course-one__single color-1 m-2"
              style="height: auto;"
            >
              <div class="course-one__image">
                <img
                  class="uniImage"
                  :src="course.image.url"
                  alt=""
                >
              </div><!-- /.course-one__image -->
              <div
                class="course-one__content"
                style=" padding-top: 0;"
              >
                <!-- /.course-one__category -->
                <div
                  class="course-one__meta"
                  style="justify-content: start; padding: 1rem 0; border-top: none;"
                >
                  <a
                    v-for="(tag, index) in course.tags.slice(0, 3)"
                    :key="tag"
                    href="#"
                    style="padding-right: 0.5rem;"
                  >{{ index < course.tags.slice(0, 3).length - index && course.tags.slice(0, 3).length != 1 ? tag + ',' : tag }}</a>
                </div><!-- /.course-one__meta -->
                <h2 class="course-one__title">
                  {{ course.title }}
                </h2>
                <!-- /.course-one__title -->
                <div>Years of study: {{ course.yearsOfStuday }}</div>
                <div>Language of instruction: {{ course.languageOfInstruction }}</div>
                <div>ECTS: {{ course.ects }}</div>
                <div>Availability: {{ course.availability }}</div>
                <div>Degree awarded: {{ course.degreeAwarded }}</div>
                <div class="mt-5">
                  <nuxt-link
                    to="/contact"
                    class="apply-btn"
                  >
                    <span>{{ $t('university.course.btn') }}</span> <i class="fa fa-angle-right" />
                  </nuxt-link>
                </div>
                <!-- /.course-one__link -->
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
  name: "CourseThree",
  auth: false,
  async fetch() {
    try {
      const allCourses = this.$axios.get('/api/course')
      const allCoursePromise = await Promise.resolve(allCourses)
      const allCourseData = allCoursePromise.data.courses
      this.allCourseData = allCourseData;
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      allCourseData: [],
    }
  },
  mounted() {
    setTimeout(() => {
      $('.course-one__carousel').owlCarousel({
        loop: true,
        margin: 30,
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
            items: 2
          },
          1000: {
            items: 3
          },
          1200: {
            items: 3
          }
        }
      })
    }, 0)
  }
}
</script>

<style scoped>
.uniImage {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.apply-btn {
  text-decoration: none;
  background-color: #da3833;
  color: white;
  font-size: 16px;
  padding: 0.75rem 1.5rem;
  -webkit-transition: all .4s ease;
  transition: all .4s ease;
  border-radius: 0.25rem;
}

.apply-btn:hover {
  background-color: #e04c46;
  color: #fff;
}
</style>

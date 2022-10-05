<template>
  <div>
    <NavThree />
    <section class="course-one__top-title home-one">
      <div class="container">
        <div class="block-title mb-0">
          <h2 class="block-title__title">
            {{ $t('university.course.title1') }}<br>
            {{ $t('university.course.title2') }}
          </h2><!-- /.block-title__title -->
        </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve" /><!-- /.course-one__top-title__curve -->
    </section>
    <div class="container">
      <div class="row">
        <div
          v-for="course in allCourseData"
          :key="course.id"
          class="col-lg-4"
        >
          <div class="item">
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
                <div>Years of study: {{ course.yearsOfStuday }}</div>
                <div>Language of instruction: {{ course.languageOfInstruction }}</div>
                <div>ECTS: {{ course.ects }}</div>
                <div>Availability: {{ course.availability }}</div>
                <div>Degree awarded: {{ course.degreeAwarded }}</div>
                <!-- /.course-one__title -->
                <div class="mt-5">
                  <nuxt-link
                    to="/contact"
                    class="apply-btn"
                  >
                    <span>{{ $t('university.course.btn') }}</span> <i class="fa fa-angle-right" />
                  </nuxt-link>
                </div>
                <div
                  v-if="$auth.$state.user && $auth.$state.user.userType == 'Administrator'"
                  class="my-3"
                >
                  <hr>
                  <nuxt-link
                    :to="'/course/update/'+course._id"
                    class="btn btn-secondary p-2"
                  >
                    <i class="fa fa-pen" />
                    <span>Edit</span>
                  </nuxt-link>
                  <button
                    class="btn btn-secondary p-2"
                    @click="invokeDeleteDialog(course._id, course.title)"
                  >
                    <i class="fa fa-trash" />
                    <span>Delete</span>
                  </button>
                </div>
                <!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
        </div>
      </div>
      <CourseDeleteDialog
        v-if="isDialogOpen"
        :course-id="currentCourseId"
        :course-title="currentCourseTitle"
        @close="isDialogOpen=false"
      />
    </div><!-- /.container -->

    <Footer />
  </div>
</template>
<script>
import NavThree from "@/components/NavThree";
import Footer from "@/components/Footer";
import CourseDeleteDialog from "../../components/CourseDeleteDialog.vue";

export default {
  auth: false,
  components: {
    Footer,
    NavThree,
    CourseDeleteDialog
},
  async asyncData({ $axios }) {
    try {
      const allCourses = $axios.get('/api/course')
      const allCoursePromise = await Promise.resolve(allCourses)
      const allCourseData = allCoursePromise.data.courses
      return {
        allCourseData
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      allCourseData: [],
      isDialogOpen: false,
      courseId: '',
      courseTitle: '',
    }
  },
  head() {
    return {
      title: "CEDU | Courses"
    }
  },
  computed: {
    currentCourseId: {
      get() {
        return this.courseId;
      },
      set(courseId) {
        this.courseId = courseId;
      },
    },
    currentCourseTitle: {
      get() {
        return this.courseTitle;
      },
      set(courseTitle) {
        this.courseTitle = courseTitle;
      },
    }
  },
  methods: {
    invokeDeleteDialog(courseId, courseTitle) {
      this.currentCourseId = courseId;
      this.currentCourseTitle = courseTitle;
      this.isDialogOpen = true;
    }
  },
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

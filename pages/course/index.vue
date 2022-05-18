<template>
  <div>
          <NavThree />
          <section class="course-one__top-title home-one">
      <div class="container">
          <div class="block-title mb-0">
              <h2 class="block-title__title">Explore our <br>
                  Courses</h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve"></div><!-- /.course-one__top-title__curve -->
  </section>
    <div class="container">
        <div class="row">
            <div v-for="course in allCourseData" :key="course.id" class="col-lg-4">
                <div class="item">
                    <div class="course-one__single color-1">
                        <div class="course-one__image">
                            <img class="uniImage" :src=course.image.url alt="">
                        </div><!-- /.course-one__image -->
                        <div class="course-one__content">
                            <a href="#" class="course-one__category">{{course.university.title}}</a><!-- /.course-one__category -->
                            <h2 class="course-one__title"><a href="/course-details">{{course.title}}</a></h2>
                            <!-- /.course-one__title -->
                            <div class="course-one__meta">
                                <a v-for="tag in course.tags" :key=tag href="#"><i class="fa fa-tags"></i>{{tag}}</a>

                            </div><!-- /.course-one__meta -->
                            <a :href="'/course/'+course._id" class="course-one__link">See Preview</a><!-- /.course-one__link -->
                        </div><!-- /.course-one__content -->
                    </div><!-- /.course-one__single -->
            </div><!-- /.item -->
            </div>
        </div>
    </div><!-- /.container -->

              <Footer />
  </div>

</template>
<script>
  import NavThree from "@/components/NavThree";
  import Footer from "@/components/Footer";
  export default {
    auth: false,
    components: {
      Footer,
      NavThree
    },
    head() {
      return {
        title: "CEDU | Courses"
      }
    },
    async asyncData({
      $axios
    }) {
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
      }
    },
  }
</script>

<style scoped>
.uniImage{
    width: 100%;
    height: 350px;
    object-fit: cover;
}
</style>
<template>
<div>
    <NavThree />
    <PageHeader title="Course Details" />
  <section class="course-details">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="course-details__content">
                    <!-- <p class="course-details__author">
                        <img :src=courseData.image.url alt="">
                    </p>/.course-details__author -->

                    <div class="course-details__top">
                        <div class="course-details__top-left">
                            <h2 class="course-details__title">{{courseData.title}}</h2>
                            <!-- /.course-details__title -->
                            <div class="course-one__stars">
                                <span class="course-one__stars-wrap">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </span><!-- /.course-one__stars-wrap -->
                                <span class="course-one__count">4.8</span><!-- /.course-one__count -->
                                <span class="course-one__stars-count">250</span><!-- /.course-one__stars-count -->
                            </div><!-- /.course-one__stars -->
                        </div><!-- /.course-details__top-left -->
                        <div v-if="$auth.$state.user">
                        <div class="course-details__top-right" v-if="$auth.$state.user.userType === 'Administrator'">
                            <a href="#" @click="deleteCourse()" class="course-two__category">Delete</a><!-- /.course-one__category -->
                            <a :href="'/course/update/'+$route.params.id" class="course-three__category">Update</a><!-- /.course-one__category -->
                        </div><!-- /.course-details__top-right -->
                        </div>
                    </div><!-- /.course-details__top -->
                    <div class="course-one__image">
                          <div>
                              <img class="sliderImage" :src=courseData.image.url alt="">
                          </div>
                    </div><!-- /.course-one__image -->

                    <ul class="course-details__tab-navs list-unstyled nav nav-tabs" role="tablist">
                        <li>
                            <a class="active" role="tab" data-toggle="tab" href="#overview">Overview</a>
                        </li>
                        <!-- <li>
                            <a class="" role="tab" data-toggle="tab" href="#curriculum">Curriculum</a>
                        </li> -->
                    </ul><!-- /.course-details__tab-navs list-unstyled -->
                    <div class="tab-content course-details__tab-content ">
                        <div class="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview" v-html="courseData.description">
                        </div><!-- /.course-details__tab-content -->

                    </div><!-- /.tab-content -->
                </div><!-- /.course-details__content -->
            </div><!-- /.col-lg-8 -->
            <div class="col-lg-4">
                <div class="course-details__price">
                    <p class="course-details__price-text">Starting Date </p><!-- /.course-details__price-text -->
                    <p class="course-details__price-amount">{{ $moment(courseData.starting).format('MM/DD/YYYY')}}</p><!-- /.course-details__price-amount -->
                    <a href="/contact" class="thm-btn course-details__price-btn">Book a Consultation</a><!-- /.thm-btn -->
                </div><!-- /.course-details__price -->

                <div class="course-details__meta">
                    <a href="#" class="course-details__meta-link">
                        <span class="course-details__meta-icon">
                            <i class="far fa-clock"></i><!-- /.far fa-clock -->
                        </span><!-- /.course-details__icon -->
                        Durations: <span>10 hours</span>
                    </a><!-- /.course-details__meta-link -->
                    <a href="#" class="course-details__meta-link">
                        <span class="course-details__meta-icon">
                            <i class="far fa-folder-open"></i><!-- /.far fa-folder-open -->
                        </span><!-- /.course-details__icon -->
                        Lectures: <span>6</span>
                    </a><!-- /.course-details__meta-link -->
                    <a href="#" class="course-details__meta-link">
                        <span class="course-details__meta-icon">
                            <i class="far fa-user-circle"></i><!-- /.far fa-user-circle -->
                        </span><!-- /.course-details__icon -->
                        Students: <span>Max 4</span>
                    </a><!-- /.course-details__meta-link -->
                    <a href="#" class="course-details__meta-link">
                        <span class="course-details__meta-icon">
                            <i class="fas fa-play"></i><!-- /.fas fa-play -->
                        </span><!-- /.course-details__icon -->
                        Video: <span>8 hours</span>
                    </a><!-- /.course-details__meta-link -->
                    <a href="#" class="course-details__meta-link">
                        <span class="course-details__meta-icon">
                            <i class="far fa-flag"></i><!-- /.far fa-flag -->
                        </span><!-- /.course-details__icon -->
                        Skill Level: <span>Advanced</span>
                    </a><!-- /.course-details__meta-link -->
                    <a href="#" class="course-details__meta-link">
                        <span class="course-details__meta-icon">
                            <i class="far fa-bell"></i><!-- /.far fa-bell -->
                        </span><!-- /.course-details__icon -->
                        Language: <span>English</span>
                    </a><!-- /.course-details__meta-link -->
                </div><!-- /.course-details__meta -->
                <div class="course-details__list">
                    <h2 class="course-details__list-title">New Courses</h2><!-- /.course-details__list-title -->
                    <div class="course-details__list-item">
                        <div class="course-details__list-img">
                            <img src="/assets/images/lc-1-1.jpg" alt="">
                        </div><!-- /.course-details__list-img -->
                        <div class="course-details__list-content">
                            <a class="course-details__list-author" href="#">by <span>Lydia Byrd</span></a>
                            <h3><a href="#">Marketing strategies</a></h3>
                            <div class="course-details__list-stars">
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <span>4.8</span>
                            </div><!-- /.course-details__list-stars -->
                        </div><!-- /.course-details__list-content -->
                    </div><!-- /.course-details__list-item -->
                    <div class="course-details__list-item">
                        <div class="course-details__list-img">
                            <img src="/assets/images/lc-1-2.jpg" alt="">
                        </div><!-- /.course-details__list-img -->
                        <div class="course-details__list-content">
                            <a class="course-details__list-author" href="#">by <span>Lydia Byrd</span></a>
                            <h3><a href="#">Marketing strategies</a></h3>
                            <div class="course-details__list-stars">
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <span>4.8</span>
                            </div><!-- /.course-details__list-stars -->
                        </div><!-- /.course-details__list-content -->
                    </div><!-- /.course-details__list-item -->
                    <div class="course-details__list-item">
                        <div class="course-details__list-img">
                            <img src="/assets/images/lc-1-3.jpg" alt="">
                        </div><!-- /.course-details__list-img -->
                        <div class="course-details__list-content">
                            <a class="course-details__list-author" href="#">by <span>Lydia Byrd</span></a>
                            <h3><a href="#">Marketing strategies</a></h3>
                            <div class="course-details__list-stars">
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <i class="fas fa-star"></i><!-- /.fas fa-star -->
                                <span>4.8</span>
                            </div><!-- /.course-details__list-stars -->
                        </div><!-- /.course-details__list-content -->
                    </div><!-- /.course-details__list-item -->
                </div><!-- /.course-details__list -->
            </div><!-- /.col-lg-4 -->
        </div><!-- /.row -->
    </div><!-- /.container -->
</section>
<Footer />
</div>
</template>

<script>
  import PageHeader from "@/components/PageHeader";
  import NavThree from "@/components/NavThree";
  import Footer from "@/components/Footer";
    export default {
        components: {Footer, NavThree, PageHeader},
        name: "UniDetails",
            async asyncData({
      $axios, route
    }) {
      try {
        const courseCall = $axios.get('/api/course/'+route.params.id)
        const coursePromise = await Promise.resolve(courseCall)
        const courseData = coursePromise.data.course
        return {
          courseData
        }
      } catch (err) {
        console.log(err)
      }
    },
        data() {
      return {
        courseData: '',
        slide: 0,
        sliding: null,
      }
    },
    methods: {
        deleteCourse: async function () {
             try {
               let deleteResponse = await this.$axios.delete('/api/course/' + this.$route.params.id);
               if (deleteResponse.data.success) {
                   this.$router.push('/course')
               } else {
                 console.log("you are not supposed to be here buddy!!");
               }
             } catch (err) {
               console.log(err)
             }
           }
    }
    }
</script>

<style scoped>
.sliderImage{
    object-fit: cover;
        height: 420px;
}
</style>

<template>
<div>
    <NavThree />
    <PageHeader title="Uni Details" />
  <section class="course-details">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="course-details__content">
                    <p class="course-details__author">
                        <img :src=uniData.logo.url alt="">
                    </p><!-- /.course-details__author -->

                    <div class="course-details__top">
                        <div class="course-details__top-left">
                            <h2 class="course-details__title">{{uniData.title}}</h2>
                            <!-- /.course-details__title -->
                          
                        </div><!-- /.course-details__top-left -->
                        <div v-if="$auth.$state.user">
                        <div class="course-details__top-right" v-if="$auth.$state.user.userType === 'Administrator'">
                            <a href="#" @click="deleteUni()" class="course-two__category">Delete</a><!-- /.course-one__category -->
                            <a :href="'/university/update/'+$route.params.id" class="course-three__category">Update</a><!-- /.course-one__category -->
                        </div><!-- /.course-details__top-right -->
                        </div>
                    </div><!-- /.course-details__top -->
                    <div class="course-one__image">
                          <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >

      <!-- Slides with image only -->
    <b-carousel-slide class="sliderImage" v-for="image in uniData.images" :key="image.filename" :img-src=image.url></b-carousel-slide>
    </b-carousel>

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
                        <div class="tab-pane show active  animated fadeInUp" role="tabpanel" id="overview" v-html="uniData.description">
                        </div><!-- /.course-details__tab-content -->

                    </div><!-- /.tab-content -->
                </div><!-- /.course-details__content -->
            </div><!-- /.col-lg-8 -->
            <div class="col-lg-4">
                <div class="course-details__price">
                    <p class="course-details__price-text">Course price </p><!-- /.course-details__price-text -->
                    <p class="course-details__price-amount">$18.00</p><!-- /.course-details__price-amount -->
                    <a href="#" class="thm-btn course-details__price-btn">Buy This Course</a><!-- /.thm-btn -->
                </div><!-- /.course-details__price -->

                <div class="course-details__meta">


                    <a href="#" class="course-details__meta-link">
                        <span class="course-details__meta-icon">
                            <i class="far fa-bell"></i><!-- /.far fa-bell -->
                        </span><!-- /.course-details__icon -->
                        Language: <span>English</span>
                    </a><!-- /.course-details__meta-link -->
                </div><!-- /.course-details__meta -->
                <div class="course-details__list">
                    <h2 class="course-details__list-title">Courses</h2><!-- /.course-details__list-title -->
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
    auth: false,
        components: {Footer, NavThree, PageHeader},
        name: "UniDetails",
            async asyncData({
      $axios, route
    }) {
      try {
        const uniCall = $axios.get('/api/university/'+route.params.id)
        const uniPromise = await Promise.resolve(uniCall)
        const uniData = uniPromise.data.university
        console.log(uniData)
        return {
          uniData
        }
      } catch (err) {
        console.log(err)
      }
    },
        data() {
      return {
        uniData: '',
        slide: 0,
        sliding: null,
      }
    },
    methods:{
    onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
     deleteUni: async function () {
          try {
            let deleteResponse = await this.$axios.delete('/api/university/' + this.$route.params.id);
            if (deleteResponse.data.success) {
                this.$router.push('/university')
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
        /* height: 500px; */
}
</style>

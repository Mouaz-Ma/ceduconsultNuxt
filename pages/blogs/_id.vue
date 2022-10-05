<template>
  <div>
    <NavThree />
    <PageHeader title="Blogs" />
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
                  <h2 class="course-details__title">
                    {{ blogData.title }}
                  </h2>
                  <!-- /.course-details__title -->
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
                </div><!-- /.course-details__top-left -->
                <div v-if="$auth.$state.user">
                  <div
                    v-if="$auth.$state.user.userType === 'Administrator'"
                    class="course-details__top-right d-flex"
                  >
                    <a
                      href="#"
                      class="course-two__category mr-1"
                      @click="deleteBlog()"
                    >Delete</a><!-- /.course-one__category -->
                    <nuxt-link
                      :to="'/blogs/update/'+$route.params.id"
                      class="course-three__category"
                    >
                      Update
                    </nuxt-link><!-- /.course-one__category -->
                  </div><!-- /.course-details__top-right -->
                </div>
              </div><!-- /.course-details__top -->
              <div class="course-one__image">
                <div>
                  <img
                    class="sliderImage"
                    :src="blogData.image.url"
                    alt=""
                  >
                </div>
              </div><!-- /.course-one__image -->

              <ul
                class="course-details__tab-navs list-unstyled nav nav-tabs"
                role="tablist"
              >
                <li>
                  <a
                    class="active"
                    role="tab"
                    data-toggle="tab"
                    href="#overview"
                  >Overview</a>
                </li>
                <!-- <li>
                            <a class="" role="tab" data-toggle="tab" href="#curriculum">Curriculum</a>
                        </li> -->
              </ul><!-- /.course-details__tab-navs list-unstyled -->
              <div class="tab-content course-details__tab-content ">
                <div
                  id="overview"
                  class="tab-pane show active  animated fadeInUp"
                  role="tabpanel"
                  v-html="blogData.content"
                /><!-- /.course-details__tab-content -->
              </div><!-- /.tab-content -->
            </div><!-- /.course-details__content -->
          </div><!-- /.col-lg-8 -->
          <div class="col-lg-4">
            <div class="course-details__price">
              <p class="course-details__price-text">
                Updated At:
              </p><!-- /.course-details__price-text -->
              <p class="course-details__price-amount">
                {{ $moment(blogData.updatedAt).format('MM/DD/YYYY') }}
              </p><!-- /.course-details__price-amount -->
              <nuxt-link
                to="/contact"
                class="thm-btn course-details__price-btn"
              >
                Book a Consultation
              </nuxt-link><!-- /.thm-btn -->
            </div><!-- /.course-details__price -->
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
  name: "BlogDetails",
  components: {Footer, NavThree, PageHeader},
  async asyncData({ $axios, route }) {
    try {
      const blogCall = $axios.get('/api/blogs/'+route.params.id)
      const blogPromise = await Promise.resolve(blogCall)
      const blogData = blogPromise.data.blog
      return {
        blogData
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      blogData: '',
      slide: 0,
      sliding: null,
    }
  },
  mounted() {
    this.addImageFluidClass();
  },
  methods: {
    deleteBlog: async function () {
      try {
        let deleteResponse = await this.$axios.delete('/api/blogs/' + this.$route.params.id);
        if (deleteResponse.data.success) {
            this.$router.push('/blogs')
        } else {
          console.log("you are not supposed to be here buddy!!");
        }
      } catch (err) {
        console.log(err)
      }
    },
    addImageFluidClass() {
      const imgs = document.querySelectorAll('img');
      for (let img of imgs) {
        img.classList.add('img-fluid');
      }
    },
  },
};
</script>

<style scoped>
.sliderImage{
  object-fit: cover;
  height: 380px;
}
</style>

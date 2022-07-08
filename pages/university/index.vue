<template>
  <div>
          <NavThree />
  <section class="course-one__top-title home-one">
      <div class="container">
          <div class="block-title mb-0">
              <h2 class="block-title__title">Explore our <br>
                  Universities</h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve"></div><!-- /.course-one__top-title__curve -->
  </section>
    <div class="container">
        <div class="row">
            <div v-for="uni in allUniData" :key="uni.id" class="col-lg-4">
                <div class="item">
                    <div class="course-one__single color-1 m-2">
                        <div class="course-one__image">
                            <img class="uniImage" :src=uni.logo.url alt="">
                        </div><!-- /.course-one__image -->
                        <div class="course-one__content">
                            <a href="#" class="course-one__category">development</a><!-- /.course-one__category -->
                            <h2 class="course-one__title"><a href="/course-details">{{uni.title}}</a></h2>
                            <!-- /.course-one__title -->
                            <div class="course-one__meta">
                                <a v-for="tag in uni.tags" :key=tag href="#"><i class="fa fa-tags"></i>{{tag}}</a>

                            </div><!-- /.course-one__meta -->
                            <a :href="'/university/'+uni._id" class="course-one__link">See Preview</a><!-- /.course-one__link -->
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
        title: "CEDU | Universities"
      }
    },
    async asyncData({
      $axios
    }) {
      try {
        const allUniversities = $axios.get('/api/university')
        const allUniPromise = await Promise.resolve(allUniversities)
        const allUniData = allUniPromise.data.universities
        return {
          allUniData
        }
      } catch (err) {
        console.log(err)
      }
    },
    data() {
      return {
        allUniData: [],
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

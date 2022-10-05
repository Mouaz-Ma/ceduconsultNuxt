<template>
  <div>
    <NavThree/>
    <section class="course-one__top-title home-one">
      <div class="container">
        <div class="block-title mb-0">
          <h2 class="block-title__title">{{ $t('university.uni.title1') }}<br>
            {{ $t('university.uni.title2') }}</h2><!-- /.block-title__title -->
        </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve"></div><!-- /.course-one__top-title__curve -->
    </section>
    <div class="container">
      <div class="course-grid">
        <div v-for="uni in allUniData" :key="uni.id" style="height: 90%; margin: 0.5rem;">
          <div class="item" style="height: 100%">
            <div class="course-one__single color-1 m-2" style="height: 50%">
              <div class="course-one__image">
                <img class="uniImage" :src=uni.logo.url alt="">
              </div><!-- /.course-one__image -->
              <div class="course-one__content" style="height: 100%">
                <a href="#" class="course-one__category">development</a><!-- /.course-one__category -->
                <h2 class="course-one__title">
                  <nuxt-link :to="'/university/'+uni._id">{{ uni.title }}</nuxt-link>
                </h2>
                <!-- /.course-one__title -->
                <div class="course-one__meta" style="justify-content: start;padding: 1rem 0;">
                  <a v-for="tag in uni.tags.slice(0, 3)" :key=tag href="#" style="padding: 0 0.5rem;"><i class="fa fa-tags"></i>{{ tag }}</a>

                </div><!-- /.course-one__meta -->
                <nuxt-link :to="'/university/'+uni._id" class="course-one__link">{{ $t('university.uni.btn') }}</nuxt-link>
                <!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
        </div>
      </div>
    </div><!-- /.container -->
    <TheFooter/>
  </div>

</template>

<script>
import NavThree from "@/components/NavThree";
import TheFooter from "@/components/Footer";

export default {
  auth: false,
  components: {
    TheFooter,
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
.uniImage {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.course-grid {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 33.3% 33.3% 33.3%;
  row-gap: 1rem;
}

@media (max-width: 992px) {
    .course-grid {  grid-template-columns: auto;}
} 
</style>

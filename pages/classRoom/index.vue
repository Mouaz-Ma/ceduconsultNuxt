<template>
  <div>
          <NavTwo />
  <section class="course-one__top-title home-one">
      <div class="container">
          <div class="block-title mb-0">
              <h2 class="block-title__title">Explore our <br>
                  classRooms</h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve"></div><!-- /.course-one__top-title__curve -->
  </section>
    <div class="container">
        <div class="row">
            <div v-for="classRoom in allClassData" :key="classRoom.id" class="col-lg-4">
                <div class="item">
                    <div class="course-one__single color-1 m-2">
                        <div class="course-one__image">
                            <img class="uniImage" :src=classRoom.image.url alt="">
                        </div><!-- /.course-one__image -->
                        <div class="course-one__content">
                            <a href="#" class="course-one__category">development</a><!-- /.course-one__category -->
                            <h2 class="course-one__title"><a href="/course-details">{{classRoom.title}}</a></h2>
                            <!-- /.course-one__title -->
                            <div class="course-one__meta">
                                <a v-for="tag in classRoom.tags" :key=tag href="#"><i class="fa fa-tags"></i>{{tag}}</a>

                            </div><!-- /.course-one__meta -->
                            <a href="#" class="course-one__link">See Preview</a><!-- /.course-one__link -->
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
  import NavTwo from "@/components/NavTwo";
  import Footer from "@/components/Footer";
  export default {
    auth: false,
    components: {
      Footer,
      NavTwo
    },
    head() {
      return {
        title: "CEDU | Class Rooms"
      }
    },
    async asyncData({
      $axios
    }) {
      try {
        const allClassRooms = $axios.get('/api/classRoom')
        const allClassPromis = await Promise.resolve(allClassRooms)
        const allClassData = allClassPromis.data.classRooms
        return {
          allClassData
        }
      } catch (err) {
        console.log(err)
      }
    },
    data() {
      return {
        allClassData: [],
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

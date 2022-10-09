<template>
  <div>
    <NavTwo />
    <section class="course-one__top-title home-one">
      <div class="container">
        <div class="block-title mb-0">
          <h2 class="block-title__title">
            {{ $t('elearning.classrooms.title1') }}<br>
            {{ $t('elearning.classrooms.title2') }}
          </h2><!-- /.block-title__title -->
        </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve" /><!-- /.course-one__top-title__curve -->
    </section>
    <div class="container">
      <div class="row">
        <div
          v-for="classRoom in allClassData"
          :key="classRoom.id"
          class="col-lg-4"
        >
          <div class="item">
            <div class="course-one__single color-1 m-2">
              <div class="course-one__image">
                <img
                  class="uniImage"
                  :src="classRoom.image.url"
                  alt=""
                >
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a
                  href="#"
                  class="course-one__category"
                >Class Room</a>
                <h2 class="course-one__title">
                  <a href="#">{{ classRoom.title }}</a>
                </h2>
                <div v-if="$auth.$state.user.userType === 'Administrator'">
                  <a
                    href="#"
                    class="course-two__category marginDelete"
                    @click="deleteClassRoom(classRoom._id)"
                  >Delete</a>
                  <nuxt-link
                    :to="'/classRoom/update/'+classRoom._id"
                    class="course-three__category marginUpdate"
                  >
                    Update
                  </nuxt-link>
                </div>
                <div class="course-one__meta">
                  <a
                    v-for="tag in classRoom.tags"
                    :key="tag"
                    href="#"
                  ><i class="fa fa-tags" />{{ tag }}</a>
                </div>
                <div class="mt-3 text-center">
                  <h3 class="course-one__title">
                    {{ $moment(classRoom.classDate).format('MM/DD/YYYY') }}
                  </h3>
                  <h3 class="course-one__title">
                    {{ classRoom.classTime }}
                  </h3>
                </div>
                <div
                  v-if="classRoom.zoomLink"
                  class="text-center mt-5"
                >
                  <v-btn
                    dark
                    @click="copyToClipboard(classRoom.zoomLink)"
                  >
                    Press To Copy Zoomlink
                  </v-btn>
                  <v-snackbar
                    v-model="snackbar"
                  >
                    Copied to clipboard


                    <template #action="{ attrs }">
                      <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                      >
                        Close
                      </v-btn>
                    </template>
                  </v-snackbar>
                </div>
                <!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
        </div>
      </div>
    </div><!-- /.container -->
    <TheFooter />
  </div>
</template>

<script>
import NavTwo from "@/components/NavTwo";
import TheFooter from "@/components/Footer";

export default {
  auth: false,
  components: {
    TheFooter,
    NavTwo
  },
  async asyncData({
                    $axios, $auth
                  }) {
    try {
      const allClassRooms = $axios.get('/api/classRoom')
      const allClassPromis = await Promise.resolve(allClassRooms)
      const allClassDataComper = allClassPromis.data.classRooms
      // This line of code has unclear purpose
      let allClassData = allClassDataComper.filter(({_id: id1}) => $auth.$state.user.classes.some(({_id: id2}) => id2 === id1));
      // console.log(allClassDataComper);
      // console.log(allClassData);
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
      snackbar: false,
      copiedToClipBoard: '',
      differenceArray: [],
    }
  },
  head() {
    return {
      title: "CEDU | Class Rooms"
    }
  },
  methods: {
    async copyToClipboard(text) {
      this.snackbar = true
      await navigator.clipboard.writeText(text);
      this.copiedToClipBoard = ("Copied to clipboard");
    },
    async deleteClassRoom(id) {
      try {
        console.log(id)
        let deleteResponse = await this.$axios.delete('/api/classRoom/' + id);
        if (deleteResponse.data.success) {
          window.location.reload(true)
        }
      } catch (err) {
        console.log(err)
      }
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

a {
  text-decoration: none;
  color: #012237;
}

.marginDelete {
  margin-left: 8rem;
}

.marginUpdate {
  margin-left: 13.5rem;
}

</style>

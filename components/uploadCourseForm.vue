<template>
  <div>
    <section class="contact-one">
      <div class="container">
        <h3 class="contact-one__title text-center">
          <img
            src="/assets/images/CEC2_120211.png"
            class="h-25 w-25"
          ><br>New Course Form
        </h3><!-- /.contact-one__title -->

        <!-- alerts -->
        <div v-if="alertMassge">
          <alerts
            :message="alertMassge"
            :success="success"
          />
        </div>
        <form
          class="contact-one__form contact-form-validated"
          @submit.prevent="uploadCourse"
        >
          <div class="row low-gutters">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="title"
                type="text"
                placeholder="title"
                required
              >
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="tags"
                type="text"
                placeholder="tags"
              >
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="yearsOfStuday"
                type="text"
                placeholder="Years of study"
                required
              >
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="languageOfInstruction"
                type="text"
                placeholder="Language of instruction"
                required
              >
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="ects"
                type="text"
                placeholder="ECTS"
                required
              >
            </div><!-- /.col-lg-6 -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <input
                v-model="availability"
                type="text"
                placeholder="Availability"
                required
              >
            </div><!-- /.col-lg-6 -->
            <!-- choose uni -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <b-form-select
                v-model="uniSelected"
                class="mb-3"
              >
                <!-- This slot appears above the options from 'options' prop -->
                <template #first>
                  <b-form-select-option
                    :value="null"
                    disabled
                  >
                    -- Please select a University --
                  </b-form-select-option>
                </template>
                <b-form-select-option
                  v-for="uni in uniData"
                  :key="uni._id"
                  :value="uni._id"
                  required
                >
                  {{ uni.title }}
                </b-form-select-option>

                <!-- These options will appear after the ones from 'options' prop -->
              </b-form-select>
            </div>
                      
            <!-- degree awarded -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h3>Degree Awarded</h3>
              <b-form-select
                v-model="degreeAwarded"
                :options="degreeAwardedOptions"
                required
              />
            </div>
            <!-- starting date -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
              <h3 class="float-left">
                Starting Date:
              </h3>
              <b-calendar
                v-model="startingDate"
                block
                value-as-date
                locale="en"
              >
                <div
                  class="d-flex"
                  dir="ltr"
                >
                  <b-button
                    v-if="startingDate"
                    size="md"
                    variant="outline-danger"
                    @click="clearDate"
                  >
                    Clear date
                  </b-button>
                  <b-button
                    size="md"
                    variant="outline-primary"
                    class="ml-auto"
                    @click="setToday"
                  >
                    Set Today
                  </b-button>
                </div>
              </b-calendar>
            </div>
            <!-- image upload -->
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <b-form-file
                v-model="image"
                placeholder="image Upload"
                drop-placeholder="Drop file here..."
                :state="Boolean(image)"
                accept="image/jpeg"
                required
              />
              <div class="mt-3">
                Selected image: {{ image ? image.name : '' }}
              </div>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border">
              <tiptap-editor v-model="description" />
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div class="text-center">
                <button
                  type="submit"
                  class="contact-one__btn thm-btn"
                >
                  Save
                </button>
              </div><!-- /.text-center -->
            </div><!-- /.col-lg-12 -->
                      
            <!-- <nuxt-link class="blackLinks " to="/users/register">New Account?</nuxt-link> -->
          </div><!-- /.row -->
        </form><!-- /.contact-one__form -->
        <div class="result text-center" /><!-- /.result -->
      </div><!-- /.container -->
    </section>
  </div>
</template>

<script>
import TiptapEditor from "@/components/TiptapEditor.vue"
import alerts from '@/components/alerts.vue'
export default {
  name: "UploadCourse",
  components: {
    alerts,
    TiptapEditor
  },
  props: ['uniData'],
  data() {
    return {
      alertMassge: '',
      success: false,
      title: '',
      image: null,
      imageName: '',
      tags: '',
      description: '',
      uniSelected: null,
      startingDate: '',
      degreeAwarded: '',
      degreeAwardedOptions: ['Preparatory Courses', 'Bachelor Programme', 'Master Programme', 'PHD Programme', 'MBA', 'Specialist Program', 'Certificate'],
      yearsOfStuday: '',
      languageOfInstruction: '',
      ects: '',
      availability: '',
    }
  },
  methods: {
    setToday() {
      const now = new Date()
      this.startingDate = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    },
    clearDate() {
      this.startingDate = ''
    },
    uploadCourse: async function () {
      try {
        let tags = this.tags.split(' ');
        let data = new FormData();
        data.append("title", this.title);
        data.append("tags", tags);
        data.append("description", this.description);
        data.append("userID", this.$auth.$state.user._id);
        data.append("uniSelected", this.uniSelected);
        data.append("startingDate", this.startingDate);
        data.append("degreeAwarded", this.degreeAwarded);
        data.append("image", this.image);
        data.append("yearsOfStuday", this.yearsOfStuday);
        data.append("languageOfInstruction", this.languageOfInstruction);
        data.append("ects", this.ects);
        data.append("availability", this.availability);
        let response = await this.$axios.post('/api/course/new', data);
        if (response.data.success === true) {
            this.success = true;
            this.$router.push('/course')
        } else {
            this.success = false;
            this.alertMassge = 'Somthing Went Wrong!';
        }
      } catch (err) {
        this.success = false;
        this.alertMassge = 'somthing went Wrong';
        console.log(err);
      }
    },
  }
}
</script>

<style scoped>
a{
    text-decoration: none;
}

.blackLinks{
    color: #2DA297;
}
</style>

<template>
    <div>
<section class="contact-one">
          <div class="container">
              <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png"  class="h-25 w-25"/><br>New Course Form
                   </h3><!-- /.contact-one__title -->

                               <!-- alerts -->
            <div v-if="alertMassge">
            <alerts :message=alertMassge :success=success />
            </div>
              <form @submit.prevent="uploadCourse" class="contact-one__form contact-form-validated">
                  <div class="row low-gutters">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" placeholder="title" v-model="title" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" v-model="tags" placeholder="tags">
                      </div><!-- /.col-lg-6 -->
                      <!-- choose uni -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                              <b-form-select v-model="uniSelected" class="mb-3">
                            <!-- This slot appears above the options from 'options' prop -->
                            <template #first>
                                <b-form-select-option :value="null" disabled>-- Please select a University --</b-form-select-option>
                            </template>
                            <b-form-select-option v-for="uni in uniData" :key="uni._id" :value=uni._id required>{{uni.title}}</b-form-select-option>

                            <!-- These options will appear after the ones from 'options' prop -->
                            </b-form-select>

                           
                      </div>
                      
                      <!-- course type -->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h3>Course Type</h3>
                            <b-form-select v-model="courseType" :options="courseOptions" required></b-form-select>
                        </div>
                      <!-- starting date -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                          <h3 class="float-left">Starting Date:</h3>
                            <b-calendar block v-model="startingDate" value-as-date locale="en" required>
                                <div class="d-flex" dir="ltr">
                                <b-button
                                    size="md"
                                    variant="outline-danger"
                                    v-if="startingDate"
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
                                placeholder="image Upload"
                                drop-placeholder="Drop file here..."
                                v-model="image"
                                :state="Boolean(image)"
                                accept="image/jpeg"
                                required
                                ></b-form-file>
                                <div class="mt-3">Selected image: {{ image ? image.name : '' }}</div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border">
                            <tiptap-editor  v-model="description" />
                        </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div class="text-center">
                              <button type="submit" class="contact-one__btn thm-btn">Save</button>
                          </div><!-- /.text-center -->
                      </div><!-- /.col-lg-12 -->
                      
                      <!-- <nuxt-link class="blackLinks " to="/users/register">New Account?</nuxt-link> -->
                  </div><!-- /.row -->
              </form><!-- /.contact-one__form -->
              <div class="result text-center"></div><!-- /.result -->
          </div><!-- /.container -->
      </section>

    </div>
</template>

<script>
import TiptapEditor from "@/components/TiptapEditor.vue"
import alerts from '@/components/alerts.vue'
export default {
  components: {
    alerts,
    TiptapEditor
  },
  name: "Upload_Course",
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
      startingDate: null,
      courseType: '',
      courseOptions: ['Preparatory Courses', 'Bachelor Programme', 'Master Programme', 'PHD Programme', 'MBA', 'Specialist Program', 'Certificate']
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
        data.append("courseType", this.courseType);
        data.append("image", this.image);
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

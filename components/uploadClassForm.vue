<template>
    <div>
<section class="contact-one">
          <div class="container">
              <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png"  class="h-25 w-25"/><br>New Class Room Form
                   </h3><!-- /.contact-one__title -->

                               <!-- alerts -->
            <div v-if="alertMassge">
            <alerts :message=alertMassge :success=success />
            </div>
              <form @submit.prevent="uploadClassRoom" class="contact-one__form contact-form-validated">
                  <div class="row low-gutters">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" placeholder="title" v-model="title" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" v-model="tags" placeholder="tags">
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" v-model="zoomLink" placeholder="zoomLink">
                      </div><!-- /.col-lg-6 -->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <label for="example-datepicker">Class Room time</label>
                          <b-form-datepicker id="example-datepicker" today-button reset-button v-model="date" class="mb-2"></b-form-datepicker>
                          <p>date: '{{ date }}'</p>
                          <b-form-timepicker v-model="time" locale="en" now-button reset-button></b-form-timepicker>
                          <div class="mt-2">time: '{{ time }}'</div>
                      </div>
                      <!-- image upload -->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <b-form-file
                                placeholder="banner Upload"
                                drop-placeholder="Drop file here..."
                                v-model="image"
                                :state="Boolean(image)"
                                accept="image/jpeg"
                                ></b-form-file>
                                <div class="mt-1">Selected logo: {{ image ? image.name : '' }}</div>
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
  auth: false,
  name: "Upload_Class",
  data() {
    return {
      alertMassge: '',
      success: false,
      title: '',
      image: null,
      imagename: '',
      tags: '',
      description: '',
      zoomLink: '',
      type: '',
      date: '',
      time: '',
    }
  },
  methods: {
    uploadClassRoom: async function() {
      try {
        let tags = this.tags.split(' ');
        let data = new FormData();
        data.append("title", this.title);
        data.append("tags", tags);
        data.append("description", this.description);
        data.append("userID", this.$auth.$state.user._id);
        data.append("image", this.image);
        data.append("zoomLink", this.zoomLink);
        data.append("classDate", this.date);
        data.append("classTime", this.time);
        if (this.image) {
          if (this.image.type === "image/jpeg") {
            let response = await this.$axios.post('/api/classRoom/new', data);
            if (response.data.success === true) {
              this.success = true;
              this.$router.push('/classRoom')
            } else {
              this.success = false;
              this.alertMassge = 'Somthing Went Wrong!';
            }
            } else {
              this.success = false;
              this.alertMassge = 'banner file extension is not supported';
            }
        } else if (!this.image) {
            this.success = false;
            this.alertMassge = 'Please Upload Banner';
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

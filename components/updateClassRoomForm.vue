<template>
    <div>
<section class="contact-one">
          <div class="container">
              <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png"  class="h-25 w-25"/><br>Update Class Room Form
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
                                <div v-if="image"  class="mt-1">Selected logo: {{ image ? image.name : '' }}</div>
                                <img v-else :src=imageUrl class="mt-3 imageDisplay">
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border">
                            <tiptap-vuetify  v-model="description" :extensions="extensions" @input="$emit('input', arguments[0])" />
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
import {
  TiptapVuetify,
  Heading,
  Bold,
  Italic,
  Strike,
  Underline,
  Paragraph,
  BulletList,
  OrderedList,
  ListItem,
  Link,
  Blockquote,
  HardBreak,
  HorizontalRule,
  History,
  Image
} from 'tiptap-vuetify'
import alerts from '@/components/alerts.vue'
export default {
  components: {
    alerts,
    TiptapVuetify
  },
  auth: false,
  name: "Upload_Class",
  props: ['classRoomData'],
  data() {
    return {
      alertMassge: '',
      success: false,
      title: '',
      image: null,
      imagename: '',
      tags: '',
        description: '',
       // declare extensions you want to use
            extensions: [
            History,
            Blockquote,
            Link,
            Underline,
            Strike,
            Italic,
            ListItem,
            BulletList,
            OrderedList,
            [
                Heading,
                {
                options: {
                    levels: [1, 2, 3, 4]
                }
                }
            ],
            Bold,
            Link,
            HorizontalRule,
            Paragraph,
            HardBreak,
            Image
            ],
      zoomLink: '',
      type: '',
      date: '',
      time: '',
    }
  },
  created() {
      this.title = this.classRoomData.title
        this.tags = this.classRoomData.tags.toString().split(',').join(' ')
        this.imageUrl = this.classRoomData.image.url
        this.deletetedImage = this.classRoomData.image.filename
        this.description = this.classRoomData.content
        this.date = this.classRoomData.classDate
        this.time = this.classRoomData.classTime
        this.zoomLink = this.classRoomData.zoomLink
        
        
  },
  methods: {
    uploadClassRoom: async function() {
      try {
        let tags = this.tags.split(' ');
        let data = new FormData();
        data.append("title", this.title);
        data.append("tags", tags);
        data.append("description", this.description);
        data.append("image", this.image);
        data.append("deletedImage", this.deletetedImage);
        data.append("zoomLink", this.zoomLink);
        data.append("classDate", this.date);
        data.append("classTime", this.time);
        if (this.image) {
          if (this.image.type === "image/jpeg") {
            let response = await this.$axios.put('/api/classRoom/'+this.$route.params.id, data);
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
             let response = await this.$axios.put('/api/classRoom/'+this.$route.params.id, data);
            if (response.data.success === true) {
              this.success = true;
              this.$router.push('/classRoom')
            } else {
              this.success = false;
              this.alertMassge = 'Somthing Went Wrong!';
            }
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
.imageDisplay{
  height: 200px;
  width: 300px;
}
</style>

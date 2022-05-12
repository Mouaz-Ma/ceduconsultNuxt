<template>
    <div>
<section class="contact-one">
          <div class="container">
              <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png"  class="h-25 w-25"/><br>New University Form
                   </h3><!-- /.contact-one__title -->

                               <!-- alerts -->
            <div v-if="alertMassge">
            <alerts :message=alertMassge :success=success />
            </div>
              <form @submit.prevent="uploadUniversity" class="contact-one__form contact-form-validated">
                  <div class="row low-gutters">
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" placeholder="title" v-model="title" required>
                      </div><!-- /.col-lg-6 -->
                      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input type="text" v-model="tags" placeholder="tags">
                      </div><!-- /.col-lg-6 -->
                      <!-- logo upload -->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <b-form-file
                                placeholder="logo Upload"
                                drop-placeholder="Drop file here..."
                                v-model="logo"
                                :state="Boolean(logo)"
                                accept="image/jpeg"
                                ></b-form-file>
                                <div class="mt-1">Selected logo: {{ logo ? logo.name : '' }}</div>
                        </div>
                        <!-- marketing images upload -->
                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <b-form-file
                                placeholder="Marketing Images Upload"
                                drop-placeholder="Drop file here..."
                                v-model="images"
                                :state="Boolean(images)"
                                accept="image/jpeg"
                                multiple
                                ></b-form-file>

                                <div v-for="image in images" :key="image.name" class="mt-1">Selected Images: {{ image.name }}</div>
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
  name: "Upload_Uni",
  data() {
    return {
      alertMassge: '',
      success: false,
      title: '',
      logo: null,
      logoname: '',
      images: [],
      imagesNames: '',
      tags: '',
      description: '',
    }
  },
  methods: {
    uploadUniversity: async function() {
      try {
          console.log(Array.isArray(this.images))
          console.log(this.images)
        let tags = this.tags.split(' ');
        let data = new FormData();
        data.append("title", this.title);
        data.append("tags", tags);
        data.append("description", this.description);
        data.append("userID", this.$auth.$state.user._id);
        data.append("logo", this.logo);
        this.images.forEach(image => {
            data.append("images", image);
        });
        if (this.logo && !this.images) {
            console.log(this.logo.type)
          if (this.logo.type === "image/jpeg") {
            let response = await this.$axios.post('/api/university/new', data,{headers: {'Content-Type': 'multipart/form-data'}});
            console.log(response.data)
            if (response.data.success === true) {
              this.success = true;
              this.$router.push({
                name: '/unversity'
              })
            } else {
              this.success = false;
              this.alertMassge = 'Somthing Went Wrong!';
            }
                    } else {
              this.success = false;
              this.alertMassge = 'logo file extension is not supported';
            }
      
        } else if (!this.logo && this.images) {
          for (let i = 0; i <= this.images.length; i++) {
            if (this.images[i].type != "image/jpeg") {
              this.success = false;
              this.alertMassge = his.images[i].name + ' file extension is not supported';
              return this.alertMassge;
            }
          }
          let response = await this.$axios.post('/api/university/new', data);
          if (response.data.success === true) {
            this.success = true;
            this.$router.push({
              name: '/unversity'
            })
          } else {
            this.success = false;
            this.alertMassge = 'somthing went Wrong';
          }

        } else if (this.logo && this.images) {
          for (let i = 0; i <= this.images.length; i++) {
            if (this.images[i].type != "image/jpeg") {
              this.success = false;
              this.alertMassge = this.images[i].name + ' file extension is not supported';
              return this.alertMassge;
            }
            if (this.logo.type != "image/jpeg") {
              this.success = false;
              this.alertMassge = 'logo file extension is not supported';
              return this.alertMassge;
            }
            let response = await this.$axios.post('/api/university/new', data);
            if (response.data.success === true) {
              this.success = true;
              this.$router.push({
                name: '/unversity'
              })
            } else {
              this.success = false;
              this.alertMassge = 'somthing went wrong';
            }
          }
        } else if (!this.logo && !this.images) {
            this.success = false;
            this.alertMassge = 'Please Upload Logo';
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

<template>
    <div>
<section class="contact-one">
  <div class="container">
    <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png" class="h-25 w-25" /><br>New
      University Form
    </h3><!-- /.contact-one__title -->

    <!-- alerts -->
    <div v-if="alertMassge">
      <alerts :message=alertMassge :success=success />
    </div>
    <form @submit.prevent="editUniversity" class="contact-one__form contact-form-validated">
      <div class="row low-gutters">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <input type="text" v-model="title" required>
        </div><!-- /.col-lg-6 -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <input type="text" v-model="tags">
        </div><!-- /.col-lg-6 -->
        <!-- logo upload -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <b-form-file placeholder="logo Upload" drop-placeholder="Drop file here..." v-model="logo"
            :state="Boolean(logo)" accept="image/jpeg"></b-form-file>
          <div v-if="logo" class="mt-1">Uni current logo: <img :src=logo.url></div>
          <div v-else class="mt-1">Uni current logo: <img :src=uniDatalogo.url></div>
        </div>
        <!-- marketing images upload -->
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <b-form-file placeholder="Marketing Images Upload" drop-placeholder="Drop file here..." v-model="images"
            :state="Boolean(images)" accept="image/jpeg" multiple></b-form-file>
          <h4 class="mt-2">Selected Images:</h4>
          <div class="row">
            <div v-if="images.length">
            <div  class="col-4 mt-1" v-for="image in images" :key="image.name"><img :src=image.filename></div>
            </div>
            <div v-else-if="uniDataimages.length">
            <div class="col-4 mt-1" v-for="image in uniDataimages" :key="image.name"><img :src=image.url></div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 border">
          <tiptap-vuetify v-model="description" :extensions="extensions" @input="$emit('input', arguments[0])" />
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
  props: ['uniData'],
  auth: false,
  name: "Upload_Uni",
  data() {
    return {
      alertMassge: '',
      success: false,
      title: '',
      logo: null,
      uniDatalogo: null,
      logoname: '',
      images: [],
      uniDataimages: [],
      imagesNames: '',
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
    }
  },
      created() {
        this.title = this.uniData.title
        this.tags = this.uniData.tags.toString().split(',').join(' ')
        this.uniDatalogo = this.uniData.logo
        this.uniDataimages = this.uniData.images
        this.description = this.uniData.description
      },
  methods: {
    editUniversity: async function() {
      try {
        let tags = this.tags.split(' ');
          let data = new FormData();
          data.append("title", this.title);
          data.append("tags", tags);
          data.append("description", this.description);
          data.append("userID", this.$auth.$state.user._id);
          data.append("logo", this.logo);
          data.append("deletedLogo", this.uniDatalogo.filename);
          this.uniDataimages.forEach(image => {
              data.append("deletedimages", image.filename);
          });
          this.images.forEach(image => {
              data.append("images", image);
          });
          let response = await this.$axios.put('/api/university/'+this.$route.params.id, data);
            if (response.data.success === true) {
              this.success = true;
              this.$router.push('/university')
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

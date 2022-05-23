<template>
  <div>
    <PageHeader title="Upload Blog" />
    <upload-blog-form />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
import UploadBlogForm from '@/components/uploadBlogForm.vue';

  export default {
    components: {
      PageHeader,
      UploadBlogForm,
      
    },
    head() {
      return {
        title: "upload-blog-form"
      }
    },
  }
</script>

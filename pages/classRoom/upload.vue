<template>
  <div>
    <PageHeader title="Upload Class" />
    <upload-class-form />
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader";
import UploadClassForm from '@/components/uploadClassForm.vue';
  export default {
    components: {
    PageHeader,
    UploadClassForm,
    },
    head() {
      return {
        title: "upload-class-form"
      }
    },
  }
</script>

<template>
  <div>
    <PageHeader title="Upload University" />
    <upload-university-form />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
import UploadUniversityForm from '@/components/uploadUniversityForm.vue';
  export default {
    components: {PageHeader, UploadUniversityForm},
    head(){
      return {
        title: "upload-university-form"
      }
    }
  }
</script>

<template>
  <div>
    <PageHeader title="Upload Course" />
    <upload-course-form  :uniData="allUniData" />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
  import UploadCourseForm from '@/components/uploadCourseForm.vue';
  export default {
    components: {
      PageHeader,
      UploadCourseForm
    },
    head() {
      return {
        title: "upload-course-form"
      }
    },
    data() {
      return {
        allUniData: [],
      }
    },
    async asyncData({
      $axios
    }) {
      try {
        const allUniversities = await $axios.get('/api/university')
        const allUniPromise = await Promise.resolve(allUniversities)
        const allUniData = allUniPromise.data.universities
        return {
          allUniData
        }
      } catch (err) {
        console.log(err)
      }
    },
  }
</script>

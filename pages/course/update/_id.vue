<template>
  <div>
    <PageHeader title="Edit Course" />
    <edit-course-form :courseData=courseData :uniData=uniData />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
import EditCourseForm from '../../../components/editCourseForm.vue';
  export default {
    components: {PageHeader, EditCourseForm},
    head(){
      return {
        title: "edit-course-form"
      }
    },
    async asyncData({
      $axios, route
    }) {
      try {
        const courseCall = $axios.get('/api/course/'+route.params.id)
        const coursePromise = await Promise.resolve(courseCall)
        const courseData = coursePromise.data.course
        
        const allUniversities = await $axios.get('/api/university')
        const allUniPromise = await Promise.resolve(allUniversities)
        const uniData = allUniPromise.data.universities

        return {
          courseData, uniData
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>

<template>
  <div>
    <PageHeader title="Edit University" />
    <edit-university-form :uniData=uniData />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
import EditUniversityForm from '../../../components/editUniversityForm.vue';
  export default {
    auth: false,
      auth: false,
    components: {PageHeader, EditUniversityForm},
    head(){
      return {
        title: "edit-university-form"
      }
    },
                async asyncData({
      $axios, route
    }) {
      try {
        const uniCall = $axios.get('/api/university/'+route.params.id)
        const uniPromise = await Promise.resolve(uniCall)
        const uniData = uniPromise.data.university
        console.log(uniData)
        return {
          uniData
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>

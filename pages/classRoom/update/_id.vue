<template>
  <div>
    <PageHeader title="Update ClassRoom" />
   <update-classRoom-form :classRoomData=classRoomData />
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader";
import UpdateClassRoomForm from '@/components/updateClassRoomForm.vue';

  export default {
    components: {
    PageHeader,
    UpdateClassRoomForm
    },
    head() {
      return {
        title: "update-ClassRoom-form"
      }
    },
    async asyncData({
      $axios, route
    }) {
      try {
        const classRoomCall = $axios.get('/api/classRoom/'+route.params.id)
        const classRoomPromise = await Promise.resolve(classRoomCall)
        const classRoomData = classRoomPromise.data.classRoom
        console.log(classRoomData)
        return {
          classRoomData
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>

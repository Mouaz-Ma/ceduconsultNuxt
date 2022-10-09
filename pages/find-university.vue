<template>
  <div style="margin-top: -20px">
    <BannerThree />
    <CourseCatThree />
    <TeamOne />
    <CallToActionOne />
    <!-- <TeamTab /> -->
    <CourseThree :all-course-data="allCourseData" />
    <CallToActionSix />
    <!-- <Testimonial /> -->
    <VideoThree />
    <!-- <ClientsLogoOne /> -->
    <CallToActionFive />
  </div>
</template>

<script>
import TeamOne from '../components/TeamOne.vue'
  export default {
    name: 'FindUniversityView',

    auth: false,

    components: {
    BannerThree: () => import("../components/BannerThree"),
    CourseCatThree: () => import("../components/CourseCatThree"),
    CallToActionOne: () => import("../components/CallToActionOne"),
    TeamTab: () => import("../components/TeamTab"),
    CourseThree: () => import("../components/CourseThree"),
    CallToActionSix: () => import("../components/CallToActionSix"),
    Testimonial: () => import("../components/Testimonial"),
    VideoThree: () => import("../components/VideoThree"),
    ClientsLogoOne: () => import("../components/ClientsLogoOne"),
    CallToActionFive: () => import("../components/CallToActionFive"),
    TeamOne
},

    layout: 'university',
    async asyncData({ $axios }) {
    try {
      const allCourses = $axios.get('/api/course');
      const allCoursePromise = await Promise.resolve(allCourses);
      const allCourseData = allCoursePromise.data.courses.reverse();
      return {
        allCourseData
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      allCourseData: [],
    }
  },

    head(){
      return{
        title: "Cedu | Home Uni"
      }
    }
  }
</script>

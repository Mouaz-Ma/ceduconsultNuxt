<template>
  <div>
    <BannerTwo />
    <CourseCatTwo />
    <AboutOne />
    <CourseTwo />
    <TeamOne />
    <Pricing />
    <Meeting />
    <BlogHome />
  </div>
</template>

<script>
export default {
  auth: false,
  components: {
    BannerTwo: () => import("../components/BannerTwo"),
    CourseCatTwo: () => import("../components/CourseCatTwo"),
    AboutOne: () => import("../components/AboutOne"),
    CourseTwo: () => import("../components/CourseTwo"),
    TeamOne: () => import("../components/TeamOne"),
    Pricing: () => import("../components/Pricing"),
    Meeting: () => import("../components/Meeting"),
    BlogHome: () => import("../components/BlogHome"),
  },

  layout: 'learning',

  head(){
    return{
      title: "CEDU | Home 2"
    }
  }
}
</script>

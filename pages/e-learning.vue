<template>
  <div>
    <NavTwo />
    <BannerTwo />
    <CourseCatTwo />
    <AboutOne />
    <CourseTwo />
    <TeamOne />
    <Pricing />
    <Meeting />
    <BlogHome />
    <Footer />
  </div>
</template>
<script>
  import NavTwo from "../components/NavTwo";
  import Footer from "../components/Footer";
  import BannerTwo from "../components/BannerTwo";
  import CourseCatTwo from "../components/CourseCatTwo";
  import AboutOne from "../components/AboutOne";
  import CourseTwo from "../components/CourseTwo";
  import TeamOne from "../components/TeamOne";
  import Pricing from "../components/Pricing";
  import Meeting from "../components/Meeting";
  import BlogHome from "../components/BlogHome";
  export default {
    auth: false,
    components: {
      BlogHome,
      Meeting,
      Pricing,
      TeamOne,
      CourseTwo,
      AboutOne,
      CourseCatTwo,
      BannerTwo,
      Footer,
      NavTwo
    },
    head(){
      return{
        title: "CEDU | Home 2"
      }
    }
  }
</script>

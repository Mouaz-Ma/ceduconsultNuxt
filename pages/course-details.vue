<template>
  <div>
    <NavOne />
    <PageHeader title="Course Details" />
    <CourseDetails />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import CourseDetails from "../components/CourseDetails";
  export default {
    auth: false,
    components: {CourseDetails, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "CEDU | Course Details"
      }
    }
  }
</script>

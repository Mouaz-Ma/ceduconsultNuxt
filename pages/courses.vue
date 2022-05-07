<template>
  <div>
    <NavThree />
    <PageHeader title="Courses" />
    <Course />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Course from "../components/Course";
  export default {
    auth: false,
    components: {Course, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "CEDU | Course"
      }
    }
  }
</script>

<template>
  <div>
    <NavOne />
    <PageHeader title="Teacher Details" />
    <TeacherDetails />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import TeacherDetails from "../components/TeacherDetails";
  export default {
    auth: false,
    components: {TeacherDetails, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "Kipso | Teacher Details"
      }
    }
  }
</script>

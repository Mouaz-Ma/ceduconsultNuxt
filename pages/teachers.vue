<template>
  <div>
    <NavOne />
    <PageHeader title="Teachers" />
    <Teachers />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import Teachers from "../components/Teachers";
  export default {
    auth: false,
    components: {Teachers, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "CEDU | Teachers"
      }
    }
  }
</script>

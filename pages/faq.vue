<template>
  <div>
    <NavOne />
    <PageHeader title="FAQ" />
    <Faq />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavOne from "../components/NavOne";
  import Footer from "../components/Footer";
  import Faq from "../components/Faq";
  export default {
    auth: false,
    components: {Faq, Footer, NavOne, PageHeader},
    head(){
      return {
        title: "CEDU | FAQ"
      }
    }
  }
</script>

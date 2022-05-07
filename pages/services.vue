<template>
  <div>
    <NavThree />
    <PageHeader title="Our Services" />
    <Services />
        <CallToAction />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Services from "../components/Services";
  import CallToAction from "../components/CallToAction";
  export default {
    auth: false,
    components: {Footer, NavThree, PageHeader, Services, CallToAction},
    head(){
      return {
        title: "CEDU | Services"
      }
    }
  }
</script>
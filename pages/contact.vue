<template>
  <div>
    <NavThree />
    <PageHeader title="Contact" />
    <Contact />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import Contact from "../components/Contact";
  export default {
    auth: false,
    components: {Contact, Footer, NavThree, PageHeader},
    head(){
      return {
        title: "CEDU | Contact"
      }
    }
  }
</script>

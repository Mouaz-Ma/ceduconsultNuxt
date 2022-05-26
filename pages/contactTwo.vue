<template>
  <div>
    <NavTwo />
    <PageHeader title="Contact" />
    <Contact />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavTwo from "../components/NavTwo";
  import Footer from "../components/Footer";
  import Contact from "../components/Contact";
  export default {
    auth: false,
    components: {Contact, Footer, NavTwo, PageHeader},
    head(){
      return {
        title: "CEDU | Contact"
      }
    }
  }
</script>

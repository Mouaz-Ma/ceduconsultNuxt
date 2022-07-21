<template>
  <div>
    <NavTwo />
    <PageHeader title="Contact" />
    <Contact />
    <TheFooter />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavTwo from "../components/NavTwo";
  import TheFooter from "../components/Footer";
  import Contact from "../components/Contact";
  export default {
    auth: false,
    components: {Contact, TheFooter, NavTwo, PageHeader},
    head(){
      return {
        title: "CEDU | Contact"
      }
    }
  }
</script>

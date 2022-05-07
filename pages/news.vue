<template>
  <div>
    <NavThree />
    <PageHeader title="News" />
    <News />
    <Footer />
  </div>
</template>
<script>
  import PageHeader from "../components/PageHeader";
  import NavThree from "../components/NavThree";
  import Footer from "../components/Footer";
  import News from "../components/News";
  export default {
    auth: false,
    components: {Footer, NavThree, PageHeader, News},
    head(){
      return {
        title: "Kipso | News"
      }
    }
  }
</script>

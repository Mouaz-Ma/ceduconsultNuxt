<template>
  <div>
    <NavThree />
    <PageHeader title="About" />
    <AboutOne />
    <VideoOne />
    <TeamOne />
    <!-- <ClientsLogoOne /> -->
    <div class="border-bottom"></div>
    <!-- <Testimonial /> -->
    <CallToActionOne />
    <Footer />
  </div>

</template>
<script>
  import NavThree from "../components/NavThree";
  import PageHeader from "../components/PageHeader";
  import Footer from "../components/Footer";
  import AboutOne from "../components/AboutOne";
  import TeamOne from "../components/TeamOne";
  import VideoOne from "../components/VideoOne";
  import ClientsLogoOne from "../components/ClientsLogoOne";
  import Testimonial from "../components/Testimonial";
  import CallToActionOne from "../components/CallToActionOne";
  export default {
    auth: false,
    components: {
      CallToActionOne,
      Testimonial,
      ClientsLogoOne,
      VideoOne,
      TeamOne,
      AboutOne,
      Footer,
      PageHeader,
      NavThree
    },
    head(){
      return {
        title: "CEDU | About Us"
      }
    }
  }
</script>

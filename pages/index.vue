<template>
  <div>
     <CallToActionTwo :link1="'index-3'" :link2="'index-2'" :title1="'Find Your University'" :title2="'E-learning Portal'" 
     :intro1="'Tertiary education is considered to be the stepping\n stone to all the careers that we want to pursue. Don\'t struggle alone! Let C.E.C guide you on this journey.'"
     :intro2="'The limits of my language mean the limits of my world \n-Ludwig Wittgenstein. \nLearn English with C.E.C today and work beyond your limits with qualified teachers.'" />
  </div>
</template>

<script>
  import CallToActionTwo from "../components/CallToActionTwo";

  export default {
    name: 'index',
    auth: false,
    components: {
    CallToActionTwo
    }
  }
</script>

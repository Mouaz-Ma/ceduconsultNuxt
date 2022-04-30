<template>
  <div>
     <CallToActionTwo :link1="'index-3'" :link2="'index-2'" />
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

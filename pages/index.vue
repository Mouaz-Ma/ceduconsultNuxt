<template>
  <div>
    <CallToActionTwo :link1="'/index-3'" :link2="'/index-2'" :title1="$t('home.title-1')" :title2="$t('home.title-2')"
    :intro1="$t('home.intro-1')"
    :intro2="$t('home.intro-2')" />
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

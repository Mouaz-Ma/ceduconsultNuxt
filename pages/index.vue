<template>
  <div>
    <CallToActionTwo
      link1="/find-university"
      link2="/e-learning"
      :title1="$t('home.title-1')"
      :title2="$t('home.title-2')"
      :intro1="$t('home.intro-1')"
      :intro2="$t('home.intro-2')"
    />
  </div>
</template>

<script>
  import CallToActionTwo from "../components/CallToActionTwo";

  export default {
    name: 'IndexView',
    auth: false,
    components: {
      CallToActionTwo
    },
    head() {
      return {
        title: 'Cedu Consult',
        meta: [
          {
            hid: 'description',
            name: 'description',
            // TODO: fill in content
            content: ''
          }
        ]
      }
    }
  }
</script>

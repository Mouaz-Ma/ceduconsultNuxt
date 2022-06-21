<template>
  <div>
    <nav-two />
    <main>
      <nuxt />
    </main>
    <c-footer />
  </div>
</template>

<script>
  import Vue from "vue";

  export default Vue.extend({
    name: 'LearningLayout',
    components: {
      NavTwo: () => import("@/components/NavTwo.vue"),
      CFooter: () => import("@/components/Footer.vue")
    }
  });
</script>

<style scoped>

</style>

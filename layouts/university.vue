<template>
  <div>
    <NavThree />
      <main>
        <nuxt />
      </main>
    <TheFooter />
  </div>
</template>

<script>
export default {
  name: "universityLayout",
  components: {
    NavThree: () => import("../components/NavThree"),
    TheFooter: () => import("../components/Footer")
  }
}
</script>

<style scoped>

</style>

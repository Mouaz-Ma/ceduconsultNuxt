<template>
  <div>
    <PageHeader title="Forgot Password" />
    <forgot />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
  import forgot from "@/components/forgot";
  export default {
    auth: false,
      auth: false,
    components: {forgot, PageHeader},
    head(){
      return {
        title: "Forgot Password"
      }
    }
  }
</script>
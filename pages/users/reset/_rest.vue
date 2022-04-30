<template>
  <div>
    <PageHeader title="Password Reset" />
    <resetpass />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
  import resetpass from "@/components/resetpass";
  export default {
    auth: false,
      auth: false,
    components: {resetpass, PageHeader},
    head(){
      return {
        title: "Password Reset"
      }
    }
  }
</script>

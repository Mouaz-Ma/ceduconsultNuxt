<template>
  <div>
    <PageHeader title="Sign up" />
    <register />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
  import register from "@/components/register";
  export default {
    auth: false,
    auth: false,
    components: {register, PageHeader},
    head(){
      return {
        title: "Register Page"
      }
    }
  }
</script>

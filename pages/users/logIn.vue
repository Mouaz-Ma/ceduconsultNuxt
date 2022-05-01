<template>
  <div>
    <PageHeader title="Sign In" />
    <logIn />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
  import logIn from "@/components/login";
  export default {
    auth: false,
      auth: false,
    components: {logIn, PageHeader},
    head(){
      return {
        title: "Login"
      }
    }
  }
</script>

<template>
  <div>
    <PageHeader title="Verified" />
    <emailVerify />
  </div>
</template>
<script>
  import PageHeader from "@/components/PageHeader";
  import emailVerify from "@/components/emailVerify";
  export default {
    auth: false,
      auth: false,
    components: {emailVerify, PageHeader},
    head(){
      return {
        title: "Email Verify"
      }
    }
  }
</script>

<template>
    <div>
<section class="contact-one">
          <div class="container text-center">
              <h3 class="contact-one__title text-center"><img src="/assets/images/CEC2_120211.png"  class="h-25 w-25"/><br>
              Welcome to Cedu 
                   </h3>
                   <br>
                   <h4 class="text-center">thank you for verifying your account!</h4><!-- /.contact-one__title -->
          <ul class="list-unstyled thm-breadcrumb ">
              <li><nuxt-link class="blackLinks" to="/">Go to home Page</nuxt-link></li>
              <li><nuxt-link class="blackLinks" to="/users/profile">Visit your Profile</nuxt-link></li>
          </ul><!-- /.list-unstyled -->
              <div class="result text-center"></div><!-- /.result -->
          </div><!-- /.container -->
      </section>

    </div>
</template>

<script>
export default {
  auth: false,
  name: "Email Verification",
  data() {
    return {
    }
  },
  methods: {
    async checkString () {
      const string = this.$route.params.email
      const verification = await this.$axios.get('/api/users/verify/'+string)
    }
  },
    mounted () {
    this.checkString()
  }
}
</script>

<style scoped>
a{
    text-decoration: none;
}

.blackLinks{
    color: #2DA297;
}

</style>

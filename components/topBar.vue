<template>
  <div class="topbar-one">
    <div class="container">
      <div class="topbar-one__left">
        <!-- <a href="#">needhelp@kipso.com</a> -->
        <!-- <a href="#">444 888 0000</a> -->
      </div><!-- /.topbar-one__left -->
      <div
        v-if="$auth.$state.loggedIn"
        class="topbar-one__right"
      >
        <nuxt-link to="/users/profile">
          {{ $t('elearning.topbar.welcome') }} {{ $auth.$state.user.username }}!
        </nuxt-link>
        <a
          id="logout"
          @click="onLogout"
        >{{ $t('elearning.topbar.signout') }}</a>
      </div>

      <div
        v-else
        class="topbar-one__right"
      >
        <nuxt-link to="/users/logIn">
          {{ $t('elearning.topbar.login') }}
        </nuxt-link>
        <!-- <nuxt-link to="/users/register">Register</nuxt-link> -->
      </div>
      <!-- /.topbar-one__right -->
    </div><!-- /.container -->
  </div><!-- /.topbar-one -->
</template>
<script>
export default {
    methods: {
        async onLogout() {
          await this.$auth.logout()
        }
    }
}
</script>
<style scoped>
#logout{
    color: #ffffff;
    cursor: grab;
    font-size: 13px;
    font-weight: 600;
    -webkit-transition: color .4s ease;
    transition: color .4s ease;
}

#logout:hover{
    color: #f16101;
}
</style>

<template>
  <header class="site-header site-header__home-three ">
    <topBar/>
    <b-navbar-nav toggleable="lg" variant="light" class="header-navigation stricky navHeight">
      <div class="container clearfix justify-content-bottom">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="logo-box clearfix">
          <b-navbar-brand href="/">
            <img src="/assets/images/logo-light.png" width="90" alt="Awesome Image"/>
          </b-navbar-brand>
          <b-navbar-toggle class="menu-toggler" target="main-navigation">
            <span class="kipso-icon-menu"></span>
          </b-navbar-toggle>
        </div><!-- /.logo-box -->
        <!-- Collect the nav links, forms, and other content for toggling -->
        <b-collapse id="main-navigation" class="main-navigation" is-nav>
          <ul class=" navigation-box">
            <li class="current">
              <a href="/">{{ $t('university.nav.home') }}</a>
            </li>
            <li>
              <a href="/about">{{ $t('university.nav.about') }}</a>
              <!-- <ul class="sub-menu">
                <li><a href="/about">About Page</a></li>
                  <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                  <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li>
                  <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>
              </ul> -->
            </li>
            <li>
              <a href="/university">{{ $t('university.nav.universities') }}</a>
              <!-- <ul class="sub-menu">
                  <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                  <li><nuxt-link to="/course-details">Course Details</nuxt-link></li>
              </ul> -->
            </li>
            <li>
              <a href="/course">{{ $t('university.nav.courses') }}</a>
              <!-- <ul class="sub-menu">
                  <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                  <li><nuxt-link to="/course-details">Course Details</nuxt-link></li>
              </ul> -->
            </li>
            <!-- <li>
                <nuxt-link to="/teachers">Teachers</nuxt-link>
                <ul class="sub-menu">
                    <li><nuxt-link to="/teachers">Teachers</nuxt-link></li>
                    <li><nuxt-link to="/teacher-details">Teachers Details</nuxt-link></li>
                    <li><nuxt-link to="/become-teacher">Become Teacher</nuxt-link></li>
                </ul>
            </li> -->
            <li>
              <nuxt-link to="/services">{{ $t('university.nav.applicants') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs">{{ $t('university.nav.blogs') }}</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/contact">{{ $t('university.nav.contact') }}</nuxt-link>
            </li>

            <li class="mx-2">
              <b-dropdown :text="$i18n.locale" variant="outline-light">
                <b-dropdown-item
                  v-for="lang in $i18n.locales"
                  :key="lang.code"
                  :value="lang.code"
                  :active="lang.code === $i18n.locale"
                  @click="changeLang(lang.code)"
                >
                  <span class="m-1 w-50">{{ lang.name }}</span></b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </b-collapse><!-- /.navbar-collapse -->

        <div class="right-side-box">
          <div class="header__social">
            <a href="https://www.facebook.com/ceduconsultancy"><i class="fab fa-facebook-square"></i></a>
            <a href="https://www.instagram.com/cedu_consultancy/"><i class="fab fa-instagram"></i></a>
            <a href="https://wa.me/443301335324"><i class="fab fa-whatsapp"></i></a>
          </div><!-- /.header__social -->
        </div><!-- /.right-side-box -->
      </div>
      <!-- /.container -->
    </b-navbar-nav>
  </header>
</template>

<script>
import topBar from "@/components/topBar.vue";

export default {
  name: 'NavThree',

  components: {
    topBar
  },

  auth: false,

  data: () => ({}),
  methods: {
    changeLang: function (language) {
      this.$i18n.setLocale(language);
      this.restartServices();
    },
    restartServices: function () {
      window.location.reload(true)
    },
  },

  mounted() {
    if ($(".main-navigation .navigation-box").length) {
      var subMenu = $(".main-navigation .sub-menu");
      subMenu
        .parent("li")
        .children("a")
        .append(function () {
          return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
      var mainNavToggler = $(".header-navigation .menu-toggler");
      var subNavToggler = $(".main-navigation .sub-nav-toggler");
      mainNavToggler.on("click", function () {
        //alert()
        var Self = $(this);
        var menu = Self.data("target");
        $(menu).slideToggle();
        $(menu).toggleClass("showen");
        return false;
      });
      subNavToggler.on("click", function () {
        var Self = $(this);
        Self.parent().parent().children(".sub-menu").slideToggle();
        return false;
      });
    }
  },
}
</script>

<style scoped>
.header-navigation {
  font-family: "Poppins";
  color: #81868a;
  font-size: 16px;
  line-height: 34px;
  letter-spacing: -0.02em;
  text-decoration: none;
}

a:hover {
  text-decoration: none;
}

.stricky-fixed {
  padding: 10px;
}
</style>

<template>
  <header class="site-header site-header__home-three ">
    <topBar />
    <b-navbar-nav
      variant="light"
      class="header-navigation  navHeight"
    >
      <div class="container d-flex flex-column flex-xl-row justify-content-center align-items-baseline">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="logo-box clearfix justify-content-between">
          <b-navbar-brand>
            <nuxt-link to="/">
              <img
                src="/assets/images/logo-light.png"
                class="mainLogo"
                alt="Awesome Image"
              >
            </nuxt-link>
          </b-navbar-brand>
          <div class="mx-auto d-block d-xl-none">
            <div class="header__social">
              <a href="https://www.facebook.com/ceduconsultancy"><i class="fab fa-facebook-square" /></a>
              <a href="https://www.instagram.com/cedu_consultancy/"><i class="fab fa-instagram" /></a>
              <a href="https://wa.me/443301335324"><i class="fab fa-whatsapp" /></a>
            </div><!-- /.header__social -->
          </div><!-- /.right-side-box -->
          <b-navbar-toggle
            class="menu-toggler"
            target="main-navigation"
          >
            <span class="kipso-icon-menu d-xl-none" />
          </b-navbar-toggle>
        </div><!-- /.logo-box -->
        <!-- Collect the nav links, forms, and other content for toggling -->
        <b-collapse
          id="main-navigation"
          class="main-navigation"
          is-nav
        >
          <ul class=" navigation-box">
            <li>
              <nuxt-link to="/find-university" exact>{{ $t('university.nav.home') }}</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about" exact>{{ $t('university.nav.about') }}</nuxt-link>
              <!-- <ul class="sub-menu">
                <li><a href="/about">About Page</a></li>
                  <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                  <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li>
                  <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>
              </ul> -->
            </li>
            <li>
              <nuxt-link to="/university" exact>{{ $t('university.nav.universities') }}</nuxt-link>
              <!-- <ul class="sub-menu">
                  <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                  <li><nuxt-link to="/course-details">Course Details</nuxt-link></li>
              </ul> -->
            </li>
            <li>
              <nuxt-link to="/course" exact>{{ $t('university.nav.courses') }}</nuxt-link>
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
              <nuxt-link to="/services" exact>
                {{ $t('university.nav.applicants') }}
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/blogs" exact>
                {{ $t('university.nav.blogs') }}
              </nuxt-link>
            </li>

            <li>
              <nuxt-link to="/contact" exact>
                {{ $t('university.nav.contact') }}
              </nuxt-link>
            </li>

            <li class="text-center">
              <b-dropdown
                class="m-3"
                :text="$i18n.locale"
                variant="outline-info"
              >
                <template #button-content>
                  <img
                    :src="require(`@/assets/icons/`+ $i18n.locale +`.svg`)"
                    style="width: 24px; height: auto"
                    alt=""
                    class="mr-1 ml-1"
                  >
                </template>
                <b-dropdown-item
                  v-for="lang in $i18n.locales"
                  :key="lang.code"
                  :value="lang.code"
                  :active="lang.code === $i18n.locale"
                  @click="changeLang(lang.code)"
                >
                  <span class="m-1 w-25"><img
                    :src="require(`@/assets/icons/`+ lang.code +`.svg`)"
                    style="width: 24px; height: auto"
                    alt=""
                    class="mr-1 ml-1"
                  >{{ lang.name }}</span>
                </b-dropdown-item>
              </b-dropdown>
            </li>
          </ul>
        </b-collapse><!-- /.navbar-collapse -->
        <div class="d-none d-xl-block right-side-box mr-3">
          <div class="header__social">
            <a href="https://www.facebook.com/ceduconsultancy"><i class="fab fa-facebook-square" /></a>
            <a href="https://www.instagram.com/cedu_consultancy/"><i class="fab fa-instagram" /></a>
            <a href="https://wa.me/443301335324"><i class="fab fa-whatsapp" /></a>
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
  methods: {
    changeLang: function (language) {
      this.$i18n.setLocale(language);
      this.restartServices();
    },
    restartServices: function () {
      window.location.reload(true)
    },
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

.mainLogo {
  width: 95px;
  margin-top: -10px;
}

@media only screen and (max-width: 450px) {
  .mainLogo {
    width: 75px;
  }
}
</style>

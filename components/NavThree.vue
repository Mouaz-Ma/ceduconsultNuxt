<template>
  <header class="site-header site-header__home-three ">
<topBar />
      <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky navHeight">
          <div class="container clearfix">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="logo-box clearfix">
                  <a class="navbar-brand" href="/">
                      <img src="/assets/images/logo-light.png" class="main-logo" width="90" alt="Awesome Image" />
                  </a>
                  <button class="menu-toggler" data-target=".main-navigation">
                      <span class="kipso-icon-menu"></span>
                  </button>
              </div><!-- /.logo-box -->
              <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="main-navigation">
                                          <ul class=" navigation-box">
                                              <li class="current">
                                                  <a href="/">Home</a>
                                              </li>
                                              <li>
                                                  <a href="/about">About</a>
                                                  <!-- <ul class="sub-menu">
                                                    <li><a href="/about">About Page</a></li>
                                                      <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                                                      <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li>
                                                      <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>
                                                  </ul> -->
                                              </li>
                                              <li>
                                                <a href="/Universities">Universities</a>
                                                  <!-- <ul class="sub-menu">
                                                      <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                                                      <li><nuxt-link to="/course-details">Course Details</nuxt-link></li>
                                                  </ul> -->
                                              </li>
                                              <li>
                                                <a href="/courses">Courses</a>
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
                                                  <nuxt-link to="/services">For Applicants</nuxt-link>
                                              </li>
                                              <li>
                                                  <nuxt-link to="/blogs">blogs</nuxt-link>
                                              </li>
                                              <li>
                                                  <nuxt-link to="/news">News</nuxt-link>
                                              </li>
                                              <li>
                                                  <nuxt-link to="/contact">Contact</nuxt-link>
                                              </li>
                                          </ul>
                                      </div><!-- /.navbar-collapse -->
              <div class="right-side-box">
                  <div class="header__social">
                        <a href="https://www.facebook.com/ceduconsultancy"><i class="fab fa-facebook-square"></i></a>
                        <a href="https://www.instagram.com/cedu_consultancy/"><i class="fab fa-instagram"></i></a>
                        <a href="https://wa.me/443301335324"><i class="fab fa-whatsapp"></i></a>
                  </div><!-- /.header__social -->
              </div><!-- /.right-side-box -->
          </div>
          <!-- /.container -->
      </nav>
  </header>
</template>

<script>
import topBar from "@/components/topBar.vue";
export default {
  components: {
    topBar
  },
  auth: false,
  name: "NavThree",
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
.navHeight{
    height: 100px;
}
</style>

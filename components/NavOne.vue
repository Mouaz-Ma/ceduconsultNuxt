<template>
    <div>
<top-bar />
<header class="site-header site-header__header-one ">
          <nav class="navbar navbar-expand-lg navbar-light header-navigation stricky navHeight">
              <div class="container clearfix">
                  <!-- Brand and toggle get grouped for better mobile display -->
                  <div class="logo-box clearfix justify-content-between">
                      <nuxt-link class="navbar-brand" to="/">
                          <img src="/assets/images/logo-dark.png" class="main-logo" width="95" alt="Awesome Image" />
                      </nuxt-link>
                      <div class="header__social">
                            <a href="https://www.facebook.com/ceduconsultancy"><i class="fab fa-facebook-square"></i></a>
                            <a href="https://www.instagram.com/cedu_consultancy/"><i class="fab fa-instagram"></i></a>
                            <a href="https://wa.me/443301335324"><i class="fab fa-whatsapp"></i></a>
                      </div><!-- /.header__social -->
                      <button class="menu-toggler" data-target=".main-navigation">
                          <span class="kipso-icon-menu"></span>
                      </button>
                  </div><!-- /.logo-box -->
                  <!-- Collect the nav links, forms, and other content for toggling -->
                  <div class="main-navigation">
                      <ul class=" navigation-box">
                          <li class="current">
                              <a href="/">Home</a>
                              <ul class="sub-menu">
                                  <li><a href="/">Home 01</a></li>
                                  <li><a href="/index-2">Home 02</a></li>
                                  <li><a href="/index-3">Home 03</a></li>
                                  <li><a href="#">Header Versions</a>
                                      <ul class="sub-menu">
                                          <li><a href="/">Header 01</a></li>
                                          <li><a href="/index-2">Header 02</a></li>
                                          <li><a href="/index-3">Header 03</a></li>
                                      </ul><!-- /.sub-menu -->
                                  </li>
                              </ul><!-- /.sub-menu -->
                          </li>
                          <li>
                              <a href="#">Pages</a>
                              <ul class="sub-menu">
                                  <li><a href="/about">About Page</a></li>
                                  <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                                  <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li>
                                  <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>
                              </ul><!-- /.sub-menu -->
                          </li>
                          <li>
                              <nuxt-link to="/courses">Courses</nuxt-link>
                              <ul class="sub-menu">
                                  <li><nuxt-link to="/courses">Courses</nuxt-link></li>
                                  <li><nuxt-link to="#">Course Details</nuxt-link></li>
                              </ul><!-- /.sub-menu -->
                          </li>
                          <li>
                              <nuxt-link to="/teachers">Teachers</nuxt-link>
                              <ul class="sub-menu">
                                  <li><nuxt-link to="/teachers">Teachers</nuxt-link></li>
                                  <li><nuxt-link to="/teacher-details">Teachers Details</nuxt-link></li>
                                  <li><nuxt-link to="/become-teacher">Become Teacher</nuxt-link></li>
                              </ul><!-- /.sub-menu -->
                          </li>
                          <li>
                              <nuxt-link to="/news">News</nuxt-link>
                              <ul class="sub-menu">
                                  <li><nuxt-link to="/news">News Page</nuxt-link></li>
                                  <li><nuxt-link to="/news-details">News Details</nuxt-link></li>
                              </ul><!-- /.sub-menu -->
                          </li>
                          <li>
                              <nuxt-link to="/contact">Contact</nuxt-link>
                          </li>
                      </ul>
                  </div><!-- /.navbar-collapse -->
                  <div class="right-side-box">
                      <a class="header__search-btn search-popup__toggler" href="#"><i class="kipso-icon-magnifying-glass"></i>
                          <!-- /.kipso-icon-magnifying-glass --></a>
                  </div><!-- /.right-side-box -->
              </div>
              <!-- /.container -->
          </nav>
          <div class="site-header__decor">
              <div class="site-header__decor-row">
                  <div class="site-header__decor-single">
                      <div class="site-header__decor-inner-1"></div><!-- /.site-header__decor-inner -->
                  </div><!-- /.site-header__decor-single -->
                  <div class="site-header__decor-single">
                      <div class="site-header__decor-inner-2"></div><!-- /.site-header__decor-inner -->
                  </div><!-- /.site-header__decor-single -->
                  <div class="site-header__decor-single">
                      <div class="site-header__decor-inner-3"></div><!-- /.site-header__decor-inner -->
                  </div><!-- /.site-header__decor-single -->
              </div><!-- /.site-header__decor-row -->
          </div><!-- /.site-header__decor -->
      </header>
    </div>
</template>

<script>
import topBar from "@/components/topBar.vue";

export default {
  auth: false,
  components: {
    topBar
  },
  name: "NavOne",
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
</style>

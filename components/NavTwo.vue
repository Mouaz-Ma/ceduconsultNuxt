<template>
  <header class="site-header site-header__header-two ">
    <top-bar />
    <b-navbar-nav toggleable="lg" variant="dark" class="header-navigation stricky navHeight">
      <div class="container clearfix justify-content-bottom">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="logo-box clearfix">
          <b-navbar-brand href="/">
            <img src="/assets/images/logo-light.png" width="90" alt="Awesome Image" />
          </b-navbar-brand>
          <b-navbar-toggle class="menu-toggler" target="main-navigation">
            <span class="kipso-icon-menu"></span>
          </b-navbar-toggle>
        </div><!-- /.logo-box -->
        <!-- Collect the nav links, forms, and other content for toggling -->
        <b-collapse id="main-navigation" class="main-navigation" is-nav>
          <ul class=" navigation-box">
            <li class="current">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/classRoom">Available classes</a>
              <!-- <ul class="sub-menu">
                      <li><a href="/about">About Page</a></li>
                        <li><nuxt-link to="/gallery">Gallery</nuxt-link></li>
                        <li><nuxt-link to="/pricing">Pricing Plans</nuxt-link></li>
                        <li><nuxt-link to="/faq">FAQ'S</nuxt-link></li>
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
              <nuxt-link to="/blogs/indexTwo">blogs and news</nuxt-link>
            </li>

            <li>
              <nuxt-link to="/contactTwo">Contact</nuxt-link>
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
</template>


<script>
  import topBar from "@/components/topBar.vue";
  export default {
    components: {
      topBar
    },
    auth: false,
    name: "NavTwo",
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

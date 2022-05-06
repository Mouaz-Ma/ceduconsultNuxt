<template>
    <div>
      <footer class="site-footer">
                    <div id="whatsAppBtn">
    <a href="https://wa.me/443301335324?text=I%20just%20visited%20your%20website%2C%20and%20I%20will%20would%20like%20to%20get%20more%20information" class="btn whatsApp"><img id="whatsAppImage"
        src="https://global-uploads.webflow.com/601befbd3e6c39d9b373aa94/606aecfac9846644d0c6d979_whatsapp.svg"
        alt=""></a>
  </div>
                  <div class="site-footer__upper">
                      <div class="container">
                          <div class="row">
                              <div class="col-xl-3 col-lg-6 col-sm-12">
                                  <div class="footer-widget footer-widget__contact">
                                      <h2 class="footer-widget__title">Courses</h2>
                                      <ul class="list-unstyled footer-widget__course-list">
                                          <li>
                                              <h2><a href="course-details.html">Introduction Web Design</a></h2>
                                              <p>Mike Hardson</p>
                                          </li>
                                          <li>
                                              <h2><a href="course-details.html"> Learning MBA Management </a></h2>
                                              <p>Jessica Brown</p>
                                          </li>
                                      </ul>
                                  </div>
                              </div>
                              <div class="col-xl-3 col-lg-6 col-sm-12">
                                  <div class="footer-widget footer-widget__link">
                                      <h2 class="footer-widget__title">Explore</h2><!-- /.footer-widget__title -->
                                      <div class="footer-widget__link-wrap">
                                          <ul class="list-unstyled footer-widget__link-list">
                                              <li><a href="#">About</a></li>
                                              <li><a href="#">Overview</a></li>
                                              <li><a href="#">Teachers</a></li>
                                              <li><a href="#">Join Us</a></li>
                                              <li><a href="#">Our News</a></li>
                                          </ul><!-- /.footer-widget__link-list -->
                                          <ul class="list-unstyled footer-widget__link-list">
                                              <li><a href="#">Help </a></li>
                                              <li><a href="#">Contact</a></li>
                                              <li><a href="#">Register Now</a></li>
                                          </ul><!-- /.footer-widget__link-list -->
                                      </div><!-- /.footer-widget__link-wrap -->
                                  </div><!-- /.footer-widget -->
                              </div><!-- /.col-lg-3 -->
                              <div class="col-xl-3 col-lg-6 col-sm-12">
                                  <div class="footer-widget footer-widget__gallery">
                                      <h2 class="footer-widget__title">Certified by</h2><!-- /.footer-widget__title -->
                                      <ul class="list-unstyled footer-widget__gallery-list">
                                          <li><a data-pm-no-track href="https://connect.pierapps.com/agencies/48167"><img src='https://dtbhzdanf36fd.cloudfront.net/postmark_templates/pier-admin-payments-verified_agency_pier_network/verified-agency-s.png' /></a></li>
                                          <li><a href="https://connect.pierapps.com/qualification_types/icef-trained-agent-counsellor/00296529/1816"><img  src="/assets/images/20354_badge20220314-28454-yegzwq.png" alt=""></a></li>
                                          <!-- <li><a href="#"><img src="/assets/images/footer-1-3.png" alt=""></a></li>
                                          <li><a href="#"><img src="/assets/images/footer-1-4.png" alt=""></a></li>
                                          <li><a href="#"><img src="/assets/images/footer-1-5.png" alt=""></a></li>
                                          <li><a href="#"><img src="/assets/images/footer-1-6.png" alt=""></a></li> -->
                                      </ul><!-- /.footer-widget__gallery -->
                                  </div><!-- /.footer-widget -->
                              </div><!-- /.col-lg-3 -->
                              <div class="col-xl-3 col-lg-6 col-sm-12">
                                  <div class="footer-widget footer-widget__about">
                                      <h2 class="footer-widget__title">About</h2><!-- /.footer-widget__title -->
                                      <p class="footer-widget__text">Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                                          Phasellus vehic sagittis euismod.</p><!-- /.footer-widget__text -->
                                      <div class="footer-widget__btn-block">
                                          <a href="#" class="thm-btn">Contact</a><!-- /.thm-btn -->
                                          <a href="#" class="thm-btn">Purchase</a><!-- /.thm-btn -->
                                      </div><!-- /.footer-widget__btn-block -->
                                  </div><!-- /.footer-widget -->
                              </div><!-- /.col-lg-3 -->
                          </div><!-- /.row -->
                      </div><!-- /.container -->
                  </div><!-- /.site-footer__upper -->
                  <div class="site-footer__bottom">
                      <div class="container">
                          <p class="site-footer__copy">&copy; Copyright 2020 by <a href="#">Layerdrops.com</a></p>
                          <div class="site-footer__social">
                              <a href="#" data-target="html" class="scroll-to-target site-footer__scroll-top"><i class="kipso-icon-top-arrow"></i></a>
                              <a href="https://www.facebook.com/ceduconsultancy"><i class="fab fa-facebook-square"></i></a>
                              <a href="https://www.instagram.com/cedu_consultancy/"><i class="fab fa-instagram"></i></a>
                              <a href="https://wa.me/443301335324"><i class="fab fa-whatsapp"></i></a>
                              <a class="notVisible" href="https://wa.me/443301335324"><i class="fab fa-whatsapp"></i></a>
                          </div><!-- /.site-footer__social -->
                          <!-- /.site-footer__copy -->
                      </div><!-- /.container -->
                  </div><!-- /.site-footer__bottom -->
              </footer>
      <div class="search-popup">
              <div class="search-popup__overlay custom-cursor__overlay">
                  <div class="cursor"></div>
                  <div class="cursor-follower"></div>
              </div><!-- /.search-popup__overlay -->
              <div class="search-popup__inner">
                  <form action="#" class="search-popup__form">
                      <input type="text" name="search" placeholder="Type here to Search....">
                      <button type="submit"><i class="kipso-icon-magnifying-glass"></i></button>
                  </form>
              </div><!-- /.search-popup__inner -->
          </div>
    </div>
</template>

<script>
    export default {
    auth: false,
        name: "Footer"
    }
</script>

<style scoped>
#whatsAppBtn {
  position: fixed;
  bottom: 60px;
  right: 20px; 
  z-index: 1000;
}

#whatsAppImage{
  max-width: 100%;
  height: 75px;
}

.notVisible{
    visibility: hidden;
}
</style>

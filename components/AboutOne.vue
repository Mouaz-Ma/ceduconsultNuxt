<template>
  <section class="about-one ">
      <img src="/assets/images/circle-stripe.png" class="about-one__circle" alt="">
      <div class="container text-center">
          <div class="block-title text-center">
              <h2 class="block-title__title">Who are we? <br>
</h2><!-- /.block-title__title -->
          </div><!-- /.block-title -->
          <div class="about-one__img">
              <div class="row">
                  <div class="col-lg-6">
                      <img src="/assets/images/about-2-1.jpg" class="w-100 h-100" alt="">
                  </div><!-- /.col-lg-6 -->
                  <div class="col-lg-6">
                      <img src="/assets/images/about-2-2.jpg" class="w-100 h-100" alt="">
                  </div><!-- /.col-lg-6 -->
              </div><!-- /.row -->
              <div class="about-one__review">
                  <p class="about-one__review-count counter">88750</p><!-- /.about-one__review-count -->
                  <div class="about-one__review-stars">
                      <i class="fas fa-star"></i><!-- /.fa fa-star -->
                      <i class="fas fa-star"></i><!-- /.fa fa-star -->
                      <i class="fas fa-star"></i><!-- /.fa fa-star -->
                      <i class="fas fa-star"></i><!-- /.fa fa-star -->
                      <i class="fas fa-star"></i><!-- /.fa fa-star -->
                  </div><!-- /.about-one__stars -->
                  <p class="about-one__review-text">students loved us</p><!-- /.about-one__review-text -->
              </div><!-- /.about-one__review -->
          </div><!-- /.about-one__img -->
          <p class="about-one__text">
              Charlene Education Consultancy (C.E.C) is an educational agency and tutorial platform that provides 
              services to students that want to study abroad and to those that would like to learn English online.
                <br>
                As an education agency, we believe that education is a fundamental human right. Therefore, we provide help and counselling to students that want to pursue their tertiary education. We strive to create opportunities for students that have genuine educational aspirations and honest intentions in terms of their studies. 
                <br>
                We work in the best interest of both students and our education partners to ensure a smooth transition  
            </p><!-- /.about-one__text -->
          <nuxt-link  class="thm-btn about-one__btn" to="/contact">Start Learning Now</nuxt-link>






      </div><!-- /.container -->
      <div class="container">
                <ul>
              <li>
                 <div class="h4"> Mission Statement </div>
                  <ul>
                      <li>Our mission is to place education minded students at genuine educational institutions. We aim to take leadership and close the gap between the students and the institutions. We strive to uphold excellence of higher education by being competent, inclusive, professional and transparent in our daily operations for the good of the students and our education providers.</li>
                  </ul>
              </li>
                <li>
                    <div class="h4">Our Vision</div>
                  
                  <ul>
                      <li>To provide effortless services to our students and education partners. </li>
                      <li>To successfully place students at their desired institutions and under their desired course programs. </li>
                      <li>To maintain a high standard of professionalism and performance among our students and education partners that we represent.</li>
                  </ul>
              </li>
                <li>
                    <div class="h4">Our goals</div>
                  
                  <ul>
                      <li> to be students’ number 1 choice for higher education abroad!</li>
                      <li>Maintain high standards between ourselves, partner universities and students.</li>
                  </ul>
              </li>
                <li>
                    <div class="h4">Our Values</div>
                  
                  <ul>
                      <li>Being an Educational Agency, we take pride in honesty, integrity and Objectivity. </li>
                      <li>Transparency and Inclusiveness</li>
                      <li>Confidentiality, Professional behavior and Open Communication</li>
                  </ul>
              </li>
          </ul>
      </div>
  </section>
</template>

<script>
    export default {
    auth: false,
        name: "AboutOne"
    }
</script>

<style scoped>

</style>

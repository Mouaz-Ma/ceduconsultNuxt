<template>
  <section class="about-one ">
    <img
      src="/assets/images/circle-stripe.png"
      class="about-one__circle"
      alt=""
    >
    <div class="container text-center">
      <div class="block-title text-center">
        <h2 class="block-title__title">
          {{ $t('elearning.about-one.who') }} <br>
        </h2><!-- /.block-title__title -->
      </div><!-- /.block-title -->
      <div class="about-one__img">
        <div class="row">
          <div class="col-lg-6">
            <img
              src="/assets/images/about-2-1.jpg"
              class="w-100 h-100"
              alt=""
            >
          </div><!-- /.col-lg-6 -->
          <div class="col-lg-6">
            <img
              src="/assets/images/about-2-2.jpg"
              class="w-100 h-100"
              alt=""
            >
          </div><!-- /.col-lg-6 -->
        </div><!-- /.row -->
        <div class="about-one__review">
          <p class="about-one__review-count counter">
            {{ $t('elearning.about-one.count') }}
          </p><!-- /.about-one__review-count -->
          <div class="about-one__review-stars">
            <i class="fas fa-star" /><!-- /.fa fa-star -->
            <i class="fas fa-star" /><!-- /.fa fa-star -->
            <i class="fas fa-star" /><!-- /.fa fa-star -->
            <i class="fas fa-star" /><!-- /.fa fa-star -->
            <i class="fas fa-star" /><!-- /.fa fa-star -->
          </div><!-- /.about-one__stars -->
          <p class="about-one__review-text">
            {{ $t('elearning.about-one.students') }}
          </p><!-- /.about-one__review-text -->
        </div><!-- /.about-one__review -->
      </div><!-- /.about-one__img -->
      <p class="about-one__text">
        {{ $t('elearning.about-one.p1') }}
        <br>
        <br>
        {{ $t('elearning.about-one.p2') }}
        <br>
        <br>
        {{ $t('elearning.about-one.p3') }}
        <br>
        <br>
        {{ $t('elearning.about-one.p4') }}
      </p><!-- /.about-one__text -->

      <nuxt-link
        class="thm-btn about-one__btn"
        to="/contact"
      >
        {{ $t('elearning.about-one.button') }}
      </nuxt-link>
    </div><!-- /.container -->

    <!-- <div class="container">
      <ul>
        <li>
          <div class="h4">
            Mission Statement
          </div>
          <ul>
            <li>Our mission is to place education minded students at genuine educational institutions. We aim to take leadership and close the gap between the students and the institutions. We strive to uphold excellence of higher education by being competent, inclusive, professional and transparent in our daily operations for the good of the students and our education providers.</li>
          </ul>
        </li>
        <li>
          <div class="h4">
            Our Vision
          </div>

          <ul>
            <li>To provide effortless services to our students and education partners. </li>
            <li>To successfully place students at their desired institutions and under their desired course programs. </li>
            <li>To maintain a high standard of professionalism and performance among our students and education partners that we represent.</li>
          </ul>
        </li>
        <li>
          <div class="h4">
            Our goals
          </div>

          <ul>
            <li> to be students’ number 1 choice for higher education abroad!</li>
            <li>Maintain high standards between ourselves, partner universities and students.</li>
          </ul>
        </li>
        <li>
          <div class="h4">
            Our Values
          </div>

          <ul>
            <li>Being an Educational Agency, we take pride in honesty, integrity and Objectivity. </li>
            <li>Transparency and Inclusiveness</li>
            <li>Confidentiality, Professional behavior and Open Communication</li>
          </ul>
        </li>
      </ul>
    </div> -->
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

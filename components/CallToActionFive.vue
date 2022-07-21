<template>
  <section class="cta-five">
    <img src="/assets/images/team-1-1.jpg" class="cta-five__members-1" alt="">
    <img src="/assets/images/team-1-2.jpg" class="cta-five__members-2" alt="">
    <img src="/assets/images/team-1-3.jpg" class="cta-five__members-3" alt="">
    <img src="/assets/images/team-1-4.jpg" class="cta-five__members-4" alt="">
    <img src="/assets/images/team-1-5.jpg" class="cta-five__members-5" alt="">
    <img src="/assets/images/team-1-6.jpg" class="cta-five__members-6" alt="">

    <div class="cta-five__bubble-1"><i class="fas fa-rocket"></i></div><!-- /.cta-five__bubble-1 -->
    <div class="cta-five__bubble-2"><i class="fas fa-bolt"></i></div><!-- /.cta-five__bubble-2 -->
    <div class="container text-center">
      <h2 class="cta-five__title">{{ $t('university.call-5.title1') }} <br>
        {{ $t('university.call-5.title2') }}</h2><!-- /.cta-five__title -->
      <p class="cta-five__text">{{ $t('university.call-5.p') }}</p>
      <!-- /.cta-five__text -->
      <a href="#" class="thm-btn cta-five__btn">{{ $t('university.call-5.btn') }}</a><!-- /.thm-btn cta-five__btn -->
    </div><!-- /.container text-center -->
  </section>
</template>

<script>
export default {
  auth: false,
  name: "CallToActionFive"
}
</script>

<style scoped>

</style>

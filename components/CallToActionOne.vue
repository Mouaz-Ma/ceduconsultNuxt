<template>
  <section class="cta-one cta-one__home-one" :style="{backgroundImage: `url(/assets/images/cta-bg-1-1.jpg)`}">
    <div class="container">
      <h2 class="cta-one__title">
        {{ $t('university.call.title') }}
      </h2><!-- /.cta-one__title -->
      <div class="cta-one__btn-block">
        <a href="/contact" class="thm-btn cta-one__btn">{{ $t('university.call.btn') }}</a><!-- /.thm-btn -->
      </div><!-- /.cta-one__btn-block -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  name: "CallToActionOne",
  auth: false,
}
</script>

<style scoped>

</style>

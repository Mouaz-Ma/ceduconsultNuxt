<template>
  <section class="team-one team-one__become-teacher">
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-title__title">{{ $t('elearning.programs.title') }}</h2><!-- /.block-title__title -->
      </div><!-- /.block-title -->
      <div class="row">
        <div class="partners-one__carousel owl-carousel owl-theme">
          <div v-for="item in programs" :key="item.name" class="item">
            <div class="team-one__single">
              <div class="team-one__image">
                <img class="temOneImage" width="200" height="200" :src="item.image" :alt="item.name">
              </div><!-- /.team-one__image -->
              <div class="team-one__content">
                <h2 class="team-one__name"><a href="#">{{ item.name }} </a></h2>
                <!-- /.team-one__name -->
                <br />
                <p class="team-one__text">{{ item.description }}</p>
                <!-- /.team-one__text -->
              </div><!-- /.team-one__content -->
              <div class="team-one__social">
                <!-- <a href="https://www.facebook.com/ceduconsultancy"><i class="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/cedu_consultancy/"><i class="fab fa-instagram"></i></a>
                <a href="https://wa.me/443301335324"><i class="fab fa-whatsapp"></i></a> -->
              </div><!-- /.team-one__social -->
            </div><!-- /.team-one__single -->
          </div><!-- /.col-lg-3 -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProgramsComponent",
  data() {
    return {
      programs: [
        {
          image: 'https://pbs.twimg.com/profile_images/1504131006701486089/M8sNZSko_400x400.jpg',
          name: this.$t('elearning.programs.ted.name'),
          description: this.$t('elearning.programs.ted.description')
        },
        {
          image: 'https://static.wixstatic.com/media/10c87d_e3a10df27b9d44ef8fa9d36ded98fa36~mv2.png/v1/fill/w_600,h_315,al_c/10c87d_e3a10df27b9d44ef8fa9d36ded98fa36~mv2.png',
          name: this.$t('elearning.programs.ng.name'),
          description: this.$t('elearning.programs.ng.description'),
        },
        {
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ33lc8RhiiFza4djFPx0rfWmuFuhGBONCUNwnb9AuJQMyWV7XEUdBuv_0YbG5kKB0FbA&usqp=CAU',
          name: this.$t('elearning.programs.oxford.name'),
          description: this.$t('elearning.programs.oxford.description'),
        },
        {
          image: 'https://play-lh.googleusercontent.com/Hc0IFRdEJ7rXYaRazUdZ2b70WPUDescxMv8rzDohUQmMuUXOXqHlyE2VeShYtBH61vv0',
          name: this.$t('elearning.programs.ielts.name'),
          description: this.$t('elearning.programs.ielts.description'),
        },
        {
          image: 'https://tukuz.com/wp-content/uploads/2021/03/cambridge-university-press-logo-vector.png',
          name: this.$t('elearning.programs.cambridge.name'),
          description: this.$t('elearning.programs.cambridge.description'),
        },
        {
          image: 'https://aast.edu/pheed/opencmsfiles/retreiveOnePIC.php?disp_unit=30&img=toefl.gif',
          name: this.$t('elearning.programs.toefl.name'),
          description: this.$t('elearning.programs.toefl.description'),
        },
        {
          image: 'https://www.teachingenglish.org.uk/sites/teacheng/files/images/macmillanenglish-logo.gif',
          name: this.$t('elearning.programs.macmillan.name'),
          description: this.$t('elearning.programs.macmillan.description'),
        },
        {
          image: 'https://elt.oup.com/elt/students/images/interface/englishfile.gif',
          name: this.$t('elearning.programs.ef.name'),
          description: this.$t('elearning.programs.ef.description'),
        },
        {
          image: 'https://englishclassviaskype.com/wp-content/uploads/2018/10/TOEIC-LOGO.jpg',
          name: this.$t('elearning.programs.toeic.name'),
          description: this.$t('elearning.programs.toeic.description'),
        },
        {
          image: 'https://i0.wp.com/eslfriend.com/wp-content/uploads/2021/06/OPIcLogo-e1622930750259.png?fit=700%2C435&ssl=1',
          name: this.$t('elearning.programs.opic.name'),
          description: this.$t('elearning.programs.opic.description'),
        },
        {
          image: 'https://edumirchi.com/wp-content/uploads/2021/11/Duolingo-English-Test.jpg',
          name: this.$t('elearning.programs.duolingo.name'),
          description: this.$t('elearning.programs.duolingo.description'),
        },
        {
          image: 'https://koreanhorizons.teflsource.com/assets/frontend/images/tefl-cetified.png',
          name: this.$t('elearning.programs.tefl.name'),
          description: this.$t('elearning.programs.tefl.description'),
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>

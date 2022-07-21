<template>
  <b-container>
      <section class="about-two m-5">
      <div class="container">
          <div class="row">
              <div class="col-xl-6">
                  <div class="about-two__content">
                      <div class="block-title text-left">
                          <h2 class="block-title__title">{{ $t('elearning.quiz.main-title1') }} <br>
                            {{ $t('elearning.quiz.main-title2') }}</h2><!-- /.block-title__title -->
                      </div><!-- /.block-title -->
                      <p class="about-two__text">{{ $t('elearning.quiz.main-content') }}</p><!-- /.about-two__text -->
                      <div class="about-two__single-wrap">
                          <div class="about-two__single">
                              <div class="about-two__single-icon">
                                  <i class="kipso-icon-professor"></i><!-- /.kipso-icon-professor -->
                              </div><!-- /.about-two__single-icon -->
                              <div class="about-two__single-content">
                                  <p class="about-two__single-text">{{ $t('elearning.quiz.feature1') }}</p><!-- /.about-two__single-text -->
                              </div><!-- /.about-two__single-content -->
                          </div><!-- /.about-two__single -->
                          <div class="about-two__single">
                              <div class="about-two__single-icon">
                                  <i class="kipso-icon-knowledge"></i><!-- /.kipso-icon-professor -->
                              </div><!-- /.about-two__single-icon -->
                              <div class="about-two__single-content">
                                  <p class="about-two__single-text">{{ $t('elearning.quiz.feature2') }}</p><!-- /.about-two__single-text -->
                              </div><!-- /.about-two__single-content -->
                          </div><!-- /.about-two__single -->
                      </div><!-- /.about-two__single-wrap -->
                      <a href="#" class="thm-btn" v-b-modal.modal-1>{{ $t('elearning.quiz.title') }}</a><!-- /.thm-btn -->
                  </div><!-- /.about-two__content -->
              </div><!-- /.col-lg-6 -->
              <div class="col-xl-6 d-flex justify-content-xl-end justify-content-sm-center">
                  <div class="about-two__image">
                      <span class="about-two__image-dots"></span><!-- /.about-two__image-dots -->
                      <img src="/assets/images/about-1-1.jpg" alt="">
                      <div class="about-two__count">
                          <div class="about-two__count-text">{{ $t('elearning.quiz.trusted') }}
                              <span class="counter">{{ $t('elearning.quiz.prof') }}</span></div><!-- /.about-two__count-text -->
                      </div><!-- /.about-two__count -->
                  </div><!-- /.about-two__image -->
              </div><!-- /.col-lg-6 -->
          </div><!-- /.row -->
      </div><!-- /.container -->
          <b-row align-h="center">
      <b-col cols="12">

        <b-modal id="modal-1" title="ONLINE PLACEMENT TEST">
          <b-container>
            <p class="my-4">
              {{ $t('elearning.quiz.thank-you') }}
            </p>

            <b-alert show>
              {{ $t('elearning.quiz.alert1') }}
            </b-alert>

            <ul>
              <li>
                {{ $t('elearning.quiz.list1') }}
              </li>
              <li>
                {{ $t('elearning.quiz.list2') }}
              </li>
              <li>
                {{ $t('elearning.quiz.list3') }}
              </li>
              <li>
                {{ $t('elearning.quiz.list4') }}
              </li>
              <li>
                {{ $t('elearning.quiz.list5') }}
              </li>
            </ul>

            <b-alert show>
              {{ $t('elearning.quiz.alert2') }}
            </b-alert>
          </b-container>

          <template #modal-footer="{ ok, cancel }">
            <b-button size="sm" variant="success" @click="redirectToQuiz">
              {{ $t('elearning.quiz.take-test') }}
            </b-button>
            <b-button size="sm" variant="danger" @click="cancel()">
              {{ $t('elearning.quiz.cancel') }}
            </b-button>
          </template>
        </b-modal>
      </b-col>
    </b-row>
  </section>
  </b-container>
</template>

<script>
export default {
  name: "QuizView",
  data: () => ({}),
  methods: {
    redirectToQuiz() {
      window.location.href = 'https://docs.google.com/forms/d/e/1FAIpQLSe7mmz7zDI5m7Xs8ix0JOw7G5Qmc57fBxakgS93qydo8Ujdjg/viewform?usp=sf_link'
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <b-container>
    <b-row align-h="center">
      <b-col cols="12">
        <b-button v-b-modal.modal-1 variant="secondary">{{ $t('elearning.quiz.title') }}</b-button>

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

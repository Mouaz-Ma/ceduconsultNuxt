<template>
  <section class="pricing-one pricing-page ">
        <div class="container">
            <div class="block-title text-center">
              <h2 class="block-title__title">Choose the right <br>
                plan for you
              </h2><!-- /.block-title__title -->

              <p class="my-5">
                C.E.C provides 10 hours lesson plans. With our 10 hours lesson plans, you are free to choose when and for how long you want each lesson to last every day. Our goal is to ensure that each lesson suits your lifestyle and needs. Choose a package now and select between 25mins, 30mins, 50mins and 1-hour lessons a day when your lessons get started.
              </p>
            </div><!-- /.block-title -->

            <div class="row">
                <div v-for="(pack, index) in packs" :key="index" class="col-lg-4">
                    <div class="pricing-one__single">
                        <div class="pricing-one__inner">
                            <h2 class="pricing-one__price">{{ pack.price }}</h2><!-- /.pricing-one__price -->
                            <p class="pricing-one__name">{{ pack.name }}</p><!-- /.pricing-one__name -->
                            <ul class="pricing-one__list list-unstyled">
                                <li v-for="(cat, i) in pack.details" :key="i">
                                  <b-row>
                                    <b-col>{{ cat.category }}</b-col>
                                    <b-col class="text-right">{{ cat.price }}</b-col>
                                  </b-row>
                                </li>
                            </ul><!-- /.pricing-one__list -->
                            <a href="#" class="thm-btn pricing-one__btn">Choose Plan</a><!-- /.thm-btn -->
                            <p class="pricing-one__tag-line">No hidden charges!</p><!-- /.pricing-one__tag-line -->
                        </div><!-- /.pricing-one__inner -->
                    </div><!-- /.pricing-one__single -->
                </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->
        </div><!-- /.container -->
    </section>
</template>

<script>
    export default {
      name: "PricingView",
      auth: false,
      data: () => ({
        packs: [
          {
            name: 'IELTS',
            price: '$350',
            details: [
              { category: 'Speaking',  price: '120' },
              { category: 'Listening', price: '150' },
              { category: 'Reading', price: '200' },
              { category: 'Writing', price: '260' }
            ]
          },
          {
            name: 'TOEFL',
            price: '$360',
            details: [
              { category: 'Speaking',  price: '130' },
              { category: 'Listening', price: '150' },
              { category: 'Reading', price: '200' },
              { category: 'Writing', price: '260' }
            ]
          },
          {
            name: 'TOEIC',
            price: '$350',
            details: [
              { category: 'Speaking',  price: '120' },
              { category: 'Listening', price: '150' },
              { category: 'Reading', price: '200' },
              { category: 'Writing', price: '260' }
            ]
          },
          {
            name: 'Duolingo',
            price: '$300',
            details: [
              { category: 'Speaking',  price: '100' },
              { category: 'Listening', price: '120' },
              { category: 'Reading', price: '180' },
              { category: 'Writing', price: '200' }
            ]
          },
          { name: 'OPIC', price: '$250', details: [] },
          {
            name: 'Online 1-1 lessons Price/ 10 hours',
            price: '$350',
            details: [
              { category: 'Conversation classes', price: '200' },
              { category: 'Free Speaking', price: '150' },
              { category: 'Reading and Writing', price: '220' },
              { category: 'Grammar', price: '260' },
              { category: 'Essay Writing', price: '260' },
              { category: 'Listening', price: '200' }
            ]
          },
          {
            name: 'Book Club Monthly Subscription',
            price: '',
            details: [
              { category: 'Young Learners’ Book Club', price: '30' },
              { category: 'Tweens’ Book Club', price: '30' },
              { category: 'Teenagers’ Book Club', price: '30' },
              { category: 'Adults’ Book Club', price: '40' }
            ]
          },
          {
            name: 'Group Lessons (per hour)',
            price: '',
            details: [
              { category: 'Speaking and Listening', price: '6' },
              { category: 'Grammar', price: '7' },
              { category: 'Reading and Writing', price: '7' }
            ]
          }
        ]
      })
    }
</script>

<style scoped>

</style>

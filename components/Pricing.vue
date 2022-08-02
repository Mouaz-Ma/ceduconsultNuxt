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
            <div class="partners-one__carousel owl-carousel owl-theme">
              <div
                v-for="pack in packs"
                :key="pack.name"
                class="item"
              >
                <div class="team-one__single">
                  <div class="team-one__image">
<!--                    <img-->
<!--                      class="temOneImage"-->
<!--                      width="200"-->
<!--                      height="200"-->
<!--                      :src="item.image"-->
<!--                      :alt="item.name"-->
<!--                    >-->
                  </div><!-- /.team-one__image -->
                  <div class="team-one__content">
                    <h2 class="team-one__name">
                      <a href="#">{{ pack.name }}</a>
                    </h2>
                    <!-- /.team-one__name -->
                    <br>
                    <p class="team-one__text">
                      {{ pack.price }}
                    </p>

                    <ul class="pricing-one__list list-unstyled">
                      <li v-for="(cat, i) in pack.details" :key="i">
                        <b-row>
                          <b-col>{{ cat.category }}</b-col>
                          <b-col class="text-right">{{ cat.price }}</b-col>
                        </b-row>
                      </li>
                    </ul>
                  </div><!-- /.team-one__content -->
                </div><!-- /.team-one__single -->
              </div><!-- /.col-lg-3 -->
            </div>
          </div>
            <div class="text-center mt-5 col-12">
              <img class="img-fluid" src="/assets/images/CEC COURSE LEVEL CHART_011148.png" alt="">
            </div>
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
      }),
        mounted() {
    $('.partners-one__carousel').owlCarousel({
      loop: true,
      margin: 2,
      nav: false,
      dots: true,
      autoWidth: false,
      autoplay: true,
      smartSpeed: 700,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 1
        },
        480: {
          items: 1
        },
        767: {
          items: 1
        },
        991: {
          items: 2
        },
        1000: {
          items: 3
        },
        1200: {
          items: 3
        }
      }
    })
  }
    }
</script>

<style scoped>

</style>

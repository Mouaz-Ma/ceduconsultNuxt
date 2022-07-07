<template>
  <div>
    <BannerTwo />
    <CourseCatTwo />
    <AboutOne />
    <Quiz v-if="$auth.$state.loggedIn" />
    <CourseTwo />
<!--    <TeamOne />-->
    <ProgramsComponent />
    <Pricing />
    <Meeting />
    <BlogHome />
    <!-- NOTE: Plugin script cannot be found, no idea how to load the testimonials -->
    <Testimonial />
  </div>
</template>

<script>
export default {
  name: 'ELearningView',

  auth: false,

  components: {
    ProgramsComponent: () => import("@/components/programs.vue"),
    BannerTwo: () => import("../components/BannerTwo.vue"),
    CourseCatTwo: () => import("../components/CourseCatTwo.vue"),
    AboutOne: () => import("../components/AboutOne.vue"),
    CourseTwo: () => import("../components/CourseTwo.vue"),
    // TeamOne: () => import("../components/TeamOne.vue"),
    Pricing: () => import("../components/Pricing.vue"),
    Meeting: () => import("../components/Meeting.vue"),
    BlogHome: () => import("../components/BlogHome.vue"),
    Testimonial: () => import("../components/Testimonial.vue"),
    Quiz: () => import("../components/Quiz.vue")
  },

  layout: 'learning',

  head() {
    return {
      title: "CEDU | E-Learning",
      meta: [
        {
          hid: "description",
          name: "description",
          content: `Charlene Education Consultancy (C.E.C) is an educational agency
            and tutorial platform that provides services to
            students that want to study abroad and to those that
            would like to learn English online.
          `
        }
      ]
    }
  }
}
</script>

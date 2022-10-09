<template>
  <section class="blog-one  blog-one__home-two">
    <div class="container">
      <div class="block-title text-center">
        <h2 class="block-title__title">
          Our latest news <br>
          & articles
        </h2><!-- /.block-title__title -->
      </div><!-- /.block-title -->
      <div class="row">
        <div v-for="blog in blogs" :key="blog.id" class="col-lg-4">
          <div class="item">
            <div class="course-one__single color-1 m-2">
              <div class="course-one__image">
                <img class="uniImage" :src=blog.image.url alt="">
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <a href="#" class="course-one__category">{{ blog.author.username }}</a><!-- /.course-one__category -->
                <h2 class="course-one__title">
                  <nuxt-link :to="'/blogs/'+blog._id">{{ blog.title }}</nuxt-link>
                </h2>
                <!-- /.course-one__title -->
                <div class="course-one__meta">
                  <a v-for="tag in blog.tags" :key=tag href="#"><i class="fa fa-tags"></i>{{ tag }}</a>

                </div><!-- /.course-one__meta -->
                <nuxt-link :to="'/blogs/'+blog._id" class="course-one__link">Read</nuxt-link>
                <!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
        </div>
      </div><!-- /.row -->
    </div><!-- /.container -->
  </section>
</template>

<script>
export default {
  auth: false,
  name: "BlogHome",
  props: {
    blogs: {
      type: Array,
      default: () => [],
    }
  },
}
</script>

<style scoped>

</style>

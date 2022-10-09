<template>
  <div>
    <NavThree />
    <section class="course-one__top-title home-one">
      <div class="container">
        <div class="block-title mb-0 mt-5">
          <h2 class="block-title__title">
            {{ $t('university.blogs.title') }}
          </h2><!-- /.block-title__title -->
        </div><!-- /.block-title -->
      </div><!-- /.container -->
      <div class="course-one__top-title__curve" /><!-- /.course-one__top-title__curve -->
    </section>
    <div class="container">
      <div class="row">
        <div
          v-for="blog in onlyUniBlogs"
          :key="blog.id"
          class="col-lg-4"
        >
          <div class="item">
            <div class="course-one__single color-1 m-2">
              <div class="course-one__image">
                <img
                  class="uniImage"
                  :src="blog.image.url"
                  alt=""
                >
              </div><!-- /.course-one__image -->
              <div class="course-one__content">
                <nuxt-link
                  to="#"
                  class="course-one__category"
                >
                  {{ blog.author.username }}
                </nuxt-link>
                <!-- /.course-one__category -->
                <h2 class="course-one__title">
                  <nuxt-link :to="'/blogs/'+blog._id">
                    {{ blog.title }}
                  </nuxt-link>
                </h2>
                <!-- /.course-one__title -->
                <div class="course-one__meta">
                  <a
                    v-for="tag in blog.tags"
                    :key="tag"
                    href="#"
                  ><i class="fa fa-tags" />{{ tag }}</a>
                </div><!-- /.course-one__meta -->
                <nuxt-link
                  :to="'/blogs/'+blog._id"
                  class="course-one__link"
                >
                  {{ $t('university.blogs.btn') }}
                </nuxt-link>
                <!-- /.course-one__link -->
              </div><!-- /.course-one__content -->
            </div><!-- /.course-one__single -->
          </div><!-- /.item -->
        </div>
      </div>
    </div><!-- /.container -->

    <TheFooter />
  </div>
</template>
<script>
import NavThree from "@/components/NavThree";
import TheFooter from "@/components/Footer";

export default {
  auth: false,
  components: {
    TheFooter,
    NavThree
  },
  async asyncData({
                    $axios
                  }) {
    try {
      const allBlogs = $axios.get('/api/blogs')
      const allBlogsPromise = await Promise.resolve(allBlogs)
      const allBlogsData = allBlogsPromise.data.blogs;
      const onlyUniBlogs = []
      allBlogsData.forEach(blog => {
        if (blog.section === "uni")
          onlyUniBlogs.push(blog)
      });
      return {
        onlyUniBlogs
      }
    } catch (err) {
      console.log(err)
    }
  },
  data() {
    return {
      allBlogsData: [],
      onlyUniBlogs: []
    }
  },
  head() {
    return {
      title: "CEDU | Blogs"
    }
  },
}
</script>

<style scoped>
.uniImage {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
</style>

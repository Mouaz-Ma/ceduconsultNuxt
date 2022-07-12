<template>
  <div>
    <PageHeader title="Update Blog" />
    <update-blog-form :blogData=blogData />
  </div>
</template>
<script>
import PageHeader from "@/components/PageHeader";
import UpdateBlogForm from '@/components/updateBlogForm.vue';

  export default {
    components: {
    PageHeader,
    UpdateBlogForm,
    },
    head() {
      return {
        title: "update-blog-form"
      }
    },
    async asyncData({
      $axios, route
    }) {
      try {
        const blogCall = $axios.get('/api/blogs/'+route.params.id)
        const blogPromise = await Promise.resolve(blogCall)
        const blogData = blogPromise.data.blog
        return {
          blogData
        }
      } catch (err) {
        console.log(err)
      }
    }
  }
</script>

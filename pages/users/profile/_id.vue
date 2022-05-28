<template>
<h1>{{$route.params.id}}</h1>
</template>
<script>

export default {

    data() {
        return{
            name:"",
            email:"",
            verifyAlertMessage: '',
            searchQuery: '',
            userData: null,
        }
    },
    methods: {
    },
      async asyncData({
      $axios, route
    }) {
      try {
        const userCall = $axios.get('/api/users/userInfo/'+route.params.id)
        const userPromise = await Promise.resolve(userCall)
        const userData = userPromise.data.userFound
        console.log(userData)
        return {
          userData
        }
      } catch (err) {
        console.log(err)
      }
    },
}
</script>

<style scoped>
.content-body{
    margin-top: 200px;
}
ul {
    list-style-type: none;
}

a{
  text-decoration: none;
}
</style>
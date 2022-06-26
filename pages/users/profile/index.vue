<template>
    <div id="main-wrapper show">
      <div class="headerprofile">
          <!-- nav bar -->
        <div class="top-0" style="margin-top: -20px;">
          <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/"><img class="profileImage" src="/assets/images/logoProfileLight.png" alt="">
            </b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
                <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
              </b-navbar-nav>

              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-form v-if="$auth.$state.user.userType ==='Administrator'">
                  <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                  <b-button size="sm" class="my-2 my-sm-0" type="submit">
                    <b-icon icon="search"></b-icon>Search
                  </b-button>
                </b-nav-form>

                <b-nav-item-dropdown right>
                  <!-- Using 'button-content' slot -->
                  <template #button-content>
                    <em>{{$auth.$state.user.username}}</em>
                  </template>
                  <b-dropdown-item href="/users/profile">
                    <b-icon icon="person-fill"></b-icon>Profile
                  </b-dropdown-item>
                  <b-dropdown-item @click="logout()">
                    <b-icon icon="power" aria-hidden="true"></b-icon>Sign Out
                  </b-dropdown-item>
                </b-nav-item-dropdown>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </div>

      </div>

      <div class="content-body">
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="card welcome-profile w-100 mb-3">
                <div class="card-body">
                  <img class="profileImage" src="/assets/images/2.png" alt="">
                  <h4>Welcome, {{$auth.$state.user.username}}!</h4>
                  <a v-if="$auth.$state.user.userType === 'Administrator'" id="black" class="btn btn-secondary float-right" a="/users/profileUpdate">Edit</a>

                    <div class="card-body">
                        <div class="row">
                        <div class="col-md-6 ">
                          <div class="user-info">
                            <span>EMAIL ADDRESS</span>
                            <h4>{{$auth.$state.user.email}}</h4>
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="user-info">
                            <span>Authentication Strategy:</span>
                            <h4>{{$auth.$state.user.strategy}}</h4>
                          </div>
                        </div>
                        <!-- <div class="col-md-6 ">
                                    <div class="user-info">
                                        <span>JOINED SINCE</span>
                                        <h4>20/10/2020</h4>
                                    </div>
                                </div> -->
                        <div class="col-md-6 ">
                          <div class="user-info">
                            <span>TYPE</span>
                            <div v-if="$auth.$state.user.userType === 'Administrator'">
                              <h4>Administrator</h4>
                            </div>
                            <div v-else>
                              <h4>Normal</h4>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="user-info">
                            <span>Is Verified?</span>
                            <div v-if="$auth.$state.user.isVerified === true">
                              <h4>Verified</h4>
                            </div>
                            <div v-else>
                              <h4>Not Verified</h4>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="user-info">
                            <span>Telephone</span>
                            <div v-if="$auth.$state.user.telephone">
                              <h4>{{$auth.$state.user.telephone}}</h4>
                            </div>
                            <div v-else>
                              <h4>No telephone number was added</h4>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6 ">
                          <div class="user-info">
                            <span>Status</span>
                            <div>
                              <h4>{{$auth.$state.user.status}}</h4>
                            </div>
                          </div>
                        </div>
                        </div>

                      

                    </div>
                  </div>

                </div>

            </div>




            <!-- content upload card -->
            <div class="pb-3 col-xxl-6 col-xl-6 col-lg-6" v-if="$auth.$state.user.userType === 'Administrator'">
              <div class="card w-100 h-100">
                <div class="card-header">
                  <h4 class="card-title">Uploads</h4>
                </div>
                <div class="card-body">
                  <div class="app-link">
                    <h5>What would you like to upload</h5>
                    <a class="btn btn-secondary w-50" href="/blogs/upload">Blog or news</a>
                    <br>
                    <div class="mt-3"></div>
                    <a class="btn btn-secondary w-50" href="/university/upload">University</a>
                    <br>
                    <div class="mt-3"></div>
                    <a class="btn btn-secondary w-50" href="/course/upload">Course</a>
                  </div>
                    <div class="mt-3"></div>
                    <a class="btn btn-secondary w-50" href="/classRoom/upload">Class</a>
                  </div>
                </div>
              </div>
            <div class="pb-3 col-xxl-6 col-xl-6 col-lg-6" v-else>
              <div class="card w-100 h-100">
                <div class="card-header">
                  <h4 class="card-title">Uploads</h4>
                </div>
                <div class="card-body">
                  <div class="app-link">
                    <h5>Documents you already uploaded</h5>
                    <a class="btn btn-secondary w-50" a="/blogs/uploadBlog">Blog</a>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- verified card -->
            <div class="row mb-5">
            <div class="col-xxl-6 col-xl-6 col-lg-6" v-if="$auth.$state.user.isVerified === true">
              <div class="card w-100 h-100">
                <div class="card-header">
                  <h4 class="card-title">VERIFY & UPGRADE </h4>
                </div>
                <div class="card-body">
                  <h5>Account Status : <span class="text-success">Verified <b-icon scale="1" variant="success"
                        icon="check"></b-icon></span> </h5>
                  <p>Your account is verified. Contact our call center to help you enable funding, trading, and
                    withdrawal.
                  </p>
                  <a class="btn btn-secondary" to="/contact">Contact Call Center</a>
                </div>
              </div>
            </div>
            <div v-else class="col-xxl-6 col-xl-6 col-lg-6">
              <div class="card w-100 h-100">
                <div class="card-header">
                  <h4 class="card-title">VERIFY & UPGRADE </h4>
                </div>
                <div class="card-body">
                  <h5>Account Status : <span class="text-warning">Pending <b-icon icon="exclamation-triangle-fill"
                        scale="1" variant="warning"></b-icon></span> </h5>
                  <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.
                  </p>
                  <a class="btn btn-secondary" @click="getVerified()"> Get Verified</a>
                </div>
              </div>
            </div>
                        <div class="col-xxl-6 col-xl-6 col-lg-6" v-if="$auth.$state.user.userType === 'Administrator'">
              <div class="card w-100 h-100">
                <div class="card-header">
                  <h4 class="card-title">Admin Actions</h4>
                </div>
                <div class="card-body">
                  <h3>Search Students</h3>
                   <b-form-input list="my-list-id" size="sm" class="mb-2 mr-sm-2" placeholder="Search" v-model="searchQuery" @keyup="searchUser()"><b-icon  icon="search"></b-icon>Search</b-form-input>
                      <ul v-if="this.searchQuery != ''">
                        <li class="border-bottom-0" v-for="user in foundUsers.slice(0, 5)" :key="user.id"><a v-if="user.userType != 'Administrator'" :href="'/users/profile/'+user._id">{{user.username}}</a></li>
                      </ul>
                    <br>
                    <div class="mt-3"></div>
                    <a class="btn btn-secondary w-50" href="/users/register">Create a new User</a>
                    <br>
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return{
            name:"",
            email:"",
            verifyAlertMessage: '',
            searchQuery: '',
            foundUsers: [],
        }
    },
    methods: {
      async searchUser(){
        if (this.searchQuery != ''){
          const response = await this.$axios.get('/api/users/search/?q='+this.searchQuery)
          this.foundUsers = response.data.usersFound;
          console.log(this.foundUsers[0].username)
        }
      },
        async logout() {
          await this.$auth.logout()
        },
    async getVerified() {
        try {
            const userId = this.$auth.$state.user._id
            const response = await this.$axios.get('/api/users/varifyById/'+userId)
            if(response.data.success){
                this.verifyAlertMessage = 'true'
            } else {
                this.verifyAlertMessage = 'false'
            }
        } catch(err){
            this.verifyAlertMessage = 'false'
        }

    },
    }
    
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
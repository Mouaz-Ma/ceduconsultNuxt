<template>
<v-app>
  <div id="main-wrapper show">
    <div class="headerprofile">
      <!-- nav bar -->
      <div
        class="top-0"
        style="margin-top: -20px;"
      >
        <b-navbar
          toggleable="lg"
          type="dark"
          variant="dark"
        >
          <b-navbar-brand href="/">
            <img
              class="profileImage"
              src="/assets/images/logoProfileLight.png"
              alt=""
            >
          </b-navbar-brand>

          <b-navbar-toggle target="nav-collapse" />

          <b-collapse
            id="nav-collapse"
            is-nav
          >
            <b-navbar-nav>
              <b-nav-item href="/">
                Home
              </b-nav-item>
              <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form v-if="$auth.$state.user.userType ==='Administrator'">
                <b-form-input
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Search"
                />
                <b-button
                  size="sm"
                  class="my-2 my-sm-0"
                  type="submit"
                >
                  <b-icon icon="search" />Search
                </b-button>
              </b-nav-form>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                  <em>{{ $auth.$state.user.username }}</em>
                </template>
                <b-dropdown-item href="/users/profile">
                  <b-icon icon="person-fill" />Profile
                </b-dropdown-item>
                <b-dropdown-item @click="logout()">
                  <b-icon
                    icon="power"
                    aria-hidden="true"
                  />Sign Out
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
                <img
                  class="profileImage"
                  src="/assets/images/2.png"
                  alt=""
                >
                <h4>Welcome, {{ $auth.$state.user.username }}!</h4>
                <a
                  v-if="$auth.$state.user.userType === 'Administrator'"
                  id="black"
                  class="btn btn-secondary float-right"
                  a="/users/profileUpdate"
                >Edit</a>

                <div class="card-body">
                  <div class="row">
                    <div class="col-md-6 ">
                      <div class="user-info">
                        <span>EMAIL ADDRESS</span>
                        <h4>{{ $auth.$state.user.email }}</h4>
                      </div>
                    </div>
                    <div class="col-md-6 ">
                      <div class="user-info">
                        <span>Authentication Strategy:</span>
                        <h4>{{ $auth.$state.user.strategy }}</h4>
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
                          <h4>{{ $auth.$state.user.telephone }}</h4>
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
                          <h4>{{ $auth.$state.user.status }}</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>




          <!-- content upload card -->
          <div
            v-if="$auth.$state.user.userType === 'Administrator'"
            class="pb-3 col-xxl-6 col-xl-6 col-lg-6"
          >
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">
                  Uploads
                </h4>
              </div>
              <div class="card-body">
                <div class="app-link">
                  <h5>What would you like to upload</h5>
                  <a
                    class="btn btn-secondary w-50"
                    href="/blogs/upload"
                  >Blog or news</a>
                  <br>
                  <div class="mt-3" />
                  <a
                    class="btn btn-secondary w-50"
                    href="/university/upload"
                  >University</a>
                  <br>
                  <div class="mt-3" />
                  <a
                    class="btn btn-secondary w-50"
                    href="/course/upload"
                  >Course</a>
                </div>
                <div class="mt-3" />
                <a
                  class="btn btn-secondary w-50"
                  href="/classRoom/upload"
                >Class</a>
              </div>
            </div>
          </div>
                  <div class="col-6" v-else>
            <div v-if="alertMassge">
              <alerts :message=alertMassge :success=success />
            </div>

          <div class="card-body">
            <h3>Upload Documents</h3>
            <p>please upload only files with those types: .pdf, .png, .jpg or .zip</p>
            <div class="uploadDocs">
              <v-file-input chips counter multiple show-size truncate-length="21" v-model="filesNeedsToUpload">
              </v-file-input>
              <v-btn :disabled="filesNeedsToUpload.length === 0" @click="uploadZipFiles(filesNeedsToUpload)" class="mx-2" fab dark
                color="indigo">
                <v-icon dark>
                  mdi-plus
                </v-icon>
              </v-btn>
            </div>
            <hr>
            <h3>All uploaded documents Documents</h3>
            <ul>
              <li class="h-100 m-5" v-for="doc in userData.documents" :key='doc.filename'>{{doc.fileTitle}}
                <v-btn class="ma-2 float-right" color="red" dark small :disabled="isLoading"
                  @click="removeDocument(doc.filename)">
                  Delete
                  <v-icon dark right>
                    mdi-cancel
                  </v-icon>
                </v-btn>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <!-- verified card -->
        <div class="row mb-5">
          <div
            v-if="$auth.$state.user.isVerified === true"
            class="col-xxl-6 col-xl-6 col-lg-6"
          >
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">
                  VERIFY & UPGRADE
                </h4>
              </div>
              <div class="card-body">
                <h5>
                  Account Status : <span class="text-success">Verified <b-icon
                    scale="1"
                    variant="success"
                    icon="check"
                  /></span>
                </h5>
                <p>
                  Your account is verified. Contact our call center to help you enable funding, trading, and
                  withdrawal.
                </p>
                <a
                  class="btn btn-secondary"
                  to="/contact"
                >Contact Call Center</a>
              </div>
            </div>
          </div>
          <div
            v-else
            class="col-xxl-6 col-xl-6 col-lg-6"
          >
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">
                  VERIFY & UPGRADE
                </h4>
              </div>
              <div class="card-body">
                <h5>
                  Account Status : <span class="text-warning">Pending <b-icon
                    icon="exclamation-triangle-fill"
                    scale="1"
                    variant="warning"
                  /></span>
                </h5>
                <p>
                  Your account is unverified. Get verified to enable funding, trading, and withdrawal.
                </p>
                <a
                  class="btn btn-secondary"
                  @click="getVerified()"
                > Get Verified</a>
              </div>
            </div>
          </div>
          <div
            v-if="$auth.$state.user.userType === 'Administrator'"
            class="col-xxl-6 col-xl-6 col-lg-6"
          >
            <div class="card w-100 h-100">
              <div class="card-header">
                <h4 class="card-title">
                  Admin Actions
                </h4>
              </div>
              <div class="card-body">
                <h3>Search Students</h3>
                <b-form-input
                  v-model="searchQuery"
                  list="my-list-id"
                  size="sm"
                  class="mb-2 mr-sm-2"
                  placeholder="Search"
                  @keyup="searchUser()"
                >
                  <b-icon icon="search" />Search
                </b-form-input>

                <ul v-if="searchQuery !== ''">
                  <li
                    v-for="user in foundUsers"
                    :key="user.id"
                    class="border-bottom-0"
                  >
                    <a
                      v-if="user.userType.toLowerCase() !== 'administrator'"
                      :href="'/users/profile/'+user._id"
                    >
                      {{ user.username }}
                    </a>
                  </li>
                </ul>

                <div
                  v-else
                  class="alert alert-info"
                >
                  no results
                </div>

                <br>
                <div class="mt-3" />
                <a
                  class="btn btn-secondary w-50"
                  href="/users/register"
                >Create a new User</a>
                <br>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </v-app>
</template>
<script>
import alerts from '../../../components/alerts.vue'
export default {
    components: { alerts },
      async asyncData({ $axios, route, $auth }) {
      try {
        const userCall = $axios.get('/api/users/userInfo/'+$auth.$state.user._id);
        const userPromise = await Promise.resolve(userCall)
        const userData = userPromise.data.userFound
        return {
          userData
        }
      } catch (err) {
        console.log(err)
      }
    },
    data() {
        return{
            name:"",
            email:"",
            verifyAlertMessage: '',
            searchQuery: '',
            foundUsers: [],
            filesNeedsToUpload: [],
            alertMassge: '',
            success: false,
        }
    },
    methods: {
      async searchUser() {
        if (this.searchQuery != ''){
          const response = await this.$axios.get('/api/users/search/?q='+this.searchQuery)
          this.foundUsers = response.data.usersFound;
        }
      },
            async uploadZipFiles(event) {
        this.alertMassge = 'Uploading...'
        this.success = true;
        this.isLoading= true;
          let formData = new FormData()
        if (event.length < 10) {
          event.forEach(async (file) => {
            if (file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'application/pdf' || file.type === 'application/zip'){
              formData.append('docs', file)
            } else {
              this.alertMassge = 'Please upload only files with those types: .pdf, .png, .jpg or .zip'
              this.success = false;
            }
          })
          await this.$axios.post('/api/users/addDocuments/' + this.$auth.$state.user._id, formData).then(() => {
            window.location.reload(true)
          }).catch((e) => {
            console.log(e)
          })
        }
      },
      async removeDocument(fileName) {
        this.isLoading= true;
        let fileData = {
          fileName: fileName
        }
        await this.$axios.post('/api/users/removeDocument/'+ this.$auth.$state.user._id, fileData).then(() => {
            window.location.reload(true)
          }).catch((e) => {
            console.log(e)
          })
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

<template>
  <v-app>
    <div class="container emp-profile">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img v-if="userData.avatar" :src="userData.avatar.url" width="70%">
            <img v-else src='https://www.w3schools.com/w3images/avatar5.png' width="70%">
            <!-- <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" accept="image/jpeg" />
              </div> -->
          </div>
        </div>
        <div class="col-md-6">
          <div class="profile-head">
            <h5>
              {{ userData.username }}
            </h5>
            <h6>
              {{ userData.email }}
            </h6>
            <p class="proile-rating">
              Email Status:
              <span :class="userData.isVerified ? 'text-success' : 'text-danger'">
                {{ userData.isVerified ? 'Verified' : 'Unverified' }}
              </span>
            </p>
            <ul id="myTab" class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a id="home-tab" class="nav-link active" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                  aria-selected="true">About</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <!-- Button trigger modal -->
                        <div class="my-2">
                          <nuxt-link class="blackLinks" to="/users/profile">
            <v-btn
              
              color="success"
              dark
            >
              Go back to Admin Dashboard
            </v-btn>
            </nuxt-link>
          </div>
          <b-button @click="showModal = true">
            Edit Profile
          </b-button>
        </div>

        <!-- Modal -->
        <b-modal v-model="showModal" id="editProfile" title="Edit Profile">
          <form>
            <div class="profile-img">
              <img v-if="userData.avatar" :src="userData.avatar.url" width="70%">
              <img v-else src='https://www.w3schools.com/w3images/avatar5.png' width="70%">
              <div class="file btn btn-lg btn-primary">
                Change Photo
                <input type="file" name="file" accept="image/jpeg" @change="uploadImage($event)" />
              </div>
            </div>

            <div class="form-group">
              <label for="username">Username</label>
              <input id="username" v-model="username" type="text" class="form-control" placeholder="username here">
            </div>

            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" v-model="email" type="text" class="form-control" placeholder="something@domain.xx">
            </div>
            <div class="form-group">
              <label for="zippedFile">upload zipped file</label>
              <input id="zippedFile" type="file" multiple class="form-control-file" accept="application/zip"
                @change="uploadZipFiles">
            </div>

            <div class="form-group">
              <label for="phone">phone</label>
              <input v-model="phone" id="phone" type="text" class="form-control">
            </div>
            <div class="form-group">
              <label for="studentStatus:">student Status</label>
              <input v-model="studentStatus" id="studentStatus:" type="text" class="form-control">
            </div>
          </form>

          <template #modal-footer>
            <b-button variant="primary" @click="updateForm">
              Save changes
            </b-button>

            <b-button variant="danger" @click="showModal = false">
              Cancel
            </b-button>
          </template>
        </b-modal>
      </div>

      <div class="row">
        <div class="col-md-4">
        </div>
        <div class="col-md-8">
          <div id="myTabContent" class="tab-content profile-tab">
            <div id="home" class="tab-pane fade show active" role="tabpanel" aria-labelledby="home-tab">
              <div class="row">
                <div class="col-md-6">
                  <label>Telephone</label>
                </div>
                <div class="col-md-6">
                  <p>{{ userData.telephone }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Name</label>
                </div>
                <div class="col-md-6">
                  <p>{{ userData.username }}</p>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <label>Email</label>
                </div>
                <div class="col-md-6">
                  <p>{{ userData.email }}</p>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <label>Student status</label>
                </div>
                <div class="col-md-6">
                  <p>{{ userData.studentStatus }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- here you need to show the classrooms that only isnt in his list plus be able to add it to the student and delete it -->
      <div class="row">
        <div class="col-md-6 border-right border-dark">
          <div class="card-body">
            <h3>Search Classrooms</h3>
            <b-form-input v-model="searchQuery" list="my-list-id" size="sm" class="mb-2 mr-sm-2" placeholder="Search"
              @keyup="searchClass()">
              <b-icon icon="search" />Search
            </b-form-input>

            <ul v-if="searchQuery !== ''">
              <li v-for="classRoomFound in differenceArray" :key="classRoomFound.id" class="border-bottom">
                <div>
                  <v-btn class="mt-1 float-right" color="primary" dark small :disabled="isLoading"
                    @click="addClassRoom(classRoomFound._id)">
                    Add class
                    <v-icon dark right>
                      mdi-checkbox-marked-circle
                    </v-icon>
                  </v-btn>
                  <p class="mt-1">
                    {{ classRoomFound.title }}
                  </p>
                </div>
              </li>
            </ul>

            <div v-else class="alert alert-info">
              no results
            </div>

            <br>
            <div class="mt-3" />

          </div>
          <ul>
            <li class="h-100 m-5" v-for="classRoom in userData.classes" :key='classRoom.id'>{{classRoom.title}}
              <v-btn class="ma-2 float-right" color="red" dark small :disabled="isLoading"
                @click="removeClassRoom(classRoom._id)">
                Delete
                <v-icon dark right>
                  mdi-cancel
                </v-icon>
              </v-btn>
            </li>
          </ul>
        </div>
        <div class="col-md-6">
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
            <ul v-if="userData.documents[0] != null">
              <li class="h-100 m-5" v-for="doc in userData.documents" :key='doc.filename'>{{doc.fileTitle}}
                <v-btn class="ma-2 float-right" color="red" dark small :disabled="isLoading"
                  @click="removeDocument(doc.filename)">
                  Delete
                  <v-icon dark right>
                    mdi-cancel
                  </v-icon>
                </v-btn>
                    <v-btn class="ma-2 float-right" color="green" dark small :disabled="isLoading">
                        <nuxt-link to='doc.url' download> download</nuxt-link>
                        <v-icon dark right>
                          mdi-file-download

                        </v-icon>
                      </v-btn>
              </li>
            </ul>
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
    async asyncData({ $axios, route }) {
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

    data() {
      return{
        username: '',
        email: '',
        phone: '',
        studentStatus: '',
        showModal: false,
        searchQuery: '',
        differenceArray: [],
        isLoading: false,
        filesNeedsToUpload: [],
        alertMassge: null,
        success: false,
        avatar: '',
        oldAvatar: '',
      }
    },
    created() {
      this.username = this.userData.username
      this.email = this.userData.email
      this.userData.telephone ? this.phone = this.userData.telephone : this.phone = ''
      this.userData.studentStatus ? this.studentStatus = this.userData.studentStatus : this.studentStatus = ''
      this.userData.avatar ? this.oldAvatar = this.userData.avatar.filename : this.oldAvatar = ''
    },

    methods: {
      
      async addClassRoom(classId) {
        this.isLoading= true;
        await this.$axios.post('/api/users/addClassRoom/'+ classId +'/'+ this.userData._id).then(() => {
            window.location.reload(true)
          }).catch((e) => {
            console.log(e)
          })
      },
            async removeClassRoom(classId) {
                this.isLoading= true;
        await this.$axios.post('/api/users/removeClassRoom/'+ classId +'/'+ this.userData._id).then(() => {
            window.location.reload(true)
          }).catch((e) => {
            console.log(e)
          })
      },
            async searchClass() {
        if (this.searchQuery != ''){
          const response = await this.$axios.get('/api/classRoom/search/?q='+this.searchQuery)
          let foundClasses = response.data.classesFound;
          this.differenceArray = foundClasses.filter(({ _id: id1 }) => !this.userData.classes.some(({ _id: id2 }) => id2 === id1));
        }
      },
      async uploadImage(event) {
        console.log()
        this.isLoading = true;
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('avatar', file)
        if(this.oldAvatar !== ''){
          formData.append('oldAvatar', this.oldAvatar)
        }
        console.log(file, this.oldAvatar)
        await this.$axios.put('api/users/updateUserAvatar/' + this.userData._id, formData).then(() => {
            window.location.reload(true)
          }).catch((e) => {
            console.log(e)
          })
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
          await this.$axios.post('/api/users/addDocuments/' + this.userData._id, formData).then(() => {
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
        await this.$axios.post('/api/users/removeDocument/'+ this.userData._id, fileData).then(() => {
            window.location.reload(true)
          }).catch((e) => {
            console.log(e)
          })
      },

      async updateForm() {
        console.log(this.username, this.email)
        const data = new FormData();
        data.append('username', this.username)
        data.append('email', this.email)
        data.append('phone', this.phone)
        data.append('studentStatus', this.studentStatus)
        for (var pair of data.entries()) {
    console.log(pair[0]+ ', ' + pair[1]); 
}
        await this.$axios.put('api/users/updateUser/' + this.$route.params.id, data)
          .then(() => {
            this.showModal = false
            window.location.reload(true)
          }).catch((e) => {
            console.log(e)
          })
      }
    },
}
</script>

<style scoped>
body{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
}

.emp-profile{
    padding: 3%;
    margin-top: 3%;
    margin-bottom: 3%;
    border-radius: 0.5rem;
    background: #fff;
}

.profile-img{
  text-align: center;
}

.profile-img .file {
  position: relative;
  overflow: hidden;
  margin-top: -20%;
  width: 70%;
  border: none;
  border-radius: 0;
  font-size: 15px;
  background: #212529b8;
}
.profile-img .file input {
  position: absolute;
  opacity: 0;
  right: 0;
  top: 0;
}

.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}

.profile-head .nav-tabs{
    margin-bottom:5%;
}

.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}

.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}

.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
.profile-edit-btn{
  border: none;
  border-radius: 1.5rem;
  width: 70%;
  padding: 2%;
  font-weight: 600;
  color: #6c757d;
  cursor: pointer;
}

.uploadDocs{
  display: inline-flex;
    width: 100%;
}

a{
  color: whitesmoke;
  text-decoration: none;
}

a:hover{
      color:whitesmoke; 
    text-decoration:none; 
    cursor:pointer;  
}

</style>
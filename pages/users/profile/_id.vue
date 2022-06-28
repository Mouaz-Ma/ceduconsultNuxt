<template>
  <div class="container emp-profile">
    <form method="post">
      <div class="row">
        <div class="col-md-4">
          <div class="profile-img">
            <img
              src="https://www.w3schools.com/w3images/avatar5.png"
              alt=""
              width="70%"
            >
            <div class="file btn btn-lg btn-primary">
              Change Photo
              <input type="file" name="file" accept="image/jpeg"/>
            </div>
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
            <ul
              id="myTab"
              class="nav nav-tabs"
              role="tablist"
            >
              <li class="nav-item">
                <a
                  id="home-tab"
                  class="nav-link active"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >About</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-2">
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-light"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Edit Profile
          </button>

          <!-- Modal -->
        </div>
        <div
          id="exampleModal"
          class="modal fade"
          tabindex="-1"
          role="dialog"
          aria-labelledby="editProfile"
          aria-hidden="true"
        >
          <div
            class="modal-dialog"
            role="document"
          >
            <div class="modal-content">
              <div class="modal-header">
                <h5
                  id="editProfile"
                  class="modal-title"
                >
                  Edit Profile
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="profile-img">
                    <img
                      src="https://www.w3schools.com/w3images/avatar5.png"
                      alt=""
                      width="70%"
                    >
                    <div class="file btn btn-lg btn-primary">
                      Change Photo
                      <input type="file" name="file" accept="image/jpeg" @change="uploadImage($event)" />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="username">Username</label>
                    <input
                      id="username"
                      v-model="profile.username"
                      type="text"
                      class="form-control"
                      placeholder="username here"
                    >
                  </div>

                  <div class="form-group">
                    <label for="email">Email</label>
                    <input
                      id="email"
                      v-model="profile.email"
                      type="text"
                      class="form-control"
                      placeholder="something@domain.xx"
                    >
                  </div>
                  <div class="form-group">
                    <label for="zippedFile">upload zipped file</label>
                    <input
                      id="zippedFile"
                      type="file"
                      class="form-control-file"
                      accept="application/zip"
                    >
                  </div>

                  <div class="form-group">
                    <label for="phone">phone</label>
                    <input
                      v-model="profile.phone"
                      id="phone"
                      type="text"
                      class="form-control"
                    >
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-md-4">
          <!-- <div class="profile-work">
            <p>WORK LINK</p>
            <a href="">Website Link</a><br>
            <a href="">Bootsnipp Profile</a><br>
            <a href="">Bootply Profile</a>
            <p>SKILLS</p>
            <a href="">Web Designer</a><br>
            <a href="">Web Developer</a><br>
            <a href="">WordPress</a><br>
            <a href="">WooCommerce</a><br>
            <a href="">PHP, .Net</a><br>
          </div> -->
        </div>
        <div class="col-md-8">
          <div
            id="myTabContent"
            class="tab-content profile-tab"
          >
            <div
              id="home"
              class="tab-pane fade show active"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div class="row">
                <div class="col-md-6">
                  <label>User Id</label>
                </div>
                <div class="col-md-6">
                  <p>{{ userData._id }}</p>
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
                  <label>Unique String</label>
                </div>
                <div class="col-md-6">
                  <p>{{ userData.uniqueString }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>

export default {
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
        profile: {}
      }
    },

    methods: {
      async uploadImage(event) {
        console.log(event.target.files)
        const file = event.target.files[0]
        const formData = new FormData()
        formData.append('file', file, file.name)

        await this.$axios.put('/updateUser', formData)
      }
    },

    mounted() {
      if (this.userData) {
        this.profile = this.userData
      }
    }
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

</style>

<template>
    <div id="main-wrapper show">

    <div class="headerprofile">
    <div class="container">
        <div class="row">
            <div class="col-xxl-12">
                <div class="header-content">
                    <div class="header-left ml-5 mb-5">
                        <div class="logo-box">
                            <NuxtLink to="/">
                                <img class="profileImage" src="/assets/images/logo-light.png" alt="">
                            </NuxtLink>

                            
                        </div>
                        <!-- search -->
                        <div class="search">
                            <form action="#">
                                <div class="input-group">
                                    <input type="text" class="form-control" placeholder="Search Here">
                                    <span class="input-group-text"><b-icon icon="search"></b-icon></span>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="header-right">
                        <!-- <div class="dark-light-toggle" onclick="themeToggle()">
                            <span class="dark"><b-icon icon="moon-fill"></b-icon></span>
                            <span class="light"><b-icon icon="sun-fill"></b-icon></span>
                        </div> -->
                        <!-- notification area -->
                        <!-- <div class="notification dropdown">
                            <a class="notify-bell" v-b-toggle.notification>
                                <span ><i class="icofont-alarm"></i></span>
                            </a>
                            <b-collapse id="notification" class="dropdown-menu dropdown-menu-right notification-list" >
                                <h4>Announcements</h4>
                                <div class="lists">
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon success"><i class="icofont-check"></i></span>
                                            <div>
                                                <p>Account created successfully</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon fail"><i class="icofont-close"></i></span>
                                            <div>
                                                <p>2FA verification failed</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon success"><i class="icofont-check"></i></span>
                                            <div>
                                                <p>Device confirmation completed</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a href="#" class="">
                                        <div class="d-flex align-items-center">
                                            <span class="mr-3 icon pending"><i
                                                    class="icofont-warning"></i></span>
                                            <div>
                                                <p>Phone verification pending</p>
                                                <span>2020-11-04 12:00:23</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href="./settings-activity.html">More <i
                                            class="icofont-simple-right"></i></a>

                                </div>
                            
                            </b-collapse>
                        </div> -->
                        <!-- user option -->
                        <div class="profile_log dropdown float-right">
                            <a class="user float-end" v-b-toggle.userOptions>
                                <span class="thumb"><img class="profileImage" src="/assets/images/2.png" alt=""></span>
                                <span class="arrow"></span>
                            </a>
                            <b-collapse class="dropdown-menu dropdown-menu-right" id="userOptions">
                                <div class="user-email">
                                    <div class="user">
                                        <span class="thumb"><img class="profileImage" src="/assets/images/2.png" alt=""></span>
                                        <div class="user-info">
                                            <h5>{{$auth.$state.user.username}}</h5>
                                            <span>{{$auth.$state.user.email}}</span>
                                        </div>
                                    </div>
                                </div>
                                <!-- balance -->
                                <!-- <div class="user-balance">
                                    <div class="available">
                                        <p>Available</p>
                                        <span>0.00 BTC</span>
                                    </div>
                                    <div class="total">
                                        <p>Total</p>
                                        <span>0.00 USD</span>
                                    </div>
                                </div> -->
                                <NuxtLink to="/users/profile" class="dropdown-item"><b-icon icon="person-fill"></b-icon> Profile</NuxtLink>

                                <NuxtLink class="dropdown-item" to="/users/profileUpdate"> <b-icon icon="gear-fill" aria-hidden="true"></b-icon> Edit and Settings</NuxtLink>
                                <!-- wallet -->
                                <!-- <a href="accounts.html" class="dropdown-item">
                                    <i class="icofont-wallet"></i>Wallet
                                </a> -->
                                <!-- settings -->
                                <!-- <a href="settings-profile.html" class="dropdown-item">
                                    <i class="icofont-ui-settings"></i> Setting
                                </a> -->
                                <!-- settings -->
                                <!-- <a href="settings-activity.html" class="dropdown-item">
                                    <i class="icofont-history"></i> Activity
                                </a> -->
                                <!-- lock -->
                                <!-- <a href="lock.html" class="dropdown-item">
                                    <i class="icofont-lock"></i>Lock
                                </a> -->
                                <a @click="logout()" href="#" class="dropdown-item logout">
                                    <b-icon icon="power" aria-hidden="true"></b-icon> Logout
                                </a>
                            </b-collapse>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

    <!-- <div class="sidebar">
    <div class="brand-logo">
        <a href="index.html"><img src="~/assets/images/logob.png" alt="" width="30">
        </a>
    </div>
    <div class="menu">
        <ul>
            <li>
                <a href="index.html" data-toggle="tooltip" data-placement="right" title="Home">
                    <span><i class="icofont-ui-home"></i></span>
                </a>
            </li>
            <li><a href="trade.html" data-toggle="tooltip" data-placement="right" title="Trade">
                    <span><i class="icofont-exchange"></i></span>
                </a>
            </li>
            <li><a href="wallet.html" data-toggle="tooltip" data-placement="right" title="Wallet">
                    <span><i class="icofont-wallet"></i></span>
                </a>
            </li>
            <li><a href="settings-profile.html" data-toggle="tooltip" data-placement="right" title="Settings">
                    <span><i class="icofont-settings"></i></span>
                </a>
            </li>
            <li class="logout"><a href="signin.html" data-toggle="tooltip" data-placement="right"
                    title="Signout">
                    <span><i class="icofont-power"></i></span>
                </a>
            </li>
        </ul>

        <p class="copyright">
            &#169; <a href="#">Qkit</a>
        </p>
    </div>
</div>   -->
    <div class="content-body">
        <div class="container">
            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6">
                    <div class="card welcome-profile w-100 ">
                        <div class="card-body">
                            <img class="profileImage" src="/assets/images/2.png" alt="">
                            <h4>Welcome, {{$auth.$state.user.username}}!</h4>
                             <NuxtLink id="black" class="btn btn-secondary float-right" to="/users/profileUpdate">Edit</NuxtLink>
                            <div v-if="!$auth.$state.user.isVerified">
                            <p>Looks like you are not verified yet. Verify yourself to use the full potential of
                                ICGroupsFx.</p>
                            <ul>
                                <li>
                                    <a href="#">
                                        <span @click="getVerified()" class="verified"><b-icon stacked icon="check"></b-icon></span>
                                        Verify account
                                    </a>
                                </li>
                                <!-- <li>
                                    <a href="#">
                                        <span class="not-verified"><i class="icofont-close-line"></i></span>
                                        Two-factor authentication (2FA)
                                    </a>
                                </li> -->
                            </ul>
                            </div>
                            <div v-else>

                        <div class="card-body">
                            <form class="row">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>EMAIL ADDRESS</span>
                                        <h4>{{$auth.$state.user.email}}</h4>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>Authentication Strategy:</span>
                                        <h4>{{$auth.$state.user.strategy}}</h4>
                                    </div>
                                </div>
                                <!-- <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>JOINED SINCE</span>
                                        <h4>20/10/2020</h4>
                                    </div>
                                </div> -->
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>Telephone</span>
                                        <div v-if="$auth.$state.user.telephone != ''">
                                        <h4>{{$auth.$state.user.telephone}}</h4>
                                        </div>
                                        <div v-else>
                                            <h4>No telephone number was added</h4>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>

                        </div>
                            </div>

                        </div>
                    </div>
                </div>

<!-- 
                <div class="col-xxl-6">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">Information </h4>
                            <NuxtLink class="btn btn-primary" to="/users/profileUpdate">Edit</NuxtLink>
                        </div>
                        <div class="card-body">
                            <form class="row">
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>EMAIL ADDRESS</span>
                                        <h4>{{$auth.$state.user.email}}</h4>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>Authentication Strategy:</span>
                                        <h4>{{$auth.$state.user.strategy}}</h4>
                                    </div>
                                </div>
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
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
                                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                                    <div class="user-info">
                                        <span>Telephone</span>
                                        <div v-if="$auth.$state.user.telephone != ''">
                                        <h4>{{$auth.$state.user.telephone}}</h4>
                                        </div>
                                        <div v-else>
                                            <h4>No telephone number was added</h4>
                                        </div>
                                    </div>
                                </div>
                                
                            </form>

                        </div>
                    </div>
                </div> -->
                    <!-- alerts -->
                    <div class="mt-5" v-if="verifyAlertMessage === 'true'">
                        <v-alert border="bottom" color="green" dense dismissible outlined prominent shaped text type="success">Thank you for
                        an email was sent please check you inbox or spam box!</v-alert>
                    </div>

                    <div class="mt-5" v-else-if="verifyAlertMessage === 'false'">
                        <v-alert border="bottom" color="red" dense dismissible outlined prominent shaped text type="error"> there was an
                        Somthing Went Wrong</v-alert>
                    </div>
                                    <div class="col-xxl-4 col-xl-6">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title"><i class="icofont-bank"></i> Bank Transfere Numbers: </h4>
                        </div>
                    <!-- alerts -->
                    <div class="text-center ma-2">
                        <!-- <v-snackbar
                        v-model="snackbar"
                        >
                        {{ this.copiedToClipBoard }}

                        <template v-slot:action="{ attrs }">
                            <v-btn
                            color="pink"
                            text
                            v-bind="attrs"
                            @click="snackbar = false"
                            >
                            Close
                            </v-btn>
                        </template>
                        </v-snackbar> -->
                    </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="user-info">
                                      
                                        
                                    </div>
                                <hr>
                                </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="user-info">
                                       
                                        
                                    </div>
                                <hr>
                                </div>
                                    <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="user-info">
                                      
                                    </div>
                                </div>
                            </div>

                            </div>


                        </div>
                    </div>
                </div>

                <div class="col-xxl-8 col-xl-6" v-if="$auth.$state.user.isVerified === true">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">VERIFY & UPGRADE </h4>
                        </div>
                        <div class="card-body">
                            <h5>Account Status : <span class="text-success">Verified <b-icon scale="1" variant="success" icon="check"></b-icon></span> </h5>
                            <p>Your account is verified. Contact our call center to help you enable funding, trading, and withdrawal.
                            </p>
                            <NuxtLink class="btn btn-secondary" to="/contact">Contact Call Center</NuxtLink>
                        </div>
                    </div>
                </div>
                    <div v-else  class="col-xxl-8 col-xl-6">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">VERIFY & UPGRADE </h4>
                        </div>
                        <div class="card-body">
                            <h5>Account Status : <span class="text-warning">Pending <b-icon icon="exclamation-triangle-fill" scale="1" variant="warning"></b-icon></span> </h5>
                            <p>Your account is unverified. Get verified to enable funding, trading, and withdrawal.
                            </p>
                            <a class="btn btn-secondary" @click="getVerified()"> Get Verified</a>
                        </div>
                    </div>
                </div>
                                <div class="col-xxl-6 col-xl-6 col-lg-6" v-if="$auth.$state.user.userType === 'Administrator'">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">Uploads</h4>
                        </div>
                        <div class="card-body">
                            <div class="app-link">
                                <h5>What would you like to upload</h5>
                                <nuxt-link class="btn btn-secondary" to="/blogs/uploadBlog">Blog</nuxt-link>
                                <br>
                                <div class="mt-3"></div>
                                <nuxt-link class="btn btn-secondary" to="/analysis/uploadAnalysis">Analysis</nuxt-link>
                                <br>
                                <div class="mt-3"></div>
                                <nuxt-link class="btn btn-secondary" to="/news/uploadNews">News</nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-xxl-6 col-xl-6 col-lg-6" v-else-if="$auth.$state.user.userType === 'Normal User'">
                    <div class="card w-100 h-100">
                        <div class="card-header">
                            <h4 class="card-title">Download App</h4>
                        </div>
                        <div class="card-body">
        <div class="row align-items-center justify-content-between">
            <div class="col-xl-8 col-lg-6 col-md-6">
                <div class="appss-content">
                    <h2>{{ $t('The secure app to trade by yourself')}}</h2>
                    <ul>
                        <li><i class="la la-check"></i> {{ $t('Download Metatrader 5 to Start trading')}}</li>
                        <li><i class="la la-check"></i> {{ $t('Login to your account through ICGroupsFx')}}</li>
                        <li><i class="la la-check"></i> {{ $t('Buy, Sell, and Make profit')}}</li>
                    </ul>
                    <div class="mt-4">
                      <div class="row">
                        <div class="col-lg-4 col-md-4 col-xs-12"> <a
                            href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5"
                            class="btn btn-primary my-1 waves-effect">
                            <img src="~/assets/images/android.svg" class="downloadImage" style="width: 90px" alt="">
                          </a></div>
                        <div class="ccol-lg-4 col-md-4 col-xs-12"> <a
                            href=" https://apps.apple.com/tr/app/metatrader-5/id413251709"
                            class="btn btn-primary my-1 waves-effect">
                            <img src="~/assets/images/apple.svg" class="downloadImage" alt="">
                          </a></div>
                        <div class="col-lg-4 col-md-4 col-xs-12"> <a
                            href="https://download.metatrader.com/cdn/web/internationals.capital.groups/mt5/intcapitalgroups5setup.exe"
                            class="btn btn-primary my-1 waves-effect microsoftBtn">
                            <img src="@/assets/images/microsoft.svg" class="float-left downloadImage" alt="">
                          Microsoft</a></div>




                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-3 col-lg-5 col-md-5">
                <div class="appss-img">
                    <img class="img-fluid" src="~/assets/images/metatrader.png" alt="">
                </div>
            </div>
        </div>
                        </div>
                    </div>
                </div> -->

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
        }
    },
    methods: {
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
</style>
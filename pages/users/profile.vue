<template>
<div>

</div>

</template>
<script>

export default {
    data() {
        return{
            name:"",
            email:"",
            verifyAlertMessage: '',
            copiedToClipBoard: '',
             snackbar: false,
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
       async copySign(iban) {
           this.snackbar = true
        navigator.clipboard.writeText(iban);

        /* Alert the copied text */
        this.copiedToClipBoard =("Copied the text: " + iban);
            }
    },
    
}
</script>

<style scoped>

</style>
<template>
<form @submit.prevent="signUp">

    <div>
        <label for="">First name</label>
        <input type="text" name="fname" id="fname" v-model="data.fname">
    </div>
    <div>
        <label for="">Last name</label>
        <input type="text" name="lname" id="lname" v-model="data.lname">
    </div>
    <div>
        <label for="">email</label>
        <input type="email" name="email" id="email" v-model="data.email">
    </div>
    <div>
        <label for="">phone</label>
        <input type="text"  id="phone" v-model="data.phone">
    </div>
    <div>
        <label for="">password</label>
        <input type="password"  id="phone" v-model="data.password">
    </div>
    <div>
       
        <button type="submit"  id="btn-password" @click.prevent='signUp'> Register </button>
    </div>
</form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
 const router = useRouter()
 const route = useRoute()

const data = ref({
    phone:"",
    email:'',
    fname:'',
    lname:'',
    password:''
})

async function signUp(){
    // onslotchange.log(data.value)
     let client = await axios.post('auth/register', data.value)
     console.log($client)
     let login_creds = {phone:data.value.phone, password:data.value.password}
     $user = await axios.post('auth/login',login_creds)
     router.replace('/chat-index')

}



</script>

<style scoped>
 form {
     border:thin solid black;
     display: flexbox;
     height:500px;
     padding-left: 180px;
     padding-top: 100px;
 }

 form div {
     width: 100%;
 }

 input{
     width: 300px;
     margin:auto;
 }
button {
    background-color: rgb(0, 174, 255);
    border:thick solid rgb(0, 174, 255);
    border-radius: 5px;
    margin: auto;
}
</style>
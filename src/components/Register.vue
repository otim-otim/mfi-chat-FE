<template>
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
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'

const data = ref({
    'phone':"",
    'email':'',
    'fname':'',
    'lname':'',
    'password':''
})

async function signUp(){
    // onslotchange.log(data.value)
     $client = await axios.post('auth/register', data.value);
     console.log($lient);
}



</script>

<style scoped>
 
</style>
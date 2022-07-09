<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
 const router = useRouter()
 const route = useRoute()
// import bootstrap from 'bootstrap'

// const {phone, password} = ref({phone:"", password:""})
const phone = ref("")
const password = ref("")





 async function login(e){
     e.preventDefault()
     console.log('inside the login func')
    let p
    try {
        let 
            data={
                   phone: phone.value,
                    password:password.value,
                 } 
            // baseURL: 'http://localhost:8000/client',
            // method:'post' 
        // }
        // let data = {
        //     url:'/login',
        //     data:{
        //            phone: phone.value,
        //         password:password.value,
        //          } ,
        //     // baseURL: 'http://localhost:8000/client',
        //     // method:'post' 
        // }
       
        console.log('data object',data)
        let response =  await axios.post('auth/login',data);   //await axios(data)
        // console.log(response)
        route.push('/chat-choose')
        
        
    } catch (error) {
        console.error(error)
    }

    function updatePhone(){
        console.log('phone',phone)
    }

}
</script>


<template>
    <form action="" class="container ">
        <div>
            <input type="text" placeholder="enter phone number" @change="updatePhone" v-model="phone">

        </div>
        <div>

            <input type="password" v-model="password" >
        </div>
        <div>
            <button @click="login"     class="btn btn-primary"> Login</button>

        </div>
    </form>
</template>

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
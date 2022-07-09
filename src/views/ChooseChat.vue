<template>
<div>

    <div>
        <button class="btn btn-primary" @click='inquiry'>
            Inquiry
        </button>
    </div>
    <div>
        <button class="btn btn-primary">
            Contact
        </button>
    </div>
</div>
</template>

<script setup>
import axios from "axios"

    let inquiry = async () => {
        try {
            let chat = await axios.get('/new-chat/inquiry')
            console.log(chat)
            // location.push('/chat')            
        } catch (error) {
            console.log(error)
        }
    }
</script >



<style scoped>
div {border: thin solid black;}
button {
    border:3px solid blue;
    background-color: #444ce5;
}

</style>
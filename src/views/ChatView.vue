<template>
    the chat view

    <div id="chat-area">
        <MessageVue/>

         <div class="div-text">
        <input type="text" v-model="message">
        <button  @click='sendMessage'>
            send
        </button>
    </div>
    </div>
    <BottomNavVue/>
</template>

<script setup>
import {ref,} from 'vue'
import BottomNavVue from '../components/BottomNav.vue';
import MessageVue from '../components/Message.vue';

const message = ref("")

let sendMessage = async ()=>{
    let savedMessage = await axios.post('')
}


</script>

<style scoped>

    #chat-area {
        height: 600px;
        width: 400px;
        border:thin solid blue;

    }

    .div-text {
        position: fixed;
        bottom: 0px;
    }
</style>
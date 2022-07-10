<template>
<div id="chats">
    <div v-if="[Object.keys(chats).length == 0 ]">
        <h6>No chats available</h6>
    </div>
    <div >

    </div>
</div>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core"
import { ref } from "vue";
import axios from "axios";

    const chats = getChats()
    let all_chats = ref(chats)
    async function getChats(){
    let    headers = {
    Authorization: `Bearer ${localStorage.getItem('access_token')}`
  }
        const chats = await axios.get('chats/index',headers)
        console.log(all_chats)
        return chats
    }


</script>

<style scoped>
#chats{
    border:thick solid blue;
    border-radius: 4px;
}

</style>
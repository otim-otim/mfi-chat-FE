<template>
    <div>
        <h6>{{chat.user.name}}</h6>
        <p>{{Object.values(chat.messages.message)}}</p>
    </div>
</template>

<script setup>

    const props = defineProps({
        chat : object,
        })

</script>

<style scoped>
    div {
        background-color: antiquewhite;
    }
</style>
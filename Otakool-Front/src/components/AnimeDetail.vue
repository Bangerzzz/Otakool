<script setup>
import { onMounted, ref } from 'vue';
import {  useRouter } from "vue-router";
import { api } from '../axiosApi';

const  router = useRouter();
const { id } = router.currentRoute.value.params;
console.log(id);
const anime= ref(null);
async function fetchAnimeDetail(){
    const res = await api.get("/anime/" + id);
    console.log(res.data);
    anime.value=res.data;
}
onMounted(()=> {
    fetchAnimeDetail();
});

</script>

<template>
    <div>
        <h1>Anime Details</h1>
        <p>{{anime.id}}</p>
    </div>
</template>

<style>

</style>
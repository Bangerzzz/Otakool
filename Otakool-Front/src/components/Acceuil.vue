<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

let user = JSON.parse(localStorage.getItem('user'));
const animeList = ref();
//récupérer la liste des animes depuis la base de données
async function fetchAnime (){
    const res = await axios.get("https://otakool-back.herokuapp.com/anime");
    animeList.value = res.data;
}
onMounted(()=> {
    fetchAnime();
})

</script>

<template>
        <div class="container">
            <br>
            <button type="button" id="searchbtn" class="btn btn-primary">Recherche</button> <input class="search" type="text"> 
            <br>
            <h1>List of Animes</h1>
            <ul class="list-group list-group-horizontal">
                
                <li v-for="anime in animeList" class="list-group-item"><a :href="'/anime/'+anime.id">{{anime.title}}</a>
                    <img :src="anime.imgMedium" class="img-fluid"> 
                </li>
            </ul>
        </div>
</template>

<style>
    .search{
        float:right
    }
    #searchbtn{
        float:right
    }
    .img-fuild{
        width:220px;
        height:300px;
    }
</style>
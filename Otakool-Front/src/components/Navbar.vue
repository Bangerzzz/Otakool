<script setup>
  import {ref} from "vue";
  import {useUserStore} from "@/services/userStore";
  const token = ref("");
  if (localStorage.getItem("token")) {
    token.value = localStorage.getItem("token");
  }
  const { user, deconnexion} = useUserStore();

  function logout() {
    deconnexion();
  }

</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
      <a class="navbar-brand" href="/"><img alt="Brand" src="../assets/nav.png" class="img-responsive" /></a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">

          <li class="nav-item active"><RouterLink class="nav-link" to="/">Accueil</RouterLink></li>
          <li class="nav-item mx-2" v-if="user">
            <li class="nav-item active">
              <RouterLink class="nav-link" :to="{name:'profil'}">Profil</RouterLink>
              </li>
          </li>
        </ul>

      </div>

      <ul class="navbar-nav mr-auto">
        <li class="nav-item mx-2" v-if="!user">
          <RouterLink class="nav-link btn btn-primary" :to="{name:'connexion'}">Connexion</RouterLink>
        </li>

        <li class="nav-item mx-2" v-if="!user">
            <RouterLink class="nav-link btn btn-success" :to="{name:'inscription'}">Inscription</RouterLink>
        </li>

         <li class="nav-item mx-2" v-if="user">
          <RouterLink class="nav-link btn btn-danger" :to="{name:'acceuil'}" @click="logout()">Deconnexion</RouterLink>
        </li>

      </ul>
    </nav>
</template>

<style>
.img-responsive{
  width:80px;
  height:50px;
}
</style>
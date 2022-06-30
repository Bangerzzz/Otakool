<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "../router";
const email = ref("");
const password = ref("");
const handleSignIn = async () => {
  try {
    const response = await axios.post("http://localhost:5000/user/login", {
      email: email.value,
      password: password.value,
    });
    localStorage.setItem("user", JSON.stringify(response.data));
    router.push({ path: "/", replace: true });
  } catch (error) {
    console.log(error);
  }
};
</script>
<template>
<img src="../assets/welcome.png">
<form class="register" @submit.prevent="handleSignIn">
    <h1>Connexion</h1>
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter Password" v-model="password">
    <button>Login</button>
</form>
</template>
<style>
img{
    width:220px;
    height:300px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
.register {
    border: 1px solid lavender;
    display:block
}
.register h1{
    padding-left: 500px;
    margin-top : 30px;
    margin-bottom: 30px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color:salmon
}
.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lavender;
}
.register button{
    width: 320px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid lavender;
    background: lavender;
}
</style>
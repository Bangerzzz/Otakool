<script setup>
import { ref } from "vue";
import axios from "axios";
import Joi from "joi";
import {  useRouter } from "vue-router";
const email = ref("");
const pseudo = ref("");
const password = ref("");
const error = ref(null);
const  router = useRouter();
const schema = Joi.object({
  pseudo: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().min(3).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ["com", "net"] },
  }),
});
const handleRegister = async () => {
  try {
   schema.validate({
      pseudo: pseudo.value,
      password: password.value,
      email: email.value,
    });
    await axios.post("http://localhost:5000/user", {
      pseudo: pseudo.value,
      email: email.value,
      password: password.value,
    });
  router.push("/success");
  } catch (err) {
    error.value = err;
  }
};
</script>
<template>
<img src="../assets/welcome.png">
<p v-if="error">{{ error.response.data.message[0].message }}</p>
<form class="register" @submit.prevent="handleRegister">
    <h1>Join Us</h1>
    <input type="text" placeholder="Enter Nickname" v-model="pseudo">
    <input type="text" placeholder="Enter Email" v-model="email">
    <input type="password" placeholder="Enter Password" v-model="password">
    <button type="submit">Signup</button>
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
    padding-left: 560px;
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
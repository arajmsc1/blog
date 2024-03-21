<template>
 <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
  <hr />
  <div v-if="user">
    <pre>{{user}}</pre>
  </div>
</template>

<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";
const user=ref(<{}|null>(null));
// handle success event
const handleLoginSuccess = async(response: CredentialResponse) => {
  const { credential } = response;
  
  if(credential)
  {
    user.value=await $fetch("/api/google-login2",{
        method:"POST",
        body:{
            token:credential
        }
    })
  }
 // console.log("user", user);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<style>

</style>
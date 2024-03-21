<template>
 <GoogleSignInButton
    @success="handleLoginSuccess"
    @error="handleLoginError"
  ></GoogleSignInButton>
</template>

<script setup lang="ts">
import {
  GoogleSignInButton,
  type CredentialResponse,
} from "vue3-google-signin";

// handle success event
const handleLoginSuccess = async(response: CredentialResponse) => {
  const { credential } = response;
  let user;
  if(credential)
  {
    user=await $fetch("/api/google-login2",{
        method:"POST",
        body:{
            token:credential
        }
    })
  }
  console.log("user", user);
};

// handle an error event
const handleLoginError = () => {
  console.error("Login failed");
};
</script>

<style>

</style>
<script setup>
import { RouterView } from "vue-router"
import NavBar from "./components/NavBar.vue"
import Footer from "./components/Footer.vue"
</script>

<template>
    <div class="flex flex-col max-w-screen font-stf bg-black text-white">
        <NavBar />
        <RouterView />
        <Footer />
    </div>
</template>

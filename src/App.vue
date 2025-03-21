<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
    <div class="flex flex-col h-screen max-w-screen font-px bg-black text-white">
        <NavBar />
        <main class="flex-grow">
            <RouterView />
        </main>
        <Footer />
    </div>
</template>

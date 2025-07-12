<script setup>
import { RouterView } from "vue-router";

import TheNavBar from "@/components/layouts/TheNavBar.vue";
import TheFooter from "@/components/layouts/TheFooter.vue";
</script>

<template>
    <div class="flex flex-col min-h-screen overflow-x-hidden font-stf bg-black text-white">
        <TheNavBar />

        <main class="flex-grow">
            <RouterView />
        </main>

        <TheFooter />
    </div>
</template>

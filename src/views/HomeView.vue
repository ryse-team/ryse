<script setup>
import { onMounted, ref } from 'vue'

const videoRef = ref(null)

onMounted(() => {
    if (videoRef.value) {
        videoRef.value.playbackRate = 0.8
    }
})
</script>

<template>
    <div class="relative w-full h-screen overflow-hidden">
        <video
            ref="videoRef"
            class="absolute w-full h-full object-cover"
            muted
            autoplay
            loop
            playsinline
            @contextmenu.prevent
        >
            <source src="../assets/mesh.mp4" type="video/mp4" />
        </video>

        <div class="relative z-10 flex flex-col w-full h-full items-center justify-center fade-in">
            <h1 class="text-white lg:text-8xl text-6xl font-px mb-2">ryse</h1>
            <p class="text-white lg:text-xl text-lg">where it all begins,</p>
        </div>
    </div>
</template>

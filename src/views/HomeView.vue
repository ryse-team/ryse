<script setup>
import { onMounted, ref } from 'vue'
import { motion } from 'motion-v'

const videoRef = ref(null)

const variants = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.5,
            duration: 0.8,
        },
    },
}

onMounted(() => {
    if (videoRef.value) {
        videoRef.value.playbackRate = 0.9
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
            <source src="../assets/mesh.webm#t=0.1" type="video/webm" />
        </video>

        <motion.div
            initial="hidden"
            animate="show"
            :variants="variants"
            class="relative z-10 flex flex-col w-full h-full items-center justify-center fade-in"
        >
            <motion.h1 class="text-white lg:text-7xl text-6xl font-px mb-2" :variants="variants">
                ryse
            </motion.h1>
            <motion.p class="text-white lg:text-xl text-lg" :variants="variants">
                where it all begins,
            </motion.p>
        </motion.div>
    </div>
</template>

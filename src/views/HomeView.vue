<script setup>
import { onMounted, ref } from "vue";
import { motion } from "motion-v";
import { useHead } from "@vueuse/head";

import RoutesIntroSection from "@/components/pages/home/RoutesIntroSection.vue";

useHead({
    title: "ryse - reimagine your software experience | College Tech Team CIT",
    meta: [
        {
            name: "description",
            content:
                "ryse is a college student tech team for Coimbatore Institute of Technology (CIT) focused on creating innovative software solutions with industrial standards. Learn about our team, projects, and mission.",
        },
        {
            name: "keywords",
            content:
                "ryse, reimagine your software experience, college tech team, coimbatore institute of technology, cit, software development, web development, innovative solutions, student projects, industrial standards, community, collaboration",
        },
        { property: "og:title", content: "ryse - reimagine your software experience" },
        {
            property: "og:description",
            content:
                "ryse is a college student tech team for Coimbatore Institute of Technology (CIT) focused on creating innovative software solutions with industrial standards. Learn about our team, projects, and mission.",
        },
        { property: "og:image", content: "https://ryse.pages.dev/images/ryse.jpg" },
        { property: "og:url", content: "https://ryse.pages.dev/" },
        { property: "og:type", content: "website" },

        { name: "twitter:card", content: "summary_large_image" },
        // { name: 'twitter:site', content: '@YourTwitterHandle' },
        { name: "twitter:title", content: "ryse - reimagine your software experience" },
        {
            name: "twitter:description",
            content:
                "ryse is a college student tech team for Coimbatore Institute of Technology (CIT) focused on creating innovative software solutions with industrial standards. Learn about our team, projects, and mission.",
        },
        { name: "twitter:image", content: "https://ryse.pages.dev/images/ryse.jpg" },
    ],
    link: [{ rel: "canonical", href: "https://ryse.pages.dev/" }],
});

const videoRef = ref(null);

const variants = {
    hidden: { opacity: 0, y: 100 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

onMounted(() => {
    if (videoRef.value) {
        videoRef.value.playbackRate = 0.9;
    }
});
</script>

<template>
    <section class="relative w-full h-[90dvh] overflow-hidden flex items-center justify-center">
        <video
            ref="videoRef"
            class="absolute top-0 left-0 w-full h-full object-cover"
            muted
            autoplay
            loop
            playsinline
            @contextmenu.prevent
            aria-label="Abstract mesh animation background"
            preload="auto"
        >
            <source src="@/assets/mesh.webm#t=0.1" type="video/webm" />
            Your browser does not support the video tag.
        </video>

        <motion.div
            initial="hidden"
            animate="show"
            :variants="variants"
            class="relative z-10 flex flex-col w-full h-full items-center justify-center text-center px-4 md:px-8 lg:px-16"
            style="max-width: 1200px; margin-left: auto; margin-right: auto"
        >
            <motion.h1 class="text-white text-6xl lg:text-7xl mb-2 font-bold" :variants="variants">
                ryse
            </motion.h1>
            <motion.p class="text-white text-lg lg:text-xl" :variants="variants">
                we build perfection
            </motion.p>
        </motion.div>
    </section>
    <RoutesIntroSection />
</template>

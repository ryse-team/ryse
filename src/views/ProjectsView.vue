<script setup>
import { ref, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import GridBackground from "@/components/layouts/GridBackground.vue";

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

const isVisible = ref(false);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 100);
});
</script>

<template>
    <section
        class="relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden bg-gray-900 text-white"
    >
        <GridBackground :enableGlow="true" />

        <div
            class="relative z-20 max-w-4xl mx-auto text-center px-6 transition-all duration-1000 ease-out"
            :class="{
                'opacity-100 translate-y-0': isVisible,
                'opacity-0 translate-y-12': !isVisible,
            }"
        >
            <h1
                class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent leading-tight"
            >
                Oops! Sorry...
            </h1>
            <p class="text-xl md:text-2xl mb-4 text-slate-300 font-medium">
                There are no projects to be displayed yet!
            </p>
            <p class="text-lg md:text-xl text-slate-400">
                Come back later — maybe you'll be surprised to see one!
            </p>

            <div class="mt-8">
                <router-link
                    to="/"
                    class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    ← Back to Home
                </router-link>
            </div>
        </div>

        <div
            class="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl"
        ></div>
        <div
            class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
        ></div>
    </section>
</template>

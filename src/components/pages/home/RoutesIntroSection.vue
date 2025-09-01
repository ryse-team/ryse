<script setup>
import { ref } from "vue";
import GridBackground from "@/components/layouts/GridBackground.vue";
import AboutIntro from "./AboutIntro.vue";
import TeamIntro from "./TeamIntro.vue";
import ProjectsIntro from "./ProjectsIntro.vue";

const isHovering = ref(false);

const handleHoverChange = (hovering) => {
    isHovering.value = hovering;
};
</script>

<template>
    <section
        class="relative w-full sm:p-10 md:p-4 bg-gradient-to-br from-gray-900 via-cyan-900/50 to-gray-900 text-white overflow-hidden"
    >
        <GridBackground :enableGlow="true" @hoverChange="handleHoverChange" />

        <div class="relative z-10 mt-6">
            <h2 class="text-4xl md:text-5xl font-bold text-center mb-16 relative">
                Discover What We Do
                <div
                    class="absolute inset-0 text-4xl md:text-5xl font-bold text-center transition-opacity duration-300 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                    :class="{ 'opacity-40': isHovering, 'opacity-0': !isHovering }"
                >
                    Discover What We Do
                </div>
            </h2>

            <div class="flex flex-col gap-12 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <TeamIntro />
                <ProjectsIntro />
                <AboutIntro />
            </div>
        </div>

        <div class="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/3 rounded-full blur-3xl"></div>
        <div
            class="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"
        ></div>
        <div
            class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500/2 rounded-full blur-3xl"
        ></div>
    </section>
</template>

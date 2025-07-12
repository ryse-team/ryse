<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
    currentErrorMessage: {
        type: String,
        required: true,
    },
});

defineEmits(["navigateHome"]);
</script>

<template>
    <div>
        <div class="relative mb-12">
            <div
                class="w-32 md:w-48 h-32 md:h-48 mx-auto relative bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30"
            >
                <slot name="skull-content">
                    <img src="/images/pixelated_skull.png" alt="Pixelated Skull" />
                </slot>

                <div class="absolute inset-0 bg-red-500/20 blur-2xl opacity-60 animate-pulse"></div>
            </div>
        </div>

        <div class="relative mb-8">
            <h1
                class="text-7xl md:text-9xl lg:text-[10rem] font-black text-green-400 select-none tracking-wider"
            >
                404
            </h1>
            <div
                class="absolute inset-0 text-7xl md:text-9xl lg:text-[10rem] font-black text-green-500/40 blur-sm -z-10"
            >
                404
            </div>
            <div
                class="absolute inset-0 text-7xl md:text-9xl lg:text-[10rem] font-black text-red-500/20 blur-lg -z-20 translate-x-0.5 translate-y-0.5"
            >
                404
            </div>
        </div>

        <div class="mb-8 space-y-2">
            <p class="text-xl md:text-2xl text-green-300/80 tracking-wider">PAGE_NOT_FOUND</p>
            <p class="text-sm md:text-base text-green-400/60">
                {{ currentErrorMessage }}
            </p>
        </div>

        <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
                @click="$emit('navigateHome')"
                class="group relative px-10 py-4 bg-black/80 border-2 border-green-500/60 rounded-lg text-green-400 hover:text-green-300 hover:border-green-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm hover:scale-105"
            >
                <span class="relative z-10 flex items-center gap-3">
                    <span
                        class="transition-transform duration-300 group-hover:-translate-x-2 text-xl"
                        >←</span
                    >
                    <span class="transition-all duration-300 group-hover:tracking-widest"
                        >RETURN_HOME</span
                    >
                </span>
                <div
                    class="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                ></div>
            </button>
        </div>
    </div>
</template>

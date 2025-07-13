<script setup>
import { defineProps } from "vue";

const props = defineProps({
    icon: {
        type: Object,
        required: true,
    },
    iconBgColor: {
        type: String,
        required: true,
    },
    iconColor: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="flex items-start gap-4 p-4 rounded-xl bg-slate-700/30 hover:bg-slate-700/50 transition-colors duration-300"
    >
        <div :class="['p-2 rounded-lg', iconBgColor]">
            <component :is="icon" class="w-5 h-5" :class="iconColor" />
        </div>
        <div>
            <h3 class="font-semibold text-white mb-1">{{ title }}</h3>
            <p class="text-gray-400 text-sm font-mono">{{ description }}</p>
        </div>
    </div>
</template>

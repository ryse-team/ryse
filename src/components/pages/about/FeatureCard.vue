<script setup>
import { defineProps } from "vue";

const props = defineProps({
    icon: {
        type: Object,
        required: true,
    },
    iconBgGradient: {
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
    hoverBorderColor: {
        type: String,
        default: "border-cyan-500/30",
    },
});
</script>

<template>
    <div
        :class="[
            'bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 transition-all duration-300 group',
            `hover:${hoverBorderColor}`,
        ]"
    >
        <div
            :class="[
                'p-3 rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300',
                iconBgGradient,
            ]"
        >
            <component :is="icon" class="w-6 h-6" :class="iconColor" />
        </div>
        <h3 class="text-lg font-semibold text-white mb-3">{{ title }}</h3>
        <p class="text-gray-400 text-sm font-mono leading-relaxed">{{ description }}</p>
    </div>
</template>

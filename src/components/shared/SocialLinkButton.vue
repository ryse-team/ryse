<script setup>
import { defineProps } from "vue";

const props = defineProps({
    href: {
        type: String,
        required: true,
    },
    icon: {
        type: Object,
        required: true,
    },
    hoverBorderColor: {
        type: String,
        default: "border-cyan-500/50",
    },
    hoverIconColor: {
        type: String,
        default: "text-cyan-400",
    },
});
</script>

<template>
    <a
        :href="href"
        target="_blank"
        :class="[
            'group p-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl transition-all duration-300',
            `hover:${hoverBorderColor}`,
        ]"
    >
        <component
            :is="icon"
            class="w-6 h-6 text-gray-400 transition-colors duration-300"
            :class="`group-hover:${hoverIconColor}`"
        />
    </a>
</template>

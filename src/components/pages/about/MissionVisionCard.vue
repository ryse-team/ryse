<script setup>
import { defineProps } from "vue";

const props = defineProps({
    icon: {
        type: Object,
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
    gradientColorFrom: {
        type: String,
        required: true,
    },
    gradientColorTo: {
        type: String,
        required: true,
    },
    hoverBorderColor: {
        type: String,
        required: true,
    },
    iconColor: {
        type: String,
        required: true,
    },
});

const gradientClasses = `bg-gradient-to-r ${props.gradientColorFrom} ${props.gradientColorTo}`;
</script>

<template>
    <div class="group relative">
        <div
            :class="[
                'absolute inset-0 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300',
                gradientClasses,
            ]"
        ></div>
        <div
            :class="[
                'relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 transition-all duration-300',
                hoverBorderColor,
            ]"
        >
            <div class="flex items-center gap-3 mb-6">
                <div :class="['p-3 rounded-xl', gradientClasses]">
                    <component :is="icon" class="w-6 h-6" :class="iconColor" />
                </div>
                <h2 class="text-2xl font-bold text-white">{{ title }}</h2>
            </div>
            <p class="text-gray-300 leading-relaxed font-mono tracking-wide">
                {{ description }}
            </p>
        </div>
    </div>
</template>

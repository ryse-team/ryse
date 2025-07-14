<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: "",
    },
    lineGradient: {
        type: String,
        default: "from-cyan-400 to-emerald-400",
    },
    align: {
        type: String,
        default: "center",
    },
    titleTag: {
        type: String,
        default: "h2",
        validator: (value) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
    },
    titleTextGradient: {
        type: Boolean,
        default: false,
    },
    titleGradientClasses: {
        type: String,
        default: "from-emerald-400 via-cyan-400 to-emerald-400",
    },
});

const titleAlignClass = computed(
    () =>
        ({
            center: "text-center",
            left: "text-left",
        })[props.align],
);

const contentAlignClass = computed(
    () =>
        ({
            center: "mx-auto",
            left: "",
        })[props.align],
);

const titleClasses = computed(() => [
    "text-4xl",
    "font-bold",
    "mb-4",
    "leading-tight",
    {
        "md:text-5xl lg:text-6xl": props.titleTag === "h1",
        "md:text-4xl lg:text-5xl": props.titleTag === "h2",
    },
    {
        "text-white": !props.titleTextGradient,
        "bg-clip-text text-transparent": props.titleTextGradient,
    },
    props.titleTextGradient ? "bg-gradient-to-r" : "",
    props.titleTextGradient ? props.titleGradientClasses : "",
]);

const lineClasses = computed(() => [
    "h-1",
    "rounded-full",
    props.titleTag === "h1" ? "w-32" : "w-24",
    contentAlignClass.value,
    `bg-gradient-to-r ${props.lineGradient}`,
]);
</script>

<template>
    <div class="mb-4" :class="titleAlignClass">
        <component :is="titleTag" :class="titleClasses">{{ title }}</component>
        <div :class="lineClasses"></div>
        <p
            v-if="description"
            class="text-xl text-gray-300 max-w-3xl font-mono tracking-wide mt-4"
            :class="contentAlignClass"
        >
            {{ description }}
        </p>
    </div>
</template>

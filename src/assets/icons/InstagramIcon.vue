<script setup>
const props = defineProps({
    width: {
        type: [String, Number],
        default: 24,
    },
    height: {
        type: [String, Number],
        default: 24,
    },
    color: {
        type: String,
        default: "currentColor",
    },
});
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        viewBox="0 0 24 24"
        :fill="color"
        class="w-6 h-6"
        aria-label="Instagram"
    >
        <path
            d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm9.5 2.75a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7Z"
        />
    </svg>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
    enableGlow: {
        type: Boolean,
        default: true,
    },
});

const emit = defineEmits(["mouseMove", "mouseEnter", "mouseLeave", "hoverChange"]);

const mouseX = ref(0);
const mouseY = ref(0);
const isHovering = ref(false);
const containerRef = ref(null);

const handleMouseMove = (event) => {
    if (containerRef.value) {
        const rect = containerRef.value.getBoundingClientRect();
        mouseX.value = event.clientX - rect.left;
        mouseY.value = event.clientY - rect.top;
        emit("mouseMove", { x: mouseX.value, y: mouseY.value, event });
    }
};

const handleMouseEnter = (event) => {
    isHovering.value = true;
    emit("mouseEnter", event);
    emit("hoverChange", true);
};

const handleMouseLeave = (event) => {
    isHovering.value = false;
    emit("mouseLeave", event);
    emit("hoverChange", false);
};

onMounted(() => {
    if (props.enableGlow) {
        const parentElement = containerRef.value?.parentElement;
        if (parentElement) {
            parentElement.addEventListener("mousemove", handleMouseMove);
            parentElement.addEventListener("mouseenter", handleMouseEnter);
            parentElement.addEventListener("mouseleave", handleMouseLeave);
        }
    }
});

onUnmounted(() => {
    if (props.enableGlow) {
        const parentElement = containerRef.value?.parentElement;
        if (parentElement) {
            parentElement.removeEventListener("mousemove", handleMouseMove);
            parentElement.removeEventListener("mouseenter", handleMouseEnter);
            parentElement.removeEventListener("mouseleave", handleMouseLeave);
        }
    }
});

defineExpose({
    mouseX,
    mouseY,
    isHovering,
});
</script>

<template>
    <div ref="containerRef" class="absolute inset-0 w-full h-full pointer-events-none">
        <!-- Base grid with increased opacity -->
        <div class="absolute inset-0 opacity-50">
            <div
                class="w-full h-full"
                style="
                    background-image:
                        linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px);
                    background-size: 50px 50px;
                "
            ></div>
        </div>

        <!-- Dot pattern overlay with increased opacity -->
        <div class="absolute inset-0 opacity-35">
            <div
                class="w-full h-full"
                style="
                    background-image: radial-gradient(
                        circle at center,
                        rgba(16, 185, 129, 0.2) 1px,
                        transparent 1px
                    );
                    background-size: 50px 50px;
                "
            ></div>
        </div>

        <!-- Glow effect layers with reduced intensity -->
        <div
            v-if="props.enableGlow"
            class="absolute inset-0 transition-opacity duration-300"
            :class="{ 'opacity-100': isHovering, 'opacity-0': !isHovering }"
            :style="{
                background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px,
          rgba(16, 185, 129, 0.12) 0%,
          rgba(6, 182, 212, 0.08) 25%,
          rgba(16, 185, 129, 0.04) 50%,
          transparent 70%)`,
            }"
        ></div>

        <div
            v-if="props.enableGlow"
            class="absolute inset-0 transition-opacity duration-500"
            :class="{ 'opacity-100': isHovering, 'opacity-0': !isHovering }"
            :style="{
                background: `radial-gradient(300px circle at ${mouseX}px ${mouseY}px,
          rgba(16, 185, 129, 0.06) 0%,
          rgba(6, 182, 212, 0.03) 40%,
          transparent 70%)`,
            }"
        ></div>

        <div
            v-if="props.enableGlow"
            class="absolute inset-0 transition-opacity duration-300"
            :class="{ 'opacity-100': isHovering, 'opacity-0': !isHovering }"
            :style="{
                background: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px,
          transparent 0%,
          transparent 30%,
          rgba(16, 185, 129, 0.05) 40%,
          transparent 70%)`,
                backgroundImage: `
          linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
          linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
                maskImage: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px,
          black 0%,
          black 30%,
          transparent 70%)`,
                WebkitMaskImage: `radial-gradient(400px circle at ${mouseX}px ${mouseY}px,
          black 0%,
          black 30%,
          transparent 70%)`,
            }"
        ></div>
    </div>
</template>

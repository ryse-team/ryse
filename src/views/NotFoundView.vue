<script setup>
import { useRouter } from "vue-router";
import MatrixRain from "@/components/pages/not-found/MatrixRain.vue";
import GlitchContent from "@/components/pages/not-found/GlitchContent.vue";

import { useGlitchEffect } from "@/composables/useGlitchEffect";
import { useErrorMessages } from "@/composables/useErrorMessages";

const router = useRouter();

const { isGlitching, glitchLayersStyles, triggerGlitch } = useGlitchEffect();
const { currentErrorMessage, changeErrorMessage } = useErrorMessages();

const originalTriggerGlitch = triggerGlitch;
const triggerGlitchWithMsgChange = () => {
    originalTriggerGlitch();

    if (Math.random() < 0.3) {
        changeErrorMessage();
    }
};

function navigateHome() {
    triggerGlitchWithMsgChange();
    setTimeout(() => {
        router.push("/");
    }, 200);
}
</script>

<template>
    <div class="relative min-h-screen bg-black text-green-400 overflow-hidden">
        <div
            class="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none z-40 rounded-3xl"
        ></div>

        <div
            class="absolute inset-0 pointer-events-none z-35 bg-gradient-to-b from-transparent via-green-500/5 to-transparent bg-[length:100%_4px] animate-pulse"
        ></div>

        <MatrixRain />

        <div
            class="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4"
        >
            <div class="relative">
                <div class="glitch-content" :class="{ 'opacity-80': isGlitching }">
                    <GlitchContent
                        :currentErrorMessage="currentErrorMessage"
                        @navigateHome="navigateHome"
                    />
                </div>

                <div
                    v-if="isGlitching"
                    v-for="(style, index) in glitchLayersStyles"
                    :key="index"
                    class="glitch-layer absolute inset-0 pointer-events-none"
                    :style="style"
                >
                    <GlitchContent :currentErrorMessage="currentErrorMessage" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bg-gradient-radial {
    background: radial-gradient(circle, var(--tw-gradient-stops));
}

.glitch-content {
    transition: opacity 0.1s ease;
}

.glitch-layer {
    transition: none;
}

@media (prefers-reduced-motion: reduce) {
    .animate-pulse {
        animation: none;
    }

    .transition-all,
    .transition-transform,
    .transition-opacity {
        transition: none;
    }
}

button:focus-visible {
    outline: 2px solid #10b981;
    outline-offset: 2px;
}
</style>

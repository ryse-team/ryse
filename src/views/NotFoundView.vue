<template>
    <div class="relative min-h-screen bg-black text-green-400 overflow-hidden">
        <!-- CRT Screen Effect -->
        <div
            class="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/60 pointer-events-none z-40 rounded-3xl"
        ></div>

        <!-- Scanlines -->
        <div
            class="absolute inset-0 pointer-events-none z-35 bg-gradient-to-b from-transparent via-green-500/5 to-transparent bg-[length:100%_4px] animate-pulse"
        ></div>

        <!-- Matrix Rain Background -->
        <MatrixRain />

        <!-- Main Content Container with Glitch Layers -->
        <div
            class="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4"
        >
            <!-- Glitched Content Layers -->
            <div class="relative">
                <!-- Base Layer - Always Visible -->
                <div class="glitch-content" :class="{ 'opacity-80': isGlitching }">
                    <!-- Skull Display -->
                    <div class="relative mb-12">
                        <div
                            class="w-32 md:w-48 h-32 md:h-48 mx-auto relative bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30"
                        >
                            <img src="/images/pixelated_skull.png" alt="Pixelated Skull" />
                            <div
                                class="absolute inset-0 bg-red-500/20 blur-2xl opacity-60 animate-pulse"
                            ></div>
                        </div>
                    </div>

                    <!-- 404 Title -->
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

                    <!-- Error Message -->
                    <div class="mb-8 space-y-2">
                        <p class="text-xl md:text-2xl text-green-300/80 tracking-wider">
                            SYSTEM_ERROR.EXE
                        </p>
                        <p class="text-sm md:text-base text-green-400/60">
                            {{ currentErrorMessage }}
                        </p>
                        <div class="flex items-center justify-center gap-2 text-green-500/60">
                            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span class="text-xs">ATTEMPTING_RECOVERY...</span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            @click="navigateHome"
                            class="group relative px-10 py-4 bg-black/80 border-2 border-green-500/60 rounded-lg text-green-400 hover:text-green-300 hover:border-green-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:-translate-x-2 text-xl"
                                    >←</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETURN_HOME</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>

                        <button
                            @click="refreshPage"
                            class="group relative px-10 py-4 bg-black/80 border-2 border-yellow-500/60 rounded-lg text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:rotate-180 text-xl"
                                    >↻</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETRY_SYSTEM</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>
                    </div>
                </div>

                <!-- Glitch Layer 1 - Top displacement -->
                <div
                    v-if="isGlitching"
                    class="glitch-layer absolute inset-0 pointer-events-none"
                    :style="glitchLayer1Style"
                >
                    <!-- Skull Display -->
                    <div class="relative mb-12">
                        <div
                            class="w-32 md:w-48 h-32 md:h-48 mx-auto relative bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30"
                        >
                            <div class="text-6xl md:text-8xl filter brightness-110 contrast-125">
                                💀
                            </div>
                            <div
                                class="absolute inset-0 bg-green-500/30 blur-xl opacity-80 animate-pulse"
                            ></div>
                            <div
                                class="absolute inset-0 bg-red-500/20 blur-2xl opacity-60 animate-pulse"
                            ></div>
                        </div>
                    </div>

                    <!-- 404 Title -->
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

                    <!-- Error Message -->
                    <div class="mb-8 space-y-2">
                        <p class="text-xl md:text-2xl text-green-300/80 tracking-wider">
                            SYSTEM_ERROR.EXE
                        </p>
                        <p class="text-sm md:text-base text-green-400/60">
                            {{ currentErrorMessage }}
                        </p>
                        <div class="flex items-center justify-center gap-2 text-green-500/60">
                            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span class="text-xs">ATTEMPTING_RECOVERY...</span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            class="group relative px-10 py-4 bg-black/80 border-2 border-green-500/60 rounded-lg text-green-400 hover:text-green-300 hover:border-green-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:-translate-x-2 text-xl"
                                    >←</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETURN_HOME</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>

                        <button
                            class="group relative px-10 py-4 bg-black/80 border-2 border-yellow-500/60 rounded-lg text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:rotate-180 text-xl"
                                    >↻</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETRY_SYSTEM</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>
                    </div>
                </div>

                <!-- Glitch Layer 2 - Middle displacement -->
                <div
                    v-if="isGlitching"
                    class="glitch-layer absolute inset-0 pointer-events-none"
                    :style="glitchLayer2Style"
                >
                    <!-- Skull Display -->
                    <div class="relative mb-12">
                        <div
                            class="w-32 md:w-48 h-32 md:h-48 mx-auto relative bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30"
                        >
                            <div class="text-6xl md:text-8xl filter brightness-110 contrast-125">
                                💀
                            </div>
                            <div
                                class="absolute inset-0 bg-green-500/30 blur-xl opacity-80 animate-pulse"
                            ></div>
                            <div
                                class="absolute inset-0 bg-red-500/20 blur-2xl opacity-60 animate-pulse"
                            ></div>
                        </div>
                    </div>

                    <!-- 404 Title -->
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

                    <!-- Error Message -->
                    <div class="mb-8 space-y-2">
                        <p class="text-xl md:text-2xl text-green-300/80 tracking-wider">
                            SYSTEM_ERROR.EXE
                        </p>
                        <p class="text-sm md:text-base text-green-400/60">
                            {{ currentErrorMessage }}
                        </p>
                        <div class="flex items-center justify-center gap-2 text-green-500/60">
                            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span class="text-xs">ATTEMPTING_RECOVERY...</span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            class="group relative px-10 py-4 bg-black/80 border-2 border-green-500/60 rounded-lg text-green-400 hover:text-green-300 hover:border-green-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:-translate-x-2 text-xl"
                                    >←</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETURN_HOME</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>

                        <button
                            class="group relative px-10 py-4 bg-black/80 border-2 border-yellow-500/60 rounded-lg text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:rotate-180 text-xl"
                                    >↻</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETRY_SYSTEM</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>
                    </div>
                </div>

                <!-- Glitch Layer 3 - Bottom displacement -->
                <div
                    v-if="isGlitching"
                    class="glitch-layer absolute inset-0 pointer-events-none"
                    :style="glitchLayer3Style"
                >
                    <!-- Skull Display -->
                    <div class="relative mb-12">
                        <div
                            class="w-32 md:w-48 h-32 md:h-48 mx-auto relative bg-green-500/20 rounded-lg flex items-center justify-center border border-green-500/30"
                        >
                            <div class="text-6xl md:text-8xl filter brightness-110 contrast-125">
                                💀
                            </div>
                            <div
                                class="absolute inset-0 bg-green-500/30 blur-xl opacity-80 animate-pulse"
                            ></div>
                            <div
                                class="absolute inset-0 bg-red-500/20 blur-2xl opacity-60 animate-pulse"
                            ></div>
                        </div>
                    </div>

                    <!-- 404 Title -->
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

                    <!-- Error Message -->
                    <div class="mb-8 space-y-2">
                        <p class="text-xl md:text-2xl text-green-300/80 tracking-wider">
                            SYSTEM_ERROR.EXE
                        </p>
                        <p class="text-sm md:text-base text-green-400/60">
                            {{ currentErrorMessage }}
                        </p>
                        <div class="flex items-center justify-center gap-2 text-green-500/60">
                            <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                            <span class="text-xs">ATTEMPTING_RECOVERY...</span>
                        </div>
                    </div>

                    <!-- Action Buttons -->
                    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            class="group relative px-10 py-4 bg-black/80 border-2 border-green-500/60 rounded-lg text-green-400 hover:text-green-300 hover:border-green-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:-translate-x-2 text-xl"
                                    >←</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETURN_HOME</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-green-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>

                        <button
                            class="group relative px-10 py-4 bg-black/80 border-2 border-yellow-500/60 rounded-lg text-yellow-400 hover:text-yellow-300 hover:border-yellow-400/80 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/40 backdrop-blur-sm hover:scale-105"
                        >
                            <span class="relative z-10 flex items-center gap-3">
                                <span
                                    class="transition-transform duration-300 group-hover:rotate-180 text-xl"
                                    >↻</span
                                >
                                <span
                                    class="transition-all duration-300 group-hover:tracking-widest"
                                    >RETRY_SYSTEM</span
                                >
                            </span>
                            <div
                                class="absolute inset-0 bg-yellow-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-sm"
                            ></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue"
import MatrixRain from "../components/specific/MatrixRain.vue"

// Glitch state
const isGlitching = ref(false)
const glitchData = ref({
    layer1: { x: 0, y: 0, clipTop: 0, clipBottom: 100 },
    layer2: { x: 0, y: 0, clipTop: 0, clipBottom: 100 },
    layer3: { x: 0, y: 0, clipTop: 0, clipBottom: 100 },
})

// Error messages
const errorMessages = [
    "REALITY.EXE HAS STOPPED WORKING",
    "PAGE NOT FOUND IN THIS DIMENSION",
    "ERROR 404: EXISTENCE UNDEFINED",
    "QUANTUM ENTANGLEMENT FAILED",
    "MATRIX OVERFLOW DETECTED",
]
const currentErrorMessage = ref(errorMessages[Math.floor(Math.random() * errorMessages.length)])

// TikTok-style displacement glitch styles
const glitchLayer1Style = computed(() => ({
    transform: `translate(${glitchData.value.layer1.x}px, ${glitchData.value.layer1.y}px)`,
    clipPath: `inset(${glitchData.value.layer1.clipTop}% 0 ${100 - glitchData.value.layer1.clipBottom}% 0)`,
    filter: "hue-rotate(180deg) saturate(2)",
    mixBlendMode: "screen",
}))

const glitchLayer2Style = computed(() => ({
    transform: `translate(${glitchData.value.layer2.x}px, ${glitchData.value.layer2.y}px)`,
    clipPath: `inset(${glitchData.value.layer2.clipTop}% 0 ${100 - glitchData.value.layer2.clipBottom}% 0)`,
    filter: "hue-rotate(90deg) saturate(1.5)",
    mixBlendMode: "screen",
}))

const glitchLayer3Style = computed(() => ({
    transform: `translate(${glitchData.value.layer3.x}px, ${glitchData.value.layer3.y}px)`,
    clipPath: `inset(${glitchData.value.layer3.clipTop}% 0 ${100 - glitchData.value.layer3.clipBottom}% 0)`,
    filter: "hue-rotate(270deg) saturate(1.8)",
    mixBlendMode: "screen",
}))

// Generate TikTok-style glitch displacement
function generateGlitchDisplacement() {
    const intensity = 15 + Math.random() * 25

    // Create random horizontal strips that appear displaced
    const strips = []
    let currentY = 0

    while (currentY < 100) {
        const stripHeight = 5 + Math.random() * 15
        strips.push({
            top: currentY,
            bottom: Math.min(currentY + stripHeight, 100),
            displacement: (Math.random() - 0.5) * intensity * 2,
        })
        currentY += stripHeight + Math.random() * 10
    }

    // Assign strips to different layers
    strips.forEach((strip, index) => {
        const layerIndex = (index % 3) + 1
        const layer = `layer${layerIndex}`

        if (Math.random() > 0.6) {
            // Only some strips glitch
            glitchData.value[layer] = {
                x: strip.displacement,
                y: (Math.random() - 0.5) * 8,
                clipTop: strip.top,
                clipBottom: strip.bottom,
            }
        }
    })
}

// Glitch trigger system
function triggerGlitch() {
    if (isGlitching.value) return

    generateGlitchDisplacement()
    isGlitching.value = true

    // Random error message change
    if (Math.random() < 0.3) {
        currentErrorMessage.value = errorMessages[Math.floor(Math.random() * errorMessages.length)]
    }

    const duration = 100 + Math.random() * 200
    setTimeout(() => {
        isGlitching.value = false
    }, duration)
}

// Glitch scheduling
let glitchInterval = null

function startGlitchSystem() {
    // Initial glitch after exactly 500ms
    setTimeout(() => {
        triggerGlitch()
    }, 500)

    function scheduleNextGlitch() {
        const delay = 1500 + Math.random() * 3000
        glitchInterval = setTimeout(() => {
            if (Math.random() < 0.8) {
                triggerGlitch()
            }
            scheduleNextGlitch()
        }, delay)
    }

    scheduleNextGlitch()
}

function stopGlitchSystem() {
    if (glitchInterval) {
        clearTimeout(glitchInterval)
        glitchInterval = null
    }
}

// Navigation functions
function navigateHome() {
    triggerGlitch()
    setTimeout(() => {
        window.location.href = "/"
    }, 200)
}

function refreshPage() {
    triggerGlitch()
    setTimeout(() => {
        window.location.reload()
    }, 150)
}

// Lifecycle
onMounted(() => {
    startGlitchSystem()
})

onUnmounted(() => {
    stopGlitchSystem()
})
</script>

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

/* Minimal responsive adjustments */
@media (max-width: 768px) {
    h1 {
        font-size: 4rem;
    }
}

@media (max-width: 480px) {
    h1 {
        font-size: 3rem;
    }
}

/* Accessibility */
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

/* Focus states */
button:focus-visible {
    outline: 2px solid #10b981;
    outline-offset: 2px;
}
</style>

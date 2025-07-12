<template>
    <canvas ref="canvas" class="w-full h-full absolute inset-0 z-0 pointer-events-none" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue"

const canvas = ref(null)
let ctx, width, height, columns, drops, intervalId

const chars = "01"
const fontSize = 14
const frameDelay = 80

function initCanvas() {
    const c = canvas.value
    if (!c) return

    ctx = c.getContext("2d")
    width = c.width = window.innerWidth
    height = c.height = window.innerHeight
    columns = Math.floor(width / fontSize)
    drops = Array(columns).fill(1)
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)"
    ctx.fillRect(0, 0, width, height)

    ctx.fillStyle = "rgba(16, 185, 129, 0.4)"
    ctx.font = `${fontSize}px monospace`

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
            drops[i] = 0
        }
        drops[i]++
    }
}

function handleResize() {
    clearInterval(intervalId)
    initCanvas()
    intervalId = setInterval(draw, frameDelay)
}

onMounted(() => {
    initCanvas()
    intervalId = setInterval(draw, frameDelay)
    window.addEventListener("resize", handleResize)
})

onUnmounted(() => {
    clearInterval(intervalId)
    window.removeEventListener("resize", handleResize)
})
</script>

<script setup>
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
    <nav
        class="fixed z-999 self-center bg-black/40 backdrop-blur-md rounded-xl w-[90%] shadow-2xl flex justify-between items-center py-[.8rem] lg:py-[1rem] px-[1rem] lg:px-[4rem] top-2 border border-zinc-700/30"
    >
        <RouterLink to="/">
            <p class="text-xl lg:text-3xl">ryse<span class="beating-cursor">_</span></p>
        </RouterLink>
        <ul class="flex gap-6 text-sm lg:text-lg text-gray-300 underline-offset-4">
            <RouterLink to="/">
                <li
                    class="transition-all duration-400 hover:tracking-widest hover:text-gray-400"
                    :class="{ 'underline decoration-wavy text-white': route.path === '/' }"
                >
                    home
                </li>
            </RouterLink>
            <RouterLink to="team">
                <li
                    class="transition-all duration-400 hover:text-gray-600 hover:tracking-widest"
                    :class="{ 'underline decoration-wavy text-white': route.path === '/team' }"
                >
                    team
                </li>
            </RouterLink>
        </ul>
    </nav>
</template>

<style>
@keyframes beat {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
}

.beating-cursor {
    animation: beat 1.5s steps(1, start) infinite;
}
</style>

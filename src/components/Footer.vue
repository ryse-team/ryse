<script setup>
import ArrowUp from './Icons/ArrowUp.vue'
</script>

<template>
    <footer
        class="z-90 flex flex-col px-[1rem] lg:px-[8rem] py-[4rem] w-full bg-black text-[1.1rem]"
    >
        <p class="self-end mb-4">ryse platforms &copy; {{ new Date().getFullYear() }}</p>
        <div class="flex justify-between w-full">
            <ul class="space-y-2">
                <li><RouterLink to="/">home</RouterLink></li>
                <li><RouterLink to="/team">team</RouterLink></li>
            </ul>
            <ul class="space-y-2">
                <li class="flex gap-2 items-center justify-between group">
                    <a href="https://github.com/ryse-team" class="hover:underline">Github</a>
                    <ArrowUp class="fill-white w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </li>
                <li class="flex gap-2 items-center justify-between group">
                    <a href="#" class="hover:underline">Linkedin</a>
                    <ArrowUp class="fill-white w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </li>
            </ul>
        </div>
    </footer>
</template>

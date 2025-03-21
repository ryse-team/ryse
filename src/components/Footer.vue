<script setup>
import ArrowUp from './Icons/ArrowUp.vue'
</script>

<template>
    <footer
        class="flex flex-col px-[1rem] lg:px-[8rem] py-[4rem] w-full bg-black text-sm lg:text-base"
    >
        <p class="self-end mb-4">ryse platforms &copy; {{ new Date().getFullYear() }}</p>
        <div class="flex justify-between w-full">
            <ul class="space-y-2">
                <li><RouterLink to="/">home</RouterLink></li>
                <li><RouterLink to="/team">team</RouterLink></li>
            </ul>
            <ul class="space-y-2">
                <li class="hover:underline flex gap-2 items-center justify-between">
                    <a href="https://github.com/ryse-team">Github</a
                    ><ArrowUp class="fill-white w-4 h-4" />
                </li>
                <li class="hover:underline flex gap-2 items-center justify-between">
                    <a href="#">Linkedin</a><ArrowUp class="fill-white w-4 h-4" />
                </li>
            </ul>
        </div>
    </footer>
</template>

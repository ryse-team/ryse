<script setup>
import ArrowUp from "./Icons/ArrowUp.vue"
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
                <li class="flex gap-2 items-center group">
                    <ArrowUp
                        class="fill-white w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <a href="https://github.com/ryse-team" class="hover:underline">Github</a>
                </li>
                <li class="flex gap-2 items-center group">
                    <ArrowUp
                        class="fill-white w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <a href="#" class="hover:underline">Linkedin</a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
import ArrowUp from './Icons/ArrowUp.vue';
</script>

<template>
  <footer class="flex flex-col px-[1rem] lg:px-[6rem] py-[4rem] w-full bg-black text-sm lg:text-base">
    <p class="self-end mb-4">ryse platforms &copy; {{ new Date().getFullYear() }}</p>

    <div class="flex justify-between w-full">
      <ul class="space-y-2">
        <li><RouterLink to="/">home</RouterLink></li>
        <li><RouterLink to="/team">team</RouterLink></li>
      </ul>

      <ul class="space-y-2">
        <li class="flex gap-1 items-center justify-between group">
          <a href="https://github.com/ryse-team" class="hover:underline">Github</a>
          <ArrowUp class="w-4 h-4 fill-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </li>

        <li class="flex gap-1 items-center justify-between group">
          <a href="#" class="hover:underline">LinkedIn</a>
          <ArrowUp class="w-4 h-4 fill-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </li>
      </ul>
    </div>
  </footer>
</template>

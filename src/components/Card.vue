<script setup>
const data = defineProps({
  name: String,
  role: String,
  division: String,
  linkedin: String,
  github: String,
  img_src: {
    type: String,
    default: 'https://t3.ftcdn.net/jpg/06/84/18/58/240_F_684185884_eKq0i4Ua9GrwKUfluonwGE5xjwxHGyvW.jpg'
  }
})
</script>

<template>
    <div class="max-w-md bg-white/20 backdrop-blur-2xl p-6 w-full rounded-2xl relative">
      <div class="rounded-md bg-white shadow-lg p-1 h-40 w-40 absolute top-0 -translate-y-2 right-0 overflow-hidden">
        <img :src="data.img_src" class="rounded-md w-full h-full object-cover">
      </div>
      <div class="flex">
        <div class="flex flex-col justify-between">
          <h1 class="text-2xl font-bold">{{ data.name }}</h1>
          <p class="text-sm">{{ data.role}}</p>
          <p class="text-sm">{{ data.division }}</p>
          <div class="flex gap-2 text-sm">
            <a :href="data.linkedin" target="_blank" class="text-blue-200">Linkedin</a>
            <a :href="data.github" target="_blank" class="text-blue-200">Github</a>
          </div>
        </div>
      </div>
    </div>
</template>

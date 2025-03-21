<script setup>
import Card from '@/components/Card.vue';

const devs = [
  {
    name: 'Anush M',
    role: 'Lead Developer',
    division: 'Backend',
    linkedin: 'https://www.linkedin.com/in/anushm55',
    github: 'https://www.github.com/anushm55',
  },
  {
    name: 'Krishneshvar J',
    role: 'Lead Developer',
    division: 'Frontend',
    linkedin: 'https://www.linkedin.com/in/krishneshvar-j',
    github: 'https://www.github.com/Krishneshvar',
  },
  {
    name: 'kottesh',
    role: 'Lead Developer',
    division: 'All Rounder',
    linkedin: 'https://www.linkedin.com/in/kottesh',
    github: 'https://www.github.com/kottesh',
  }
]

</script>
<template>
  <div class="flex flex-col items-center justify-center h-screen gap-8 p-4 bg-black">
    <img src="../assets/topography.svg" class="h-full w-full object-cover absolute invert-[50%] opacity-50" />
    <Card v-for="dev in devs" :key="dev.name" :name="dev.name" :role="dev.role" :division="dev.division" :linkedin="dev.linkedin" :github="dev.github" />
  </div>
</template>

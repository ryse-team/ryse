<script setup>
import Card from "@/components/Card.vue"

const devs = [
    {
        name: "Anush M",
        role: "Lead Developer",
        division: "Backend",
        linkedin: "https://www.linkedin.com/in/anushm55",
        github: "https://www.github.com/anushm55",
    },
    {
        name: "Krishneshvar J",
        role: "Lead Developer",
        division: "Frontend",
        linkedin: "https://www.linkedin.com/in/krishneshvar-j",
        github: "https://www.github.com/Krishneshvar",
    },
    {
        name: "Kottesh",
        role: "Lead Developer",
        division: "Infra & Backend",
        linkedin: "https://www.linkedin.com/in/kottesh",
        github: "https://www.github.com/kottesh",
    },
]
</script>

<template>
    <div class="min-h-screen flex flex-col justify-center bg-black text-white relative py-[4rem]">
        <img
            src="../assets/topography.svg"
            class="h-full w-full object-cover invert-[50%] opacity-50 pointer-events-none absolute"
        />

        <h1 class="z-10 text-4xl md:text-5xl font-bold text-center mb-12 mt-5">Meet The Team</h1>
        <div class="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            <Card
                v-for="dev in devs"
                :key="dev.name"
                :name="dev.name"
                :role="dev.role"
                :division="dev.division"
                :linkedin="dev.linkedin"
                :github="dev.github"
            />
        </div>
    </div>
</template>

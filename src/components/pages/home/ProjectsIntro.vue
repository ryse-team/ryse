<script setup>
import RouteIntroCard from "./RouteIntroCard.vue";
</script>

<template>
    <div class="relative">
        <router-link
            to="/projects"
            class="block hover:scale-[1.01] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl"
            aria-label="Navigate to projects page"
        >
            <RouteIntroCard
                title="Explore Our Projects"
                imageUrl="https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                introText="Dive into our portfolio of student-led projects! From simple solutions to creative software, see how our ideas come to life and how we're building practical tech solutions right here in college."
            />
        </router-link>
    </div>
</template>

<script setup>
import RouteIntroCard from "./RouteIntroCard.vue";
</script>

<template>
    <div class="relative">
        <router-link
            to="/team"
            class="block hover:scale-[1.01] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl"
            aria-label="Navigate to team page"
        >
            <RouteIntroCard
                title="Meet Our Team"
                imageUrl="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                introText="Meet the passionate student innovators and tech enthusiasts who make our team tick. We're a diverse group with different roles, always learning, collaborating, and pushing the boundaries of what's possible!"
            />
        </router-link>
    </div>
</template>

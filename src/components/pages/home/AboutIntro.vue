<script setup>
import RouteIntroCard from "./RouteIntroCard.vue";
</script>

<template>
    <div class="relative">
        <router-link
            to="/about"
            class="block hover:scale-[1.01] transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 rounded-2xl"
            aria-label="Navigate to about page"
        >
            <RouteIntroCard
                title="About Us"
                imageUrl="/images/about-us.jpeg"
                introText="Discover ryse's mission, vision, and the passion that drives our student tech team. Learn about our journey, values, and commitment to innovation and community within CIT."
            />
        </router-link>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, ref, onMounted, onUnmounted } from "vue";
import { Menu, X } from "lucide-vue-next";

const route = useRoute();
const isMobileMenuOpen = ref(false);
const isMobile = ref(false);

const navLinks = computed(() => [
    { name: "Home", path: "/" },
    { name: "Team", path: "/team" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
]);

const checkScreenSize = () => {
    isMobile.value = window.innerWidth < 768;
    if (!isMobile.value) {
        isMobileMenuOpen.value = false;
    }
};

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false;
};

onMounted(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
});

onUnmounted(() => {
    window.removeEventListener("resize", checkScreenSize);
});
</script>

<template>
    <nav
        class="fixed top-2 left-1/2 -translate-x-1/2 z-[999] w-[95%] max-w-[1200px] transition-all duration-500 rounded-b-3xl"
        aria-label="Main navigation"
    >
        <div
            :class="[
                'relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl',
                'shadow-black/35 transition-all duration-500 ease-out',
                'hover:bg-black/50 hover:border-white/20 hover:shadow-3xl',
            ]"
        >
            <div class="flex items-center justify-between px-4 sm:px-6 lg:px-12 py-3 lg:py-4">
                <RouterLink
                    to="/"
                    aria-label="Go to Home page"
                    class="group flex items-center transition-transform duration-300 hover:scale-105"
                    @click="closeMobileMenu"
                >
                    <div class="relative">
                        <p
                            class="text-xl lg:text-3xl font-bold tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300"
                        >
                            ryse<span class="beating-cursor text-emerald-400">_</span>
                        </p>
                        <div
                            class="absolute inset-0 bg-emerald-400/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                        ></div>
                    </div>
                </RouterLink>

                <ul v-if="!isMobile" class="flex items-center gap-6 lg:gap-4 text-sm lg:text-base">
                    <li v-for="link in navLinks" :key="link.path">
                        <RouterLink
                            :to="link.path"
                            class="group relative px-3 py-2 text-gray-300 transition-all duration-300 hover:text-white"
                            :class="{
                                'text-white': route.path === link.path,
                            }"
                        >
                            <span
                                class="relative z-10 transition-all duration-300 group-hover:tracking-wider"
                            >
                                {{ link.name }}
                            </span>
                            <div
                                v-if="route.path === link.path"
                                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full"
                            ></div>

                            <div
                                class="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-95 group-hover:scale-100"
                            ></div>

                            <div
                                class="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full group-hover:w-full transition-all duration-300"
                            ></div>
                        </RouterLink>
                    </li>
                </ul>

                <button
                    v-if="isMobile"
                    @click="toggleMobileMenu"
                    class="group relative p-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-lg"
                    :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
                    :aria-expanded="isMobileMenuOpen"
                >
                    <div class="relative w-6 h-6">
                        <Menu
                            :class="[
                                'absolute inset-0 w-6 h-6 transition-all duration-300',
                                isMobileMenuOpen
                                    ? 'opacity-0 rotate-90 scale-75'
                                    : 'opacity-100 rotate-0 scale-100',
                            ]"
                        />
                        <X
                            :class="[
                                'absolute inset-0 w-6 h-6 transition-all duration-300',
                                isMobileMenuOpen
                                    ? 'opacity-100 rotate-0 scale-100'
                                    : 'opacity-0 -rotate-90 scale-75',
                            ]"
                        />
                    </div>

                    <div
                        class="absolute inset-0 bg-emerald-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"
                    ></div>
                </button>
            </div>

            <div
                v-if="isMobile"
                :class="[
                    'overflow-hidden transition-all duration-500 ease-out',
                    isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
                ]"
            >
                <div
                    class="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mx-4"
                ></div>

                <div class="px-4 py-4 space-y-1">
                    <RouterLink
                        v-for="(link, index) in navLinks"
                        :key="link.path"
                        :to="link.path"
                        @click="closeMobileMenu"
                        :class="[
                            'group flex items-center px-4 py-3 text-gray-300 hover:text-white transition-all duration-300',
                            'hover:bg-white/5 rounded-xl border border-transparent hover:border-white/10',
                            'transform transition-all duration-300',
                            isMobileMenuOpen
                                ? 'translate-x-0 opacity-100'
                                : 'translate-x-4 opacity-0',
                            route.path === link.path ? 'text-white bg-white/5 border-white/10' : '',
                        ]"
                        :style="{
                            transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                        }"
                    >
                        <span class="flex-1 transition-all duration-300 group-hover:tracking-wider">
                            {{ link.name }}
                        </span>

                        <div
                            v-if="route.path === link.path"
                            class="w-2 h-2 bg-emerald-400 rounded-full"
                        ></div>

                        <div
                            class="w-0 group-hover:w-4 overflow-hidden transition-all duration-300"
                        >
                            <div
                                class="w-4 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transform translate-x-1 group-hover:translate-x-0 transition-transform duration-300"
                            ></div>
                        </div>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
@keyframes beat {
    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.3;
        transform: scale(0.95);
    }
}

.beating-cursor {
    animation: beat 1.5s ease-in-out infinite;
}

.shadow-3xl {
    box-shadow:
        0 25px 50px -12px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

@supports (backdrop-filter: blur(50px)) {
    .backdrop-blur-xl {
        backdrop-filter: blur(50px) saturate(180%);
    }
}

@media (max-width: 767px) {
    .mobile-menu-enter-active,
    .mobile-menu-leave-active {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .mobile-menu-enter-from,
    .mobile-menu-leave-to {
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
    }
}
</style>

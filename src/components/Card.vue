<script setup>
import { ref, onMounted } from "vue"
import { LinkedinIcon, GithubIcon } from "lucide-vue-next"

const props = defineProps({
    name: String,
    role: String,
    division: String,
    linkedin: String,
    github: String,
    img_src: {
        type: String,
        default:
            "https://t3.ftcdn.net/jpg/06/84/18/58/240_F_684185884_eKq0i4Ua9GrwKUfluonwGE5xjwxHGyvW.jpg",
    },
})

const isVisible = ref(false)

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true
    }, 100)
})
</script>

<template>
    <div
        :class="[
            'w-[300px] lg:w-[350px] bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xl',
            'p-8 rounded-3xl flex flex-col items-center justify-center text-center',
            'shadow-2xl border border-white/10 transition-all duration-700 ease-in-out',
            'hover:shadow-xl hover:shadow-white/5 transform hover:-translate-y-1',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
        ]"
    >
        <div class="relative">
            <div
                class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse"
            ></div>
            <div
                class="rounded-full bg-white/90 shadow-lg p-2 h-32 w-32 lg:h-40 lg:w-40 overflow-hidden relative z-10 border-4 border-white/50"
            >
                <img
                    :src="props.img_src"
                    class="rounded-full w-full h-full object-cover"
                    alt="Profile"
                />
            </div>
        </div>

        <h1 class="text-2xl lg:text-3xl font-bold mt-6 text-white">{{ props.name }}</h1>
        <p class="text-lg text-emerald-300 font-medium mt-1">{{ props.role }}</p>
        <p class="text-md text-gray-300 mt-1">{{ props.division }}</p>

        <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full my-4"></div>

        <div class="flex gap-6 mt-4">
            <a
                :href="props.linkedin"
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white group"
            >
                <LinkedinIcon
                    class="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors"
                />
                <span class="text-sm group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <a
                :href="props.github"
                target="_blank"
                class="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 text-white group"
            >
                <GithubIcon
                    class="w-5 h-5 text-emerald-300 group-hover:text-white transition-colors"
                />
                <span class="text-sm group-hover:text-white transition-colors">GitHub</span>
            </a>
        </div>
    </div>
</template>

<style>
@keyframes float {
    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0px);
    }
}
</style>

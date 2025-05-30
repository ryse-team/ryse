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
            'pt-16 pb-8 px-8 rounded-3xl flex flex-col items-center justify-center text-center',
            'shadow-2xl border border-white/10 transition-all duration-700 ease-in-out',
            'hover:shadow-xl hover:shadow-white/5 transform hover:-translate-y-1',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
            'relative mt-20', // Added margin top to make room for the image
        ]"
    >
        <!-- Image container positioned to peek above the card -->
        <div class="absolute -top-20 left-0 w-full h-48 overflow-hidden">
            <img
                :src="props.img_src"
                class="w-full h-auto object-cover object-center shadow-lg"
                alt="Profile"
            />
        </div>

        <!-- Content starts below the image -->
        <div class="w-full mt-16"> <!-- Added margin top to push content below image -->
            <h1 class="text-2xl lg:text-3xl font-bold text-white">{{ props.name }}</h1>
            <p class="text-lg text-emerald-300 font-medium mt-1">{{ props.role }}</p>
            <p class="text-md text-gray-300 mt-1">{{ props.division }}</p>

            <div class="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full my-4 mx-auto"></div>

            <div class="flex gap-6 mt-4 justify-center">
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

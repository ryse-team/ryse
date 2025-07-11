<script setup>
import { ref, onMounted } from "vue"
import ArrowUpIcon from "@/assets/icons/ArrowUpIcon.vue"
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue"
import GitHubIcon from "@/assets/icons/GitHubIcon.vue"

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    default: 'Infrastructure'
  },
  info: {
    type: String,
    default: ''
  },
  linkedin: {
    type: String,
    default: '',
  },
  github: {
    type: String,
    default: '',
  },
  img_src: {
    type: String,
    default: "https://t3.ftcdn.net/jpg/06/84/18/58/240_F_684185884_eKq0i4Ua9GrwKUfluonwGE5xjwxHGyvW.jpg",
  },
})

const isVisible = ref(false)
const isHovered = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div 
    :class="[
      'group relative w-[300px] lg:w-[350px] bg-gradient-to-br from-slate-900/90 to-slate-800/90',
      'backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden',
      'shadow-2xl shadow-slate-900/25 transition-all duration-500 ease-out',
      'hover:shadow-3xl hover:shadow-slate-900/40 hover:-translate-y-2 hover:scale-[1.02]',
      'hover:border-emerald-500/30 hover:from-slate-900/95 hover:to-slate-800/95',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    ]"
    role="region"
    :aria-label="`${props.name}'s Profile Card`"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div class="relative h-48 overflow-hidden bg-gradient-to-br from-emerald-400 to-cyan-500 p-1">
      <div class="relative h-full w-full rounded-t-xl overflow-hidden">
        <img
          :src="props.img_src"
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          :alt="`Profile image of ${props.name}`"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
        
        <div class="absolute top-4 right-4 px-3 py-1 bg-blue-500/20 backdrop-blur-sm rounded-full border border-white/30">
          <span class="text-xs font-medium text-white">{{ props.division }}</span>
        </div>
      </div>
    </div>

    <div class="relative p-6 space-y-4">
      <div class="text-center space-y-2">
        <h2 class="text-2xl lg:text-3xl font-bold text-white tracking-tight">
          {{ props.name }}
        </h2>
        <p class="text-lg font-semibold text-emerald-400">
          {{ props.role }}
        </p>
        <p class="text-md font-semibold text-gray-400">
          {{ props.info }}
        </p>

        <div class="flex justify-center">
          <div 
            :class="[
              'h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full transition-all duration-500',
              isHovered ? 'w-20' : 'w-12'
            ]"
          ></div>
        </div>
      </div>

      <div v-if="props.linkedin || props.github" class="flex gap-3 justify-center pt-2">
        <a
          v-if="props.linkedin"
          :href="props.linkedin"
          target="_blank"
          rel="noopener noreferrer"
          class="group/link flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 hover:bg-emerald-500/20 
                 border border-slate-700/50 hover:border-emerald-500/50 rounded-xl
                 transition-all duration-300 text-slate-300 hover:text-emerald-400"
          :aria-label="`LinkedIn profile of ${props.name}`"
        >
          <LinkedInIcon class="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" />
          <span class="text-sm font-medium">LinkedIn</span>
          <ExternalLink class="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
        </a>

        <a
          v-if="props.github"
          :href="props.github"
          target="_blank"
          rel="noopener noreferrer"
          class="group/link flex items-center gap-2 px-4 py-2.5 bg-slate-800/50 hover:bg-cyan-500/20 
                 border border-slate-700/50 hover:border-cyan-500/50 rounded-xl
                 transition-all duration-300 text-slate-300 hover:text-cyan-400"
          :aria-label="`GitHub profile of ${props.name}`"
        >
          <GitHubIcon class="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110" />
          <span class="text-sm font-medium">GitHub</span>
          <ExternalLink class="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300" />
        </a>
      </div>

      <!-- Decorative elements -->
      <div class="absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div class="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>

    <!-- Subtle border glow effect -->
    <div class="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
  </div>
</template>

<style scoped>
/* Custom shadow for enhanced depth */
.shadow-3xl {
  box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05);
}

/* Smooth entrance animation */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

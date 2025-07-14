<script setup>
import { Users, Calendar, Globe, GitBranch } from "lucide-vue-next";
import GitHubIcon from "@/assets/icons/GitHubIcon.vue";
import { getStatusColor, getDifficultyColor, formatDate } from "@/data/projectsData.js";

const props = defineProps({
    project: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div
        class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300 group flex flex-col h-full hover:transform hover:scale-105"
    >
        <div class="relative overflow-hidden">
            <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div class="absolute top-4 right-4 flex gap-2">
                <span
                    class="px-2 py-1 text-xs rounded-full font-medium"
                    :class="getDifficultyColor(project.difficulty)"
                >
                    {{ project.difficulty }}
                </span>
            </div>
        </div>

        <div class="p-6 flex flex-col flex-grow">
            <div class="flex items-start justify-between mb-3">
                <h3
                    class="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors"
                >
                    {{ project.title }}
                </h3>
                <div class="flex items-center gap-1">
                    <component
                        :is="project.statusIcon"
                        class="w-4 h-4"
                        :class="getStatusColor(project.status).split(' ')[0]"
                    />
                </div>
            </div>

            <p class="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                {{ project.description }}
            </p>

            <div class="flex items-center gap-4 text-xs text-gray-500 mb-4">
                <div class="flex items-center gap-1">
                    <Users class="w-3 h-3" />
                    {{ project.contributors }} contributors
                </div>
                <div class="flex items-center gap-1">
                    <Calendar class="w-3 h-3" />
                    {{ formatDate(project.lastUpdated) }}
                </div>
            </div>

            <div class="flex flex-wrap gap-2 mb-4">
                <span
                    v-for="tag in project.tags.slice(0, 3)"
                    :key="tag"
                    class="px-2 py-1 bg-cyan-800/30 text-cyan-300 text-xs rounded-full font-medium"
                >
                    {{ tag }}
                </span>
                <span
                    v-if="project.tags.length > 3"
                    class="px-2 py-1 bg-slate-700/50 text-gray-400 text-xs rounded-full font-medium"
                >
                    +{{ project.tags.length - 3 }} more
                </span>
            </div>

            <div class="mt-auto space-y-3">
                <div class="flex items-center justify-between">
                    <span
                        class="px-3 py-1 text-xs rounded-full font-medium"
                        :class="getStatusColor(project.status)"
                    >
                        {{ project.status }}
                    </span>
                    <div class="flex items-center gap-2">
                        <span
                            v-if="project.acceptingContributors"
                            class="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full font-medium flex items-center gap-1"
                        >
                            <GitBranch class="w-3 h-3" />
                            Open to contributors
                        </span>
                        <span
                            v-else
                            class="px-2 py-1 bg-gray-500/20 text-gray-400 text-xs rounded-full font-medium"
                        >
                            Closed to contributions
                        </span>
                    </div>
                </div>

                <div class="flex items-center gap-3">
                    <a
                        :href="project.githubLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 inline-flex items-center justify-center px-3 py-2 bg-slate-700/50 text-gray-300 text-sm rounded-lg hover:bg-slate-600/50 hover:text-white transition-all duration-200"
                    >
                        <GitHubIcon class="w-4 h-4 mr-2" />
                        Code
                    </a>
                    <a
                        v-if="project.liveLink"
                        :href="project.liveLink"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex-1 inline-flex items-center justify-center px-3 py-2 bg-cyan-600/20 text-cyan-400 text-sm rounded-lg hover:bg-cyan-600/30 hover:text-cyan-300 transition-all duration-200"
                    >
                        <Globe class="w-4 h-4 mr-2" />
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

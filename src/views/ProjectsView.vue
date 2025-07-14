<script setup>
import { ref, computed, onMounted } from "vue";
import { Search } from "lucide-vue-next";

import GridBackground from "@/components/layouts/GridBackground.vue";
import { projects } from "@/data/projectsData.js";
import ProjectCard from "@/components/pages/projects/ProjectCard.vue";
import ProjectsFilterPanel from "@/components/pages/projects/ProjectsFilterPanel.vue";
import SectionHeader from "@/components/shared/SectionHeader.vue";
import { usePageHead, pageMeta } from "@/composables/usePageHead.js";

usePageHead(pageMeta.projects);

const isVisible = ref(false);
const isLoading = ref(true);
const searchQuery = ref("");
const selectedStatus = ref("all");
const selectedTags = ref([]);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
        isLoading.value = false;
    }, 300);
});

const allTags = computed(() => {
    const tags = new Set();
    projects.forEach((project) => {
        project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
});

const filteredProjects = computed(() => {
    let filtered = projects;

    if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
            (project) =>
                project.title.toLowerCase().includes(query) ||
                project.description.toLowerCase().includes(query) ||
                project.tags.some((tag) => tag.toLowerCase().includes(query)),
        );
    }

    if (selectedStatus.value !== "all") {
        filtered = filtered.filter(
            (project) => project.status.toLowerCase().replace(" ", "-") === selectedStatus.value,
        );
    }

    if (selectedTags.value.length > 0) {
        filtered = filtered.filter((project) =>
            selectedTags.value.every((tag) => project.tags.includes(tag)),
        );
    }

    return filtered;
});

const handleSearchQueryUpdate = (query) => {
    searchQuery.value = query;
};

const handleSelectedStatusUpdate = (status) => {
    selectedStatus.value = status;
};

const handleSelectedTagsUpdate = (tags) => {
    selectedTags.value = tags;
};

const handleClearFilters = () => {
    searchQuery.value = "";
    selectedStatus.value = "all";
    selectedTags.value = [];
};
</script>

<template>
    <section
        class="relative min-h-screen w-screen flex flex-col items-center overflow-hidden bg-gradient-to-br from-gray-900 via-cyan-900/70 to-gray-900 text-white py-16"
    >
        <GridBackground :enableGlow="true" />

        <div
            class="relative z-20 max-w-7xl mx-auto mt-6 px-6 md:px-12 lg:px-24 w-full transition-all duration-1000 ease-out"
            :class="{
                'opacity-100 translate-y-0': isVisible,
                'opacity-0 translate-y-12': !isVisible,
            }"
        >
            <SectionHeader
                title="Our Projects"
                description="Discover the innovative solutions built by our talented student developers."
                titleTag="h1"
                :titleTextGradient="true"
                titleGradientClasses="from-emerald-400 via-cyan-400 to-emerald-400"
                lineGradient="from-emerald-400 to-cyan-400"
                align="center"
            />

            <ProjectsFilterPanel
                :all-tags="allTags"
                :total-projects-count="projects.length"
                :filtered-projects-count="filteredProjects.length"
                @update:searchQuery="handleSearchQueryUpdate"
                @update:selectedStatus="handleSelectedStatusUpdate"
                @update:selectedTags="handleSelectedTagsUpdate"
                @clearFilters="handleClearFilters"
            />

            <div v-if="!isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ProjectCard
                    v-for="project in filteredProjects"
                    :key="project.id"
                    :project="project"
                />
            </div>

            <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                    v-for="i in 6"
                    :key="i"
                    class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 animate-pulse"
                >
                    <div class="w-full h-48 bg-slate-700/50 rounded-md mb-4"></div>
                    <div class="h-6 bg-slate-700/50 rounded mb-2"></div>
                    <div class="h-4 bg-slate-700/50 rounded mb-4"></div>
                    <div class="flex gap-2 mb-4">
                        <div class="h-6 w-16 bg-slate-700/50 rounded-full"></div>
                        <div class="h-6 w-20 bg-slate-700/50 rounded-full"></div>
                    </div>
                </div>
            </div>

            <div v-if="!isLoading && filteredProjects.length === 0" class="text-center mt-12">
                <div
                    class="w-24 h-24 mx-auto mb-6 bg-slate-800/50 rounded-full flex items-center justify-center"
                >
                    <Search class="w-12 h-12 text-gray-500" />
                </div>
                <h3 class="text-xl font-semibold text-white mb-2">No projects found</h3>
                <p class="text-gray-400 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                </p>
            </div>
        </div>

        <div
            class="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl"
        ></div>
        <div
            class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
        ></div>
    </section>
</template>

<style scoped>
@keyframes float {
    0%,
    100% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-10px);
    }
}

.group:hover .animate-float {
    animation: float 2s ease-in-out infinite;
}

html {
    scroll-behavior: smooth;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
}
</style>

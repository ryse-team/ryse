<script setup>
import { ref, computed } from "vue";
import { Search, Filter, X } from "lucide-vue-next";

const props = defineProps({
    allTags: {
        type: Array,
        required: true,
    },
    totalProjectsCount: {
        type: Number,
        required: true,
    },
    filteredProjectsCount: {
        type: Number,
        required: true,
    },
});

const emit = defineEmits([
    "update:searchQuery",
    "update:selectedStatus",
    "update:selectedTags",
    "clearFilters",
]);

const searchQueryInternal = ref("");
const selectedStatusInternal = ref("all");
const selectedTagsInternal = ref([]);
const showFilters = ref(false);

const updateSearchQuery = (event) => {
    searchQueryInternal.value = event.target.value;
    emit("update:searchQuery", searchQueryInternal.value);
};

const updateSelectedStatus = (status) => {
    selectedStatusInternal.value = status;
    emit("update:selectedStatus", selectedStatusInternal.value);
};

const toggleTagFilter = (tag) => {
    const index = selectedTagsInternal.value.indexOf(tag);
    if (index > -1) {
        selectedTagsInternal.value.splice(index, 1);
    } else {
        selectedTagsInternal.value.push(tag);
    }
    emit("update:selectedTags", selectedTagsInternal.value);
};

const handleClearFilters = () => {
    searchQueryInternal.value = "";
    selectedStatusInternal.value = "all";
    selectedTagsInternal.value = [];
    emit("clearFilters");
};

const activeFilterCount = computed(() => {
    let count = 0;
    if (selectedStatusInternal.value !== "all") {
        count++;
    }
    count += selectedTagsInternal.value.length;
    return count;
});
</script>

<template>
    <div class="mb-8 space-y-4">
        <div class="relative max-w-2xl mx-auto">
            <Search
                class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
            />
            <input
                :value="searchQueryInternal"
                @input="updateSearchQuery"
                type="text"
                placeholder="Search projects by name, description, or technology..."
                class="w-full pl-12 pr-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all duration-300"
            />
        </div>

        <div class="flex flex-wrap items-center justify-center gap-4">
            <button
                @click="showFilters = !showFilters"
                class="inline-flex items-center px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-gray-300 hover:text-white hover:border-cyan-500/50 transition-all duration-300"
            >
                <Filter class="w-4 h-4 mr-2" />
                Filters
                <span
                    v-if="activeFilterCount > 0"
                    class="ml-2 px-2 py-1 bg-cyan-500 text-white text-xs rounded-full"
                >
                    {{ activeFilterCount }}
                </span>
            </button>

            <div class="text-gray-400 text-sm">
                {{ filteredProjectsCount }} of {{ totalProjectsCount }} projects
            </div>

            <button
                v-if="activeFilterCount > 0"
                @click="handleClearFilters"
                class="inline-flex items-center px-3 py-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
                <X class="w-4 h-4 mr-1" />
                Clear filters
            </button>
        </div>

        <Transition name="slide-down-fx">
            <div
                v-show="showFilters"
                class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6"
            >
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="text-white font-medium mb-3">Project Status</h3>
                        <div class="space-y-2">
                            <label class="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    value="all"
                                    :checked="selectedStatusInternal === 'all'"
                                    @change="updateSelectedStatus('all')"
                                    class="sr-only"
                                />
                                <div
                                    class="w-4 h-4 rounded-full border-2 border-gray-400 mr-3 flex items-center justify-center"
                                >
                                    <div
                                        v-if="selectedStatusInternal === 'all'"
                                        class="w-2 h-2 bg-cyan-400 rounded-full"
                                    ></div>
                                </div>
                                <span class="text-gray-300">All Projects</span>
                            </label>
                            <label class="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    value="completed"
                                    :checked="selectedStatusInternal === 'completed'"
                                    @change="updateSelectedStatus('completed')"
                                    class="sr-only"
                                />
                                <div
                                    class="w-4 h-4 rounded-full border-2 border-gray-400 mr-3 flex items-center justify-center"
                                >
                                    <div
                                        v-if="selectedStatusInternal === 'completed'"
                                        class="w-2 h-2 bg-emerald-400 rounded-full"
                                    ></div>
                                </div>
                                <span class="text-gray-300">Completed</span>
                            </label>
                            <label class="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    value="in-progress"
                                    :checked="selectedStatusInternal === 'in-progress'"
                                    @change="updateSelectedStatus('in-progress')"
                                    class="sr-only"
                                />
                                <div
                                    class="w-4 h-4 rounded-full border-2 border-gray-400 mr-3 flex items-center justify-center"
                                >
                                    <div
                                        v-if="selectedStatusInternal === 'in-progress'"
                                        class="w-2 h-2 bg-amber-400 rounded-full"
                                    ></div>
                                </div>
                                <span class="text-gray-300">In Progress</span>
                            </label>
                            <label class="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    value="concept"
                                    :checked="selectedStatusInternal === 'concept'"
                                    @change="updateSelectedStatus('concept')"
                                    class="sr-only"
                                />
                                <div
                                    class="w-4 h-4 rounded-full border-2 border-gray-400 mr-3 flex items-center justify-center"
                                >
                                    <div
                                        v-if="selectedStatusInternal === 'concept'"
                                        class="w-2 h-2 bg-blue-400 rounded-full"
                                    ></div>
                                </div>
                                <span class="text-gray-300">Concept</span>
                            </label>
                        </div>
                    </div>

                    <div>
                        <h3 class="text-white font-medium mb-3">Technologies</h3>
                        <div class="flex flex-wrap gap-2 max-h-32 overflow-y-auto">
                            <button
                                v-for="tag in allTags"
                                :key="tag"
                                @click="toggleTagFilter(tag)"
                                class="px-3 py-1 text-xs rounded-full border transition-all duration-200"
                                :class="
                                    selectedTagsInternal.includes(tag)
                                        ? 'bg-cyan-500 text-white border-cyan-500'
                                        : 'bg-slate-700/50 text-gray-300 border-slate-600 hover:border-cyan-500/50'
                                "
                            >
                                {{ tag }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
.slide-down-fx-enter-active,
.slide-down-fx-leave-active {
    transition: all 0.3s ease;
    transform-origin: top;
}

.slide-down-fx-enter-from,
.slide-down-fx-leave-to {
    opacity: 0;
    transform: scaleY(0);
}

.slide-down-fx-enter-to,
.slide-down-fx-leave-from {
    opacity: 1;
    transform: scaleY(1);
}
</style>

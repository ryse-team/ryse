<script setup>
import { ref, onMounted } from "vue";
import { useHead } from "@vueuse/head";
import { ArrowRight } from "lucide-vue-next";

import { aboutPageData } from "@/data/about.js";

import GridBackground from "@/components/layouts/GridBackground.vue";

import SectionHeader from "@/components/shared/SectionHeader.vue";
import SocialLinkButton from "@/components/shared/SocialLinkButton.vue";

import MissionVisionCard from "@/components/pages/about/MissionVisionCard.vue";
import FeatureCard from "@/components/pages/about/FeatureCard.vue";
import ValueItem from "@/components/pages/about/ValueItem.vue";

const isVisible = ref(false);

onMounted(() => {
    setTimeout(() => {
        isVisible.value = true;
    }, 300);
});

useHead({
    title: "About | ryse - College Tech Team CIT",
    meta: [
        {
            name: "description",
            content:
                "Learn more about ryse – CIT's premier student-led tech team focused on software innovation, collaboration, and community impact.",
        },
    ],
});
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-900/70 to-gray-900 relative">
        <GridBackground :enableGlow="true" />

        <section class="relative overflow-hidden">
            <div
                :class="['absolute inset-0 bg-gradient-to-r', aboutPageData.hero.heroBgGradient]"
            ></div>
            <div class="relative max-w-7xl mx-auto mt-6 px-6 md:px-12 lg:px-24 py-20 z-10">
                <div class="text-center mb-16">
                    <h1
                        :class="[
                            'text-5xl md:text-7xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6',
                            aboutPageData.hero.heroTitleGradient,
                        ]"
                    >
                        {{ aboutPageData.hero.title }}
                    </h1>
                    <div
                        class="max-w-4xl mx-auto space-y-6 text-lg text-gray-300 leading-relaxed font-mono tracking-wide"
                    >
                        <p
                            v-for="(paragraph, index) in aboutPageData.hero.paragraphs"
                            :key="index"
                            v-html="paragraph.textHtml"
                        ></p>
                    </div>
                </div>
            </div>
        </section>

        <div
            class="relative z-20 transition-all duration-1000 ease-out"
            :class="{
                'opacity-100 translate-y-0': isVisible,
                'opacity-0 translate-y-12': !isVisible,
            }"
        >
            <section class="relative">
                <div class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 z-10">
                    <div class="grid md:grid-cols-2 gap-8">
                        <MissionVisionCard
                            v-for="(card, index) in aboutPageData.missionVision"
                            :key="index"
                            :icon="card.icon"
                            :title="card.title"
                            :description="card.description"
                            :gradient-color-from="card.gradientFrom"
                            :gradient-color-to="card.gradientTo"
                            :hover-border-color="card.hoverBorder"
                            :icon-color="card.iconColor"
                        />
                    </div>
                </div>
            </section>

            <section class="relative">
                <div class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 z-10">
                    <SectionHeader
                        :title="aboutPageData.whatWeDo.header.title"
                        :line-gradient="aboutPageData.whatWeDo.header.lineGradient"
                    />
                    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FeatureCard
                            v-for="(card, index) in aboutPageData.whatWeDo.cards"
                            :key="index"
                            :icon="card.icon"
                            :icon-bg-gradient="card.iconBgGradient"
                            :icon-color="card.iconColor"
                            :title="card.title"
                            :description="card.description"
                            :hover-border-color="card.hoverBorderColor"
                        />
                    </div>
                </div>
            </section>

            <section class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
                <div
                    class="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 relative overflow-hidden z-10"
                >
                    <div class="relative z-10">
                        <SectionHeader
                            :title="aboutPageData.valuesCulture.header.title"
                            :description="aboutPageData.valuesCulture.header.description"
                        />
                        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            <ValueItem
                                v-for="(item, index) in aboutPageData.valuesCulture.items"
                                :key="index"
                                :icon="item.icon"
                                :icon-bg-color="item.iconBgColor"
                                :icon-color="item.iconColor"
                                :title="item.title"
                                :description="item.description"
                            />
                        </div>
                        <div class="text-center">
                            <p
                                class="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto font-mono tracking-wide"
                            >
                                {{ aboutPageData.valuesCulture.closingText }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative">
                <div class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16 z-10">
                    <div class="relative">
                        <div
                            class="absolute inset-0 bg-gradient-to-r from-cyan-500/15 to-emerald-500/5 rounded-3xl blur-xl"
                        ></div>
                        <div
                            class="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 text-center"
                        >
                            <h2 class="text-4xl font-bold text-white mb-6">
                                {{ aboutPageData.callToAction.title }}
                            </h2>
                            <p
                                class="text-xl text-gray-300 mb-8 max-w-3xl mx-auto font-mono tracking-wide"
                            >
                                {{ aboutPageData.callToAction.description }}
                            </p>
                            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                                <a
                                    :href="aboutPageData.callToAction.primaryButton.link"
                                    class="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                                >
                                    {{ aboutPageData.callToAction.primaryButton.text }}
                                    <ArrowRight class="w-4 h-4" />
                                </a>
                                <a
                                    :href="aboutPageData.callToAction.secondaryButton.link"
                                    class="inline-flex items-center gap-2 border border-slate-600 text-white px-8 py-3 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-300 transition-all duration-300"
                                >
                                    {{ aboutPageData.callToAction.secondaryButton.text }}
                                </a>
                            </div>
                            <p class="text-gray-400 mb-6 font-mono">
                                {{ aboutPageData.callToAction.infoText }}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
                <div class="text-center">
                    <h3 class="text-3xl font-bold text-white mb-8">
                        {{ aboutPageData.socialMedia.header }}
                    </h3>
                    <div class="flex justify-center gap-6">
                        <SocialLinkButton
                            v-for="(link, index) in aboutPageData.socialMedia.links"
                            :key="index"
                            :href="link.href"
                            :icon="link.icon"
                            :hover-border-color="link.hoverBorder"
                            :hover-icon-color="link.hoverIcon"
                        />
                    </div>
                </div>
            </section>
        </div>

        <div
            class="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-2xl"
        ></div>
        <div
            class="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl"
        ></div>
    </div>
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

.font-mono {
    font-feature-settings: "liga" 0;
    letter-spacing: 0.025em;
}
</style>

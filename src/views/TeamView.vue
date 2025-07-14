<script setup>
import Card from "@/components/pages/team/TeamMemberCard.vue";
import { founders, leadDevelopers, developers, alumni } from "@/data/teamData.js";

import { usePageHead, pageMeta } from "@/composables/usePageHead.js"; //

usePageHead(pageMeta.team); //
</script>

<template>
    <section
        class="min-h-screen flex flex-col justify-center bg-gradient-to-br from-gray-900 via-cyan-900/60 to-gray-900 text-white relative py-[4rem] px-4"
    >
        <img
            src="@/assets/topography.svg"
            class="h-full w-full object-cover invert-[50%] opacity-50 pointer-events-none absolute top-0 left-0"
            alt="Abstract topography pattern background"
            aria-hidden="true"
        />

        <div class="relative z-10 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-6 mt-5">Meet The Team</h1>

            <template v-if="founders.length">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 mt-12">Founders</h2>
                <div class="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-16 px-4">
                    <Card
                        v-for="member in founders"
                        :key="member.name"
                        :name="member.name"
                        :role="member.role"
                        :division="member.division"
                        :info="member.info"
                        :linkedin="member.linkedin"
                        :github="member.github"
                        :img_src="member.img_src"
                    />
                </div>
            </template>

            <template v-if="leadDevelopers.length">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 mt-12">
                    Lead Developers
                </h2>
                <div class="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-16 px-4">
                    <Card
                        v-for="member in leadDevelopers"
                        :key="member.name"
                        :name="member.name"
                        :role="member.role"
                        :division="member.division"
                        :info="member.info"
                        :linkedin="member.linkedin"
                        :github="member.github"
                        :img_src="member.img_src"
                    />
                </div>
            </template>

            <template v-if="developers.length">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 mt-12">Developers</h2>
                <div class="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-16 px-4">
                    <Card
                        v-for="member in developers"
                        :key="member.name"
                        :name="member.name"
                        :role="member.role"
                        :division="member.division"
                        :info="member.info"
                        :linkedin="member.linkedin"
                        :github="member.github"
                        :img_src="member.img_src"
                    />
                </div>
            </template>

            <template v-if="alumni.length">
                <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 mt-12">Alumni</h2>
                <div class="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-16 px-4">
                    <Card
                        v-for="member in alumni"
                        :key="member.name"
                        :name="member.name"
                        :role="member.role"
                        :division="member.division"
                        :info="member.info"
                        :linkedin="member.linkedin"
                        :github="member.github"
                        :img_src="member.img_src"
                    />
                </div>
            </template>

            <p
                v-if="
                    !founders.length &&
                    !leadDevelopers.length &&
                    !developers.length &&
                    !alumni.length
                "
                class="text-gray-400 text-lg mt-10"
            >
                No team members to display yet.
            </p>
        </div>
    </section>
</template>

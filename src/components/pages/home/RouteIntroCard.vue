<script setup>
import { defineProps } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    introText: {
        type: String,
        required: true,
    },
});
</script>

<template>
    <div
        class="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 p-8 shadow-2xl border border-slate-700/50 backdrop-blur-xl transition-all duration-500 hover:shadow-emerald-500/20 hover:shadow-2xl hover:border-emerald-500/40 hover:-translate-y-2"
    >
        <div
            class="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        ></div>

        <div class="absolute inset-0 opacity-5">
            <div
                class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)] group-hover:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_60%)] transition-all duration-700"
            ></div>
        </div>

        <div class="relative flex flex-col md:flex-row items-center gap-8">
            <div class="flex-shrink-0 relative">
                <div
                    class="w-28 h-28 md:w-36 md:h-36 rounded-2xl bg-gradient-to-br from-emerald-500/20 via-emerald-400/10 to-cyan-500/20 p-1 shadow-lg group-hover:shadow-emerald-500/30 transition-all duration-500"
                >
                    <div
                        class="w-full h-full rounded-xl bg-slate-800/80 backdrop-blur-sm flex items-center justify-center overflow-hidden border border-emerald-500/20 group-hover:border-emerald-400/50 transition-all duration-500"
                    >
                        <img
                            :src="imageUrl"
                            :alt="`${title} icon`"
                            class="max-w-[75%] max-h-[75%] object-contain filter drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500"
                            loading="lazy"
                        />
                    </div>
                </div>

                <div
                    class="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 blur-xl opacity-0 group-hover:opacity-70 transition-all duration-700 -z-10"
                ></div>
            </div>

            <div class="flex-grow text-center md:text-left space-y-4">
                <h3
                    class="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent leading-tight group-hover:from-emerald-300 group-hover:via-emerald-200 group-hover:to-cyan-300 transition-all duration-500"
                >
                    {{ title }}
                </h3>

                <div
                    class="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto md:mx-0 group-hover:w-24 group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all duration-500"
                ></div>

                <p
                    class="text-[1.3rem] text-slate-300 leading-relaxed font-medium group-hover:text-slate-200 transition-colors duration-300 max-w-2xl"
                >
                    {{ introText }}
                </p>
            </div>
        </div>

        <div
            class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 via-transparent to-transparent rounded-bl-full opacity-50 group-hover:opacity-75 transition-opacity duration-500"
        ></div>

        <div
            class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent group-hover:via-emerald-400/70 transition-all duration-500"
        ></div>
    </div>
</template>

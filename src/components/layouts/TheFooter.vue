<script setup>
import ArrowUpIcon from "@/assets/icons/ArrowUpIcon.vue";
import LinkedInIcon from "@/assets/icons/LinkedInIcon.vue";
import GitHubIcon from "@/assets/icons/GitHubIcon.vue";
</script>

<template>
    <footer
        class="w-full bg-black text-sm lg:text-base px-4 sm:px-8 lg:px-32 py-12 flex flex-col gap-8"
    >
        <div class="w-full flex flex-col md:flex-row md:justify-between md:items-start gap-8">
            <nav aria-label="Footer navigation">
                <ul class="space-y-2">
                    <li>
                        <RouterLink to="/" class="hover:underline text-gray-400 hover:text-white">
                            Home
                        </RouterLink>
                    </li>
                    <li>
                        <RouterLink
                            to="/team"
                            class="hover:underline text-gray-400 hover:text-white"
                        >
                            Team
                        </RouterLink>
                    </li>
                </ul>
            </nav>

            <div class="flex flex-col space-y-4">
                <div class="flex gap-2 items-center group justify-start md:justify-end">
                    <ArrowUpIcon
                        class="fill-white w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                    />
                    <a
                        href="https://github.com/ryse-team"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our GitHub profile"
                        class="flex items-center gap-2 text-gray-400 hover:underline hover:text-white"
                    >
                        <GitHubIcon
                            class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                        />
                        <span>GitHub</span>
                    </a>
                </div>

                <div class="flex gap-2 items-center group justify-start md:justify-end">
                    <ArrowUp
                        class="fill-white w-4 h-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden="true"
                    />
                    <a
                        href="https://www.linkedin.com/company/ryse-cit/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit our LinkedIn profile"
                        class="flex items-center gap-2 text-gray-400 hover:underline hover:text-white"
                    >
                        <LinkedInIcon
                            class="w-5 h-5 text-gray-400 group-hover:text-white transition-colors"
                        />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        </div>

        <div class="w-full text-center pt-4 border-t border-gray-800">
            <p class="text-gray-400">ryse platforms &copy; {{ new Date().getFullYear() }}</p>
        </div>
    </footer>
</template>

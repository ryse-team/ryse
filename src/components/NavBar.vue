<template>
    <nav
        class="fixed z-999 self-center bg-black/40 backdrop-blur-md rounded-full w-[90%] shadow-xl flex justify-between items-center py-[.5rem] lg:py-[1rem] px-[1rem] lg:px-[4rem] top-2 border border-zinc-700/30"
    >
        <RouterLink to="/">
            <p class="text-xl lg:text-3xl">ryse_</p>
        </RouterLink>
        <ul class="flex gap-6 text-sm lg:text-lg">
            <RouterLink to="/">
                <li>home</li>
            </RouterLink>
            <RouterLink to="team">
                <li>team</li>
            </RouterLink>
        </ul>
    </nav>
</template>

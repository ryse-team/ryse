<template>
    <footer class="flex flex-col px-[1rem] lg:px-[6rem] py-[4rem] w-full bg-black text-sm lg:text-base">
        <p class="self-end mb-4">ryse platforms &copy; {{ new Date().getFullYear() }}</p>
        <div class="flex justify-between w-full">
            <ul class="space-y-2">
                <RouterLink to="/">
                    <li>home</li>
                </RouterLink>
                <RouterLink to="team">
                    <li>team</li>
                </RouterLink>
            </ul>
            <ul class="space-y-2">
                <li><a href="https://github.com/ryse-team">Github</a></li>
                <li><a href="#">Linkedin</a></li>
            </ul>
        </div>
    </footer>
</template>

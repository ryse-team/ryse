export const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/HomeView.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("@/views/AboutView.vue"),
    },
    {
        path: "/team",
        name: "Team",
        component: () => import("@/views/TeamView.vue"),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("@/views/ProjectsView.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("@/views/NotFoundView.vue"),
    },
];

export const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition;
    }
    return {
        top: 0,
        left: 0,
        behavior: "smooth",
    };
};

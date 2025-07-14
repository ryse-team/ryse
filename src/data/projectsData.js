import { CheckCircle } from "lucide-vue-next";
// import { Clock, Lightbulb } from "lucide-vue-next";

export const projects = [
    {
        id: "project-1",
        title: "ryse Official Website",
        description:
            "The official online home of ryse, built with Vite + Vue.js and Tailwind CSS, showcasing our team, projects, and mission. Features responsive design and optimized performance.",
        image: "/images/ryse.jpg",
        githubLink: "https://github.com/rysetech/ryse-website",
        liveLink: "https://ryse.pages.dev",
        tags: ["Web Development", "Vue.js", "Tailwind CSS", "Frontend"],
        status: "Completed",
        acceptingContributors: false,
        contributors: 8,
        lastUpdated: "2024-01-15",
        difficulty: "Easy",
        type: "Open Source",
        statusIcon: CheckCircle,
    },
];

export const getStatusColor = (status) => {
    const colors = {
        Completed: "text-emerald-400 bg-emerald-400/10",
        "In Progress": "text-amber-400 bg-amber-400/10",
        Concept: "text-blue-400 bg-blue-400/10",
    };
    return colors[status] || "text-gray-400 bg-gray-400/10";
};

export const getDifficultyColor = (difficulty) => {
    const colors = {
        Easy: "text-green-400 bg-green-400/10",
        Intermediate: "text-yellow-400 bg-yellow-400/10",
        Advanced: "text-red-400 bg-red-400/10",
    };
    return colors[difficulty] || "text-gray-400 bg-gray-400/10";
};

export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

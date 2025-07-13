import { CheckCircle, Clock, Lightbulb } from "lucide-vue-next";

export const projectsPageMeta = {
    title: "Projects | ryse - College Tech Team CIT",
    description:
        "Explore the innovative software projects developed by ryse, CIT's student tech team. Featuring web development, AI, and more.",
    keywords:
        "ryse projects, CIT software projects, student tech projects, web development projects, AI projects, open source projects, ryse portfolio",
    ogTitle: "Projects by ryse - College Tech Team CIT",
    ogDescription:
        "Explore the innovative software projects developed by ryse, CIT's student tech team. Featuring web development, AI, and more.",
    ogImage: "https://ryse.pages.dev/images/ryse.jpg",
    ogUrl: "https://ryse.pages.dev/projects",
    ogType: "website",
    twitterCard: "summary_large_image",
    twitterTitle: "Projects by ryse - College Tech Team CIT",
    twitterDescription:
        "Explore the innovative software projects developed by ryse, CIT's student tech team. Featuring web development, AI, and more.",
    twitterImage: "https://ryse.pages.dev/images/ryse.jpg",
    canonicalUrl: "https://ryse.pages.dev/projects",
};

export const projects = [
    {
        id: "project-1",
        title: "ryse Official Website",
        description:
            "The official online home of ryse, built with Vue.js and Tailwind CSS, showcasing our team, projects, and mission. Features responsive design, dark mode, and optimized performance.",
        image: "/placeholder.svg?height=200&width=400",
        githubLink: "https://github.com/rysetech/ryse-website",
        liveLink: "https://ryse.pages.dev",
        tags: ["Web Development", "Vue.js", "Tailwind CSS", "Frontend"],
        status: "Completed",
        acceptingContributors: true,
        contributors: 8,
        lastUpdated: "2024-01-15",
        difficulty: "Intermediate",
        type: "Open Source",
        statusIcon: CheckCircle,
    },
    {
        id: "project-2",
        title: "CIT Connect Mobile App",
        description:
            "A comprehensive mobile application designed to streamline communication and resource sharing among CIT students and faculty, featuring real-time notifications, academic resources, and campus news.",
        image: "/placeholder.svg?height=200&width=400",
        githubLink: "https://github.com/rysetech/cit-connect-app",
        liveLink: null,
        tags: ["Mobile Development", "React Native", "Firebase", "Backend"],
        status: "In Progress",
        acceptingContributors: true,
        contributors: 5,
        lastUpdated: "2024-01-10",
        difficulty: "Advanced",
        type: "Internal",
        statusIcon: Clock,
    },
    {
        id: "project-3",
        title: "AI-Powered Academic Assistant",
        description:
            "An intelligent assistant that helps students with coursework, research, and personalized learning paths using natural language processing and machine learning algorithms.",
        image: "/placeholder.svg?height=200&width=400",
        githubLink: "https://github.com/rysetech/ai-academic-assistant",
        liveLink: null,
        tags: ["Artificial Intelligence", "Machine Learning", "Python", "NLP"],
        status: "Concept",
        acceptingContributors: true,
        contributors: 3,
        lastUpdated: "2024-01-05",
        difficulty: "Advanced",
        type: "Research",
        statusIcon: Lightbulb,
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
        Beginner: "text-green-400 bg-green-400/10",
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

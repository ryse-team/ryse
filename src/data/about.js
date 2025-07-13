import {
    Users,
    Target,
    Lightbulb,
    Code,
    Trophy,
    Heart,
    Github,
    Linkedin,
    Instagram,
    Sparkles,
    Rocket,
    Globe,
} from "lucide-vue-next";

export const aboutPageData = {
    hero: {
        title: "Who We Are",
        paragraphs: [
            {
                textHtml: `We are <span class="text-cyan-300 font-semibold">ryse</span>, Coimbatore Institute of Technology's premier student-led tech team, dedicated to reimagining software experience through innovation and collaboration. Born from a shared passion for technology, ryse is a collective of students across Computer Science, IT, and ECE disciplines at CIT, pushing the boundaries of what's possible.`,
            },
            {
                textHtml: `Founded in <span class="text-cyan-300 font-semibold">2020</span> by a group of ambitious students, ryse emerged from a desire to create a practical, hands-on learning environment beyond traditional academics. Our journey began with <span class="text-cyan-300 font-semibold">a hackathon</span>.`,
            },
        ],
        sparkleIcon: Sparkles,
        sparkleIconColor: "text-cyan-300",
        sparkleTextColor: "text-cyan-300",
        heroTitleGradient: "from-white via-cyan-100 to-emerald-100",
        heroBgGradient: "from-cyan-900/10 to-emerald-900/10",
    },
    missionVision: [
        {
            icon: Target,
            title: "Our Mission",
            description:
                "Our mission is to cultivate a dynamic tech ecosystem within CIT, empowering students to transform theoretical knowledge into real-world applications, foster a culture of continuous learning, and build impactful solutions.",
            gradientFrom: "from-cyan-500/20",
            gradientTo: "to-blue-500/20",
            hoverBorder: "hover:border-cyan-500/30",
            iconColor: "text-cyan-300",
        },
        {
            icon: Rocket,
            title: "Our Vision",
            description:
                "We envision a future where CIT students are at the forefront of technological innovation, equipped with the skills and collaborative spirit to tackle tomorrow's challenges.",
            gradientFrom: "from-emerald-500/20",
            gradientTo: "to-green-500/20",
            hoverBorder: "hover:border-emerald-500/30",
            iconColor: "text-emerald-300",
        },
    ],
    whatWeDo: {
        header: {
            title: "What We Do",
            lineGradient: "from-cyan-300 to-emerald-300",
        },
        cards: [
            {
                icon: Code,
                iconBgGradient: "from-cyan-500/20 to-blue-500/20",
                iconColor: "text-cyan-300",
                title: "Skill Development",
                description:
                    "Interactive workshops and intensive bootcamps on Web/Mobile Development, UI/UX Design, Cloud, DevOps, and more.",
                hoverBorderColor: "border-cyan-500/30",
            },
            {
                icon: Lightbulb,
                iconBgGradient: "from-amber-500/20 to-yellow-500/20",
                iconColor: "text-amber-400",
                title: "Innovation",
                description:
                    "Building real-world solutions, tackling campus challenges and contributing to open source projects.",
                hoverBorderColor: "border-amber-500/30",
            },
            {
                icon: Trophy,
                iconBgGradient: "from-yellow-500/20 to-amber-500/20",
                iconColor: "text-yellow-400",
                title: "Competitions",
                description:
                    "Organizing and participating in internal and external hackathons, fostering collaborative yet competitive spirit.",
                hoverBorderColor: "border-yellow-500/30",
            },
            {
                icon: Users,
                iconBgGradient: "from-emerald-500/20 to-green-500/20",
                iconColor: "text-emerald-300",
                title: "Community",
                description:
                    "Partnering with other clubs, departments, and faculty to bring interdisciplinary ideas to life.",
                hoverBorderColor: "border-emerald-500/30",
            },
        ],
    },
    valuesCulture: {
        header: {
            title: "Our Values & Culture",
            description:
                "At ryse, we're driven by core values that define our work and relationships",
        },
        items: [
            {
                icon: Lightbulb,
                iconBgColor: "bg-amber-500/20",
                iconColor: "text-amber-400",
                title: "Innovation",
                description: "Embracing creativity and new ideas",
            },
            {
                icon: Users,
                iconBgColor: "bg-emerald-500/20",
                iconColor: "text-emerald-300",
                title: "Collaboration",
                description: "We thrive on teamwork and shared growth",
            },
            {
                icon: Globe,
                iconBgColor: "bg-blue-500/20",
                iconColor: "text-blue-400",
                title: "Continuous Learning",
                description: "Staying updated with evolving technologies",
            },
            {
                icon: Trophy,
                iconBgColor: "bg-purple-500/20",
                iconColor: "text-purple-400",
                title: "Excellence",
                description: "Pursuing quality in everything we build",
            },
            {
                icon: Heart,
                iconBgColor: "bg-rose-500/20",
                iconColor: "text-rose-400",
                title: "Passion",
                description: "Genuine enthusiasm for solving problems with code",
            },
            {
                icon: Users,
                iconBgColor: "bg-teal-500/20",
                iconColor: "text-teal-400",
                title: "Inclusivity",
                description: "Welcoming students of all skill levels and backgrounds",
            },
        ],
        closingText:
            "Our culture is one of mutual support and experimentation — think late-night coding sessions with chai, brainstorming marathons, and friendships that go beyond screens.",
    },
    callToAction: {
        title: "Ready to Join the Revolution?",
        description:
            "Are you a CIT student with a passion for tech? Join the ryse family! Whether you're a beginner or a seasoned coder, there's a place for you here.",
        primaryButton: {
            text: "Get Involved",
            link: "/contact",
        },
        secondaryButton: {
            text: "Contact Us",
            link: "/contact",
        },
        infoText:
            "Interested in collaborating, mentoring, or sponsoring us? We'd love to hear from you.",
    },
    socialMedia: {
        header: "Follow Our Journey",
        links: [
            {
                href: "https://github.com/rysetech",
                icon: Github,
                hoverBorder: "hover:border-cyan-500/50",
                hoverIcon: "group-hover:text-cyan-300",
            },
            {
                href: "https://linkedin.com/company/ryse-tech",
                icon: Linkedin,
                hoverBorder: "hover:border-blue-500/50",
                hoverIcon: "group-hover:text-blue-400",
            },
            {
                href: "https://instagram.com/rysetech",
                icon: Instagram,
                hoverBorder: "hover:border-pink-500/50",
                hoverIcon: "group-hover:text-pink-400",
            },
        ],
    },
};

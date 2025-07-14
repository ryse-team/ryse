import { useHead } from "@vueuse/head";

export function usePageHead(options) {
    const {
        title,
        description,
        keywords,
        ogImage,
        ogType = "website",
        twitterCard = "summary_large_image",
        twitterSite, // = "@YourTwitterHandle",
        twitterImage,
        canonicalUrl,
    } = options;

    useHead({
        title: title,
        meta: [
            { name: "description", content: description },
            ...(keywords ? [{ name: "keywords", content: keywords }] : []),

            { property: "og:title", content: title },
            { property: "og:description", content: description },
            ...(ogImage ? [{ property: "og:image", content: ogImage }] : []),
            { property: "og:url", content: canonicalUrl },
            { property: "og:type", content: ogType },

            { name: "twitter:card", content: twitterCard },
            ...(twitterSite ? [{ name: "twitter:site", content: twitterSite }] : []),
            { name: "twitter:title", content: title },
            { name: "twitter:description", content: description },
            ...(twitterImage ? [{ name: "twitter:image", content: twitterImage }] : []),
        ],
        link: [{ rel: "canonical", href: canonicalUrl }],
    });
}

const metaKeywords =
    "ryse, ryse team, ryse team cit, reimagine your software experience, ryse portfolio, ryse cit, college tech team, coimbatore institute of technology, cit, cit tech team, software development, web development, innovative solutions, student projects, student tech projects, industrial standards, student community, collaboration";

export const pageMeta = {
    home: {
        title: "ryse - reimagine your software experience | College Tech Team CIT",
        description:
            "ryse is a college student tech team for Coimbatore Institute of Technology (CIT) focused on creating innovative software solutions with industrial standards while providing practical, hands-on experience to students. Learn about us, our team and the projects we've done.",
        keywords: metaKeywords,
        ogImage: "https://ryse.pages.dev/images/ryse.jpg",
        canonicalUrl: "https://ryse.pages.dev/",
    },
    about: {
        title: "About | ryse - Learn more about us | College Tech Team CIT",
        description:
            "Learn more about ryse – CIT's premier student-led tech team focused on software innovation, collaboration, and community impact. Discover who we are, what we do, our mission, vision, and values.",
        keywords: metaKeywords + ", about ryse, ryse mission, ryse vision, ryse values",
        ogImage: "https://ryse.pages.dev/images/ryse.jpg",
        canonicalUrl: "https://ryse.pages.dev/about",
    },
    projects: {
        title: "Projects | ryse - Check out our projects | College Tech Team CIT",
        description:
            "Explore the innovative software projects developed and maintained by the student developers of ryse, CIT's student tech team.",
        keywords:
            metaKeywords +
            ", ryse projects, software projects, CIT software projects, web development projects, open source projects, open source contributions",
        ogImage: "https://ryse.pages.dev/images/ryse.jpg",
        canonicalUrl: "https://ryse.pages.dev/projects",
    },
    team: {
        title: "Team | ryse - Meet Our Leaders, Developers and Alumni | CIT Tech Team",
        description:
            "Meet the talented college students and founders behind ryse tech team from Coimbatore Institute of Technology (CIT). Learn about our Founders, Lead Developers, their roles, and contributions to our innovative software projects.",
        keywords:
            metaKeywords +
            ", ryse team members, ryse founders, ryse lead developers, ryse developers, ryse alumni, ryse students, ryse member roles",
        ogImage: "https://ryse.pages.dev/images/ryse.jpg",
        canonicalUrl: "https://ryse.pages.dev/team",
    },
};

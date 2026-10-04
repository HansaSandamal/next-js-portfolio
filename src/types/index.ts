export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    aistudioLink?: string;
    demoLink: string;
    image: string;
}

export interface Blogs {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}
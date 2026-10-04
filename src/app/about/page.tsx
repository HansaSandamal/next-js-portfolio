'use client'
import { cardHover, cardHoverSmall, fadeIn, fadeInDown, fadeInUp, staggerContainer, slideInLeft, slideInRight } from "@/utils/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaBrain, FaTools, FaGithub, FaGitlab, FaAws, FaDatabase, FaServer } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiGooglegemini, SiExpress, SiMongodb, SiPostgresql, SiRedux, SiFramer, SiFirebase, SiSupabase, SiEmberdotjs, SiJenkins, SiPostman, SiVite, SiGraphql, SiJavascript, SiMysql, SiNestjs, SiOracle, SiSpringboot } from "react-icons/si";

const skillCategories = [
    {
        label: 'Frontend',
        icon: <FaCode className="w-6 h-6 text-primary" />,
        skills: [
            { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
            { name: 'Next.js', icon: <SiNextdotjs /> },
            { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: 'JavaScript', icon: <SiJavascript className="text-[#F7DF1E]" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38BDF8]" /> },
            { name: 'Redux Toolkit', icon: <SiRedux className="text-[#764ABC]" /> },
            { name: 'Ember.js', icon: <SiEmberdotjs className="text-[#E04E39]" /> },
            { name: 'Framer Motion', icon: <SiFramer /> },
        ],
    },
    {
        label: 'Backend & APIs',
        icon: <FaLaptopCode className="w-6 h-6 text-primary" />,
        skills: [
            { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'NestJS', icon: <SiNestjs className="text-[#E0234E]" /> },
            { name: 'Spring Boot', icon: <SiSpringboot className="text-[#6DB33F]" /> },
            { name: 'REST APIs', icon: <FaServer className="text-primary" /> },
            { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" /> },
        ],
    },
    {
        label: 'Databases & Cloud',
        icon: <FaDatabase className="w-6 h-6 text-primary" />,
        skills: [
            { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
            { name: 'MySQL', icon: <SiMysql className="text-[#4479A1]" /> },
            { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
            { name: 'Oracle', icon: <SiOracle className="text-[#F80000]" /> },
            { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
            { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
            { name: 'AWS', icon: <FaAws className="text-[#FF9900]" /> },
        ],
    },
    {
        label: 'AI & Generative AI',
        icon: <FaBrain className="w-6 h-6 text-primary" />,
        skills: [
            {
                name: 'Google AI Studio',
                icon: <SiGooglegemini className="text-[#34A853]" />,
            },
            {
                name: 'Generative AI',
                icon: <SiGooglegemini className="text-[#4285F4]" />,
            },
            {
                name: 'Multimodal AI',
                icon: <SiGooglegemini className="text-[#EA4335]" />,
            },
            {
                name: 'OCR & Vision AI',
                icon: <SiGooglegemini className="text-[#34A853]" />,
            },
            {
                name: 'AI Image Generation',
                icon: <SiGooglegemini className="text-[#FBBC04]" />,
            },
            {
                name: 'Prompt Engineering',
                icon: <SiGooglegemini className="text-[#4285F4]" />,
            },
            {
                name: 'AI API Integration',
                icon: <SiGooglegemini className="text-[#EA4335]" />,
            },
        ],
    },
    {
        label: 'Tools & DevOps',
        icon: <FaTools className="w-6 h-6 text-primary" />,
        skills: [
            { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
            { name: 'GitHub', icon: <FaGithub /> },
            { name: 'Jenkins', icon: <SiJenkins className="text-[#D24939]" /> },
            { name: 'Docker', icon: <FaDocker className="text-[#2496ED]" /> },
            { name: 'CI/CD', icon: <FaGitlab className="text-[#FC6D26]" /> },
            { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
            { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
        ],
    },
]

const aiProjects = [
    {
        name: 'Sinhala OCR',
        desc: 'Handwritten Sinhala text → Unicode using Gemini 2.5 Flash multimodal vision.',
    },
    {
        name: 'LaughFrame AI',
        desc: 'Photo-to-caricature generator using Gemini + Cloudflare Workers AI.',
    },
    {
        name: 'Dish-to-Post AI',
        desc: 'Dish image → viral social media posts with captions & hashtags via Gemini.',
    },
    {
        name: 'EchoVerse',
        desc: 'AI voice journal that turns spoken thoughts into structured insights with Gemini 1.5.',
    },
]

const AboutPage = () => {
    return (
        <div className="container mx-auto p-4 max-w-7xl py-20">
            {/* ── Title ── */}
            <motion.h1
                {...fadeInDown}
                className="text-4xl font-bold mb-4 text-center"
            >
                About Me
            </motion.h1>

            {/* ── Bio ── */}
            <motion.section {...fadeInUp} className="mb-16">
                <div className="flex flex-col md:flex-row items-center gap-10 max-w-4xl mx-auto">
                    <motion.div
                        {...slideInLeft}
                        transition={{ duration: 0.6 }}
                        className="flex-shrink-0"
                    >
                        <Image
                            src="/profile2.jpeg"
                            alt="Hansa Sandamal"
                            width={160}
                            height={160}
                            className="rounded-2xl w-40 h-40 object-cover ring-4 ring-primary/30 shadow-xl"
                        />
                    </motion.div>
                    <motion.div {...slideInRight} transition={{ duration: 0.6 }}>
                        <p className="text-lg text-secondary leading-relaxed mb-4">
                            Motivated <strong>Software Engineer</strong> with 3+ years of experience in frontend and
                            full-stack development using <strong>React.js, Next.js, Ember.js, Node.js</strong>, and modern web
                            technologies. Skilled in building responsive, scalable applications with a focus on clean code
                            and timely delivery.
                        </p>
                        <p className="text-lg text-secondary leading-relaxed">
                            Beyond traditional engineering, I actively build <strong>AI-powered products</strong> with
                            Ai Tools. I believe the best software sits at the intersection of{' '}
                            <strong>great UX and smart AI</strong>.
                        </p>
                    </motion.div>
                </div>
            </motion.section>

            {/* ── Skills ── */}
            <motion.section
                {...fadeIn}
                transition={{ delay: 0.2 }}
                className="mb-16"
            >
                <motion.h2 {...fadeInUp} className="section-title">Skills</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
                >
                    {skillCategories.map((cat, catIdx) => (
                        <motion.div
                            key={cat.label}
                            variants={fadeInUp}
                            {...cardHover}
                            transition={{ type: 'spring', stiffness: 300 }}
                            className="bg-white dark:bg-dark/50 p-4 rounded-xl shadow-md border border-gray-100 dark:border-white/5"
                        >
                            <div className="flex items-center gap-2 mb-4">
                                {cat.icon}
                                <h3 className="text-sm font-semibold leading-tight">{cat.label}</h3>
                            </div>
                            <div className="space-y-1.5">
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 rounded-lg px-2 py-1.5 hover:bg-primary/10 transition-colors group"
                                    >
                                        <span className="text-base flex-shrink-0 group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </span>
                                        <span className="text-xs font-medium leading-tight">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.section>

            {/* ── Experience ── */}
            <motion.section
                {...fadeIn}
                transition={{ delay: 0.4 }}
                className="mb-16"
            >
                <motion.h2 {...fadeInUp} className="section-title">Experiences</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                        <p className="text-primary mb-2">
                            LOLC Technologies (Outsourced) (Jul 2026 - Present)
                        </p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>
                                Working with FusionX on software development projects for an insurance-focused organization.
                            </li>
                            <li>
                                Contributing to both frontend and backend development using React and Spring Boot.
                            </li>
                            <li>
                                Developing responsive, user-friendly interfaces and implementing backend services and RESTful APIs.
                            </li>
                            <li>
                                Collaborating with cross-functional teams to develop, enhance, and maintain scalable enterprise applications.
                            </li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                        <p className="text-primary mb-2">Pelican cube (Outsourced) (Mar 2025 - Jun 2026)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Developed SMART Ticketing &amp; Seat Reservation Solution for Sri Lanka Railway across frontend &amp; backend.</li>
                            <li>Created RESTful APIs and built responsive UIs aligned with Figma designs.</li>
                            <li>Built and optimized Back-Office modules: Engine, Carriage Inventory, Profile Management, Warrant &amp; Season Approval.</li>
                            <li>Implemented role-based User Management and KYC features, improving security &amp; compliance.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                        <p className="text-primary mb-2">DirectFN (Outsourced) (May 2023 - Jan 2025)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Developed DirectFN Pro 11 trading web app, enhancing trading performance &amp; UI responsiveness.</li>
                            <li>Optimized Ember.js code, reducing load times &amp; improving stability.</li>
                            <li>Built and optimized UA CORE Mobile app, boosting mobile performance.</li>
                            <li>Collaborated on scalable component architecture, ensuring maintainability &amp; faster feature delivery.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">Software Engineer</h3>
                        <p className="text-primary mb-2">Hatchyard (Pvt) Ltd (Oct 2022 - Present)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Promoted from Intern to Full-time Engineer in 3 months.</li>
                            <li>Designed &amp; developed B4U and Bookezy appointment &amp; employee management platforms.</li>
                            <li>Built reusable React/React Native components &amp; implemented design system for consistent UI.</li>
                            <li>Improved frontend performance &amp; streamlined Git workflows.</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">Intern Software Engineer</h3>
                        <p className="text-primary mb-2">Bellvantage (Pvt) Ltd (Sep 2021 - Feb 2022)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Enhanced life insurance modules using ASP.NET MVC &amp; Oracle.</li>
                            <li>Delivered user-friendly interfaces for claims &amp; premium payments, reducing support queries.</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>

            {/* ── Education ── */}
            <motion.section
                {...fadeIn}
                transition={{ delay: 0.6 }}
                className="mb-16"
            >
                <motion.h2 {...fadeInUp} className="section-title">Education</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="max-w-3xl mx-auto space-y-6"
                >
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">B.Sc. (Hons.) in Software Engineering</h3>
                        <p className="text-primary mb-2">University of Kelaniya, Sri Lanka (2019 - 2023)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Web Development</li>
                            <li>Data Science</li>
                            <li>Mobile App Development</li>
                        </ul>
                    </motion.div>
                    <motion.div
                        variants={fadeInUp}
                        {...cardHoverSmall}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold mb-2">G.C.E. Advanced Level Examination</h3>
                        <p className="text-primary mb-2">Royal College, Colombo 07, Sri Lanka (2017)</p>
                        <ul className="list-disc list-inside text-secondary space-y-2">
                            <li>Combined Mathematics - A</li>
                            <li>Physics - B</li>
                            <li>Chemistry - B</li>
                        </ul>
                    </motion.div>
                </motion.div>
            </motion.section>
        </div>
    )
}
export default AboutPage;


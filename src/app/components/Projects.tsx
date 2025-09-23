'use client'
import { projects } from '@/contents/projects'
import { cardHoverSmall, fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
    return (
        <section className="py-20 ">
            <div className='max-w-7xl mx-auto px-4 container'>
                <motion.h2
                    {...fadeInUp}
                    className="text-3xl font-bold mb-12 text-center">Featured Projects</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {
                        projects.map((project) => (
                            <motion.article
                                key={project.title}
                                variants={fadeInUp}
                                {...cardHoverSmall}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                                <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                                    <Image src={project.image} alt={project.title} fill className="object-cover" sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                                </div>
                                <motion.h3
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="text-xl font-semibold mb-2">{project.title}</motion.h3>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</motion.p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="flex flex-wrap gap-2 mb-4">
                                    {
                                        project.technologies.map((tech, index) =>
                                            <motion.span
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">{tech}</motion.span>
                                        )
                                    }
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="flex gap-4 mt-2">
                                    <motion.a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub className="h-5 w-5" />
                                        <span>Code</span>
                                    </motion.a>
                                    <motion.a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt className="h-5 w-5" />
                                        <span>Live Demo</span>
                                    </motion.a>
                                </motion.div>
                            </motion.article>
                        ))
                    }
                </motion.div>
            </div>

        </section>
    )
}

export default Projects

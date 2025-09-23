"use client"
import { BLOG_BASE_URL, blogs } from '@/contents/blogs'
import { cardHoverSmall, fadeInUp, staggerContainer } from '@/utils/animations'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaClock } from 'react-icons/fa'

const Blogs = () => {
    return (
        <section className='py-20'>
            <div className='max-w-7xl mx-auto px-4 container'>
                <motion.h2
                    {...fadeInUp}
                    className='text-3xl mb-12 text-center font-bold'>Blogs Posts</motion.h2>
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className='grid gap-8 grid-cols-1 md:grid-cols-3'>
                    {
                        blogs.slice(0, 6).map((blog) => (
                            <motion.article
                                key={blog.slug}
                                variants={fadeInUp}
                                {...cardHoverSmall}
                                transition={{ type: "spring", stiffness: 300 }}
                                className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6'>
                                <Link href={`${BLOG_BASE_URL}${blog.slug}`} target="_blank" rel="noopener noreferrer">
                                    <motion.h3
                                        whileHover={{ x: 5 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                        className='text-xl font-semibold mb-2 hover:text-primary transition-colors'>{blog.title}</motion.h3>
                                </Link>
                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className='text-gray-600 dark:text-gray-300 mb-4'>{blog.excerpt}</motion.p>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className='flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4'>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className='flex items-center'>
                                        <FaCalendarAlt className='mr-2' />
                                        {new Date(blog.date).toLocaleDateString()}
                                    </motion.span>
                                    <motion.span
                                        whileHover={{ scale: 1.05 }}
                                        className='flex items-center'>
                                        <FaClock className='mr-2' />
                                        {blog.readTime}
                                    </motion.span>
                                </motion.div>
                            </motion.article>
                        ))
                    }
                </motion.div>
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link
                            href="/blogs"
                            className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                        >
                            View All Posts
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

        </section>
    )
}

export default Blogs

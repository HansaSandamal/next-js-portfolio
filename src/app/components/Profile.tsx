"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '@/utils/animations'

const Profile = () => {
    return (
        <section className='py-28 max-w-7xl mx-auto px-4 container'>
            <div className='max-w-3xl mx-auto text-center'>
                <motion.div
                    {...scaleIn}
                    transition={{ delay: 0.2 }}
                    className='flex flex-col items-center mb-4'>
                    <Image src='/profile.jpg' alt='profileImage' width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary' />
                </motion.div>
                <motion.h1
                    {...fadeInUp}
                    transition={{ delay: 0.3 }}
                    className='text-4xl font-bold mb-6 md:text-6xl'>Hi, I&apos;m <span className='text-primary'> Hansa Sandamal </span></motion.h1>
                <motion.p
                    {...fadeInUp}
                    transition={{ delay: 0.4 }}
                    className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'> Software Engineer | UI/UX Enthusiast | Tech Blogger</motion.p>
                <div className='flex justify-center space-x-4 mb-8'>
                    <Link href='https://github.com/HansaSandamal' target='_blank' rel='noopener noreferrer' className='text-2xl text-gray-600 dark:text-gray-200 hover:text-primary transition-colors transition-duration-300'>
                        <FaGithub />
                    </Link>
                    <Link href='https://www.linkedin.com/in/hansa-sandamal-a2232817b/' target='_blank' rel='noopener noreferrer' className='text-2xl text-gray-600 dark:text-gray-200 hover:text-primary transition-colors transition-duration-300'>
                        <FaLinkedin />
                    </Link>
                    <Link href='https://medium.com/@hansasandamal' target='_blank' rel='noopener noreferrer' className='text-2xl text-gray-600 dark:text-gray-200 hover:text-primary transition-colors transition-duration-300'>
                        <FaMedium />
                    </Link>
                </div>
                <div className='flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4'>
                    <Link href='/projects' className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary transition-colors'>View Projects</Link>
                    <Link href='/contact' className='bg-gray-500 inline-block w-full md:w-auto text-gray-300  px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors'>Contact Me</Link>
                </div>
            </div>
        </section>
    )
}

export default Profile

import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className='bg-gray-100 dark:bg-dark/50 py-6 mt-20'>
            <div className='max-w-7xl mx-auto px-4 py-8 container text-gray-600 dark:text-gray-400'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4 md:mb-0'>
                        <Link className='text-xl font-bold text-primary transition-colors' href='/'>
                            Hansa.dev&trade;
                        </Link>
                        <p className='text-sm mt-2'>&nbsp; {new Date().getFullYear()} |&nbsp; All rights reserved.</p>
                    </div>
                    <div className='flex space-x-4'>
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
                </div>
            </div>
        </footer>
    )
}

export default Footer

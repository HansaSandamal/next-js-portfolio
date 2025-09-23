"use client"
import React from 'react'

const NewsLetter = () => {
    return (
        <section className='py-20 bg-white dark:bg-dark/50 rounded-lg shadow-md overflow-hidden animation-slide-up'>
            <div className='p-8 md:p-12'>
                <div className='max-w-3xl mx-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div>
                            <h2 className='text-2xl font-bold mb-4'>Subscribe to My Newsletter</h2>
                            <p className='text-gray-600 dark:text-gray-300 mb-8 md:w-2/3'>Stay updated with my latest projects, blog posts, and more.</p>
                        </div>
                        <form className='flex flex-col sm:flex-row gap-4' onSubmit={(e) => e.preventDefault()}>
                            <input type='email' placeholder='Enter your email' required className='flex-1 px-4 py-3 rounded-lg border dark:text-white border-gray-300 dark:border-gray-600 bg-white text-gray-500 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-primary' />
                            <button type='submit' className='bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter

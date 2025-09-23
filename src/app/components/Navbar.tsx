"use client"
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathName = usePathname();
    const { theme, toggleTheme } = useTheme();
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const menuItems = [
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Blogs', href: '/blogs' },
        { label: 'Projects', href: '/projects' },
        { label: 'Contact', href: '/contact' },
    ];
    return (
        <div className='fixed w-full bg-white/80 dark:bg-dark/80 backgrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm'>
            <div className='max-w-7xl mx-auto px-4'>
                <div className='flex items-center justify-between h-16'>
                    <Link href='/' className='font-bold text-xl text-primary'>Hansa.dev&trade;</Link>
                    <div className='hidden md:flex  items-center space-x-8'>
                        {menuItems.map((item) => {
                            const isActive = pathName === item.href;
                            return (
                                <Link key={item.href} href={item.href} className={`hover:text-primary transition-colors font-medium ${(isActive) ? 'font-semibold text-primary' : ''}`}> {item.label}</Link>
                            )
                        })}
                        <button onClick={toggleTheme} className='p-2 rounded-md  dark:text-white hover:bg-gray-100 hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                            {
                                theme === 'dark' ? (<SunIcon className='w-5 h-5' />) : (<MoonIcon className='w-5 h-5' />)
                            }
                        </button>
                    </div>

                    <button className='md:hidden p-2 rounded-md text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer' onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (<XMarkIcon className='w-5 h-5' />) : (<Bars3Icon className='w-5 h-5' />)}
                    </button>
                </div>
                {isMobileMenuOpen && (
                    <div className='md:hidden'>
                        <div className='py-4 space-y-4'>
                            {menuItems.map((item, index) => {
                                const isActive = pathName === item.href;
                                return (
                                    <div key={index} onClick={toggleMobileMenu}>
                                        <Link href={item.href} className={`block py-2 hover:text-primary transition-colors text-medium ${isActive ? 'text-primary' : ''}`}> {item.label}</Link>
                                    </div>
                                )
                            })}
                            <div>
                                <button onClick={toggleTheme} className='flex items-center py-2 hover:text-primary transition-colors cursor-pointer'>
                                    {
                                        theme === 'dark' ? (
                                            <><SunIcon className='w-5 h-5 mr-2' />Light Mode</>
                                        ) : (
                                            <><MoonIcon className='w-5 h-5 mr-2' />Dark Mode</>
                                        )
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar

import React, { useState } from 'react'
import pacLogo from '../img/2pac.png'
import mobileMenu from '../img/menu-mobile.svg'
import closeMenu from '../img/menu-close.svg'

const Nav = () => {

    const [navbar, setNavbar] = useState(false);

  return (
    <nav className='p-6 shadow-lg md:shadow-gray-900'>
        {/* Mobile */}
        <div className='flex justify-between items-center md:hidden'>

            {/* Logo */}
            <a href="/"><img src={pacLogo} alt="logo" className='w-40' /></a>

            {/* Mobile Button Logic */}
            <div onClick={() => setNavbar(!navbar)}>
            {!navbar ? <img src={mobileMenu} alt="menu-mobile" className='hover:cursor-pointer' />
            :  <img src={closeMenu} alt="menu-mobile" className='hover:cursor-pointer' />}
            </div>
        </div>

        {/* Mobile Menu Links */}
        <div className={navbar ? 'flex p-8' : 'hidden'}>
            <ul className='space-y-4 text-2xl font-bold w-full text-center'>
                <li><a onClick={() => setNavbar(!navbar)} className='hover:text-red-500 transition duration-300' href="/">Home</a></li>
                <li><a onClick={() => setNavbar(!navbar)} className='hover:text-red-500 transition duration-300' href="/#story">Story</a></li>
                <li><a onClick={() => setNavbar(!navbar)} className='hover:text-red-500 transition duration-300' href="/#albums">Discography</a></li>
                <li><a onClick={() => setNavbar(!navbar)} className='hover:text-red-500 transition duration-300' href="/#about">About</a></li>
                <li><a onClick={() => setNavbar(!navbar)} className='hover:text-red-500 transition duration-300' href="/#contact">Contact</a></li>
            </ul>
        </div>

        {/* Desktop */}
        <div className='hidden md:flex items-center'>

            {/* Logo */}
            <a href="/"><img src={pacLogo} alt="logo" className='w-40' /></a>

        {/* Desktop Menu Links */}
            <div className='ml-20'>
                <ul className='flex gap-12 text-xl font-bold'>
                    <li><a className='hover:text-red-500 transition duration-300' href="/">Home</a></li>
                    <li><a className='hover:text-red-500 transition duration-300' href="/#story">Story</a></li>
                    <li><a className='hover:text-red-500 transition duration-300' href="/#albums">Discography</a></li>
                    <li><a className='hover:text-red-500 transition duration-300' href="/#about">About</a></li>
                    <li><a className='hover:text-red-500 transition duration-300' href="/#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav
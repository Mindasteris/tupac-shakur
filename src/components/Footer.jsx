import React from 'react'
import pacPhotoFooter from '../img/pac-photo-footer.png'
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from 'react-icons/bs'

const Footer = () => {
  return (
    <section className='w-full h-[300px] border-t-2 border-gray-500'>
      {/* Content */}
      <div className='flex flex-col-reverse md:flex-row justify-between items-center px-20'>
        <img src={pacPhotoFooter} alt="2pac" className='py-10' />

        {/* Social Life */}
        <div className='flex md:flex-col gap-8 py-10'>
          <a href="https://www.facebook.com/tupacshakur/" target='_blank'><BsFacebook size={30} className='hover:scale-125 transition duration-300 cursor-pointer' /></a>
          <a href="https://www.youtube.com/channel/UCMIdeeBjp_60Jv7ROpRxK6Q" target='_blank'><BsYoutube size={30} className='hover:scale-125 transition duration-300 cursor-pointer' /></a>
          <a href="https://twitter.com/2PAC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target='_blank'><BsTwitter size={30} className='hover:scale-125 transition duration-300 cursor-pointer' /></a>
          <a href="https://www.instagram.com/2pac/" target='_blank'><BsInstagram size={30} className='hover:scale-125 transition duration-300 cursor-pointer' /></a>
        </div>
      </div>

      <p className='text-center text-lg md:text-xl py-10'>&copy; All rights reserved. Mindaugas {new Date().getFullYear()}</p>
    </section>
  )
}

export default Footer
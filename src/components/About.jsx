import React from 'react'
import pacPicture1 from '../img/pac1.jpg'

const About = () => {
  return (
    <section id='about'>
        {/* Content */}
        <div className='bg-gray-200 mx-auto text-black h-full p-4 pb-0'>
            <h1>ABOUT</h1>

            <div className='about mt-10'>
                <p>Rapper. Actor. Activist. Thug. Poet. Rebel. Visionary. Though his recording career lasted just five years, Tupac Amaru Shakur (1971-1996) is one of the most popular artists in history, with over 75 million records sold worldwide. More than half of his eleven studio albums sold over three million copies in the U.S., and both 1996’s All Eyez on Me and his Greatest Hits collection have been certified diamond, surpassing the ten-million mark and placing them among the top-selling albums of all time.</p>
                <img src={pacPicture1} alt="2pac" className='w-full rounded-lg' />
            </div>
        </div>
    </section>
  )
}

export default About
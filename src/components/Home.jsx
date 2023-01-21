import React from 'react'

const Home = () => {
  return (
    <section id='home' className='text-center p-8 mt-0 md:mt-24'>
        {/* Quote */}
        <div className='text-3xl md:text-4xl font-bold w-full md:max-w-[700px] mx-auto'>
            <p>“My mother taught me three things: respect, knowledge, search for knowledge is an eternal journey.”</p>
            <br />
            <span className='flex justify-end'>- Tupac</span>
        </div>

        {/* Content */}
        <div className='pb-20'>
            <h1>LEGEND</h1>
            <p>R.I.P.</p>
            <p>1971 - 1996</p>

            {/* Video */}
            <div className='w-full h-[270px] md:w-[600px] md:h-[400px] mx-auto mt-5 border border-gray-500 rounded-md'>
              <iframe className='w-full h-full rounded-md' src="https://www.youtube.com/embed/eXvBjCO19QY" title="2Pac - Changes ft. Talent" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    </section>
  )
}

export default Home
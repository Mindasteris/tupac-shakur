import React from 'react'

const Albums = () => {
  return (
    <section id='albums'>
        {/* Albums */}
        <div className='p-2'>
            <h1>ALBUMS</h1>

            <div className='flex flex-col md:flex-row flex-wrap justify-center items-center gap-10'>
                <figure>
                    <img src="/albums/2PACALYPSE NOW.jpg" alt="2PACALYPSE NOW" />
                    <figcaption>2PACALYPSE NOW</figcaption>
                    <span>NOVEMBER 12,1991</span>
                </figure>
                <figure>
                    <img src="/albums/STRICTLY.jpg" alt="STRICTLY FOR MY N.I.G.G.A.Z" />
                    <figcaption>STRICTLY FOR MY N.I.G.G.A.Z</figcaption>
                    <span>FEBRUARY 15,1993</span>
                </figure>
                <figure>
                    <img src="/albums/THUG LIFE.jpg" alt="THUG LIFE: VOLUME 1" />
                    <figcaption>THUG LIFE: VOLUME 1</figcaption>
                    <span>OCTOBER 11,1994</span>
                </figure>
                <figure>
                    <img src="/albums/ME AGAINST THE WORLD.jpg" alt="ME AGAINST THE WORLD" />
                    <figcaption>ME AGAINST THE WORLD</figcaption>
                    <span>MARCH 14,1995</span>
                </figure>
                <figure>
                    <img src="/albums/ALL EYEZ ON ME.jpg" alt="ALL EYEZ ON ME" />
                    <figcaption>ALL EYEZ ON ME</figcaption>
                    <span>FEBRUARY 13,1996</span>
                </figure>
                <figure>
                    <img src="/albums/THE DON KILLUMINATI.jpg" alt="THE DON KILLUMINATI" />
                    <figcaption>THE DON KILLUMINATI</figcaption>
                    <span>NOVEMBER 5,1996</span>
                </figure>
                <figure>
                    <img src="/albums/RU STILL DOWN.jpg" alt="RU STILL DOWN?" />
                    <figcaption>RU STILL DOWN?</figcaption>
                    <span>NOVEMBER 25,1997</span>
                </figure>
                <figure>
                    <img src="/albums/GREATEST HITS.jpg" alt="GREATEST HITS" />
                    <figcaption>GREATEST HITS</figcaption>
                    <span>NOVEMBER 24,1998</span>
                </figure>
                <figure>
                    <img src="/albums/STILL I RISE.jpg" alt="STILL I RISE" />
                    <figcaption>STILL I RISE</figcaption>
                    <span>DECEMBER 21,1999</span>
                </figure>
                <figure>
                    <img src="/albums/UNTIL THE END OF TIME.jpg" alt="UNTIL THE END OF TIME" />
                    <figcaption>UNTIL THE END OF TIME</figcaption>
                    <span>MARCH 27,2001</span>
                </figure>
                <figure>
                    <img src="/albums/BETTER DAYZ.jpg" alt="BETTER DAYZ" />
                    <figcaption>BETTER DAYZ</figcaption>
                    <span>NOVEMBER 26,2002</span>
                </figure>
                <figure>
                    <img src="/albums/RESURRECTION.jpg" alt="TUPAC: RESURRECTION" />
                    <figcaption>TUPAC: RESURRECTION</figcaption>
                    <span>NOVEMBER 11,2003</span>
                </figure>
                <figure>
                    <img src="/albums/LOYAL TO THE GAME.jpg" alt="LOYAL TO THE GAME" />
                    <figcaption>LOYAL TO THE GAME</figcaption>
                    <span>DECEMBER 12,2004</span>
                </figure>
                <figure>
                    <img src="/albums/PAC'S LIFE.jpg" alt="PAC'S LIFE" />
                    <figcaption>PAC'S LIFE</figcaption>
                    <span>NOVEMBER 21,2006</span>
                </figure>
                <figure>
                    <img src="/albums/BEST OF 2PAC, PART 1.jpg" alt="BEST OF 2PAC, PART 1: THUG" />
                    <figcaption>BEST OF 2PAC, PART 1: THUG</figcaption>
                    <span>DECEMBER 7,2007</span>
                </figure>
                <figure>
                    <img src="/albums/BEST OF 2PAC, PART 2.jpg" alt="BEST OF 2PAC, PART 2: LIFE" />
                    <figcaption>BEST OF 2PAC, PART 2: LIFE</figcaption>
                    <span>DECEMBER 7,2007</span>
                </figure>
                
            </div>
        </div>
    </section>
  )
}

export default Albums
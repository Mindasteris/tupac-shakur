import React from 'react'
import pacProfile from '../img/pac-profile.jpg'

const Story = () => {
  return (
    <section id='story'>
        {/* Content */}
        <div className='bg-gray-200 mx-auto text-black h-full p-2'>
            <h1>STORY</h1>
            
            {/* Profile Card */}
            <div className='flex flex-col justify-center items-center mt-10'>
                <div className='text-center'>
                    <img src={pacProfile} alt="2pac-profile" className='w-80' />
                    <div className='font-bold py-2 space-y-1'>
                        <p>Tupac Amaru Shakur</p>
                        <p>Born: 1971</p>
                        <p>Died: 1996</p>
                    </div>
                </div>
            </div>

            <div className='story pb-20'>
                {/* Biography */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>2PAC</h2>
                    <br />
                    <p>Tupac Shakur was embroiled in a feud between East Coast and West Coast rappers and was murdered in a drive-by shooting in 1996, leaving behind an influential musical legacy at the age of 25.</p>
                    <br />
                    <p>Tupac Shakur was an American rapper and actor who came to embody the 1990s gangsta-rap aesthetic, and who in death became an icon symbolizing noble struggle. He has sold 75 million albums to date, making him one of the top-selling artists of all time.</p>
                    <br />
                    <p>A sensitive, precociously talented and troubled soul, Tupac was gunned down in Las Vegas on September 7, 1996 and died six days later. His murder has never been solved.</p>
                    <br />
                    <p>Tupac began his music career as a rebel with a cause to articulate the travails and injustices endured by many African Americans. His skill in doing so made him a spokesperson not just for his own generation but for subsequent ones who continue to face the same struggle for equality.</p>
                    <br />
                    <p>In life, his biggest battle was sometimes with himself. As fate drove him towards the nihilism of gangsta rap, and into the arms of the controversial Death Row Records impresario Suge Knight, the boundaries between Shakur's art and his life became increasingly blurred — with tragic consequences.</p>
                </div>

                {/* Early Life */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Early Life</h2>
                    <br />
                    <p>Tupac was born on June 16, 1971, in Harlem, New York. His mother, Afeni, was raising two children on her own and struggled for money. The family moved homes often, sometimes staying in shelters.</p>
                    <br />
                    <p>They moved to Baltimore, where Tupac enrolled at the prestigious Baltimore School for the Arts, at which he felt "the freest I ever felt."</p>
                </div>

                {/* Tupac's Family */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Tupac's Family</h2>
                    <br />
                    <p>Tupac was named Lesane Parish Crooks at birth. After joining the Black Panther party, his mother changed his first name to Tupac Amaru, a Peruvian revolutionary who was killed by the Spanish. Tupac later took his surname from his sister’s Sekiya's father, another Panther called Mutulu Shakur.</p>
                    <br />
                    <p>Tupac’s mother, Alice Faye Williams, was the daughter of a North Carolina maid and a high-school dropout. She became pregnant with Tupac in 1970 while on bail after being charged with conspiring to set off a race war. Afeni was acquitted the following year after successfully defending herself in court, displaying a gift for oration that her son would inherit.</p>
                    <br />
                    <p>Tupac's father, Billy Garland, was also a Panther but lost contact with Afeni when Tupac was five years old. The rapper would not see his father again until he was 23. "I thought my father was dead all my life," he told the writer Kevin Powell during an interview with Vibe magazine in 1996. "I felt I needed a daddy to show me the ropes and I didn't have one."</p>
                </div>

                {/* Jail */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Legal Drama and Jail</h2>
                    <br />
                    <p>In August 1992, Tupac was attacked by jealous youths in Marin City. He drew his pistol but dropped it in the melee. Someone picked it up, the gun fired, and a 6-year-old bystander, Qa'id Walker-Teal, fell down dead.</p>
                    <br />
                    <p>While Tupac was not charged for Walker-Teal's death, he was reportedly inconsolable. (In 1995, Walker-Teal's family brought a civil case against Tupac, but settled out of court after an unnamed record company — thought to have been Death Row — offered compensation of between $300,000 to $500,000.)</p>
                    <br />
                    <p>In October 1993, Tupac shot and wounded two white off-duty cops in Atlanta — one in the abdomen and one in the buttocks — after an altercation. However, the charges were dropped after it emerged in court that the policemen had been drinking, had initiated the incident and that one of the officers had threatened Tupac with a stolen gun.</p>
                    <br />
                    <p>Tupac did go to jail for 15 days in 1994 for assaulting the director Allen Hughes, who had fired him from the set of the movie Menace II Society for being disruptive.</p>
                </div>
                
                {/* Tupac vs. Biggie Smalls */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Tupac vs. Biggie Smalls</h2>
                    <br />
                    <p>Before Tupac released his third album, there was more trouble. In November 1994, he was shot multiple times in the lobby of a Manhattan recording studio, Quad, by two young Black men.</p>
                    <br />
                    <p>Tupac believed his rap rival Biggie Smalls was behind the shooting, for which nobody has ever been charged. (Smalls always denied he knew anything; in 2011 Dexter Isaac, a New York prisoner serving a life sentence for an unrelated crime, claimed he was paid to steal from Tupac by the artist manager and mogul James "Henchman" Rosemond, and shot the rapper during the robbery).</p>
                    <br />
                    <p>In June 1996, Tupac released a diss track, "Hit 'Em Up," aimed at Biggie Smalls and his label boss at Bad Boy Records, Sean "Diddy" Combs— ratcheting up the tension between East and West Coast rap. Their rivalry was fast becoming hip hop's most famous — and ugliest — beef. Within three months, Tupac was murdered.</p>
                </div>

                {/* Joining Death Row Records */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Joining Death Row Records</h2>
                    <br />
                    <p>While Tupac was in prison on rape charges, he was visited by Suge Knight, the notorious label boss of Death Row records. Knight offered to post the $1.3 million dollar bail Tupac needed to be released pending his appeal. The condition was that Tupac sign on to Death Row. Tupac duly signed. He was released from the high-security Dannemora facility in New York in October 1995.</p>
                    <br />
                    <p>At the same time as he was glorifying an outlaw lifestyle for Death Row, Tupac was financing an at-risk youth center, bankrolling South Central sports teams, setting up a telephone helpline for young people with problems — all noted in Robert Sam Anson's Vanity Fair article, published after Tupac's death.</p>
                </div>

                {/* Songs and Albums */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Songs and Albums</h2>
                    <br />
                    <p>Tupac has released a total of 11 platinum albums: four during his career, with seven more released posthumously. To date, Tupac has sold more than 75 million records worldwide.</p>
                    <br />
                    <p>As of September 2017, the Recording Industry Association of America (RIAA) listed Tupac as the 44th top-selling artist of all time by album sales and streaming figures.</p>
                    <br />
                    <p>Tupac's first album as a solo artist was 2Pacalypse Now. Although it did not yield any hits, it sold a respectable 500,000 copies and established Tupac as an uncompromising social commentator on songs such as "Brenda's Got a Baby" — which narrates an underaged mother's fall into destitution — and "Soulja's Story," which controversially spoke of "blasting" a police officer and "droppin' the cop."</p>
                    <br />
                    <p>Tupac's debut for Death Row, the double-length album All Eyez on Me, came out in February 1996. With his new hip-hop group Outlawz debuting on the album, All Eyez on Me was an unapologetic celebration of the thug lifestyle, eschewing socially conscious lyrics in favor of gangsta-funk hedonism and menace.</p>
                    <br />
                    <p>Released as a single in June 1996, “How Do You Want It” was more famous for its B track, “Hit ‘Em Up,” which aired Tupac’s West Coast feud with East Coast Bad Boy rivals. On the inflammatory song, Tupac spat venom at artists including Biggie Smalls, Lil Kim, Junior M.A.F.I.A. and Prodigy of Mobb Deep. The track seemed to chillingly presage Tupac’s death and the ensuing conspiracy theories.</p>
                    <br />
                    <p>Tupac's fifth album, Don Killuminati: The Seven Day Theory, was released in November 1996, just eight weeks after his death. It also reached No. 1 on the charts. Tupac recorded a total of six studio albums released posthumously, up to and including Pac's Life in 2006.</p>
                </div>

                {/* Death */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Death</h2>
                    <br />
                    <p>Tupac died in Las Vegas on September 13, 1996, of gunshot wounds inflicted six days prior. His murder remains unsolved.</p>
                    <br />
                    <p>On September 7, Tupac was in Las Vegas with Knight to watch a Mike Tyson fight at the MGM Grand hotel. There was a scuffle after the bout between a member of the Crips gang and Tupac.</p>
                    <br />
                    <p>Knight, who was involved with the rival Bloods gang, and members of his entourage piled in. Later, as a car that Tupac was sharing with Knight stopped at a red light, a man emerged from another car and fired 13 shots, hitting Tupac in the hand, pelvis and chest. He later died at the hospital. His girlfriend Kidada and his mother Afeni were both with him in his final days.</p>
                    <br />
                    <p>Tupac's body was cremated. Members of his old band, Outlawz, made the controversial claim that they had smoked some of his ashes in honor of him. His mother announced she would scatter her son's ashes in Soweto, South Africa, the "birthplace of his ancestors," on the 10th anniversary of his murder. She later changed the date to June 16, 1997 — Tupac's 26th birthday as well as the anniversary of the 1976 Soweto uprising.</p>
                    <br />
                    <p>On March 9, 1997, six months after Tupac died, Biggie Smalls was killed in a drive-by shooting in Los Angeles; his murder has never been solved, either.</p>
                </div>

                {/* Rock and Roll Hall of Fame */}
                <div className='p-4'>
                    <h2 className='font-bold text-2xl'>Joining Death Row Records</h2>
                    <br />
                    <p>On April 7, 2017, Tupac was inducted into the Rock and Roll Hall of Fame, one of music's highest honors - a worthy inclusion for a rapper hailed by many to have been the greatest of all time.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Story
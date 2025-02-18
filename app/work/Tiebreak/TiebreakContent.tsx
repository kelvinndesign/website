import React from 'react'
import Link from 'next/link'

export default function TiebreakContent() {
  return (
    <div className='grid justify-self-center content-start lg:mx-36 mt-0 lg:mt-10'>
        <div className='bg-blue w-fit justify-self-center h-16'>
            <img src='../TIEBREAK_Master_Logo_White.png' className='h-full'/> 
        </div>

        <div className='grid mt-8 gap-8'>
            <p>Tiebreak was my first project at Big Ant Studios that I was involved in from ideation to release. A tennis simulation videogame, this project required a powerful and dynamic visual identity to accompany the nature of the sport and its large fanbase. With multiple competition licenses, Tiebreak had the unique opportunity to present itself under various competition themes, and thus required UI that were aesthetically flexible and versatile. Through Figma, I collaborated on developing an expansive project built of responsive components and detailed styles to deliver high-quality mockups and prototypes.</p>
            <p>With interchanging colours, patterns and imagery, one of my main tasks across the project was ensuring screens were accessible and legible, often delivering solutions to improve these user experiences. In addition, I worked closely with game designers and producers throughout the development process, presenting optimal user-friendly flows and paths for new game modes and features.</p>
            <p>As Tiebreak is an international game supporting 12 languages, one of the challenges I faced was accompanying for the localisation of strings. These languages varied in word lengths and writing systems, and thus typography was often faced with certain stylistic restrictions. I quickly learnt how to balance the variation in strings with visual aesthetics, to ensure localised game experiences were inclusively accounted for.</p>
            <p>Under frequent sprint deadlines and stakeholder requirements, this project presented a high-pressure yet exciting work environment - helping fast track the game to release in August 2024.</p>
        </div>

        <div className='mt-8'>
            <video src='../TiebreakIntro.mp4' controls muted className='w-full'/>
            <p className='italic mt-2'>Animated intro and menu experience was an animation sequence I had created - from mockups in Adobe After Effects to code implementation via XAML.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mb-20'>
            <div>
                <img src='../Tiebreak1.png' className=''/>
            </div>
            <div>
                <img src='../Tiebreak2.png' className=''/>
            </div>
            <div>
                <img src='../Tiebreak4.png' className=''/>
            </div>
            <div>
                <img src='../Tiebreak5.png' className=''/>
            </div>
            <div>
                <img src='../Tiebreak6.png' className=''/>
            </div>
            <div>
                <img src='../Tiebreak3.png' className=''/>
            </div>
        </div>
        
    </div>
  );
}

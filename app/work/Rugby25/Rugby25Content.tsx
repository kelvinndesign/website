import React from 'react'
import Link from 'next/link'

export default function Rugby25Content() {
  return (
    <div className='grid justify-self-center content-start lg:mx-36 mt-0 lg:mt-10'>
        <div className='bg-blue w-fit justify-self-center h-16'>
            <img src='../Rugby25_Master_Logo_White-Red.png' className='h-full'/> 
        </div>

        <div className='grid mt-8 gap-8'>
            <p>Rugby25 is the third Big Ant Studios title I have been able to contribute to. Working primarily in Figma, my role for this project was to lead frontend mockups for new and existing game modes. Amongst the UI team, I helped maintain an extensive Figma project through regularly creating and updating components, styles and screens - ultimately creating a productive workflow to rapidly produce mockups.</p>
            <p>Additionally, I also contributed to establishing an overall visual theme for Rugby25. We leaned heavily on a sleek and dramatic aesthetic to complement the sport of rugby league, using minimal and geometric shapes and elements. I created multiple background images for various game modes and competition identities, using Photoshop to edit in-game screenshots - creating atmospheric images to complement user interfaces. During this process it was important to avoid bold and sophisticated imagery - ensuring menus were clear and uninterrupted.</p>
            <p>This title was released under multiple Early Access releases, meaning sprint deadlines were frequent and fast-paced. Under stakeholder and licensing requirements, mockups were frequently subject to change and thus required constant maintenance. Throughout this project I quickly learnt to work within a high-intensity work environment, as it was vital I could produce work that I was happy with - and that met these working demands. </p>
            <p>Rugby25 was officially released in February 2025.</p>
        </div>

        <div className='mt-8'>
            <video src='../Rugby25Intro.mp4' controls muted className='w-full'/>
            <p className='italic mt-2'>Animated intro and menu experience was an animation sequence I had created - from mockups in Adobe After Effects to code implementation via XAML.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mb-20'>
            <div>
                <img src='../Rugby25_1.png' className=''/>
            </div>
            <div>
                <img src='../Rugby25_2.png' className=''/>
            </div>
            <div>
                <img src='../Rugby25_3.png' className=''/>
            </div>
            <div>
                <img src='../Rugby25_4.png' className=''/>
            </div>
        </div>
        
    </div>
  );
}

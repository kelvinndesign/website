import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='grid'>
        <img src='../heroName.svg' className='justify-self-stretch align-middle' alt='KELVIN NGUYEN'/>

        <div className='justify-self-center lg:justify-self-start pt-10 lg:pt-20'>
          <div className='flex justify-center lg:justify-start'>
            <h2 className='text-blue text-sm italic mr-8'>UX</h2>
            <h2 className='text-blue text-sm italic'>DESIGNER</h2>
          </div>

          <div className='bg-blue w-fit'>
            <h2 className='text-white text-sm font-bold italic mb-2 ml-4 mr-4 lg:ml-4 lg:mr-24 leading-tight text-center lg:text-left'>UX ARTIST @ BIG ANT STUDIOS</h2>
          </div>
        </div>
    </div>
  )
}

export default Hero

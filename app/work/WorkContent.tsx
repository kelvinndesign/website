import React from 'react'
import Link from 'next/link'

export default function WorkContent() {
  return (
    <div className='grid justify-items-center content-start'>
        <div className='bg-blue w-fit h-fit mb-12'>
            <h2 className='text-white text-sm font-bold italic ml-4 mr-4 leading-tight text-center lg:text-left'>BIG ANT STUDIOS</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-self-center mb-24'>
            <div>
                <img src='../Cricket24_CoverArt.png' className='w-80'/>
            </div>
            <div>
                <Link href='/work/Tiebreak'>
                    <img src='../Tiebreak_CoverArt.png' className='w-80 hover:scale-105 transition ease-out'/>
                </Link>
            </div>
            <div>
                <img src='../Rugby25_CoverArt.png' className='w-80'/>
            </div>
        </div>

        <div className='bg-blue w-fit h-fit mb-12'>
            <h2 className='text-white text-sm font-bold italic ml-4 mr-4 leading-tight text-center lg:text-left'>PERSONAL</h2>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
            <div className='lg:col-start-2'>
                <a href='https://www.antampsychology.com/' target='_blank' rel='noopener noreferrer'>
                    <img src='../AnTamCoachingAndPsychology.png' className='w-80 hover:scale-105 transition ease-out'/>
                </a>
            </div>
        </div>
    </div>
  );
}

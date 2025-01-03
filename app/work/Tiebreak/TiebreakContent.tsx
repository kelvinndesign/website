import React from 'react'
import Link from 'next/link'

export default function TiebreakContent() {
  return (
    <div className='grid justify-self-center content-start mx-10 mt-0 lg:mt-10'>
        <div className='bg-blue w-fit justify-self-center'>
            <img src='./TIEBREAK_Master_Logo_White.png' className='h-16'/> 
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 lg:mb-20'>
            <div>
                <img src='./Tiebreak1.png' className=''/>
            </div>
            <div>
                <img src='./Tiebreak2.png' className=''/>
            </div>
            <div>
                <img src='./Tiebreak3.png' className=''/>
            </div>
            <div>
                <img src='./Tiebreak4.png' className=''/>
            </div>
            <div>
                <img src='./Tiebreak5.png' className=''/>
            </div>
            <div>
                <img src='./Tiebreak6.png' className=''/>
            </div>
        </div>
        
    </div>
  );
}

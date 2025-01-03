import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='relative justify-between items-end flex mt-8 h-fit'>
        <Link className='' href='/'>
            <img src='./klv_Logo.svg' className="relative w-16 h-16" alt='KelvinNguyen_Logo'/>
        </Link>

        <div className='grid justify-items-end pr-12 border-r border-blue mt-6'>
            <Link href='/about' className='text-blue text-sm font-medium mb-4 
                                    hover:text-white hover:bg-blue'>ABOUT</Link>
            <Link href='/work' className='text-blue text-sm font-medium
                                    hover:text-white hover:bg-blue'>WORK</Link>
        </div>
    </div>
  )
}

export default Navbar
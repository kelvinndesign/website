import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex pb-6 border-b w-fit h-fit border-blue justify-self-center lg:justify-self-end flex-col lg:flex-row items-center mb-20 gap-4 lg:gap-14'>
          <a href='https://www.instagram.com/klv.studio/' target='_blank' rel='noopener noreferrer' className='text-blue text-sm font-medium
                                hover:text-white hover:bg-blue'>INSTAGRAM</a>
          <a href='https://www.linkedin.com/in/kelvinnguyendesign/' target='_blank' rel='noopener noreferrer' className='text-blue text-sm font-medium
                                hover:text-white hover:bg-blue'>LINKEDIN</a>
    </div>
  )
}

export default Footer
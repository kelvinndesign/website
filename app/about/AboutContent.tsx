import React from 'react'

export default function AboutContent() {
  return (
    <div className='flex flex-col justify-self-center max-w-7xl gap-10 items-center'>
      <img src='./face.png' className='w-56'/>
      <div className='grid gap-10 text-balance text-center bg-blue p-10'>
        <p className='text-white text-md'>Kelvin is a designer who specialises in crafting intuitive digital experiences, blended with eye-catching visuals and contemporary aesthetics.</p>
        <p className='text-white text-md'>With a passion of creating accessible and engaging designs, he ensures his work communicates the vision of his clients as clearly as possible.</p>
        <p className='text-white text-md'>Kelvin also has a curiosity for on-trend and forward-thinking visuals, frequently implementing these aesthetics without renouncing the communications in his designs.</p>
        <p className='text-white text-md'>Kelvin currently works full-time as a UX Designer at Big Ant Studios, collaborating on major sports titles in the video game industry.</p>
      </div>
    </div>
  );
}

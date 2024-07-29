import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-bgsecond py-9 flex flex-col items-center justify-center'>
        <a
            href='https://github.com/KahMeng2'
            className='relative group inline-block text-customPurple font-bold font-text text-lg transform transition-all duration-300  hover:scale-105'
            >
            Created By Kah Meng Lee
            <div className="absolute w-full h-0.5 bg-customPurple scale-x-0 group-hover:scale-x-100 transition-transform"/>
        </a>
  </footer>
  )
}

export default Footer
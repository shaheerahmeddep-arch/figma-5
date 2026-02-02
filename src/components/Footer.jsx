import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='bg-[#545454]'>

    <div className='pt-8 ml-5'>
        <img  src="./public/icons/Social.png" alt="" />

    </div>
    <div className='lg:flex lg:flex-row md:flex md:flex-row flex flex-col lg:gap-100 md:gap-30 pt-25 md:ml-5 ml-5 text-white'>

    <div >
        <ul className='font-gowun text-3xl '>  
            <li>hello@figma.com</li>
        </ul>
    </div>
    <div>
        <ul className='font-gowun text-3xl md:pt-0 lg:pt-0 pt-13'>
            <li>hello@figma.com</li>
            <li>1750 Candyland Lane,</li>
            <li>Portland, OR 97205</li>
            <li>(646) 555-4567 </li>
        </ul>
    </div>
    </div>
    <div>
        <h1 className='font-rethink text-white pt-25 ml-5'>Lincoln High School © 2025 All Rights Reserved</h1>
    </div>
    </div>
    </>
  )
}

export default Footer

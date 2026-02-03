import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='flex md:pt-5 md:ml-7 hidden md:block text-xl'>

     <ul className='flex gap-10 font-gowun'>
        <li>Home</li>
        <li>Details</li>
        <li>News</li>
        <li>Contact</li>
     </ul>
     

    </div>
    <div className='pt-5 ml-7'>

    <ul className=' md:hidden font-gowun'>
        <li>Menu</li>
     </ul>
    </div>
<div class="h-px bg-[#969696] w-full max-w-[1500px]   mb-2"></div>
    </>
  )
}

export default Navbar

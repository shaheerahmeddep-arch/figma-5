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
        <div class="h-[0.5px] bg-[#969696] md:w-190 lg:w-310 w-95 mr-48 md:mt-0 mt-3 mb-2"></div>
    </>
  )
}

export default Navbar

import React from 'react'
import { NavLink } from 'react-router-dom'

const TopBar = () => {


  return (
    <div className='bg-white w-full h-[50px] sticky top-0 flex z-[999]'>
      <div className=' w-2/12 flex items-center justify-center text-[20px] space-x-2 '>
        <i className='fa-brands fa-square-facebook
       '></i>
        <i className='fa-brands fa-instagram
        '></i>
        <i className='fa-brands fa-whatsapp
        '></i>
        <i className='fa-brands fa-viber
       '></i>


      </div>


      <nav className='w-8/12 flex justify-center     items-center list-none  text-lg text-gray-400 
        space-x-5 mt-2.5 font-light cursor-pointer'>

        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About </NavLink>
        <NavLink to='/contact'>Contact </NavLink>
        <NavLink to='/write'>Write </NavLink>

      </nav>






      <div className='w-2/12  flex items-center justify-center'>
        <NavLink to='/settings'>
          <img className='w-[40px] h-[40px] rounded-full object-cover '
            src="https://plus.unsplash.com/premium_photo-1676741354457-5f1739f8837e?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </NavLink>


        <i className='fa-solid fa-magnifying-glass
        
        text-lg text-gray-500 cursor-pointer ml-4'></i>

      </div>

    </div>
  )
}

export default TopBar

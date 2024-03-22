import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { Search } from './Search';
// import Switch from './Switch';
export const Navbar = ({darkTheme,setDarkTheme}) => {
  function clickHandler(){
      darkTheme ? setDarkTheme(false) : setDarkTheme(true);
  }
  return (
          <div className='w-full flex gap-5 flex-col'>
            <div className='flex justify-between w-full px-9 py-3 border shadow-2xl items-center'>
                <div>
                    <Link to='/' className='flex justify-between items-center gap-[2px] font-semibold' ><span ><FaGoogle /></span>oogle</Link>
                </div>
                <div className='px-3 py-2 pb-1 border hover:shadow-lg rounded-xl z-10 '>
                    <button onClick={()=>clickHandler()} 
                      className='text-bold text-2xl' >
                        {darkTheme ? <MdDarkMode />: <MdOutlineLightMode />}
                    </button>
                </div>
            </div>
            <div className='w-full'><Search/></div>
          </div>
  )
}

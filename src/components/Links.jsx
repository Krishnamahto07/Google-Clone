import React from 'react'
import { NavLink } from 'react-router-dom'

export const Links = () => {
    const links = [
        { url:"/search" , text:"all"},
        { url:"/imagesearch" , text:"image"},
        { url:"/news" , text:"news"},
        { url:"/latestnews" , text:"latestnews"},
    ]
  return (
    <div className='flex justify-around gap-5'>
        {
            links.map((link,index) =>{
                return (
                    <NavLink key={index} to={link.url}  >{link.text}</NavLink>
                )
            })
        }
    </div>
  )
}

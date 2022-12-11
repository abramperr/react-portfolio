import React, { useState } from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";
const NavBar = () => {
    // const links=[{id:1,link:'Home'},{id:2,link:'about'},{id:3,link:'portfolio'},{id:4,link:'experience'},{id:5,link:'Contact'}]
    const links =[ {id:1,link:'home'},{id:2,link:'portfolio'}, {id:3, link:'about'},{id:4,link:'experience'},{id:5,link:'contact'}]
    const [nav,setNav]=useState(false)
    return (
    <div className="flex bg-black h-20 items-center w-full text-white fixed px-4 justify-between">
        <div>
            <h1 className='text-5xl font-signature ml-2  hover:scale-110 hover:text-yellow-500'>Abhijeet</h1>
        </div>

        <ul className=' hidden md:flex  px-2'>
        
            {links.map( ({id,link})=>{
                return(
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105  hover:text-yellow-500 duration-200'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
                   )
            })}
        
        </ul>
        
        <div onClick={()=>setNav(!nav)} className='md:hidden cursor-pointer pr-4 z-10 text-gray-500 hover:text-yellow-500'>
            {
                nav ? <FaTimes size={30}/> : <FaBars size={30}/>
            }
            
        </div>
       {nav && 
       <ul className='flex flex-col justify-center items-center absolute left-0 top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({id, link})=>{
                    return(
                        <li key={id} className='px-4 capitalize cursor-pointer py-6 text-4xl '>
                            <Link to={link} onClick={()=>{setNav(false)}} smooth duration={500}>{link}</Link>
                        
                        </li>
                    )
                })}
        </ul>}
        

    </div>
  )
}

export default NavBar
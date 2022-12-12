import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {FiPhone} from "react-icons/fi";
const SocialLinks = () => {
    const links= [
        {
            id:1,
            child: (
                <>
                    LinkedIn <FaLinkedin  color='white' size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/abhijeet-nayak-5292761b4/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    Github <FaGithub  color='white' size={30}/>
                </>
            ),
            href:'https://github.com/abramperr',
            
        },
        {
            id:3,
            child: (
                <>
                    Mail <HiOutlineMail  color='white' size={30}/>
                </>
            ),
            href:'mailto:abhijeet13121999@gmail.com',
           
        },
        
            {
                id:4,
                child: (
                    <>
                        Call Me<FiPhone size={25}></FiPhone>
                    </>
                ),
                href:"tel:7978395467"
            },
        {
            id:5,
            child: (
                <>
                    Resume <BsFillPersonLinesFill  color='white' size={30}/>
                </>
            ),
            href:'/resume.pdf',
            style:'rounded-br-md',
            download:true,
        }
    ]
    const links2= [
        {
            id:1,
            child: (
                <>
                     <FaLinkedin  color='white' size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/abhijeet-nayak-5292761b4/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    <FaGithub  color='white' size={30}/>
                </>
            ),
            href:'https://github.com/abramperr',
            
        },
        {
            id:3,
            child: (
                <>
                    <HiOutlineMail  color='white' size={30}/>
                </>
            ),
            href:'mailto:abhijeet13121999@gmail.com',
           
        },
        {
            id:4,
            child: (
                <>
                    <FiPhone size={25}></FiPhone>
                </>
            ),
            href:"tel:7978395467"
        },
        {
            id:5,
            child: (
                <>
                    <BsFillPersonLinesFill  color='white' size={30}/>
                </>
            ),
            href:'/resume.pdf',
            style:'rounded-br-md',
            download:true,
        }
    ]
    return (
      <div>

        <div className='hidden  lg:flex flex-col fixed top-[35%] left-0 '>
            <ul>
                {links.map((link)=>{
                    return(
                        <li key={link.id} 
                        className={'hover:cursor-pointer bg-gradient-to-r from-gray-800 via-gray-800 to-gray-600 flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:duration-500 hover:rounded-md hover:ml-[-10px] '+ link.style} >
                        
                        <a 
                            className=' hover:duration-500 flex justify-between items-center w-full text-white'
                            download={link.download}
                            target="_balnk"
                            href={link.href}
                            rel="noreferrer"
                            >
                            {link.child} 
                        </a>
                        </li>
                    )
                })}
                {/* <li className='flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:duration-300 hover:rounded-md hover:ml-[-10px]'> 
                    <a className='flex justify-between items-center w-full text-white'  href="">
                    <>
                    LinkedIn <FaLinkedin  color='white' size={30}/>
                    </>
                    </a>
                </li> */}
            </ul>
        </div>

        <div className='lg:hidden rounded-t-md fixed px-9 py-1 bottom-0 align-middle bg-gray-600 flex justify-between w-full' >
            {links2.map((link)=>{
                return(
                        <a className='text-white justify-between cursor-pointer align-middle hover:text-cyan-400 hover:scale-110 '
                            download={links.download}
                            href={link.href}
                            target="_blank" 
                            rel="noreferrer"  
                        >
                            {link.child}
                        </a>
                )
            })}
        </div>
     </div>
  )
}

export default SocialLinks;
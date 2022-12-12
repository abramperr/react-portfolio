import React from 'react';
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import graphql from "../assets/graphql.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import linux from "../assets/linux.png";
import node from "../assets/node.png";
import sql from "../assets/database.png";

const Experience = () => {

    const experiences = [
        {
            id:2,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-400'
        },
        {
            id:3,
            src:javascript,
            title:'javascript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:reactImage,
            title:'React',
            style:'shadow-blue-500'
        },
        {
            id:5,
            src:graphql,
            title:'GraphQL',
            style:'shadow-pink-400'
        },
        {
            id:5,
            src:tailwind,
            title:'Tailwind',
            style:'shadow-sky-500'
        },
        {
            // for linux
            id:5,
            src:linux,
            title:'Linux',
            style:'shadow-sky-500'
        },
        {
            // for node 
            id:5,
            src:sql,
            title:'SQL',
            style:'shadow-sky-500'
        },
        {
            // for sql
            id:5,
            src:node,
            title:'Node.js',
            style:'shadow-sky-500'
        },
        {
            
                id:5,
                src:github,
                title:'GitHub',
                style:'shadow-gray-500'
            
        }
    ]

  return (
    <div name='experience' className='w-full  h-screen bg-gradient-to-br from-[#810CA8] via-black text-white to-black justify-center '>
        <div className='max-w-screen-lg mx-auto pt-10 p-4  flex flex-col justify-center w-full h-full text-white'>
            <div className=''>
                <p className=' inline text-4xl font-bold border-b-4 border-gray-500 p-2'>Experience</p>
                <p className='py-6 px-3 text-xl'>These are the Technologies I have worked on </p>
            </div>

            <div  className='w-full grid grid-cols-2 sm:grid-cols-3 gap-10 px-12 sm:px-0'>
            {experiences.map(({id,src,title,style})=>{
                return(
                    
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                        <img src={src} alt="" className='w-20 mx-auto' />
                        <p className='mt-4 text-center '>{title}</p>
                    </div>
                    
                    )
                })}
            </div>
            
           
        </div>
    </div>
  )
}

export default Experience;
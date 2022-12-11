import React from 'react';
import portfolio2 from '../assets/portfolio/portfolio-2.png'
import usability from "../assets/portfolio/usability.png"
import navbar from "../assets/portfolio/navbar.jpg"

const Portfolio = () => {
    const portfolios=[
        {
            id:1,
            src: portfolio2
        },
        {
            id:2,
            src: usability
        },
        {
            id:3,
            src:navbar
        }
    ]
  return (
    <div name='portfolio' className='bg-gradient-to-tl from-black via-black to-[#2D033B] w-full h-full text-white md:h-screen' >

        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8' >
                <p className='text-4xl font-bold border-b-4 inline border-b-gray-500' >Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                {portfolios.map((portfolio)=>{
                    return(
                        <div className='shadow-md shadow-gray-600 rounded-lg'>
                            <img className='rounded-md duration-200 hover:scale-105' src={portfolio.src} alt="" />
                            <div className='flex justify-between items-center p-2'>
                                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;
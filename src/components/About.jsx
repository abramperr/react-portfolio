import React from 'react'
import {FiPhone} from "react-icons/fi";
const About = () => {
  return (
    
    <div name="about" className='w-full h-screen bg-gradient-to-bl  via-black from-black to-[#810CA8]  text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 px-5'>
                <p className="about text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <div>
                <p className='text-xl mt-10 px-5'>
                This is Abhijeet, obsessed with creating responsive and vivid web applications
                </p>
                <br/>
                <p className='text-xl px-5 flex flex-col '>
                Currently learning and creating apps using React, Node. Learning express, Mongo DB and aiming to become a full stack web-developer (MERN). Get in Touch with me for more awesome works.  

                <button className=' flex justify-center items-center px-6  py-3'><a class="lft" href="tel:7978395467" className=''><FiPhone size={30}/> call me </a></button>
                    </p>
            </div>
        </div>
    </div>
  )
}

export default About;
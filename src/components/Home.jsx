import React from 'react';
import {Link} from "react-scroll";
import heroImage from '../assets/heroImage.png';
import{IoIosArrowForward} from "react-icons/io";
import { useState, useEffect } from 'react';

const Home = () => {
    
    const [text,setText]=useState('');
    const period =2000;
    const [delta, setDelta] =useState(300 - Math.random()*100);
    const toRotate=["Learning Full-Stack", "Front-End Developement", "Linux", "Database Management","React" ];
    const [loopNum, setLoopNum] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
    useEffect(()=>{
        
        const tick = () => {
            let i = loopNum % toRotate.length;
            let fullText= toRotate[i]
            let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0,text.length +1)
            // setting up condition to delete or append the text const 
            setText(updatedText);
    
            if (isDeleting){
                setDelta(prevDelta => prevDelta/2)
            }
    
            if (!isDeleting && updatedText === fullText){
                setIsDeleting(true);
                setDelta(period);
            }else if (isDeleting && updatedText === ''){
                setIsDeleting(false);
                setLoopNum(loopNum +1);
                setDelta(300);
            }
        }
        
        const ticker = setInterval(()=>{
            tick();
        },delta)
        return()=>{clearInterval(ticker)};
    },[text])

    
  return (
    <div name="home" className='md:px-20 md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 h-screen '>
        {/* <img src={heroImage} alt="" /> */}
        <div className=' text-white max-w-screen-lg mx-auto p-10 flex flex-col items-center justify-center h-full px-4 md:flex-row '>
            <div className=' mt-1 md:mt-20 flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold'> Hi I am Abhijeet</h2>
                <h2 className='text-3xl sm:text-5xl font-bold'> Having Interests in <span className='text-cyan-300'>{text}</span> </h2>
                <p className='text-gray-300 py-4 px-2 '>
                    An Aspiring full stack Developer with 1+ years of back-end experience.

                    Currently I am in love with making web applications using technologies like 
                    React, tailwind, JS and eager to learn new technologies and building awesome web-apps  
                </p>
                <div className='flex-row'>
                <Link to='portfolio' smooth duration={500}>
                    <button className=' group text-black w-fit px-6 py-3 my-2
                     flex items-center rounded-md bg-gradient-to-r from-slate-300
                      via-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio <span className='group-hover:rotate-90 duration-300'> <IoIosArrowForward/> 
                       
                        </span> 
                    </button>
                </Link>
                </div>
            </div>
            <div><img className='rounded-md shadow-md max-h-52  md:max-h-96 md:w-62 md:mx-4 ' src={heroImage} alt="my profile" /></div>
            
        </div>
        <div className='spacer h-full'></div>
    </div>
  )
}

export default Home;
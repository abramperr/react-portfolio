import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full   md:h-[110vh] h-[110vh]  bg-gradient-to-b  text-white from-black p-4  via-[#2D033B] to-[#540375] '>
        <div className='max-w-screen-lg flex flex-col mx-auto pt-35 md:pt-25 align-middle justify-center w-full h-full '>
            <div className='py-8'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 inline'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/38a83ce5-0079-4f1b-b514-80784dbc1925" method='POST' className='flex flex-col gap-3 w-full md:w-1/2'>
                    <input type="text" name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-lg text-white foucs:outline-none' />
                    <input type="email" name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-lg text-white foucs:outline-none' />
                    <textarea name="message" id="" cols="30" rows="10" className='p-2 bg-transparent border-2 rounded-lg focus:outline-none text-cyan-400' placeholder='Message'></textarea>
                    <button className=' text-white bg-gradient-to-b from-cyan-600 to-blue-900 my-8 mx-auto items-center px-6 py-3 rounded-md hover:scale-105 duration-200 font-bold'>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact;
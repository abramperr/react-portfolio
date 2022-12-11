import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-bl  via-black from-black to-[#810CA8]  text-white'>
        <div className='max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8 px-5'>
                <p className="about text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <div>
                <p className='text-xl mt-10 px-5'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos cupiditate laborum tempora architecto totam nisi reiciendis facere id tenetur repellendus voluptatum nihil molestiae atque exercitationem, reprehenderit quo 
                    magnam eius iure quod magni. Tempora, itaque nostrum!
                </p>
                <br/>
                <p className='text-xl px-5 '>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut sint adipisci tenetur culpa
                     exercitationem vitae perferendis fugit eveniet labore, soluta consequatur, rerum iure ratione praesentium modi tempore mollitia sed officia quaerat optio? Amet iste neque natus ut, earum magni? Ut exercitationem eaque assumenda consequatur pariatur corrupti quasi quam! Neque, delectus.</p>
            </div>
        </div>
    </div>
  )
}

export default About;
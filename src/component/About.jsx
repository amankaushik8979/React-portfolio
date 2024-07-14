import React from 'react'

const About = () => {
  return (
    <div 
    name="about"
    className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >

        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    About
                </p>
            </div>
            <p className="text-xl mt-20">
                This portfolio is a window into my mind as a full-stack developer. As a passionate beginner, I'm constantly learning and building new things.I'm eager to develop my skills and contribute to web projects.
            </p>

            <br />

            <p className="text-xl">
                I craft beautiful user experiences and ensure flawless functionality as a full-stack developer.Explore the projects that bring my vision to web applications, from design to functionality.  
            </p>
        </div>
    </div>
  )
}

export default About
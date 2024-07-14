import React from 'react'
import HeroImage from "../assets/heroImage.jpeg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import {Link} from "react-scroll"
import {useTypewriter, Cursor} from 'react-simple-typewriter'

const Home = () => {
    const [typeEffect]=useTypewriter({
        words: ['Programmer','Full Stack Developer','Software Developer'],
        loop: {},
        typeSpeed: 100,
        deleteSpeed: 40
    })
  return (
    <div 
    name="home" 
    className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
        
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

            <div className="flex flex-col justify-center h-full">

                {/* <h2 className="text-3xl sm:text-6xl font-bold text-white">
                    I'm a Full Stack Developer
                </h2> */}
                <h2 className="text-3xl sm:text-6xl font-bold text-white">
                    I'm a <br />
                    <span>
                        {typeEffect}
                    </span>
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Hi everyone, I'm an aspiring full stack developer! I'm passionate towards building responsive web applications that are visually appealing,easy to navigate and functions seamlessly across different devices and browsers.
                </p>
 
                <div>
                    <Link to="portfolio" smooth duration={500} 
                    className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} 
                        className="ml-1" />
                        </span>
                        
                    </Link>
                </div>
            </div>

            <div>
                <img 
                src={HeroImage} 
                alt="My profile" 
                className="rounded-2xl mx-auto w-2/3 md-w-full" />
            </div>
        </div>
    </div>
  );
};

export default Home
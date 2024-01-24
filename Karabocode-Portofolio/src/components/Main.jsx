import React  from "react";
import {TypeAnimation} from 'react-type-animation'
import {FaTwitter, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";


const Main = () => {
    return (
     <div id = 'main'>
        <img className="w-full h-screen object-cover" src="../src/assets/logo-white.png" alt="" />

        <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
            <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
                    One Puzzle At A Time
                </h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 font-bold text-gray-800"> i'm a 
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Techie',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Coder',
        1000,
        'Developer',
        1000,
        'Gamer',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em',paddingLeft: '5px' , display: 'inline-block' }}
      repeat={Infinity}
    />
                </h2>
                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                <a href="https://twitter.com/kr_khunou" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={20} className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/karabo-khunou-14b725190/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} className="cursor-pointer" />
            </a>
            <a href="https://www.instagram.com/the_inevitable_karabo/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={20} className="cursor-pointer" />
            </a>
            <a href="https://github.com/karabocodes" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} className="cursor-pointer" />
            </a>
                </div>
            </div>

        </div>
     </div>   
    )
}

export default Main
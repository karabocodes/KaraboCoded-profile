import React from "react";
import ProjectsItem from './ProjectsItem';
import { AiOutlineMenu, AiOutlineHome, AiOutlineMail, AiOutlineProject} from 'react-icons/ai';
import twoImg from "../assets/two.jpg";
import puzzleImg from '../assets/puzzle.jpg';
import jobitImg from '../assets/jobit.png';
// import tripguideImg from '../assets/tripguide.png '
//className="text-4xl font-bold text-center text-[#001b5e] w-[75%] flex justify-center  bg-gray-480 shadow-gray-480 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">Education <FaUniversity size={10} /><
const Projects = () =>{
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className=" text-4xl font-bold text-center text-[#001b5e] w-[75%] flex justify-center  bg-gray-480 shadow-gray-480 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">Projects <AiOutlineProject size={15} /></h1>
            <p className="text-centre py-8">This Section is my favourite part The monthly challenge area , every Month ill be posting my favourite projects of the month.
            </p>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProjectsItem img={twoImg} title="a"/>
                <ProjectsItem img={puzzleImg} title="a"/>
                <ProjectsItem img={jobitImg} title="a"/>
                {/* <ProjectsItem img={tripguideImg} title=""/> */}
            </div>
        </div>
    );
};

export default Projects
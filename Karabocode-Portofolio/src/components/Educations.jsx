import React from "react";
import Educationitem from './Educationitem'
import { FaUniversity } from "react-icons/fa";

const data = [
    {
        year: "2022 - 2024",
        School : 'WeThinkCode_',
        title : 'Software Engineering',
        details : 'lorem'
    },

    {
        year: "2021 - Present",
        School : 'University Of South Africa',
        title : 'Bcom Business Management',
        details : 'lorem'
    },

    {
        year: "2020 - 2020",
        School : 'University Of South Africa',
        title : 'Higher certifiacte in Marketing',
        details : 'lorem'
    }, 
];

const Education = () => {
    return (
        <div id="education" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            
            <h1  className="text-4xl font-bold text-center text-[#001b5e] w-[75%] flex justify-center  bg-gray-480 shadow-gray-480 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">Education <FaUniversity size={15} /></h1>
            
            {data.map((item, idx) => (
                <Educationitem 
                    key={idx} 
                    year={item.year} 
                    title={item.title} 
                    school={item.School}
                    details= {item.details}
                    // duration= {item.duration}
                />
            ))}
        </div>
        
    );
};

export default Education
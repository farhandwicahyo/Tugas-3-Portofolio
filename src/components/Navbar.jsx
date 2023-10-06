import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [ nav, setNav ] = useState(false);

    const link =[
    {
        id: 1,
        link: 'home'
    },
    {
        id: 2,
        link: 'about'
    },
    {
        id:3,
        link: 'Experience'
    },
    {
        id:4,
        link: 'portofolio'
    },
    {
        id:5,
        link: 'Skills'
    },
    {
        id:6,
        link: 'Certification'
    },
    {
        id:7,
        link: 'contact'
    },
]

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed z-10">
        <div>
            <h1 className="text-5xl font-signature ml-2">Farhan Dwicahyo</h1>
        </div> 

        <ul className="hidden md:flex">
            {link.map(({id, link}) => (
                <li 
                    key={id} 
                    className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
                >
                    <a href={`#${link}`}>
                    {link}
                    </a>
                </li>
            ))}
        </ul>

        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ?  <FaTimes  size={30} /> : <FaBars size={30} />}
        </div>

        {nav &&(
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                
                {link.map(({id, link}) => (
                    <li 
                    onClick={() => setNav(false)}
                        key={id} 
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                    >
                        <a href={`#${link}`}>
                    {link}
                    </a>
                    </li>
                ))}
            </ul>
        )}


    </div>                                                                                              
  );
};

export default Navbar
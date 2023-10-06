import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import ci from "../assets/ci.png";
import postgresql from "../assets/postgresql.png";
import next_js from "../assets/next_js.png";

const Skills = () => {

    const techs =[
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500' 
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500' 
        },
        {
            id: 3,
            src: js,
            title: 'Javascript',
            style: 'shadow-yellow-300' 
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-cyan-300' 
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-teal-300' 
        },
        {
            id: 6,
            src: github,
            title: 'GitHub',
            style: 'shadow-gray-400' 
        },
        {
            id: 7,
            src: ci,
            title: 'CodeIgniter',
            style: 'shadow-orange-800' 
        },
        {
            id: 8,
            src: postgresql,
            title: 'PostgreSQL',
            style: 'shadow-sky-600' 
        },
        {
            id: 9,
            src: next_js,
            title: 'Next.js',
            style: 'shadow-slate-100' 
        },
        
    ]

  return (
    <div id='Skills' className="bg-gradient-to-b from-black to-gray-800 w-full pt-20 md:pt-40 ">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white"> 
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline pt-24">Skills</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-1 px-12 sm:px-0">
                {
                    techs.map(({id, src, title, style}) => (
                        
                            <div 
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto"/>
                                <p className="mt-4">{title}</p>
                            </div>
                        
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Skills
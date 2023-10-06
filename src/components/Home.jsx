import React from 'react'
import HeroImage from "../assets/heroImage.png"
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div id="home" className="flex h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row md:pb-96 pt-24 md:pt-72 gap-8">
            <div className="flex flex-col justify-center items-center md:items-start h-full">
                <h2 className="text-4xl sm:text-5xl font-bold text-white pt-0 md:pt-0  md:text-left text-center">
                    I'm Supply Chain Management & IT Enthusiast
                </h2>

                <p className="text-gray-500 py-4 max-w-md md:text-justify text-center">
                Informatics Student at Diponegoro University | Ex Supply Chain Management Intern at PT Biofarma | Ex Supply Chain Management Intern at PT Rajawali Nusantara Indonesia | Ex General Affairs and Procurement Intern at PT Bhanda Ghara Reksa | Independent Study at Hacktiv8.
                </p>

                <div>
                    <button className="group text-white w-fit px-6 py-3 my-0 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                        Portofolio 
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </button>
                </div>

            </div>

            <div>
                <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>
  );
};

export default Home;
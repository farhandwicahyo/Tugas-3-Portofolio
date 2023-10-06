import React from "react";
import SIAKIF from "../assets/SIAKIF.jpg";
import vms from "../assets/vms.jpg";
import calculator from "../assets/calculator.jpg";
import fetchApi from "../assets/fetch-api.jpg";
import Porto from "../assets/porto.jpg";
import Bookorama from "../assets/bookorama.jpg";

const Portfolio = () => {

    const portofolios = [
        {
            id:1,
            src:SIAKIF,
            name:'Sistem Informasi Akademik IF'
        },
        {
            id:2,
            src:vms,
            name:'Vendor Management System'
        },
        {
            id:3,
            src:calculator,
            name:'Online Calculator'
        },
        {
            id:4,
            src:fetchApi,
            name:'Display Currency Rates'
        },
        {
            id:5,
            src:Porto,
            name:'Farhan Dwicahyo Portofolio`s '
        },
        {
            id:6,
            src:Bookorama,
            name:'Bookorama with Next.js'
        },
    ]

  return (
    <div id="portofolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen pt-20 md:pt-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Portfolio</p>
          <p className="py-6">Check out my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 px-12 sm:px-0">
            {
                portofolios.map(({id, src, name}) => (
                    <div key={id} className="rounded-lg">
                            <p className="text-center py-2 text-lg font-semibold">{name}</p>
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                            <div className="flex items-center justify-center shadow-md shadow-gray-600 rounded-lg">
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                            </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

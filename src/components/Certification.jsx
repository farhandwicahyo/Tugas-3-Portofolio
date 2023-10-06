import React from "react";
import BGR from "../assets/sertif-bgr.jpg";
import RNI from "../assets/sertif-rni.jpg";
import BF from "../assets/sertif-biofarma.jpg";
import ISO from "../assets/sertif-iso.jpg";
import HACCP from "../assets/sertif-haccp.jpg";
import GMP from "../assets/sertif-gmp.jpg";
import FSSC from "../assets/sertif-fssc.jpg";

const Certification = () => {

    const Certification = [
        {
            id:1,
            src:BGR,
            name: "Sertifikat BGR"
        },
        {
            id:2,
            src:RNI,
            name: "Sertifikat RNI"
        },
        {
            id:3,
            src:BF,
            name: "Sertifikat BF"
        },
        {
            id:4,
            src:ISO,
            name: "Sertifikat ISO22000"
        },
        {
            id:5,
            src:HACCP,
            name: "Sertifikat Hazard Analysis and Critical Control Point"
        },
        {
            id:6,
            src:GMP,
            name: "Sertifikat Goods Manufacturing Practices"
        },
        {
            id:7,
            src:FSSC,
            name: "Sertifikat Food Safety System Certification"
        },
    ]

  return (
    <>

    <div  className="bg-gradient-to-b from-gray-800 to-black w-full text-white ">
<div id="" className=" md:pb-24 "></div>
<div id="Certification" className=" md:pb-16 pt-20"></div>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-3">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Certification</p>
                <p className="py-6">These are the certificates that have been achieved</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {
                    Certification.map(({id, src, name}) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
                                <img src={src} alt="" className="hover:scale-125 duration-200 rounded-md" />
                                <p className="px-6 py-3 m-4 duration-200 hover:scale-105 text-center">{name}</p>
                            </div>
                    ))
                }
            </div>
        </div>
    </div>

    </>


  )
}

export default Certification
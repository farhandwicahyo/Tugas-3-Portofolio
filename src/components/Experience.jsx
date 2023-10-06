import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import expBF from "../assets/exp-bf.jpg";
import expRNI from "../assets/exp-rni.jpg";

const Experience = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const Experience = [{
    id: 1,
    src: expRNI,
    tittle: "In my first task, I'm responsible for optimizing IT integration in logistics between BULOG and IDFOOD to enhance supply chain efficiency. In the second task, I'm organizing training and information sessions for subsidiaries on the ARLITA application to support the Supply Chain Control Tower program. Additionally, I'm creating a user guide video for the Supply Chain Control Tower application. I'm also actively participating in meetings within the Cold Chain industry to improve temperature-sensitive goods` storage and transportation. Lastly, I`m developing a dummy Vendor Management System application to streamline vendor interactions and procurement processes.",
  },
  {
    id: 2,
    src: expBF,
    tittle:'During the internship, I was involved in increasing the integration of information technology in logistics and supply chain at PT Biofarma. Learn about business processes, forecasting, smart forecasting, COGS, and S&OP for companies. Using Looker Studio for data visualization and mastering SAP ERP applications and MRP modules. Contribution to understanding the integration of supply chain and demand management for the pharmaceutical industry. Improve analytical, communication and collaboration skills in a dynamic business environment. Passionate to contribute to projects relevant to logistics and information technology.',
  },
]

  return (
    <div id="Experience" className="bg-gradient-to-b from-black to-gray-800 w-full text-white pt-20 md:pt-32 md:pb-28">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Experience</p>
          <p className="py-6">These are my work experiences</p>
        </div>

        <div className="shadow-md shadow-gray-600 rounded-lg">

        <Slider {...settings}>
          {
          Experience.map(({id, tittle, src}) => (
          <div key={id} className=" ">
            <div className="flex md:flex-row flex-col items-center rounded-lg p-10 gap-5">
            <div className="">
              <div className="rounded-lg">
                <div className="">
                  <img src={src} className="h-96 rounded-md md:rounded-l" alt="" />
                </div>
              </div>
            </div>
            <div className="flex-1"> 
              <div className="rounded-lg">
                <div>
                  <p className="text-justify md:text-justify">{tittle}</p>
                </div>
              </div>
            </div>
            </div>
          </div>
          ))
        }
        </Slider>
        </div>

      </div>
    </div>
  );
};

export default Experience;

import React from "react";

const About = () => {
  return (
    <div
        id="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-96 md:pt-0"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-96 md:pb-0">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>

            <p className="text-xl text-justify">I am a forward-thinking IT enthusiast pursuing my education at Diponegoro University. With expertise in cutting-edge frameworks like CodeIgniter and Navicat, I possess a solid foundation in web development. Additionally, I am actively expanding my skill set by exploring various other frameworks. </p>

            <br/>

            <p className="text-xl text-justify">However, my passion extends beyond the realm of technology. I am deeply intrigued by the dynamics of Supply Chain Management, Logistics, Trading, and Exporting. My goal is to seamlessly integrate my IT proficiency with these domains, unlocking innovative solutions and driving operational excellence.</p>

            <br/>

            <p className="text-xl text-justify">As an aspiring professional, I am committed to staying abreast of emerging trends and industry advancements. With a meticulous attention to detail and a knack for problem-solving, I am confident in my ability to contribute meaningfully to the field. I am excited to collaborate with like-minded individuals and organizations to forge new paths and make a lasting impact in the world of technology-driven business ventures.</p>

        </div>
    </div>
  );
};

export default About
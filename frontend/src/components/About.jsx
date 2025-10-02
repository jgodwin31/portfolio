import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="md:flex md:space-x-6">
        <div className="md:w-1/2">
          <p className="text-gray-300 mb-4">
            Hi! I'm Joshua, a second-year Computer Science student at IIT focused on Data and AI. I love building projects that combine software engineering, AI, and data analytics.
          </p>
          <p className="text-gray-300">
            Skills: React, Python, MongoDB, Flask, Tailwind, MIPS simulation, AI tools, and more.
          </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img
            src="https://via.placeholder.com/200"
            alt="Profile"
            className="rounded-full border-4 border-blue-400"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl md:text-6xl font-bold mb-4">Joshua Godwin</h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-6">
        Data & AI Enthusiast | Software Developer | Innovator
      </p>
      <a
        href="#resume"
        className="bg-blue-600 px-6 py-3 rounded-lg text-white font-medium hover:bg-blue-500 transition"
      >
        View Resume
      </a>
    </section>
  );
};

export default Hero;

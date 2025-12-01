import React from "react";
import { motion as Motion } from "framer-motion";

const tech = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "Express", "MongoDB", "Tailwind", "Git", "API", 
  "Figma", "Next.js", "Firebase"
];

function Hero() {
  return (
    <section className="w-full bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* LOCATION */}
        <p className="text-gray-400 mb-2">Abuja, Nigeria</p>

        {/* NAME AND TITLE */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          I’m Oyovwevotu Kelvin
          <br />
          Web Developer
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto mt-4">
          I specialize in researching, designing, and building beautiful and
          effective websites to help you stand out from the competition.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-2 font-semibold rounded-lg">
            Get yours now
          </button>

          <button className="border border-gray-500 px-6 py-2 rounded-lg">
            See my work
          </button>
        </div>

        {/* TECHNOLOGIES MOVING LINE */}
        <div className="overflow-hidden mt-12">
          <Motion.div
            className="flex gap-10 text-gray-400 text-lg whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {tech.map((item, index) => (
              <span key={index} className="mx-6 opacity-75">
                {item}
              </span>
            ))}

            {/* Duplicate for continuous scrolling */}
            {tech.map((item, index) => (
              <span key={"dup-" + index} className="mx-6 opacity-75">
                {item}
              </span>
            ))}
          </Motion.div>
        </div>

      </div>
    </section>
  );
}

export default Hero;
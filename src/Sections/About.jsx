import React from 'react';
import { motion as Motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="w-full py-24 px-6 bg-gray-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text glow">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto glow rounded-full" />
        </Motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Strategic mindset content */}
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Strategic Builder, Not Just Coder
            </h3>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Self-taught developer with entrepreneur mindset. I don't just write code – I build systems that scale businesses. 
              From payment integrations that handle real transactions to export platforms connecting Nigeria to Dubai markets.
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Hands-on with full-stack apps, but my edge is turning ideas into revenue-generating products. 
              Looking for partners who want to build in silence, then dominate.
            </p>
            <Motion.div 
              className="glow-hover"
              whileHover={{ scale: 1.05 }}
            >
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl glow transition-all">
                Partner with Me
              </button>
            </Motion.div>
          </Motion.div>

          {/* Right: Stats or image placeholder */}
          <Motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left"
          >
            <div className="grid grid-cols-2 gap-8">
              <div className="glow-hover p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20">
                <div className="text-4xl font-bold text-blue-400 neon-text">5+</div>
                <div className="text-gray-400 mt-2">Projects Deployed</div>
              </div>
              <div className="glow-hover p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20">
                <div className="text-4xl font-bold text-purple-400 neon-text">2+</div>
                <div className="text-gray-400 mt-2">Business Ideas Live</div>
              </div>
              <div className="glow-hover p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20">
                <div className="text-4xl font-bold text-green-400 neon-text">100%</div>
                <div className="text-gray-400 mt-2">Production Ready</div>
              </div>
              <div className="glow-hover p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/20 col-span-2 md:col-span-1">
                <div className="text-4xl font-bold text-indigo-400 neon-text">24/7</div>
                <div className="text-gray-400 mt-2">Builder Mode</div>
              </div>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

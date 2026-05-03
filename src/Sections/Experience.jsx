import React from 'react';
import { motion as Motion } from 'framer-motion';
import Button from '../Components/Button';
import { Calendar, Code2, Server, Zap, Award } from 'lucide-react';
import { experience } from '../data/experience';

function Experience() {
  return (
<section id="experience" className="w-full py-16 md:py-24 px-4 md:px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent neon-text glow">
            Experience Timeline
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Hands-on journey building real-world applications and systems.
          </p>
        </Motion.div>

        <div className="relative">
          {/* Vertical Timeline Line - left aligned for mobile */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500/30 to-teal-500/30 glow" />
          
          <div className="space-y-8 md:space-y-12">
            {experience.map((exp, index) => (
              <Motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex md:flex-row gap-4 md:gap-8 items-start pl-1 md:pl-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-6 w-4 h-4 md:w-6 md:h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full glow shadow-xl border-2 md:border-4 border-black z-10" />

                {/* Content */}
                <div className="flex-1 p-4 md:p-8 rounded-2xl bg-gray-900/50 backdrop-blur-md border border-white/20 glow-hover hover:border-emerald-500/50 transition-all md:w-2/3">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl glow flex-shrink-0">
                      <Calendar className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-4 mb-2">
                        <span className="text-3xl font-black text-emerald-400 neon-text">{exp.year}</span>
                        <span className="text-sm text-gray-500 uppercase tracking-wider">—</span>
                        <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      </div>
                      <p className="text-gray-400 mb-4">{exp.company}</p>
                      <p className="text-gray-300 leading-relaxed">
                        {exp.desc}
                      </p>
                    </div>
                  </div>

                  {/* Tech/Role Icons */}
                  <div className="flex gap-3 mt-6">
                    <div className="glow-hover p-2 rounded-lg bg-emerald-500/20 border border-emerald-500/40">
                      <Code2 className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div className="glow-hover p-2 rounded-lg bg-teal-500/20 border border-teal-500/40">
                      <Server className="w-5 h-5 text-teal-400" />
                    </div>
                    <div className="glow-hover p-2 rounded-lg bg-purple-500/20 border border-purple-500/40">
                      <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-24"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 p-4 rounded-2xl border border-emerald-500/30 glow mb-8">
            <Award className="w-6 h-6 text-emerald-400" />
            <span className="font-semibold text-emerald-300">Production Deployed • Revenue Generated • Business Impact</span>
          </div>
          <Button 
            name="Get In Touch" 
            style="glow-hover bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl glow hover:scale-105 transition-all border-0"
          />
        </Motion.div>
      </div>
    </section>
  );
}

export default Experience;

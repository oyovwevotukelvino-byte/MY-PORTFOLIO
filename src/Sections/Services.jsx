import React from 'react';
import { motion as Motion } from 'framer-motion';
import Button from '../Components/Button';
import { skills } from '../data/skills';
import { Laptop, Code, Database, Paintbrush, TrendingUp } from 'lucide-react';

function Skills() {
  const getIcon = (title) => {
    switch (title) {
      case 'Full-Stack Development': return Laptop;
      case 'Payment Integrations': return Code;
      case 'API & Backend': return Database;
      case 'UI/UX Design': return Paintbrush;  // was DesignTools
      case 'Business Scaling': return TrendingUp;
      default: return Laptop;
    }
  };

  return (
    <section id="skills" className="w-full py-24 px-6 bg-black/30 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text glow">
            Skills &amp; Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-xl">
            Real-world tools I use to build scalable digital products and businesses.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-4 glow rounded-full" />
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = getIcon(skill.title);
            return (
              <Motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group glow-hover p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-white/20 cursor-pointer transition-all hover:bg-blue-500/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 glow group-hover:glow-hover">
                    <Icon className="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-gray-200">
                      {skill.desc}
                    </p>
                  </div>
                </div>
              </Motion.div>
            );
          })}
        </div>

        <Motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <Button 
            name="See My Projects" 
            style="glow-hover bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl glow hover:scale-105 transition-all border-0"
          />
        </Motion.div>
      </div>
    </section>
  );
}

export default Skills;

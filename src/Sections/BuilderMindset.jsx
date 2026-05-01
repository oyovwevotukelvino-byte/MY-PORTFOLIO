import React from 'react';
import { motion as Motion } from 'framer-motion';
import Button from '../Components/Button';
import { Lightbulb, MapPin, TrendingUp, DollarSign, Zap } from 'lucide-react';

function BuilderMindset() {
  return (
    <section id="mindset" className="w-full py-24 px-6 bg-gradient-to-b from-gray-900/50 to-black/30 border-y border-white/10">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 bg-yellow-500/20 text-yellow-400 px-6 py-3 rounded-full mb-8 glow-hover">
            <Lightbulb className="w-6 h-6" />
            <span className="font-semibold uppercase tracking-wide text-sm">Builder Mindset</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 bg-clip-text text-transparent mb-6 glow">
            Beyond Code
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-xl leading-relaxed">
            Most developers code. I build businesses. Here's what drives my work.
          </p>
        </Motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Export Business */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="glow-hover group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-yellow-500/50 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-2xl glow">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400">
                  Nigeria → Dubai Export
                </h3>
                <p className="text-gray-300">
                  Building platform to connect local supply with global demand. Solving real logistics + commerce problems.
                </p>
              </div>
            </div>
          </Motion.div>

          {/* Problem Solving */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10 }}
            className="glow-hover group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-orange-500/50 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-orange-500/30 to-red-500/30 rounded-2xl glow">
                <TrendingUp className="w-8 h-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400">
                  Real Problem Solving
                </h3>
                <p className="text-gray-300">
                  Focus on applications that generate revenue and scale businesses, not just demos.
                </p>
              </div>
            </div>
          </Motion.div>

          {/* Long-term Vision */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="glow-hover group p-8 rounded-2xl bg-black/40 backdrop-blur-sm border border-white/20 hover:border-red-500/50 transition-all md:col-span-2 lg:col-span-1"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-red-500/30 to-purple-500/30 rounded-2xl glow">
                <DollarSign className="w-8 h-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400">
                  Revenue-First Development
                </h3>
                <p className="text-gray-300">
                  Every line of code works toward business outcomes. Payment systems, commerce platforms, scaling infrastructure.
                </p>
              </div>
            </div>
          </Motion.div>
        </div>

        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-gray-500 text-lg mb-8 italic font-light max-w-2xl mx-auto">
            "Beyond coding, I focus on building systems and businesses. Currently working on exportation and digital commerce ideas."
          </p>
          <Button 
            name="See My Experience" 
            style="glow-hover bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl glow hover:scale-105 transition-all border-0"
          />
        </Motion.div>
      </div>
    </section>
  );
}

export default BuilderMindset;

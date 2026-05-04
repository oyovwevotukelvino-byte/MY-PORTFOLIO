import React from 'react';
import { motion as Motion } from 'framer-motion';
import Button from '../Components/Button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';


function Projects() {
  const featured = projects.find(p => p.featured);
  console.log("IMAGE:", featured?.image);
  const secondary = projects.filter(p => !p.featured);

  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
<section id="projects" className="w-full py-16 md:py-24 px-4 md:px-6 bg-gray-900/30 border-y border-white/10">
      <div className="max-w-7xl mx-auto">
        <Motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6 neon-text glow">
            Featured Projects
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl">
            Real products I've built that solve business problems and generate revenue.
          </p>
        </Motion.div>

        {/* Featured Project - Horizontal */}
        {featured && (
          <Motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glow-hover group mb-12 md:mb-20 rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-2 items-center gap-6 md:gap-12 p-6 md:p-12">
              <div className="order-2 md:order-1">
                <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-1 rounded-full text-sm font-semibold mb-6 glow">
                  Featured Project
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-blue-400 transition-colors">
                  {featured.title}
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
                  {featured.desc}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  {featured.tech.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm glow-hover">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {featured.github && (
                    <Button 
                      name="GitHub" 
                      style="glow-hover bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all border border-gray-600/50 flex items-center gap-2"
                      onClick={() => openLink(featured.github)}
                    >
                      <Github size={20} />
                    </Button>
                  )}
                  {featured.live && (
                    <Button 
                      name="Live Demo" 
                      style="glow-hover bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold glow hover:scale-105 transition-all flex items-center gap-2"
                      onClick={() => openLink(featured.live)}
                    >
                      Live <ExternalLink size={20} />
                    </Button>
                  )}
                  <Button 
                    name="Case Study" 
                    style="glow-hover bg-purple-600/90 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold glow transition-all flex items-center gap-2"
                  >
                    Case Study <ArrowRight size={20} />
                  </Button>
                </div>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="relative z-10 glow-hover group-hover:scale-105 transition-transform">
                  <img 
                    src={featured.image} 
                    alt={featured.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-2xl border-4 border-white/10 group-hover:border-blue-400/50 transition-all"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                </div>
              </div>
            </div>
          </Motion.div>
        )}

        {/* Secondary Projects Grid */}
        <Motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 neon-text">
            Other Notable Projects
          </h3>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondary.map((project, index) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.03 }}
              className="group glow-hover rounded-2xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/20 hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 mb-6 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex gap-3">
                  {project.github && (
                    <button 
                      onClick={() => openLink(project.github)}
                      className="p-2 hover:glow-hover rounded-lg transition-all"
                      title="GitHub"
                    >
                      <Github className="w-5 h-5 text-gray-400 hover:text-white" />
                    </button>
                  )}
                  {project.live && (
                    <button 
                      onClick={() => openLink(project.live)}
                      className="p-2 glow-hover rounded-lg transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5 text-blue-400 hover:text-blue-300" />
                    </button>
                  )}
                </div>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, MessageCircle, ArrowRight } from 'lucide-react';

const contactInfo = [
  {
    id: 1,
    icon: MessageCircle,
    title: 'WhatsApp',
    desc: 'Fastest way to connect',
    link: 'https://wa.me/2347062140486',
    primary: true
  },
  {
    id: 2,
    icon: Mail,
    title: 'Email',
    desc: 'oyovwevotukelvino@gmail.com',
    link: 'mailto:oyovwevotukelvino@gmail.com',
    primary: false
  },
  {
    id: 3,
    icon: Github,
    title: 'GitHub',
    desc: '@oyovwevotukelvino-byte',
    link: 'https://github.com/oyovwevotukelvino-byte',
    primary: false
  },
  {
    id: 4,
    icon: Linkedin,
    title: 'LinkedIn',
    desc: 'Oyovwevotu Kelvin',
    link: 'https://www.linkedin.com/in/oyovwevotukelvin/',
    primary: false
  }
];

function Contact() {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="w-full py-24 px-6 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-4xl mx-auto">
        {/* Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text glow">
            Let's Build Something
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Have an idea or opportunity? Let's build it. I'm available for partnerships, projects, 
            or turning your business concept into reality.
          </p>
          <div className="text-gray-500 text-lg mb-16">
            Primary: WhatsApp (fastest in Nigeria)
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`glow-hover group p-8 rounded-2xl border transition-all cursor-pointer ${
                  contact.primary 
                    ? 'border-emerald-500/50 bg-emerald-500/5 md:col-span-2 shadow-2xl glow' 
                    : 'border-white/20 bg-black/30 hover:border-emerald-400/50 hover:bg-emerald-500/5'
                }`}
                onClick={() => openLink(contact.link)}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className={`p-4 rounded-2xl glow flex-shrink-0 ${
                    contact.primary 
                      ? 'bg-gradient-to-br from-emerald-500/30 to-teal-500/30 border border-emerald-500/40' 
                      : 'bg-white/10 border border-white/30'
                  }`}>
                    <Icon className={`w-8 h-8 ${contact.primary ? 'text-emerald-400' : 'text-gray-400 group-hover:text-emerald-400 transition-colors'}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      contact.primary ? 'text-emerald-400 neon-text' : 'text-white group-hover:text-emerald-400'
                    }`}>
                      {contact.title}
                    </h3>
                    <p className={`text-lg ${contact.primary ? 'text-emerald-300' : 'text-gray-400 group-hover:text-gray-300'}`}>
                      {contact.desc}
                    </p>
                  </div>
                </div>
                <div className={`flex items-center gap-3 mt-auto ${
                  contact.primary ? 'text-emerald-400 font-semibold' : 'text-sm text-gray-500'
                }`}>
                  <span>Click to connect</span>
                  <ArrowRight className={`w-5 h-5 ${contact.primary ? 'ml-auto' : ''} group-hover:translate-x-1 transition-transform`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center border-t border-white/10 pt-16"
        >
          <div className="glow-hover inline-flex items-center gap-3 p-6 bg-black/30 rounded-2xl border border-white/20 max-w-sm mx-auto">
            <MapPin className="w-6 h-6 text-gray-400" />
            <span className="text-gray-400">Abuja, Nigeria • Open to Remote/Global</span>
          </div>
          <p className="text-gray-600 text-sm mt-6">
            © 2025 Oyovwevotu Kelvin. Built in silence.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ServiceSection({ 
  tag, 
  title, 
  description, 
  image, 
  reverse = false,
  dark = true 
}) {
  return (
    <section className={`relative min-h-screen w-full overflow-hidden ${dark ? 'bg-[#0a0a14]' : 'bg-white'}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={`absolute inset-0 ${
          dark 
            ? 'bg-gradient-to-r from-[#0a0a14]/95 via-[#0a0a14]/80 to-[#0a0a14]/40' 
            : 'bg-gradient-to-r from-white/95 via-white/80 to-white/40'
        } ${reverse ? 'md:bg-gradient-to-l' : ''}`} />
      </div>

      {/* Content */}
      <div className={`relative z-10 min-h-screen flex items-center ${reverse ? 'md:justify-end' : 'md:justify-start'}`}>
        <div className={`w-full md:w-1/2 px-8 md:px-16 lg:px-24 py-20 ${reverse ? 'md:pr-24' : 'md:pl-24'}`}>
          <motion.div
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={`inline-block text-sm uppercase tracking-[0.2em] mb-6 ${
              dark ? 'text-white/50' : 'text-gray-500'
            }`}>
              {tag}
            </span>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6 ${
              dark ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h2>
            <p className={`text-lg mb-8 max-w-lg ${dark ? 'text-white/70' : 'text-gray-600'}`}>
              {description}
            </p>
            <motion.button
              whileHover={{ x: 10 }}
              className={`flex items-center gap-3 font-medium ${
                dark ? 'text-white hover:text-white/80' : 'text-gray-900 hover:text-gray-600'
              } transition-colors`}
            >
              Conocé más
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

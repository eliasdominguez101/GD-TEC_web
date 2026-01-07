import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/70 via-[#0a0a14]/50 to-[#0a0a14]/90" />
      </div>

      {/* Promo Banner */}
      <motion.div 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute top-20 left-0 right-0 z-10"
      >
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-2 flex items-center gap-3">
            <span className="text-white/80 text-sm">Todos los miércoles y viernes</span>
            <span className="text-white font-semibold">3 cuotas sin interés</span>
          </div>
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-4xl"
        >
          <span className="inline-block text-white/60 text-sm uppercase tracking-[0.3em] mb-6">
            Soluciones en Climatización
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-8">
            Diseñamos sistemas{' '}
            <span className="font-medium">eficientes</span>,{' '}
            <br className="hidden md:block" />
            con tecnología de vanguardia
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Somos un grupo de profesionales especializados en climatización.
            Analizamos cada aspecto de tu proyecto.
          </p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-white text-[#0a0a14] font-medium rounded-full hover:bg-white/90 transition-colors"
          >
            Conocé más
          </motion.button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-white/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Zap, Sun, Droplets } from 'lucide-react';

const features = [
  { icon: Leaf, label: 'Sustentable' },
  { icon: Zap, label: 'Eficiente' },
  { icon: Sun, label: 'Solar' },
  { icon: Droplets, label: 'Bajo consumo' },
];

export default function EnergySection() {
  return (
    <section className="relative bg-[#0a0a14] py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Globe */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 rounded-full border border-blue-500/30" />
          <div className="absolute inset-8 rounded-full border border-blue-500/20" />
          <div className="absolute inset-16 rounded-full border border-blue-500/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-green-400 text-sm uppercase tracking-[0.2em] mb-6">
              <Leaf className="w-4 h-4" />
              Eficiencia energética
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
              En GD-TEC instalamos tecnologías{' '}
              <span className="font-medium">eficientes y de bajo impacto</span>{' '}
              para el medioambiente
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-lg">
              Sabemos de la importancia de cuidar nuestro planeta. Es importante reducir 
              nuestro consumo, cambiar nuestros hábitos y convertirnos en usuarios eficientes de energía.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full px-5 py-3"
                >
                  <feature.icon className="w-5 h-5 text-green-400" />
                  <span className="text-white/80 text-sm">{feature.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { value: '40%', label: 'Ahorro energético' },
              { value: '500+', label: 'Proyectos completados' },
              { value: '15+', label: 'Años de experiencia' },
              { value: '100%', label: 'Garantía en instalación' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

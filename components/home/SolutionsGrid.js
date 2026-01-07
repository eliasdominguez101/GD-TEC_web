import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Home, Building2, Smartphone } from 'lucide-react';

const solutions = [
  {
    icon: Home,
    title: 'Residencial',
    description: 'Tu casa, tu lugar. Ese pedacito de mundo que es solo tuyo. ¡Disfrutalo!',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    tag: 'Soluciones en Climatización'
  },
  {
    icon: Building2,
    title: 'Comercial',
    description: 'Una gestión eficiente de los edificios e instalaciones son clave para reducir los costos.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    tag: 'Soluciones en Climatización'
  },
  {
    icon: Smartphone,
    title: 'Smart Home',
    description: 'Tecnología y elegancia hacen tu vida más simple. Control total desde tu smartphone.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80',
    tag: 'Equipamiento'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SolutionsGrid() {
  return (
    <section className="bg-[#0a0a14] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-white/50 text-sm uppercase tracking-[0.2em] mb-4">
            Soluciones en Climatización
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Soluciones a la medida de<br />
            <span className="font-medium">cada espacio y necesidad</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${solution.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/40 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-white/50 text-xs uppercase tracking-wider mb-2">
                  {solution.tag}
                </span>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-medium text-white mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-white/70 text-sm max-w-xs">
                      {solution.description}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:text-[#0a0a14] transition-all duration-300"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white group-hover:text-[#0a0a14]" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

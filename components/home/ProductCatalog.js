import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'Aires Acondicionados',
    image: 'https://images.unsplash.com/photo-1631545806609-e9805be65258?w=600&q=80',
  },
  {
    title: 'Calefacción',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
  },
  {
    title: 'Calefacción de Exterior',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
  },
  {
    title: 'Climatizadores de Piscina',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&q=80',
  },
  {
    title: 'Smart Home',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&q=80',
  },
  {
    title: 'Termotanques Solares',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function ProductCatalog() {
  return (
    <section className="bg-[#f8f9fa] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-gray-500 text-sm uppercase tracking-[0.2em] mb-4">
            Catálogo de Productos
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 leading-tight">
            Tienda GD-TEC®<br />
            <span className="font-medium">La mejor forma de comprar</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/80 via-[#0a0a14]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="flex items-end justify-between">
                  <h3 className="text-lg md:text-xl font-medium text-white leading-tight">
                    {category.title}
                  </h3>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-[#0a0a14] text-white font-medium rounded-full hover:bg-[#0a0a14]/90 transition-colors"
          >
            Ver todo el catálogo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

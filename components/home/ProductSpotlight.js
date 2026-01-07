import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ProductSpotlight() {
  return (
    <section className="relative bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-amber-400 text-sm uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-4 h-4" />
            Productos Recomendados
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-white leading-tight">
            Te presentamos el producto<br />
            <span className="font-medium">estrella de esta temporada</span>
          </h2>
        </motion.div>

        {/* Product Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Product Image */}
              <div className="relative p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-l-3xl" />
                <motion.img
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80"
                  alt="Caldera Baxi"
                  className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-xl"
                />
              </div>

              {/* Product Info */}
              <div className="p-8 md:p-12">
                <span className="inline-block bg-amber-500/20 text-amber-400 text-xs uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                  Producto especial de temporada
                </span>
                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
                  Eficiencia y confort para este invierno
                </h3>
                <p className="text-white/70 mb-8 leading-relaxed">
                  Una de las opciones más elegidas por nuestros clientes es la caldera de condensación, 
                  pensada para quienes buscan máximo confort con el menor consumo posible.
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Alta eficiencia', 'Bajo consumo', 'Silencioso', 'Garantía 5 años'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/60 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-white text-[#0a0a14] font-medium rounded-full hover:bg-white/90 transition-colors"
                  >
                    Conocé más
                  </motion.button>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center justify-center gap-2 px-8 py-4 text-white font-medium"
                  >
                    Contactanos
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

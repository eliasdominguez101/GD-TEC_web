import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'LG', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/200px-LG_logo_%282015%29.svg.png' },
  { name: 'Bosch', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Bosch-logo.svg/200px-Bosch-logo.svg.png' },
  { name: 'Carrier', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80' },
  { name: 'Daikin', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80' },
  { name: 'Midea', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80' },
  { name: 'Samsung', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80' },
];

export default function BrandsCarousel() {
  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-gray-400 text-sm uppercase tracking-[0.2em]">
            Marcas que nos acompañan
          </h3>
        </motion.div>
      </div>

      {/* Infinite Scroll */}
      <div className="relative">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="flex gap-16 items-center"
        >
          {[...brands, ...brands].map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <div className="bg-gray-100 rounded-lg w-full h-full flex items-center justify-center px-4">
                <span className="text-gray-600 font-semibold text-lg">{brand.name}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

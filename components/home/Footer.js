import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerLinks = {
  productos: ['Aires Acondicionados', 'Calefacción', 'Climatizadores de Piscina', 'Smart Home', 'Termotanques Solares'],
  servicios: ['Residencial', 'Comercial', 'Barrios Cerrados', 'Piso Radiante', 'VRF'],
  empresa: ['Sobre Nosotros', 'Blog', 'Trabaja con Nosotros', 'Contacto'],
};

const socialLinks = [
  { icon: Instagram, href: '#' },
  { icon: Facebook, href: '#' },
  { icon: Linkedin, href: '#' },
  { icon: Youtube, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#050508] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/695d7bfad27b13c53e363711/f18488d23_transparenteletrasblancas.png"
                alt="GD-TEC Logo"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white/50 mb-8 max-w-sm leading-relaxed">
              Soluciones de climatización eficiente con tecnología de vanguardia. 
              Diseño de proyectos a medida. Venta, instalación y servicio posventa.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <social.icon className="w-4 h-4 text-white/60" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/30 mb-6">Productos</h4>
            <ul className="space-y-3">
              {footerLinks.productos.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/30 mb-6">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider text-white/30 mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © 2024 GD-TEC. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="#" className="hover:text-white/60 transition-colors">Términos y Condiciones</a>
              <a href="#" className="hover:text-white/60 transition-colors">Política de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

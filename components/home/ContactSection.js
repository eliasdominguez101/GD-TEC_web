import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Dirección', value: 'Buenos Aires, Argentina' },
  { icon: Phone, label: 'Teléfono', value: '+54 11 4567-8900' },
  { icon: Mail, label: 'Email', value: 'info@climadesign.com.ar' },
  { icon: Clock, label: 'Horario', value: 'Lun - Vie: 9:00 - 18:00' },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="bg-[#0a0a14] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-white/50 text-sm uppercase tracking-[0.2em] mb-4">
              Contacto
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-white leading-tight mb-6">
              ¿Tenés un proyecto?<br />
              <span className="font-medium">Contactanos</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-lg">
              Estamos listos para ayudarte con tu proyecto de climatización. 
              Completá el formulario y nos pondremos en contacto.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-white/60" />
                  </div>
                  <div>
                    <div className="text-white/50 text-sm">{item.label}</div>
                    <div className="text-white">{item.value === 'info@climadesign.com.ar' ? 'info@gd-tec.com' : item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10">
              <div className="space-y-6">
                <div>
                  <label className="block text-white/70 text-sm mb-2">Nombre completo</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Teléfono</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+54 11..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white/70 text-sm mb-2">Mensaje</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Contanos sobre tu proyecto..."
                    rows={5}
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/30 rounded-xl resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-white text-[#0a0a14] hover:bg-white/90 rounded-xl font-medium"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

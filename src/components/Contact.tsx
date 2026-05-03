import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import { DEVELOPER_INFO } from "../constants.ts";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "6281389522061";
    const text = `Halo Areza, saya ${formData.name} (${formData.email}).\n\nPesan: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-12 mb-12">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-muted mb-4">Kontak</h2>
            <h3 className="font-serif text-5xl md:text-8xl font-medium italic">Mari ciptakan <br /> sesuatu yang <span className="text-luxury-muted underline decoration-luxury-border">luar biasa.</span></h3>
          </div>
          
          <div className="lg:col-span-5">
            <p className="text-luxury-muted text-xl leading-relaxed font-sans mb-12 max-w-sm">
              Saya selalu terbuka untuk peluang baru dan kolaborasi yang menarik. Jangan ragu untuk menghubungi.
            </p>
            <div className="space-y-4">
              <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-3xl md:text-4xl font-serif italic hover:text-luxury-muted transition-colors block underline decoration-luxury-border underline-offset-8">
                {DEVELOPER_INFO.email}
              </a>
              <p className="text-sm font-bold uppercase tracking-widest text-luxury-muted">Jakarta, Indonesia</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <motion.form 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-12"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-4 border-b border-luxury-border pb-4 group focus-within:border-white transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-muted">01 Nama Anda</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent p-0 text-xl font-serif italic outline-none"
                    placeholder="Masukkan nama Anda"
                  />
                </div>
                <div className="space-y-4 border-b border-luxury-border pb-4 group focus-within:border-white transition-colors">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-muted">02 Email Anda</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent p-0 text-xl font-serif italic outline-none"
                    placeholder="Masukkan email Anda"
                  />
                </div>
              </div>
              <div className="space-y-4 border-b border-luxury-border pb-4 group focus-within:border-white transition-colors">
                <label className="text-[10px] font-bold uppercase tracking-widest text-luxury-muted">03 Pesan Anda</label>
                <textarea 
                  rows={4} 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent p-0 text-xl font-serif italic outline-none resize-none"
                  placeholder="Ceritakan tentang proyek Anda"
                />
              </div>
              <button 
                type="submit"
                className="flex items-center gap-4 group text-lg font-serif italic border-b border-white pb-2 hover:opacity-70 transition-opacity"
              >
                Kirim Pesan <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

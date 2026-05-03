import { motion } from "motion/react";
import { DEVELOPER_INFO } from "../constants.ts";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-luxury-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-muted mb-4">Perjalanan</h2>
            <h3 className="font-serif text-5xl md:text-7xl font-medium italic">Riwayat Profesional.</h3>
          </div>
          <p className="text-luxury-muted max-w-sm text-sm leading-relaxed">
            Empat tahun dedikasi dalam rekayasa perangkat lunak, berkontribusi pada sistem yang skalabel dan antarmuka pengguna yang intuitif.
          </p>
        </div>

        <div className="space-y-24">
          {DEVELOPER_INFO.experience.map((item, index) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start group"
            >
              <div className="md:col-span-3">
                <p className="text-xs font-mono text-luxury-muted font-bold tracking-tighter group-hover:text-white transition-colors">
                  {item.period}
                </p>
              </div>
              
              <div className="md:col-span-9 border-t border-luxury-border pt-8">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-6">
                  <h4 className="font-serif text-3xl italic tracking-tight">{item.role}</h4>
                  <span className="text-sm font-bold uppercase tracking-widest text-luxury-muted">{item.company}</span>
                </div>
                <p className="text-luxury-muted leading-relaxed font-sans text-lg max-w-3xl">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

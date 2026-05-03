import { motion } from "motion/react";
import { DEVELOPER_INFO } from "../constants.ts";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-muted mb-4 text-left">Peralatan</h2>
            <h3 className="font-serif text-5xl font-medium italic mb-6">Keahlian.</h3>
            <p className="text-luxury-muted text-sm leading-relaxed max-w-xs">
              Pilihan teknologi modern yang dikurasi dengan cermat untuk membangun aplikasi berkinerja tinggi.
            </p>
          </div>
          
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {DEVELOPER_INFO.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4 border-l border-luxury-border pl-6 hover:border-white transition-colors group"
                >
                  <span className="text-[10px] font-mono text-luxury-muted group-hover:text-white transition-colors">0{index + 1}</span>
                  <span className="text-xl font-serif italic">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

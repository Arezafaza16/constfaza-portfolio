import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { DEVELOPER_INFO } from "../constants.ts";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-luxury-surface/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24">
          <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-luxury-muted mb-4">Portofolio</h2>
          <h3 className="font-serif text-5xl md:text-7xl font-medium italic">Karya Terpilih.</h3>
        </div>

        <div className="flex flex-col gap-32">
          {DEVELOPER_INFO.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`lg:col-span-7 aspect-[16/9] overflow-hidden rounded-3xl luxury-card group relative ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none" />
              </div>

              <div className={`lg:col-span-5 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] font-mono text-luxury-muted">0{index + 1}</span>
                  <div className="h-[1px] w-12 bg-luxury-border"></div>
                  <div className="flex gap-2">
                    {project.tech.map(t => (
                      <span key={t} className="text-[9px] uppercase tracking-widest font-bold opacity-60">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h4 className="font-serif text-4xl md:text-5xl italic tracking-tight mb-6">{project.title}</h4>
                <p className="text-luxury-muted text-lg leading-relaxed mb-10 font-sans">
                  {project.description}
                </p>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-luxury-accent pb-2 hover:opacity-70 transition-opacity"
                >
                  Lihat Studi Kasus <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

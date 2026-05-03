import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { DEVELOPER_INFO } from "../constants.ts";

export default function Hero() {
  return (
    <section id="about" className="relative pt-44 pb-24 px-6 min-h-[90vh] flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9] mb-8">
                Menciptakan <span className="italic">karya digital</span> <br /> 
                <span className="text-luxury-muted">terbaik.</span>
              </h1>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex flex-wrap items-center gap-8"
            >
              <p className="text-luxury-muted text-lg max-w-md leading-relaxed font-sans">
               Seorang {DEVELOPER_INFO.title} dengan pengalaman selama 4 tahun dalam membangun solusi perangkat lunak yang inovatif dan skalabel.
              </p>
              <div className="h-[1px] w-24 bg-luxury-border hidden md:block"></div>
              <button className="flex items-center gap-3 group text-xs font-bold uppercase tracking-widest">
                Gulir untuk menjelajah <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[3rem] grayscale hover:grayscale-0 transition-all duration-1000 group"
            >
              <img 
                src="/faza.jpg"
                alt={DEVELOPER_INFO.name}
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 opacity-70">Software Engineer</p>
                <p className="font-serif italic text-2xl">Areza Faza</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-luxury-border/30 -z-10" />
    </section>
  );
}

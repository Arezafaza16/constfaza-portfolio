import { DEVELOPER_INFO } from "../constants.ts";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-luxury-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <a href="#" className="font-serif italic font-bold text-3xl">
            {DEVELOPER_INFO.name}.
          </a>
          <p className="text-luxury-muted text-sm max-w-xs text-center md:text-left">
            Software engineer yang fokus pada menciptakan pengalaman digital luar biasa dengan presisi dan semangat.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
          <div className="flex items-center gap-8">
            <a href={DEVELOPER_INFO.github} className="nav-link text-[10px] font-bold uppercase tracking-widest">GitHub</a>
            <a href={DEVELOPER_INFO.linkedin} className="nav-link text-[10px] font-bold uppercase tracking-widest">LinkedIn</a>
          </div>
          <p className="text-[10px] text-luxury-muted font-bold tracking-widest uppercase">
            © {currentYear} {DEVELOPER_INFO.name}. <br className="md:hidden" /> HAK CIPTA DILINDUNGI.
          </p>
        </div>
      </div>
    </footer>
  );
}

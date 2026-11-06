import { ArrowRight, Check } from "lucide-react";
import Photo from "./Photo";

const ITEMS = ["Área de Peso Libre", "Máquinas de Última Generación", "Área Funcional", "Cardio"];

export default function Facilities() {
  return (
    <section id="instalaciones" className="relative isolate overflow-hidden bg-gym-black py-24">
      <Photo src="/images/facilities.jpg" alt="Zona de pesas con iluminación neón" className="absolute inset-0 -z-10 opacity-70" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-gym-black via-gym-black/30 to-gym-black" />
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gym-yellow shadow-neon" />
      <span aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gym-yellow/60 shadow-neon" />

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 px-5 lg:min-h-[320px] lg:flex-row lg:items-center">
        <div>
          <h2 data-reveal className="h2">Instalaciones <span className="text-gym-yellow">de primer nivel</span></h2>
          <p data-reveal className="mt-4 max-w-xs text-white/80">Espacios diseñados para un entrenamiento completo.</p>
          <a data-reveal href="#tarifas" className="btn-outline mt-6">Conoce nuestras instalaciones <ArrowRight size={16} /></a>
        </div>
        <ul className="space-y-4">
          {ITEMS.map((item) => (
            <li key={item} data-reveal className="flex items-center gap-3 text-sm font-medium">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-gym-yellow text-gym-yellow">
                <Check size={14} strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

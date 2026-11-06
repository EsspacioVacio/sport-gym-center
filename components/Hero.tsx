import { ArrowRight, Play } from "lucide-react";
import Photo from "./Photo";
import { VIDEO_URL, WHATSAPP_URL } from "@/lib/constants";

const BADGES = ["Disciplina", "Fuerza", "Constancia", "Resultados"];

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden bg-gym-black pt-20">
      {/* Atleta con parallax + rim light amarillo */}
      <div className="absolute inset-y-0 right-0 -z-10 w-full overflow-hidden lg:w-[62%]">
        <Photo
          src="/images/hero-athlete.jpg"
          alt="Atleta entrenando en Sport Gym Center"
          parallax
          className="absolute inset-x-0 -inset-y-[15%] [mask-image:linear-gradient(to_right,transparent,black_35%)]"
        />
      </div>
      <div aria-hidden className="absolute right-[30%] top-0 -z-10 hidden h-full w-28 -skew-x-[24deg] bg-gradient-to-b from-gym-yellow/80 to-transparent lg:block" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-gym-black via-transparent to-gym-black/40" />

      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl flex-col justify-center px-5 pb-24">
        <div className="max-w-2xl">
          <p data-reveal className="eyebrow">Sport Gym Center</p>
          <h1 data-reveal className="font-display text-7xl font-black italic uppercase leading-[0.85] sm:text-8xl lg:text-[9rem]">
            <span className="block bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent">Entrena</span>
            <span className="block text-gym-yellow">Sin límites</span>
          </h1>
          <p data-reveal className="mt-6 max-w-sm text-lg text-white/85">
            Supera tus límites. Cuida tu cuerpo. Alcanza tu mejor versión.
          </p>
          <div data-reveal className="mt-8 flex flex-wrap items-center gap-6">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Comenzar Ahora <ArrowRight size={18} />
            </a>
            <a href={VIDEO_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-sm font-semibold">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-white/40 transition group-hover:border-gym-yellow group-hover:text-gym-yellow">
                <Play size={16} fill="currentColor" />
              </span>
              Ver Video
            </a>
          </div>
        </div>
      </div>

      <ul className="absolute right-8 top-1/3 hidden -skew-x-12 flex-col gap-3 text-right font-display text-2xl font-bold italic uppercase text-white/30 xl:flex">
        {BADGES.map((b) => (
          <li key={b} data-reveal>{b}</li>
        ))}
      </ul>
    </section>
  );
}

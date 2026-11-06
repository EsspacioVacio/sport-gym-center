"use client";

import { useRef, useState, type PointerEvent } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Photo from "./Photo";

const PROGRAMS = [
  { name: "Fuerza Máxima", img: "/images/program-fuerza.jpg" },
  { name: "Hipertrofia Muscular", img: "/images/program-hipertrofia.jpg" },
  { name: "Resistencia Física", img: "/images/program-resistencia.jpg" },
  { name: "Entrenamiento Funcional", img: "/images/program-funcional.jpg" },
];
const STEP = 300; // 280px de tarjeta + 20px de gap

export default function Programs() {
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef({ down: false, x: 0, left: 0 });
  const [index, setIndex] = useState(0);

  const go = (dir: 1 | -1) => track.current?.scrollBy({ left: dir * STEP, behavior: "smooth" });

  // Mouse: drag-to-scroll. Touch: scroll nativo con scroll-snap.
  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { down: true, x: e.clientX, left: track.current.scrollLeft };
    track.current.classList.remove("snap-x");
    track.current.style.cursor = "grabbing";
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (drag.current.down && track.current) track.current.scrollLeft = drag.current.left - (e.clientX - drag.current.x);
  };
  const onUp = () => {
    if (!drag.current.down || !track.current) return;
    drag.current.down = false;
    track.current.style.cursor = "";
    track.current.classList.add("snap-x");
  };

  const arrow = "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/30 transition hover:border-gym-yellow hover:text-gym-yellow";

  return (
    <section id="programas" className="bg-gym-black py-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:flex-row lg:items-center">
        <div className="lg:w-64 lg:shrink-0">
          <h2 data-reveal className="h2">Nuestros <span className="text-gym-yellow">programas</span></h2>
          <p data-reveal className="mt-4 text-white/80">Rutinas efectivas, adaptadas a tus objetivos.</p>
          <a data-reveal href="#instalaciones" className="btn-outline mt-6">Explora entrenamientos <ArrowRight size={16} /></a>
        </div>

        <div className="flex min-w-0 flex-1 items-center gap-3">
          <button className={`${arrow} hidden sm:grid`} aria-label="Anterior" onClick={() => go(-1)}><ChevronLeft size={20} /></button>
          <div className="min-w-0 flex-1">
            <div
              ref={track}
              onPointerDown={onDown}
              onPointerMove={onMove}
              onPointerUp={onUp}
              onPointerLeave={onUp}
              onScroll={(e) => setIndex(Math.round(e.currentTarget.scrollLeft / STEP))}
              className="flex cursor-grab snap-x snap-mandatory select-none gap-5 overflow-x-auto px-2 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PROGRAMS.map((p) => (
                <article key={p.name} data-reveal className="neon-hover w-[280px] shrink-0 snap-start">
                  <div className="skew-card bg-gym-yellow/70 p-[2px]">
                    <div className="skew-card group relative h-[340px] overflow-hidden bg-black">
                      <Photo src={p.img} alt={p.name} className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                      <h3 className="absolute bottom-6 left-9 right-8 font-display text-2xl font-bold italic leading-none">{p.name}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-2 flex justify-center gap-2" aria-hidden>
              {PROGRAMS.map((p, i) => (
                <span key={p.name} className={`h-1.5 rounded-full transition-all ${i === Math.min(index, PROGRAMS.length - 1) ? "w-5 bg-gym-yellow" : "w-1.5 bg-white/30"}`} />
              ))}
            </div>
          </div>
          <button className={`${arrow} hidden sm:grid`} aria-label="Siguiente" onClick={() => go(1)}><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
}

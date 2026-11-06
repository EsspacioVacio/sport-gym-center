import { ArrowRight, Dumbbell, Heart, Users, Zap } from "lucide-react";
import Photo from "./Photo";

const BENEFITS = [
  { icon: Zap, text: "Entrenamiento de calidad" },
  { icon: Dumbbell, text: "Equipamiento de primer nivel" },
  { icon: Users, text: "Entrenadores profesionales" },
  { icon: Heart, text: "Ambiente motivador" },
];

export default function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden border-y border-white/5 bg-[#0e0e0e] py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_0.9fr_1.1fr]">
        <div>
          <p data-reveal className="eyebrow">Sobre nosotros</p>
          <h2 data-reveal className="h2 mt-3">Más que un gimnasio, <span className="text-gym-yellow">una familia</span></h2>
          <p data-reveal className="mt-5 max-w-md text-white/80">
            En Sport Gym Center creemos en el poder del entrenamiento para transformar vidas. Nuestro objetivo es acompañarte en cada paso, dentro y fuera del gimnasio.
          </p>
          <a data-reveal href="#programas" className="btn-outline mt-7">
            Conoce nuestra historia <ArrowRight size={16} />
          </a>
        </div>

        <div data-reveal>
          <Photo src="/images/about-athlete.jpg" alt="Atleta del gimnasio" className="skew-card h-[440px]" />
        </div>

        <div>
          <h3 data-reveal className="eyebrow mb-5">¿Por qué elegirnos?</h3>
          <div className="grid grid-cols-2 gap-4">
            {BENEFITS.map(({ icon: Icon, text }) => (
              <div key={text} data-reveal className="neon-hover card-dark flex flex-col items-center gap-3 border border-white/10 bg-gym-card p-6 text-center">
                <Icon className="text-gym-yellow" size={32} strokeWidth={1.75} />
                <p className="font-semibold leading-tight">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

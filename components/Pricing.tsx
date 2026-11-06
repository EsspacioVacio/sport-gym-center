import { CalendarCheck, CalendarDays, Crown } from "lucide-react";
import Photo from "./Photo";

const PLANS = [
  { name: "Visita", price: "$50", desc: "Acceso por un día", icon: CalendarDays, featured: false },
  { name: "Semana", price: "$150", desc: "Entrena por 7 días", icon: Crown, featured: true },
  { name: "Mensual", price: "$350", desc: "Entrenamiento ilimitado por 30 días", icon: CalendarCheck, featured: false },
];

export default function Pricing() {
  return (
    <section id="tarifas" className="relative isolate overflow-hidden bg-gym-black py-24">
      <Photo
        src="/images/dumbbell.jpg"
        alt="Mancuerna con discos"
        className="absolute inset-y-0 left-0 -z-10 hidden w-1/3 opacity-80 [mask-image:linear-gradient(to_right,black_50%,transparent)] lg:block"
      />
      <div className="mx-auto max-w-5xl px-5 text-center">
        <h2 data-reveal className="h2">Nuestras <span className="text-gym-yellow">tarifas</span></h2>
        <p data-reveal className="mt-3 text-white/80">Entrena a tu ritmo, con la mejor relación calidad-precio.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 md:items-center lg:pl-24">
          {PLANS.map(({ name, price, desc, icon: Icon, featured }) => (
            <article
              key={name}
              data-reveal
              className={`neon-hover relative rounded-xl p-7 ${
                featured
                  ? "border-2 border-gym-yellow bg-gym-yellow/5 py-10 shadow-neon"
                  : "border border-gym-yellow/30 bg-gym-card hover:border-gym-yellow"
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gym-yellow px-4 py-0.5 text-xs font-bold uppercase text-black">
                  Más popular
                </span>
              )}
              <h3 className="font-display text-xl font-bold italic uppercase tracking-wide">{name}</h3>
              <div className="my-4 flex items-center justify-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gym-yellow/10 text-gym-yellow"><Icon size={20} /></span>
                <p className="font-display text-5xl font-black italic">
                  {price} <span className="text-2xl font-bold">MXN</span>
                </p>
              </div>
              <p className="text-sm text-white/75">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

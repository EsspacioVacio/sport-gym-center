import Image from "next/image";
import { ArrowRight, Facebook, Instagram, MapPin, Music2, Phone, Youtube, type LucideIcon } from "lucide-react";
import { PHONE, PHONE_HREF, SOCIALS, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

const SOCIAL_ICONS: LucideIcon[] = [Instagram, Facebook, Youtube, Music2]; // Music2 = TikTok

export default function Footer() {
  return (
    <footer id="contacto" className="border-t border-gym-yellow/30 bg-[#0e0e0e]">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 lg:grid-cols-[1fr_1.2fr_auto]">
        <div className="flex items-center gap-6">
          <Image src="/logo.png" alt="Sport Gym Center" width={96} height={99} className="h-24 w-auto" />
          <div className="space-y-2 text-sm">
            <h3 className="font-display text-xl font-bold italic uppercase">Contáctanos</h3>
            <p className="text-white/70">Estamos listos para ayudarte.</p>
            <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-gym-yellow"><Phone size={16} className="text-gym-yellow" />{PHONE}</a>
            {/* TODO: agregar dirección completa */}
            <p className="flex items-center gap-2"><MapPin size={16} className="text-gym-yellow" />México</p>
          </div>
        </div>

        <p data-reveal className="font-display text-4xl font-black italic uppercase leading-none sm:text-5xl lg:text-center">
          Tu mejor versión <span className="block text-gym-yellow">comienza aquí</span>
        </p>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold">
            <WhatsAppIcon className="h-5 w-5" /> Únete Ahora <ArrowRight size={18} />
          </a>
          <ul className="flex gap-3">
            {SOCIALS.map(({ label, href }, i) => {
              const Icon = SOCIAL_ICONS[i];
              return (
                <li key={label}>
                  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-white/20 transition hover:border-gym-yellow hover:text-gym-yellow">
                    <Icon size={18} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 px-5 py-4">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 text-xs text-white/60 sm:flex-row">
          <p>Disciplina hoy, resultados mañana.</p>
          <p>© {new Date().getFullYear()} Sport Gym Center. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

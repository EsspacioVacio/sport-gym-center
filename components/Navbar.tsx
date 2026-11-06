"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight, Building2, Dumbbell, Home, Mail, Menu, Users, X, type LucideIcon } from "lucide-react";
import { NAV, WHATSAPP_URL } from "@/lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

const ICONS: LucideIcon[] = [Home, Dumbbell, Users, Building2, Mail];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV.forEach((n) => {
      const el = document.querySelector(n.href);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-gym-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
        <a href="#inicio" aria-label="Sport Gym Center — inicio">
          <Image src="/logo.png" alt="Sport Gym Center" width={56} height={58} priority className="h-14 w-auto" />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1.5 lg:flex" aria-label="Principal">
          {NAV.map(({ label, href }, i) => {
            const Icon = ICONS[i];
            return (
              <a
                key={href}
                href={href}
                className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active === href ? "bg-gym-yellow text-black" : "text-white/80 hover:text-gym-yellow"
                }`}
              >
                <Icon size={15} />
                {label}
              </a>
            );
          })}
        </nav>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-gym-yellow px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:shadow-neon lg:flex"
        >
          <WhatsAppIcon className="h-4 w-4" /> Únete Ahora <ArrowRight size={16} />
        </a>

        <button className="p-2 lg:hidden" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-white/10 bg-gym-black/95 p-4 lg:hidden">
          {NAV.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 font-semibold hover:bg-white/5 hover:text-gym-yellow">
              {label}
            </a>
          ))}
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-gold mt-2 justify-center">
            <WhatsAppIcon className="h-5 w-5" /> Únete Ahora
          </a>
        </nav>
      )}
    </header>
  );
}

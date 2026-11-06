"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Revelado escalonado ([data-reveal]) y parallax ([data-parallax]). Solo anima transform + opacity. */
export default function ScrollEffects() {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set("[data-reveal]", { y: 40 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 88%",
        once: true,
        onEnter: (els) =>
          gsap.to(els, {
            opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
            stagger: 0.12, overwrite: true, clearProps: "transform", // libera transform para el hover
          }),
      });
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) =>
        gsap.to(el, {
          yPercent: 10, ease: "none",
          scrollTrigger: { trigger: el.parentElement, start: "top top", end: "bottom top", scrub: true },
        })
      );
    });
  });
  return null;
}

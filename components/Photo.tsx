import type { ReactNode } from "react";

type Props = { src: string; alt: string; className?: string; parallax?: boolean; children?: ReactNode };

/** Imagen de fondo con degradado de respaldo: si falta el archivo, la página sigue viéndose bien. */
export default function Photo({ src, alt, className = "", parallax, children }: Props) {
  return (
    <div
      role="img"
      aria-label={alt}
      data-parallax={parallax ? "" : undefined}
      className={`bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src}), linear-gradient(135deg,#262626,#0B0B0B)` }}
    >
      {children}
    </div>
  );
}

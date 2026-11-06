export const PHONE = "+52 294 170 3858";
export const PHONE_HREF = "tel:+522941703858";
export const WHATSAPP_URL = `https://wa.me/522947703858?text=${encodeURIComponent(
  "Hola, quiero más información para unirme a Sport Gym Center"
)}`;
export const VIDEO_URL = "https://www.youtube.com/"; // TODO: reemplazar por el video oficial

export const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Entrenamiento", href: "#programas" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Contacto", href: "#contacto" },
] as const;

// TODO: reemplazar por los perfiles reales
export const SOCIALS = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "TikTok", href: "https://tiktok.com/" },
] as const;

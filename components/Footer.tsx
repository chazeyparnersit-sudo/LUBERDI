import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  Facebook,
  Clock,
} from "lucide-react";

const GITHUB_BASE =
  "https://raw.githubusercontent.com/robertpuente000/luberdi-seguridad/master/images";

const SERVICES = [
  { label: "Puertas Blindadas", href: "/servicios#puertas" },
  { label: "Cerraduras Digitales", href: "/servicios#digitales" },
  { label: "Cortinas Automatizadas", href: "/servicios#cortinas" },
  { label: "Sistemas Mul-T-Lock", href: "/servicios#multilock" },
  { label: "Control de Acceso", href: "/servicios#acceso" },
  { label: "Instalación Profesional", href: "/servicios#instalacion" },
];

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

/* Icono WhatsApp SVG inline */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative bg-cream-beige border-t border-cream-dark overflow-hidden"
      aria-label="Pie de página"
    >
      {/* Línea decorativa superior */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-separator-gradient"
        aria-hidden="true"
      />

      {/* Ornamento de fondo sutil */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-cream-champagne/40 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-20 pb-8">
        {/* ── Grid principal ─────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Columna Brand ──────────────────────────────────────────────── */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-6 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-darkbrown rounded-sm"
              aria-label="Luberdi Seguridad — Inicio"
            >
              <div className="relative w-10 h-10 rounded-card-sm overflow-hidden border border-cream-dark bg-white shadow-card transition-transform duration-250 group-hover:scale-105">
                <Image
                  src={`${GITHUB_BASE}/logo.png`}
                  alt=""
                  fill
                  className="object-contain p-0.5"
                  sizes="40px"
                />
              </div>
              <div className="leading-none">
                <span className="block font-display text-xl font-bold text-ink-900 tracking-tight">
                  Luberdi<span className="text-ink-brown">.</span>
                </span>
                <span className="block text-[10px] font-body font-semibold tracking-[0.2em] text-ink-500 uppercase">
                  Seguridad
                </span>
              </div>
            </Link>

            <p className="text-body-sm text-ink-500 leading-relaxed max-w-xs mb-8">
              Distribuidores autorizados Mul-T-Lock en Bogotá. Más de 15 años
              protegiendo hogares y empresas con soluciones de seguridad de
              clase mundial.
            </p>

            {/* Badge de certificación */}
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cream-dark bg-cream-ivory mb-8"
              aria-label="Distribuidor Certificado Mul-T-Lock"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-ink-brown"
                aria-hidden="true"
              />
              <span className="text-caption font-semibold text-ink-700 tracking-wide">
                Distribuidor Certificado Mul-T-Lock
              </span>
            </div>

            {/* Redes sociales */}
            <div className="flex gap-2" role="list" aria-label="Redes sociales">
              <a
                href="https://www.facebook.com/LuberdiSeguridad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Síguenos en Facebook"
                role="listitem"
                className="w-9 h-9 rounded-card-sm border border-cream-dark bg-cream-deep flex items-center justify-center text-ink-500 hover:text-ink-brown hover:border-ink-brown hover:bg-cream-champagne transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/573015449252"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contáctanos por WhatsApp"
                role="listitem"
                className="w-9 h-9 rounded-card-sm border border-cream-dark bg-cream-deep flex items-center justify-center text-ink-500 hover:text-ink-brown hover:border-ink-brown hover:bg-cream-champagne transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href="mailto:luberdipuertasdeseguridad@gmail.com"
                aria-label="Envíanos un correo"
                role="listitem"
                className="w-9 h-9 rounded-card-sm border border-cream-dark bg-cream-deep flex items-center justify-center text-ink-500 hover:text-ink-brown hover:border-ink-brown hover:bg-cream-champagne transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Columna Servicios ────────────────────────────────────────────── */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-caption font-semibold tracking-[0.18em] uppercase text-ink-300 mb-6">
              Servicios
            </h3>
            <ul className="space-y-3" role="list">
              {SERVICES.map((s) => (
                <li key={s.href} role="listitem">
                  <Link
                    href={s.href}
                    className="group inline-flex items-center gap-1.5 text-body-sm text-ink-500 hover:text-ink-darkbrown transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown rounded-sm"
                  >
                    <span>{s.label}</span>
                    <ArrowUpRight
                      className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Empresa ───────────────────────────────────────────────── */}
          <div className="lg:col-span-2">
            <h3 className="text-caption font-semibold tracking-[0.18em] uppercase text-ink-300 mb-6">
              Empresa
            </h3>
            <ul className="space-y-3" role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.href} role="listitem">
                  <Link
                    href={l.href}
                    className="text-body-sm text-ink-500 hover:text-ink-darkbrown transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown rounded-sm"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna Contacto ─────────────────────────────────────────────── */}
          <div className="lg:col-span-3">
            <h3 className="text-caption font-semibold tracking-[0.18em] uppercase text-ink-300 mb-6">
              Contacto
            </h3>
            <ul className="space-y-4" role="list">
              <li role="listitem">
                <a
                  href="tel:+573015449252"
                  className="flex items-start gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown rounded-sm"
                  aria-label="Llamar al +57 301 544 9252"
                >
                  <Phone
                    className="w-4 h-4 text-ink-brown mt-0.5 shrink-0 group-hover:text-ink-darkbrown transition-colors"
                    aria-hidden="true"
                  />
                  <span className="text-body-sm text-ink-500 group-hover:text-ink-700 transition-colors">
                    +57 301 544 9252
                  </span>
                </a>
              </li>
              <li role="listitem">
                <a
                  href="mailto:luberdipuertasdeseguridad@gmail.com"
                  className="flex items-start gap-3 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown rounded-sm"
                  aria-label="Enviar correo a luberdipuertasdeseguridad@gmail.com"
                >
                  <Mail
                    className="w-4 h-4 text-ink-brown mt-0.5 shrink-0 group-hover:text-ink-darkbrown transition-colors"
                    aria-hidden="true"
                  />
                  <span className="text-body-sm text-ink-500 group-hover:text-ink-700 transition-colors break-all">
                    luberdipuertasdeseguridad@gmail.com
                  </span>
                </a>
              </li>
              <li role="listitem">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="w-4 h-4 text-ink-brown mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <address className="not-italic text-body-sm text-ink-500">
                    Bogotá D.C., Colombia
                  </address>
                </div>
              </li>
            </ul>

            {/* Horario de atención */}
            <div className="mt-6 p-4 rounded-card bg-cream-ivory border border-cream-dark">
              <div className="flex items-center gap-2 mb-3">
                <Clock
                  className="w-3.5 h-3.5 text-ink-brown"
                  aria-hidden="true"
                />
                <p className="text-caption font-semibold text-ink-700">
                  Horario de atención
                </p>
              </div>
              <dl className="space-y-1">
                <div className="flex justify-between">
                  <dt className="text-caption text-ink-500">Lun – Vie</dt>
                  <dd className="text-caption font-medium text-ink-700">
                    8:00 am – 6:00 pm
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-caption text-ink-500">Sábado</dt>
                  <dd className="text-caption font-medium text-ink-700">
                    8:00 am – 1:00 pm
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* ── Barra inferior ──────────────────────────────────────────────── */}
        <div className="divider mb-8" aria-hidden="true" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-caption text-ink-300">
            © {year} Luberdi Seguridad. Todos los derechos reservados.
          </p>
          <nav aria-label="Legal" className="flex items-center gap-4">
            <span className="text-caption text-ink-300 cursor-default">
              Política de privacidad
            </span>
            <span className="w-px h-3 bg-cream-dark" aria-hidden="true" />
            <span className="text-caption text-ink-300 cursor-default">
              Términos de uso
            </span>
          </nav>
        </div>
      </div>
    </footer>
  );
}

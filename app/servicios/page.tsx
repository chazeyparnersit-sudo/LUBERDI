"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ChevronRight,
  Shield,
  Lock,
  Star,
  Zap,
  Layers,
} from "lucide-react";

const BASE =
  "https://raw.githubusercontent.com/robertpuente000/luberdi-seguridad/master/images";

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ── Datos de servicios ──────────────────────────────────────────────────── */
const SERVICES = [
  {
    id: "puertas",
    icon: Shield,
    label: "Protección Máxima",
    title: "Puertas Blindadas",
    description:
      "Nuestras puertas blindadas combinan resistencia extrema con diseños modernos que se adaptan a cualquier espacio. Fabricadas con acero de alta resistencia y sistemas antipalanca certificados.",
    features: [
      "Acero calibrado de alta resistencia",
      "Marco metálico antipalanca",
      "Bisagras ocultas reforzadas",
      "Acabados en multiples colores",
      "Certificación de resistencia RC2/RC3",
      "Garantía de 5 años",
    ],
    image: `${BASE}/puerta2.jpeg`,
    imageThumbs: [
      `${BASE}/puerta1.jpeg`,
      `${BASE}/puerta3.jpeg`,
      `${BASE}/puerta4.jpeg`,
    ],
    sectionClass: "section-base",
    reverse: false,
  },
  {
    id: "digitales",
    icon: Lock,
    label: "Tecnología Digital",
    title: "Cerraduras Digitales",
    description:
      "Olvídate de las llaves tradicionales. Nuestras cerraduras digitales ofrecen acceso mediante huella dactilar, código numérico, tarjeta RFID o control desde tu smartphone.",
    features: [
      "Huella dactilar hasta 100 usuarios",
      "Código numérico personalizable",
      "Tarjeta RFID / llave magnética",
      "Control remoto por app",
      "Historial de accesos",
      "Batería de 12 meses",
    ],
    image: `${BASE}/cerraduradigital.jpg`,
    imageThumbs: [`${BASE}/cerradura1.jpeg`, `${BASE}/cerradura2.jpeg`],
    sectionClass: "section-accent",
    reverse: true,
  },
  {
    id: "multilock",
    icon: Star,
    label: "Distribuidor Autorizado",
    title: "Sistemas Mul-T-Lock",
    description:
      "Somos distribuidores autorizados de Mul-T-Lock en Bogotá, la marca israelí número 1 en seguridad de alta gama. Cilindros de precisión suiza con sistema anti-picking y anti-ganzúa.",
    features: [
      "Sistema de clavijas de alta precisión",
      "Anti-picking certificado",
      "Anti-ganzúa / anti-bumping",
      "Llave registrada y patentada",
      "Duplicado controlado",
      "Garantía internacional Mul-T-Lock",
    ],
    image: `${BASE}/multlock.png`,
    imageThumbs: [`${BASE}/cerradura1.jpeg`, `${BASE}/cerradura2.jpeg`],
    sectionClass: "section-alt",
    reverse: false,
  },
  {
    id: "automatizacion",
    icon: Zap,
    label: "Automatización Inteligente",
    title: "Puertas y Cortinas Automatizadas",
    description:
      "Moderniza tu entrada con sistemas de automatización de alto rendimiento. Motores silenciosos, control remoto, sensores de seguridad y apertura de emergencia manual.",
    features: [
      "Motor silencioso de alta durabilidad",
      "Control remoto inalámbrico",
      "Apertura vía app móvil",
      "Sensor fotoeléctrico de seguridad",
      "Sistema de apertura de emergencia",
      "Instalación en 1 día",
    ],
    image: `${BASE}/automatizacion.jpg`,
    imageThumbs: [`${BASE}/cortina.jpg`],
    sectionClass: "section-accent",
    reverse: true,
  },
];

const MINI_PRODUCTS = [
  {
    src: `${BASE}/cerradura1.jpeg`,
    label: "Cerraduras de Alta Seguridad",
    href: "#digitales",
  },
  {
    src: `${BASE}/puerta3.jpeg`,
    label: "Puertas para Locales Comerciales",
    href: "#puertas",
  },
  {
    src: `${BASE}/cortina.jpg`,
    label: "Cortinas Metálicas Automatizadas",
    href: "#automatizacion",
  },
  {
    src: `${BASE}/puerta4.jpeg`,
    label: "Instalación Residencial Premium",
    href: "#puertas",
  },
];

/* ── Anchors de navegación ──────────────────────────────────────────────── */
const NAV_ANCHORS = [
  { label: "Puertas Blindadas", href: "#puertas" },
  { label: "Cerraduras Dig.", href: "#digitales" },
  { label: "Mul-T-Lock", href: "#multilock" },
  { label: "Automatización", href: "#automatizacion" },
];

export default function ServiciosPage() {
  return (
    <>
      {/* ── Hero/Banner ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[65vh] flex items-end overflow-hidden bg-ink-900"
        aria-label="Banner de servicios"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${BASE}/automatizacion.jpg`}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay oscuro — contraste mínimo 7:1 para texto blanco */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          {/* Tinte cálido sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/35 via-transparent to-transparent" />
          {/* Fade hacia sección de contenido */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cream-deep to-transparent" />
        </div>

        <div className="relative z-10 container-site pb-20 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Eyebrow — texto claro sobre fondo oscuro */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-cream-champagne block mb-4">
              <span className="w-6 h-px bg-cream-dark" aria-hidden="true" />
              Lo que ofrecemos
            </span>
            {/* H1 — blanco con text-shadow para máxima legibilidad */}
            <h1 className="text-white mb-4 max-w-2xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.4)]">
              Nuestros Servicios
            </h1>
            {/* Párrafo — blanco/85 con text-shadow cumple AA (ratio ≥7:1) */}
            <p className="text-body-lg text-white/85 max-w-xl mb-8 [text-shadow:_0_1px_6px_rgba(0,0,0,0.3)]">
              Soluciones integrales de seguridad física para residencias,
              oficinas y locales comerciales en Bogotá.
            </p>

            {/* Navegación de anchors */}
            <nav
              className="flex flex-wrap gap-2"
              aria-label="Navegación por servicio"
            >
              {NAV_ANCHORS.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="badge-warm hover:bg-cream-cta hover:border-cream-hover transition-colors duration-200 cursor-pointer"
                >
                  {a.label}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>
      </section>

      {/* ── Servicios detallados ─────────────────────────────────────────── */}
      {SERVICES.map((svc, idx) => {
        const Icon = svc.icon;
        const isReverse = svc.reverse;

        return (
          <section
            key={svc.id}
            id={svc.id}
            className={svc.sectionClass}
            aria-labelledby={`svc-heading-${svc.id}`}
          >
            <div className="container-site">
              <div
                className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center ${isReverse ? "" : ""}`}
              >
                {/* Imagen */}
                <FadeUp
                  delay={0.05}
                  className={`relative ${isReverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative rounded-card overflow-hidden shadow-cream-lg aspect-[4/3]">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover img-warm"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    {/* Badge flotante */}
                    <span className="absolute top-4 left-4 badge-warm">
                      {svc.label}
                    </span>
                  </div>

                  {/* Miniaturas de imágenes adicionales */}
                  {svc.imageThumbs.length > 0 && (
                    <div
                      className="flex gap-3 mt-3"
                      aria-label={`Más imágenes de ${svc.title}`}
                    >
                      {svc.imageThumbs.map((thumb, ti) => (
                        <div
                          key={ti}
                          className="relative w-20 h-16 rounded-card-sm overflow-hidden border border-cream-dark flex-shrink-0"
                        >
                          <Image
                            src={thumb}
                            alt={`${svc.title} - variante ${ti + 1}`}
                            fill
                            className="object-cover img-warm"
                            sizes="80px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </FadeUp>

                {/* Contenido */}
                <div className={isReverse ? "lg:order-1" : ""}>
                  <FadeUp>
                    <div className="flex items-center gap-3 mb-5">
                      <div className="icon-circle">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="eyebrow">{`Servicio ${String(idx + 1).padStart(2, "0")}`}</span>
                    </div>
                    <h2
                      id={`svc-heading-${svc.id}`}
                      className="text-ink-900 mb-5"
                    >
                      {svc.title}
                    </h2>
                    <p className="text-body-md text-ink-500 leading-relaxed mb-8">
                      {svc.description}
                    </p>
                  </FadeUp>

                  {/* Features */}
                  <FadeUp delay={0.1}>
                    <div className="mb-8">
                      <h3 className="text-body-md font-semibold text-ink-700 mb-4 font-body">
                        Incluye:
                      </h3>
                      <ul
                        className="grid sm:grid-cols-2 gap-x-6 gap-y-3"
                        role="list"
                      >
                        {svc.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-2 text-body-sm text-ink-500"
                            role="listitem"
                          >
                            <CheckCircle
                              className="w-4 h-4 text-ink-brown shrink-0"
                              aria-hidden="true"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href="/contacto"
                        className="btn-cta group"
                        aria-label={`Solicitar cotización de ${svc.title}`}
                      >
                        Solicitar cotización
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                      <a
                        href={`https://wa.me/573015449252?text=Hola%2C%20me%20interesa%20${encodeURIComponent(svc.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary group"
                        aria-label={`Consultar ${svc.title} por WhatsApp`}
                      >
                        <span>WhatsApp</span>
                        <ChevronRight
                          className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </FadeUp>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Mini galería de productos ─────────────────────────────────────── */}
      <section className="section-base" aria-labelledby="mini-galeria-heading">
        <div className="container-site">
          <FadeUp className="text-center mb-12 max-w-xl mx-auto">
            <span className="eyebrow block mb-4">Más proyectos</span>
            <h2 id="mini-galeria-heading" className="text-ink-900 mb-4">
              Una muestra de nuestro trabajo
            </h2>
            <p className="text-body-md text-ink-500">
              Cada instalación es un reflejo de nuestra dedicación y calidad.
            </p>
          </FadeUp>

          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
            role="list"
            aria-label="Galería de productos"
          >
            {MINI_PRODUCTS.map((p, i) => (
              <FadeUp key={p.src} delay={i * 0.08}>
                <a
                  href={p.href}
                  className="block relative rounded-card overflow-hidden group aspect-[4/3]"
                  role="listitem"
                  aria-label={p.label}
                >
                  <Image
                    src={p.src}
                    alt={p.label}
                    fill
                    className="object-cover img-warm transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-ink-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute bottom-0 inset-x-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    <p className="text-caption text-cream-ivory font-medium">
                      {p.label}
                    </p>
                  </div>
                </a>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-8">
            <Link href="/galeria" className="btn-primary group inline-flex">
              Ver galería completa
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────────────── */}
      <section className="section-warm" aria-labelledby="servicios-cta-heading">
        <div className="container-site">
          <FadeUp className="text-center max-w-2xl mx-auto">
            <div className="icon-circle mx-auto mb-6 w-16 h-16">
              <Layers className="w-7 h-7" aria-hidden="true" />
            </div>
            <span className="eyebrow block mb-4">¿Necesitas asesoría?</span>
            <h2 id="servicios-cta-heading" className="text-ink-900 mb-5">
              Encuentra la solución perfecta para ti
            </h2>
            <p className="text-body-md text-ink-500 leading-relaxed mb-10">
              No estás seguro de qué servicio necesitas? Nuestros asesores
              técnicos te guiarán hacia la solución ideal para tu espacio y
              presupuesto. Consulta completamente gratis.
            </p>

            {/* Stats de confianza */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              {[
                { value: "15+", label: "Años de experiencia" },
                { value: "98%", label: "Satisfacción garantizada" },
                { value: "24h", label: "Tiempo de respuesta" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-display text-2xl font-bold text-ink-900">
                    {s.value}
                  </p>
                  <p className="text-caption text-ink-500 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-cta group">
                Solicitar consulta gratuita
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="https://wa.me/573015449252?text=Hola%2C%20necesito%20asesor%C3%ADa%20sobre%20sus%20servicios"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                aria-label="Contactar por WhatsApp para asesoría"
              >
                +57 301 544 9252
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

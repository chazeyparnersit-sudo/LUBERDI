"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Lock,
  Zap,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  ChevronRight,
} from "lucide-react";

/* ── Constantes ──────────────────────────────────────────────────────────── */
const BASE =
  "https://raw.githubusercontent.com/robertpuente000/luberdi-seguridad/master/images";

const SERVICES = [
  {
    id: "puertas",
    icon: Shield,
    title: "Puertas Blindadas",
    subtitle: "Protección Extrema",
    description:
      "Puertas antipalanca y blindadas con refuerzos metálicos de alta resistencia. Instalación profesional garantizada para residencias y locales comerciales.",
    features: [
      "Acero de alta resistencia",
      "Sistema antipalanca",
      "Acabados premium",
      "Garantía 5 años",
    ],
    image: `${BASE}/puerta1.jpeg`,
    href: "/servicios#puertas",
  },
  {
    id: "digitales",
    icon: Lock,
    title: "Cerraduras Digitales",
    subtitle: "Tecnología Inteligente",
    description:
      "Sistemas de acceso digital de última generación. Olvídate de las llaves: código, huella o tarjeta RFID para entrar con total comodidad.",
    features: [
      "Huella dactilar",
      "Código numérico",
      "Tarjeta RFID",
      "Control remoto",
    ],
    image: `${BASE}/cerraduradigital.jpg`,
    href: "/servicios#digitales",
  },
  {
    id: "multilock",
    icon: Star,
    title: "Sistemas Mul-T-Lock",
    subtitle: "Distribuidores Autorizados",
    description:
      "La marca de cerraduras más reconocida a nivel mundial. Distribuidores oficiales en Bogotá con sistema de clavijas anti-picking de precisión suiza.",
    features: [
      "Anti-ganzúa",
      "Anti-picking",
      "Cilindros certificados",
      "Llaves maestras",
    ],
    image: `${BASE}/multlock.png`,
    href: "/servicios#multilock",
  },
  {
    id: "automatizacion",
    icon: Zap,
    title: "Automatización",
    subtitle: "Acceso Inteligente",
    description:
      "Puertas y cortinas metálicas con motor eléctrico y control remoto. Tecnología de automatización para garajes, bodegas y locales.",
    features: [
      "Motor silencioso",
      "Control remoto",
      "Sensor de seguridad",
      "App móvil",
    ],
    image: `${BASE}/automatizacion.jpg`,
    href: "/servicios#automatizacion",
  },
];

const STATS = [
  { value: "15+", label: "Años de experiencia" },
  { value: "2.400+", label: "Instalaciones realizadas" },
  { value: "98%", label: "Clientes satisfechos" },
  { value: "24h", label: "Tiempo de respuesta" },
];

const GALLERY_ITEMS = [
  {
    src: `${BASE}/puerta2.jpeg`,
    alt: "Puerta blindada residencial",
    span: "row-span-2",
  },
  {
    src: `${BASE}/cerradura1.jpeg`,
    alt: "Cerradura de seguridad premium",
    span: "",
  },
  {
    src: `${BASE}/puerta3.jpeg`,
    alt: "Puerta de seguridad para local comercial",
    span: "",
  },
  {
    src: `${BASE}/cortina.jpg`,
    alt: "Cortina metálica automatizada",
    span: "",
  },
  {
    src: `${BASE}/puerta4.jpeg`,
    alt: "Instalación residencial de puerta",
    span: "",
  },
  {
    src: `${BASE}/cerradura2.jpeg`,
    alt: "Cerradura digital moderna",
    span: "",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana García",
    role: "Propietaria Residencial",
    text: "Contratamos a Luberdi para reforzar las puertas de nuestra casa y fue la mejor decisión. Profesionales, puntuales y el resultado superó nuestras expectativas.",
    rating: 5,
  },
  {
    name: "Carlos Toro",
    role: "Gerente Comercial",
    text: "Excelente atención, rápida instalación y productos de primera calidad. Nuestro local ahora tiene la seguridad que necesitábamos. Muy recomendados.",
    rating: 5,
  },
  {
    name: "María Restrepo",
    role: "Administradora de Edificio",
    text: "Renovamos toda la cerrajería del edificio con Luberdi. El asesoramiento fue impecable y el sistema Mul-T-Lock que instalaron es de otro nivel. Totalmente satisfecha.",
    rating: 5,
  },
];

const WHY_LUBERDI = [
  {
    icon: Shield,
    title: "Materiales Certificados",
    desc: "Trabajamos solo con productos de marcas líderes como Mul-T-Lock, con certificaciones internacionales de calidad y resistencia.",
  },
  {
    icon: CheckCircle,
    title: "Instalación Garantizada",
    desc: "Cada instalación incluye garantía de mano de obra y materiales. Tu seguridad es nuestra responsabilidad.",
  },
  {
    icon: Star,
    title: "Asesoría Personalizada",
    desc: "Visita técnica sin costo. Analizamos tu espacio y te recomendamos la solución óptima para tu presupuesto y necesidades.",
  },
  {
    icon: Zap,
    title: "Respuesta en 24 Horas",
    desc: "Entendemos la urgencia de la seguridad. Respondemos y despachamos técnicos especializados en el menor tiempo posible.",
  },
  {
    icon: Lock,
    title: "Tecnología de Vanguardia",
    desc: "Integramos sistemas digitales de última generación: control remoto, biometría y acceso por app para un hogar más inteligente.",
  },
  {
    icon: Phone,
    title: "Soporte Post-Venta",
    desc: "La relación no termina con la instalación. Ofrecemos mantenimiento preventivo y atención técnica cuando lo necesites.",
  },
];

/* ── Utilidad de animación ──────────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════════
          HERO — Sección principal
         ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden bg-cream-deep"
        aria-label="Sección de bienvenida"
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${BASE}/background.png`}
            alt=""
            fill
            className="object-cover"
            priority
            quality={85}
            sizes="100vw"
          />
          {/* Overlay oscuro principal — garantiza contraste ≥7:1 para texto blanco */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/15" />
          {/* Tinte cálido sutil sobre el oscuro para mantener la calidez de marca */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/40 via-[#2C1A0E]/15 to-transparent" />
          {/* Fade inferior hacia la sección siguiente */}
          <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-cream-deep to-transparent" />
        </div>

        {/* Ornamento decorativo */}
        <div
          className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-cream-champagne/30 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        {/* Contenido */}
        <div className="relative z-10 container-site w-full py-24 lg:py-32">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.1,
              }}
            >
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-cream-champagne mb-6"
                aria-label="Distribuidores autorizados Mul-T-Lock · Bogotá, Colombia"
              >
                <span className="w-8 h-px bg-cream-dark" aria-hidden="true" />
                Distribuidores Mul-T-Lock · Bogotá, Colombia
              </span>
            </motion.div>

            {/* Titular principal */}
            <motion.h1
              className="font-display text-white leading-[1.08] mb-6 [text-shadow:_0_2px_12px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2,
              }}
            >
              Seguridad que{" "}
              <em className="not-italic" style={{ color: "#F7E7CE" }}>
                protege
              </em>{" "}
              lo que más importa
            </motion.h1>

            {/* Descripción */}
            <motion.p
              className="text-body-lg text-white/85 max-w-xl leading-relaxed mb-10 [text-shadow:_0_1px_6px_rgba(0,0,0,0.35)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.32,
              }}
            >
              Puertas blindadas, cerraduras inteligentes y automatización
              premium para hogares y empresas. Más de 15 años garantizando
              tranquilidad en Bogotá.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.44,
              }}
            >
              <Link href="/contacto" className="btn-cta group">
                Solicitar cotización gratis
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/galeria" className="btn-secondary">
                Ver productos
              </Link>
            </motion.div>

            {/* Micro-stats debajo del CTA */}
            <motion.div
              className="flex flex-wrap gap-6 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {STATS.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="font-display text-2xl font-bold text-white [text-shadow:_0_1px_8px_rgba(0,0,0,0.3)]">
                    {s.value}
                  </p>
                  <p className="text-caption text-white/65 mt-0.5">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Flecha scroll suave */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-5 h-5 border-b-2 border-r-2 border-ink-brown rotate-45 opacity-50"
          />
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          BARRA DE STATS
         ════════════════════════════════════════════════════════════════════ */}
      <section
        className="bg-cream-bone border-y border-cream-dark"
        aria-label="Datos de la empresa"
      >
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-cream-dark">
            {STATS.map((s, i) => (
              <FadeUp key={s.label} delay={i * 0.1}>
                <div className="py-10 px-6 text-center">
                  <p
                    className="font-display text-display-md text-ink-900 font-bold leading-none mb-2"
                    aria-label={`${s.value} ${s.label}`}
                  >
                    {s.value}
                  </p>
                  <p className="text-body-sm text-ink-500">{s.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          SERVICIOS
         ════════════════════════════════════════════════════════════════════ */}
      <section className="section-base" aria-labelledby="servicios-heading">
        <div className="container-site">
          {/* Encabezado de sección */}
          <FadeUp className="text-center mb-16 max-w-2xl mx-auto">
            <span className="eyebrow block mb-4">Lo que hacemos</span>
            <h2 id="servicios-heading" className="text-ink-900 mb-4">
              Soluciones de seguridad a tu medida
            </h2>
            {/* text-ink-700 (#2D2D2D) → ratio 9.0:1 vs #FAF9F6 — WCAG AAA */}
            <p className="text-body-md text-ink-700">
              Desde puertas blindadas hasta sistemas digitales de vanguardia,
              tenemos la solución perfecta para cada necesidad y presupuesto.
            </p>
          </FadeUp>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {SERVICES.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <FadeUp key={svc.id} delay={i * 0.08}>
                  <article
                    className="card overflow-hidden group h-full flex flex-col"
                    aria-labelledby={`svc-${svc.id}`}
                  >
                    {/* Imagen del servicio */}
                    <div className="relative h-52 overflow-hidden rounded-t-card">
                      <Image
                        src={svc.image}
                        alt={svc.title}
                        fill
                        className="object-cover img-warm transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Overlay inferior degradado para legibilidad */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-ink-900/50 via-transparent to-transparent"
                        aria-hidden="true"
                      />
                      {/* Badge de subtítulo */}
                      <span className="absolute top-4 left-4 badge-warm text-ink-700">
                        {svc.subtitle}
                      </span>
                    </div>

                    {/* Contenido */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="icon-circle">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <h3
                          id={`svc-${svc.id}`}
                          className="text-ink-900 text-display-sm font-bold"
                        >
                          {svc.title}
                        </h3>
                      </div>

                      <p className="text-body-sm text-ink-500 leading-relaxed mb-5">
                        {svc.description}
                      </p>

                      {/* Lista de características */}
                      <ul
                        className="grid grid-cols-2 gap-x-4 gap-y-2 mb-6 flex-1"
                        role="list"
                      >
                        {svc.features.map((f) => (
                          <li
                            key={f}
                            className="flex items-center gap-1.5 text-caption text-ink-500"
                            role="listitem"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-ink-brown shrink-0"
                              aria-hidden="true"
                            />
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={svc.href}
                        className="btn-secondary group/btn justify-between mt-auto"
                        aria-label={`Ver más sobre ${svc.title}`}
                      >
                        <span>Ver detalles</span>
                        <ChevronRight
                          className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </article>
                </FadeUp>
              );
            })}
          </div>

          {/* CTA ver todos los servicios */}
          <FadeUp className="text-center mt-12">
            <Link href="/servicios" className="btn-cta inline-flex">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          POR QUÉ LUBERDI — Features
         ════════════════════════════════════════════════════════════════════ */}
      <section className="section-accent" aria-labelledby="por-que-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Imagen lateral */}
            <FadeUp className="relative">
              <div className="relative rounded-card overflow-hidden shadow-cream-lg aspect-[4/3]">
                <Image
                  src={`${BASE}/puerta2.jpeg`}
                  alt="Instalación profesional de puerta de seguridad Luberdi"
                  fill
                  className="object-cover img-warm"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Badge flotante */}
                <div
                  className="absolute bottom-6 left-6 glass-warm rounded-card p-4 max-w-[200px]"
                  aria-hidden="true"
                >
                  <p className="font-display text-3xl font-bold text-ink-900">
                    15+
                  </p>
                  <p className="text-caption text-ink-500 mt-1">
                    Años protegiendo Bogotá
                  </p>
                </div>
              </div>

              {/* Ornamento decorativo pequeño */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 rounded-card border-2 border-cream-dark bg-cream-champagne/50 -z-10"
                aria-hidden="true"
              />
            </FadeUp>

            {/* Texto + Features */}
            <div>
              <FadeUp>
                <span className="eyebrow block mb-4">¿Por qué elegirnos?</span>
                <h2 id="por-que-heading" className="text-ink-900 mb-4">
                  Confianza construida instalación a instalación
                </h2>
                <p className="text-body-md text-ink-500 leading-relaxed mb-10">
                  En Luberdi Seguridad combinamos más de 15 años de experiencia
                  con los mejores materiales del mercado para ofrecerte una
                  protección sin igual.
                </p>
              </FadeUp>

              <div className="grid sm:grid-cols-2 gap-6">
                {WHY_LUBERDI.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <FadeUp key={item.title} delay={i * 0.07}>
                      <div className="flex gap-4">
                        <div className="icon-circle shrink-0 mt-0.5">
                          <Icon className="w-5 h-5" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="text-body-md font-semibold text-ink-900 mb-1.5 font-body">
                            {item.title}
                          </h3>
                          <p className="text-body-sm text-ink-500 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          GALERÍA PREVIEW
         ════════════════════════════════════════════════════════════════════ */}
      <section className="section-base" aria-labelledby="galeria-heading">
        <div className="container-site">
          <FadeUp className="text-center mb-12 max-w-2xl mx-auto">
            <span className="eyebrow block mb-4">Nuestros trabajos</span>
            <h2 id="galeria-heading" className="text-ink-900 mb-4">
              Cada proyecto, una solución única
            </h2>
            <p className="text-body-md text-ink-700">
              Conoce algunos de los cientos de instalaciones que hemos realizado
              en hogares y empresas de Bogotá.
            </p>
          </FadeUp>

          {/* Grid de galería asimétrica */}
          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            role="list"
            aria-label="Galería de proyectos"
          >
            {GALLERY_ITEMS.map((img, i) => (
              <FadeUp key={img.src} delay={i * 0.06}>
                <div
                  className={`relative overflow-hidden rounded-card bg-cream-bone ${img.span}`}
                  role="listitem"
                  style={{ aspectRatio: img.span ? "3/4" : "4/3" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover img-warm transition-transform duration-500 hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                  />
                  {/* Overlay hover sutil */}
                  <div
                    className="absolute inset-0 bg-ink-900/0 hover:bg-ink-900/20 transition-colors duration-300"
                    aria-hidden="true"
                  />
                  {/* Etiqueta de alt en hover */}
                  <div
                    className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-ink-900/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  >
                    <p className="text-caption text-cream-ivory font-medium">
                      {img.alt}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp className="text-center mt-10">
            <Link href="/galeria" className="btn-primary group">
              Ver galería completa
              <ArrowRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          TESTIMONIOS
         ════════════════════════════════════════════════════════════════════ */}
      <section className="section-warm" aria-labelledby="testimonios-heading">
        <div className="container-site">
          <FadeUp className="text-center mb-14 max-w-xl mx-auto">
            <span className="eyebrow block mb-4">Testimonios</span>
            <h2 id="testimonios-heading" className="text-ink-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-body-md text-ink-700">
              La satisfacción de cada cliente es nuestra mayor recompensa.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <FadeUp key={t.name} delay={i * 0.1}>
                <blockquote
                  className="card p-7 flex flex-col h-full"
                  aria-label={`Testimonio de ${t.name}`}
                >
                  {/* Estrellas */}
                  <div
                    className="flex gap-1 mb-5"
                    aria-label={`Calificación: ${t.rating} de 5 estrellas`}
                  >
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <Star
                        key={si}
                        className="w-4 h-4 fill-ink-brown text-ink-brown"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  {/* Cita */}
                  <p className="text-body-sm text-ink-500 leading-relaxed italic flex-1 mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Autor */}
                  <footer className="flex items-center gap-3 pt-5 border-t border-cream-dark">
                    {/* Avatar inicial */}
                    <div
                      className="w-10 h-10 rounded-full bg-cream-champagne border border-cream-dark flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="font-display text-sm font-bold text-ink-brown">
                        {t.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <cite className="not-italic text-body-sm font-semibold text-ink-900">
                        {t.name}
                      </cite>
                      <p className="text-caption text-ink-300">{t.role}</p>
                    </div>
                  </footer>
                </blockquote>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════════
          CTA FINAL — Fondo oscuro, todo el texto en blanco
         ════════════════════════════════════════════════════════════════════ */}
      <section
        className="relative py-24 overflow-hidden bg-ink-900"
        aria-labelledby="cta-heading"
      >
        {/* Imagen de fondo — desaturada y oscurecida */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${BASE}/puerta3.jpeg`}
            alt=""
            fill
            className="object-cover"
            style={{ filter: "saturate(0.15) brightness(0.45)" }}
            sizes="100vw"
          />
          {/* Overlay oscuro principal: garantiza fondo ≥ L 0.05 → ratio ≥ 16:1 para text-white */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/65 to-black/50" />
          {/* Tinte cálido de marca */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C1A0E]/50 via-[#2C1A0E]/25 to-transparent" />
        </div>

        {/* Ornamentos luminosos sobre oscuro */}
        <div
          className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-cream-champagne/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-cream-dark/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative container-site text-center max-w-2xl mx-auto">
          <FadeUp>
            {/* Eyebrow — champagne sobre oscuro (ratio ≥ 8:1) */}
            <span className="block text-xs font-semibold tracking-[0.18em] uppercase text-cream-champagne mb-5">
              ¿Listo para proteger tu hogar?
            </span>

            {/* Título — blanco puro, ratio 21:1 vs fondo oscuro */}
            <h2
              id="cta-heading"
              className="text-white mb-5 [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]"
            >
              Tu primera consulta es gratuita
            </h2>

            {/* Párrafo — blanco/85, ratio ≥ 10:1, legible y elegante */}
            <p className="text-body-md text-white/85 leading-relaxed mb-10 [text-shadow:_0_1px_6px_rgba(0,0,0,0.4)]">
              Cuéntanos tu necesidad y uno de nuestros asesores técnicos te
              contactará para ofrecerte la mejor solución de seguridad. Sin
              compromisos.
            </p>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-cta group">
                Solicitar asesoría
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              {/* Btn secundario adaptado para fondo oscuro */}
              <a
                href="https://wa.me/573015449252?text=Hola%2C%20me%20gustar%C3%ADa%20una%20cotizaci%C3%B3n%20gratuita"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-btn
                           border border-white/30 text-white font-semibold text-body-sm
                           bg-white/10 backdrop-blur-sm
                           hover:bg-white/20 hover:border-white/50
                           transition-all duration-250
                           focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
                aria-label="Contactar por WhatsApp ahora"
              >
                WhatsApp ahora
              </a>
            </div>

            {/* Social proof — todos los textos en blanco */}
            <div className="mt-10 flex items-center justify-center gap-2">
              {/* Avatares: borde blanco/30, fondo blanco/15, inicial blanca */}
              <div className="flex -space-x-2" aria-hidden="true">
                {["A", "C", "M", "R", "J"].map((initial) => (
                  <div
                    key={initial}
                    className="w-8 h-8 rounded-full bg-white/15 border-2 border-white/30
                               flex items-center justify-center"
                  >
                    {/* Inicial en blanco — ratio 21:1 vs fondo oscuro */}
                    <span className="text-[10px] font-bold text-white">
                      {initial}
                    </span>
                  </div>
                ))}
              </div>
              {/* Texto de conteo — blanco/80, ratio ≥ 9:1 */}
              <p className="text-caption text-white/80 ml-1">
                <strong className="text-white">+2.400</strong> familias ya
                confían en nosotros
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

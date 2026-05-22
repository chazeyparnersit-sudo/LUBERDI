"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Star,
  Zap,
  CheckCircle,
  ArrowRight,
  Heart,
  Search,
  Settings,
  HeadphonesIcon,
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

const VALUES = [
  {
    icon: Heart,
    title: "Compromiso",
    desc: "Cumplimos siempre lo que prometemos. Cada instalación se realiza con la misma dedicación y cuidado que ponemos en la primera.",
  },
  {
    icon: Star,
    title: "Calidad",
    desc: "Utilizamos únicamente materiales y procesos certificados de primera línea. No existe un estándar más alto que el que nos exigimos.",
  },
  {
    icon: Shield,
    title: "Confianza",
    desc: "Construimos relaciones duraderas con cada cliente. Tu tranquilidad es nuestra mayor recompensa.",
  },
  {
    icon: Zap,
    title: "Innovación",
    desc: "Nos mantenemos a la vanguardia de la tecnología en seguridad para ofrecerte siempre la mejor solución del mercado.",
  },
];

const PROCESS = [
  {
    step: "01",
    icon: Search,
    title: "Consulta gratuita",
    desc: "Evaluamos tus necesidades de seguridad sin costo ni compromiso. Cuéntanos tu situación.",
  },
  {
    step: "02",
    icon: Settings,
    title: "Diagnóstico técnico",
    desc: "Nuestro equipo visita el lugar y elabora una propuesta personalizada para tu espacio.",
  },
  {
    step: "03",
    icon: CheckCircle,
    title: "Instalación experta",
    desc: "Instalamos con precisión y cuidado. Sin daños a la estructura, sin demoras innecesarias.",
  },
  {
    step: "04",
    icon: HeadphonesIcon,
    title: "Soporte continuo",
    desc: "La relación no termina con la instalación. Ofrecemos mantenimiento y soporte cuando lo necesites.",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* ── Hero/Banner ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[70vh] flex items-end overflow-hidden bg-ink-900"
        aria-label="Banner Nosotros"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${BASE}/puerta4.jpeg`}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay oscuro — ratio ≥7:1 para texto blanco */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          {/* Tinte cálido sutil de marca */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/35 via-transparent to-transparent" />
          {/* Fade inferior hacia la sección de contenido */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cream-deep to-transparent" />
        </div>

        <div className="relative z-10 container-site pb-20 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Eyebrow — champagne sobre fondo oscuro */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-cream-champagne block mb-4">
              <span className="w-6 h-px bg-cream-dark" aria-hidden="true" />
              Nuestra historia
            </span>
            {/* H1 — blanco con sombra */}
            <h1 className="text-white mb-4 max-w-2xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.4)]">
              Sobre Luberdi Seguridad
            </h1>
            {/* Párrafo — blanco/85 con sombra */}
            <p className="text-body-lg text-white/85 max-w-xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.3)]">
              Comprometidos con la protección de hogares y negocios en Colombia
              durante más de 15 años.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Quiénes somos ─────────────────────────────────────────────────── */}
      <section className="section-base" aria-labelledby="quienes-heading">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Imagen */}
            <FadeUp className="relative order-2 lg:order-1">
              <div className="relative rounded-card overflow-hidden shadow-cream-lg aspect-[4/3]">
                <Image
                  src={`${BASE}/puerta1.jpeg`}
                  alt="Equipo de Luberdi Seguridad en instalación profesional"
                  fill
                  className="object-cover img-warm"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Badge flotante */}
              <div
                className="absolute -bottom-6 -right-4 glass-warm rounded-card p-5 shadow-cream"
                aria-hidden="true"
              >
                <p className="font-display text-4xl font-bold text-ink-900">
                  15+
                </p>
                <p className="text-caption text-ink-500 mt-1">
                  años de experiencia
                </p>
              </div>
              {/* Ornamento */}
              <div
                className="absolute -top-4 -left-4 w-24 h-24 rounded-card border-2 border-cream-dark bg-cream-champagne/60 -z-10"
                aria-hidden="true"
              />
            </FadeUp>

            {/* Texto */}
            <div className="order-1 lg:order-2">
              <FadeUp>
                <span className="eyebrow block mb-4">¿Quiénes somos?</span>
                <h2 id="quienes-heading" className="text-ink-900 mb-6">
                  Una empresa colombiana de confianza
                </h2>
                <div className="space-y-4 text-body-md text-ink-500 leading-relaxed">
                  <p>
                    <strong className="text-ink-700">Luberdi Seguridad</strong>{" "}
                    es una empresa colombiana dedicada a la protección de
                    hogares y negocios a través de soluciones integrales en
                    puertas de seguridad, cerrajería de alta gama y sistemas de
                    automatización.
                  </p>
                  <p>
                    Con más de 15 años de experiencia en el sector, nos hemos
                    especializado en la venta e instalación de puertas
                    blindadas, sistemas antipalanca y cerraduras digitales de
                    última generación.
                  </p>
                  <p>
                    Somos distribuidores autorizados de{" "}
                    <strong className="text-ink-700">Mul-T-Lock</strong>, la
                    marca de cerraduras más reconocida a nivel mundial, lo que
                    nos permite ofrecer la tecnología de seguridad más avanzada
                    del mercado.
                  </p>
                </div>
              </FadeUp>

              {/* Checks */}
              <FadeUp delay={0.15} className="mt-8 space-y-3">
                {[
                  "Distribuidores autorizados Mul-T-Lock en Bogotá",
                  "Más de 2.400 instalaciones exitosas",
                  "Garantía en todos los productos y servicios",
                  "Atención técnica personalizada",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="icon-circle w-8 h-8 shrink-0">
                      <CheckCircle className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="text-body-sm text-ink-700">{item}</span>
                  </div>
                ))}
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      {/* ── Misión y Visión ───────────────────────────────────────────────── */}
      <section className="section-accent" aria-labelledby="mision-heading">
        <div className="container-site">
          <FadeUp className="text-center mb-12">
            <span className="eyebrow block mb-4">Nuestra esencia</span>
            <h2 id="mision-heading" className="text-ink-900">
              Misión y Visión
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <FadeUp>
              <div className="bg-cream-ivory border border-cream-dark rounded-card p-8 h-full">
                <div className="icon-circle mb-6">
                  <Shield className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-display-sm font-bold text-ink-900 mb-4">
                  Misión
                </h3>
                <p className="text-body-md text-ink-500 leading-relaxed">
                  Brindar tranquilidad y confianza a nuestros clientes mediante
                  productos de alta calidad y un servicio profesional impecable.
                  Estamos comprometidos con la seguridad y el bienestar de las
                  familias y empresas colombianas.
                </p>
                <div
                  className="mt-6 h-px bg-separator-gradient"
                  aria-hidden="true"
                />
                <p className="mt-4 text-caption text-ink-300 italic">
                  &ldquo;Proteger lo que más valoras es nuestra razón de
                  ser.&rdquo;
                </p>
              </div>
            </FadeUp>

            {/* Visión */}
            <FadeUp delay={0.1}>
              <div className="bg-cream-ivory border border-cream-dark rounded-card p-8 h-full">
                <div className="icon-circle mb-6">
                  <Star className="w-5 h-5" aria-hidden="true" />
                </div>
                <h3 className="font-display text-display-sm font-bold text-ink-900 mb-4">
                  Visión
                </h3>
                <p className="text-body-md text-ink-500 leading-relaxed">
                  Ser reconocidos como líderes en soluciones de seguridad física
                  en Colombia, innovando constantemente y superando las
                  expectativas de quienes confían en nosotros. Expandir nuestra
                  presencia a nivel nacional.
                </p>
                <div
                  className="mt-6 h-px bg-separator-gradient"
                  aria-hidden="true"
                />
                <p className="mt-4 text-caption text-ink-300 italic">
                  &ldquo;Liderar el sector con integridad, tecnología y
                  excelencia.&rdquo;
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Valores ───────────────────────────────────────────────────────── */}
      <section className="section-base" aria-labelledby="valores-heading">
        <div className="container-site">
          <FadeUp className="text-center mb-12 max-w-xl mx-auto">
            <span className="eyebrow block mb-4">Lo que nos define</span>
            <h2 id="valores-heading" className="text-ink-900 mb-4">
              Nuestros valores
            </h2>
            <p className="text-body-md text-ink-500">
              Más que una empresa, somos un equipo con principios sólidos que
              guían cada decisión y cada instalación.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeUp key={v.title} delay={i * 0.08}>
                  <div className="card p-7 h-full flex flex-col">
                    <div className="icon-circle mb-5">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-display-sm font-bold text-ink-900 mb-3">
                      {v.title}
                    </h3>
                    <p className="text-body-sm text-ink-500 leading-relaxed flex-1">
                      {v.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Proceso ───────────────────────────────────────────────────────── */}
      <section className="section-alt" aria-labelledby="proceso-heading">
        <div className="container-site">
          <FadeUp className="text-center mb-14 max-w-xl mx-auto">
            <span className="eyebrow block mb-4">Cómo trabajamos</span>
            <h2 id="proceso-heading" className="text-ink-900 mb-4">
              Tu seguridad en 4 pasos
            </h2>
            <p className="text-body-md text-ink-500">
              Un proceso claro, transparente y sin sorpresas desde la primera
              consulta hasta la entrega final.
            </p>
          </FadeUp>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Línea de conexión desktop */}
            <div
              className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-px bg-separator-gradient"
              aria-hidden="true"
            />

            {PROCESS.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeUp key={p.step} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    {/* Número + icono */}
                    <div className="relative mb-6">
                      <div className="w-[104px] h-[104px] rounded-full bg-cream-ivory border-2 border-cream-dark flex items-center justify-center shadow-cream">
                        <Icon
                          className="w-8 h-8 text-ink-brown"
                          aria-hidden="true"
                        />
                      </div>
                      <span
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-cream-cta border-2 border-cream-deep flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <span className="text-[10px] font-bold text-ink-900">
                          {p.step}
                        </span>
                      </span>
                    </div>
                    <h3 className="font-display text-display-sm font-bold text-ink-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-body-sm text-ink-500 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>

          {/* Nota de garantía */}
          <FadeUp className="mt-12 text-center">
            <p className="text-caption text-ink-300 inline-flex items-center gap-2">
              <CheckCircle
                className="w-4 h-4 text-ink-brown"
                aria-hidden="true"
              />
              Todos nuestros servicios incluyen garantía de 12 a 60 meses según
              el producto.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ── CTA final ─────────────────────────────────────────────────────── */}
      <section className="section-warm" aria-labelledby="nosotros-cta-heading">
        <div className="container-site text-center max-w-xl mx-auto">
          <FadeUp>
            <div className="icon-circle mx-auto mb-6 w-16 h-16">
              <Shield className="w-7 h-7" aria-hidden="true" />
            </div>
            <span className="eyebrow block mb-4">Da el primer paso</span>
            <h2 id="nosotros-cta-heading" className="text-ink-900 mb-5">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-body-md text-ink-500 leading-relaxed mb-10">
              Cuéntanos tu necesidad y nuestro equipo te asesorará sin costo.
              Somos la empresa de confianza que tu hogar o negocio merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-cta group">
                Hablar con un asesor
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/servicios" className="btn-secondary">
                Ver servicios
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

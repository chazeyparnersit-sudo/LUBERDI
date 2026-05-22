"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

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

const FILTERS = [
  { id: "todos", label: "Todos" },
  { id: "puertas", label: "Puertas" },
  { id: "cerraduras", label: "Cerraduras" },
  { id: "automatizacion", label: "Automatización" },
];

const GALLERY_ITEMS = [
  {
    src: `${BASE}/puerta1.jpeg`,
    alt: "Puerta blindada residencial de diseño moderno",
    label: "Puerta Blindada Residencial",
    category: "puertas",
    aspect: "4/3",
  },
  {
    src: `${BASE}/puerta2.jpeg`,
    alt: "Instalación de puerta de seguridad en acceso principal",
    label: "Puerta de Seguridad Exterior",
    category: "puertas",
    aspect: "3/4",
  },
  {
    src: `${BASE}/cerradura1.jpeg`,
    alt: "Cerradura de alta seguridad instalada en puerta principal",
    label: "Cerradura de Alta Seguridad",
    category: "cerraduras",
    aspect: "4/3",
  },
  {
    src: `${BASE}/puerta3.jpeg`,
    alt: "Puerta blindada para local comercial con acabado premium",
    label: "Puerta Comercial Blindada",
    category: "puertas",
    aspect: "4/3",
  },
  {
    src: `${BASE}/cerraduradigital.jpg`,
    alt: "Cerradura digital biométrica de última generación",
    label: "Cerradura Digital Biométrica",
    category: "cerraduras",
    aspect: "4/3",
  },
  {
    src: `${BASE}/multlock.png`,
    alt: "Sistema de cerradura Mul-T-Lock distribuidor autorizado",
    label: "Sistema Mul-T-Lock",
    category: "cerraduras",
    aspect: "4/3",
  },
  {
    src: `${BASE}/puerta4.jpeg`,
    alt: "Puerta antipalanca instalada en residencia con acabado oscuro",
    label: "Puerta Antipalanca Premium",
    category: "puertas",
    aspect: "3/4",
  },
  {
    src: `${BASE}/automatizacion.jpg`,
    alt: "Sistema de automatización de puerta de garaje",
    label: "Automatización de Acceso",
    category: "automatizacion",
    aspect: "4/3",
  },
  {
    src: `${BASE}/cortina.jpg`,
    alt: "Cortina metálica automatizada para local comercial",
    label: "Cortina Metálica Automatizada",
    category: "automatizacion",
    aspect: "3/4",
  },
  {
    src: `${BASE}/cerradura2.jpeg`,
    alt: "Cerradura de seguridad instalada en puerta metálica",
    label: "Cerradura de Seguridad",
    category: "cerraduras",
    aspect: "4/3",
  },
];

/* ── Componente de item de galería ──────────────────────────────────────── */
function GalleryItem({
  item,
  index,
  onClick,
}: {
  item: (typeof GALLERY_ITEMS)[0];
  index: number;
  onClick: (item: (typeof GALLERY_ITEMS)[0]) => void;
}) {
  return (
    <FadeUp delay={index * 0.05}>
      <motion.button
        className="relative overflow-hidden rounded-card bg-cream-bone group w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
        style={{ aspectRatio: item.aspect }}
        onClick={() => onClick(item)}
        aria-label={`Ver ${item.label} en tamaño completo`}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover img-warm transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 350px"
        />
        {/* Overlay hover */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink-900/65 via-ink-900/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          aria-hidden="true"
        />
        {/* Etiqueta en hover */}
        <div
          className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
          aria-hidden="true"
        >
          <span className="badge-warm text-ink-700 text-[11px]">
            {item.category}
          </span>
          <p className="text-body-sm font-semibold text-cream-ivory mt-1.5">
            {item.label}
          </p>
        </div>
      </motion.button>
    </FadeUp>
  );
}

/* ── Lightbox ───────────────────────────────────────────────────────────── */
function Lightbox({
  item,
  onClose,
}: {
  item: (typeof GALLERY_ITEMS)[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-label={`Vista ampliada: ${item.label}`}
      aria-modal="true"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-ink-900/85 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Imagen */}
      <motion.div
        className="relative z-10 max-w-4xl w-full rounded-card overflow-hidden shadow-warm"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="relative"
          style={{
            aspectRatio: item.aspect === "3/4" ? "3/4" : "4/3",
            maxHeight: "80vh",
          }}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain bg-cream-ivory"
            sizes="(max-width: 1024px) 100vw, 80vw"
          />
        </div>
        {/* Caption */}
        <div className="bg-cream-ivory border-t border-cream-dark p-4 flex items-center justify-between">
          <div>
            <p className="text-body-sm font-semibold text-ink-900">
              {item.label}
            </p>
            <p className="text-caption text-ink-300 capitalize">
              {item.category}
            </p>
          </div>
          <Link href="/contacto" className="btn-cta text-caption py-2 px-4">
            Cotizar
          </Link>
        </div>
      </motion.div>

      {/* Botón cerrar */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-card-sm bg-cream-deep border border-cream-dark flex items-center justify-center text-ink-700 hover:bg-cream-bone transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
        aria-label="Cerrar vista ampliada"
      >
        <X className="w-5 h-5" aria-hidden="true" />
      </button>
    </motion.div>
  );
}

/* ── Página ──────────────────────────────────────────────────────────────── */
export default function GaleriaPage() {
  const [activeFilter, setActiveFilter] = useState("todos");
  const [lightboxItem, setLightboxItem] = useState<
    (typeof GALLERY_ITEMS)[0] | null
  >(null);

  const filtered =
    activeFilter === "todos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === activeFilter);

  return (
    <>
      {/* ── Hero/Banner ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden bg-ink-900"
        aria-label="Banner de galería"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${BASE}/puerta3.jpeg`}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay oscuro — contraste ≥7:1 para texto blanco */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          {/* Tinte cálido sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/35 via-transparent to-transparent" />
          {/* Fade inferior hacia sección de contenido crema */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cream-deep to-transparent" />
        </div>

        <div className="relative z-10 container-site pb-20 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Eyebrow — blanco cálido sobre oscuro */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-cream-champagne block mb-4">
              <span className="w-6 h-px bg-cream-dark" aria-hidden="true" />
              Nuestros proyectos
            </span>
            {/* H1 — blanco con sombra, ratio ≥16:1 */}
            <h1 className="text-white mb-4 max-w-2xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.4)]">
              Galería de Proyectos
            </h1>
            {/* Descripción — blanco/85, text-shadow, ratio ≥7:1 */}
            <p className="text-body-lg text-white/85 max-w-xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.3)]">
              Explora algunos de nuestros trabajos más destacados en seguridad
              residencial y comercial.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sección de galería ────────────────────────────────────────────── */}
      <section className="section-base" aria-labelledby="galeria-heading">
        <div className="container-site">
          {/* Encabezado + filtros */}
          <FadeUp className="mb-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="eyebrow block mb-2">Proyectos realizados</span>
                <h2 id="galeria-heading" className="text-ink-900">
                  Todos los trabajos
                </h2>
              </div>

              {/* Filtros */}
              <nav
                className="flex flex-wrap gap-2"
                aria-label="Filtrar por categoría"
              >
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setActiveFilter(f.id)}
                    aria-pressed={activeFilter === f.id}
                    className={[
                      "px-4 py-2 rounded-btn text-body-sm font-semibold transition-all duration-200",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown",
                      activeFilter === f.id
                        ? "bg-cream-cta text-ink-900 border border-cream-hover shadow-cream-sm"
                        : "bg-transparent text-ink-500 border border-cream-dark hover:bg-cream-linen hover:text-ink-700",
                    ].join(" ")}
                  >
                    {f.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Contador accesible */}
            <p
              className="mt-4 text-caption text-ink-300"
              aria-live="polite"
              role="status"
            >
              Mostrando{" "}
              <strong className="text-ink-700">{filtered.length}</strong>{" "}
              proyectos
              {activeFilter !== "todos" && (
                <>
                  {" "}
                  en la categoría{" "}
                  <strong className="text-ink-700">
                    {FILTERS.find((f) => f.id === activeFilter)?.label}
                  </strong>
                </>
              )}
            </p>
          </FadeUp>

          {/* Grid de galería */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
              role="list"
              aria-label={`Proyectos de ${activeFilter === "todos" ? "todas las categorías" : FILTERS.find((f) => f.id === activeFilter)?.label}`}
            >
              {filtered.map((item, i) => (
                <div key={item.src} role="listitem">
                  <GalleryItem
                    item={item}
                    index={i}
                    onClick={setLightboxItem}
                  />
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-body-md text-ink-300">
                No hay proyectos en esta categoría todavía.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA al final ─────────────────────────────────────────────────── */}
      <section
        className="section-warm border-t border-cream-dark"
        aria-labelledby="galeria-cta-heading"
      >
        <div className="container-site text-center max-w-2xl mx-auto">
          <FadeUp>
            <span className="eyebrow block mb-4">¿Te gustó lo que ves?</span>
            <h2 id="galeria-cta-heading" className="text-ink-900 mb-5">
              Solicita tu proyecto personalizado
            </h2>
            <p className="text-body-md text-ink-500 leading-relaxed mb-10">
              Cada proyecto que ves aquí comenzó con una consulta sin costo.
              Cuéntanos qué necesitas y lo hacemos realidad.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contacto" className="btn-cta group">
                Solicitar proyecto
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <a
                href="https://wa.me/573015449252?text=Hola%2C%20vi%20la%20galer%C3%ADa%20y%20me%20gustar%C3%ADa%20cotizar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                aria-label="Contactar por WhatsApp"
              >
                WhatsApp
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxItem && (
          <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
        )}
      </AnimatePresence>
    </>
  );
}

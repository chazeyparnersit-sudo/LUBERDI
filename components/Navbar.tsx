"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronRight } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/servicios", label: "Servicios" },
  { href: "/galeria", label: "Galería" },
  { href: "/contacto", label: "Contacto" },
];

const GITHUB_BASE =
  "https://raw.githubusercontent.com/robertpuente000/luberdi-seguridad/master/images";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra drawer al cambiar ruta
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquea scroll del body cuando drawer está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* ── Header principal ──────────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        className={[
          "fixed top-0 inset-x-0 z-50",
          "transition-all duration-300",
          scrolled
            ? "bg-cream-deep/95 backdrop-blur-xl shadow-cream border-b border-cream-dark"
            : "bg-cream-deep/80 backdrop-blur-sm",
        ].join(" ")}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-[72px]">
            {/* ── Logo ──────────────────────────────────────────────────── */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-darkbrown rounded-sm"
              aria-label="Luberdi Security — Inicio"
            >
              <div className="relative w-10 h-10 rounded-card-sm overflow-hidden border border-cream-dark shadow-cream-sm transition-transform duration-250 group-hover:scale-105">
                <Image
                  src={`${GITHUB_BASE}/logo.png`}
                  alt=""
                  fill
                  className="object-contain p-0.5"
                  sizes="40px"
                  priority
                />
              </div>
              <div className="leading-none">
                <span className="block font-display text-lg font-bold text-ink-900 tracking-tight">
                  Luberdi<span className="text-ink-brown">.</span>
                </span>
                <span className="block text-[10px] font-body font-semibold tracking-[0.2em] text-ink-500 uppercase">
                  Security
                </span>
              </div>
            </Link>

            {/* ── Navegación desktop ────────────────────────────────────── */}
            <nav
              className="hidden md:flex items-center gap-0.5"
              aria-label="Navegación principal"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={[
                      "relative px-4 py-2 text-body-sm font-medium rounded-card-sm",
                      "transition-colors duration-200",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown",
                      isActive
                        ? "text-ink-900 font-semibold"
                        : "text-ink-500 hover:text-ink-900 hover:bg-cream-champagne/60",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                    {/* Línea activa animada con layoutId */}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-line"
                        className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full bg-ink-brown"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* ── Acciones desktop ──────────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href="tel:+573015449252"
                className="flex items-center gap-1.5 text-body-sm font-medium text-ink-500 hover:text-ink-brown transition-colors duration-200"
                aria-label="Llamar a Luberdi Security"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>301 544 9252</span>
              </a>

              <motion.a
                href="/contacto"
                className="btn-cta text-body-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Cotizar ahora
              </motion.a>
            </div>

            {/* ── Toggle móvil ──────────────────────────────────────────── */}
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className={[
                "md:hidden w-10 h-10 rounded-card-sm",
                "flex items-center justify-center",
                "border border-cream-dark bg-cream-bone",
                "text-ink-700 transition-colors duration-200",
                "hover:bg-cream-champagne focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown",
              ].join(" ")}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-5 h-5" aria-hidden="true" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Drawer móvil ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-ink-900/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              key="drawer"
              id="mobile-nav"
              role="dialog"
              aria-label="Menú de navegación"
              className="fixed top-[72px] inset-x-0 z-50 md:hidden"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mx-4 rounded-card bg-cream-deep border border-cream-dark shadow-cream-lg overflow-hidden">
                <nav
                  className="p-4 flex flex-col gap-1"
                  aria-label="Menú móvil"
                >
                  {NAV_LINKS.map((link, i) => {
                    const isActive = pathname === link.href;
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05, duration: 0.28 }}
                      >
                        <Link
                          href={link.href}
                          aria-current={isActive ? "page" : undefined}
                          className={[
                            "flex items-center justify-between",
                            "px-4 py-3.5 rounded-card-sm",
                            "text-body-md font-medium",
                            "transition-colors duration-200",
                            isActive
                              ? "bg-cream-champagne text-ink-900 font-semibold border border-cream-dark"
                              : "text-ink-500 hover:text-ink-900 hover:bg-cream-bone",
                          ].join(" ")}
                        >
                          <span>{link.label}</span>
                          {isActive && (
                            <span
                              className="w-1.5 h-1.5 rounded-full bg-ink-brown"
                              aria-hidden="true"
                            />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Separador */}
                  <div className="divider my-2" aria-hidden="true" />

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: NAV_LINKS.length * 0.05 + 0.05 }}
                    className="flex flex-col gap-2"
                  >
                    <a
                      href="/contacto"
                      className="btn-cta w-full justify-between"
                    >
                      <span>Solicitar cotización</span>
                      <ChevronRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <a
                      href="tel:+573015449252"
                      className="flex items-center justify-center gap-2 w-full py-3 text-body-sm font-medium text-ink-500 hover:text-ink-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" aria-hidden="true" />
                      <span>+57 301 544 9252</span>
                    </a>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer para contenido debajo del header fijo */}
      <div className="h-[72px]" aria-hidden="true" />
    </>
  );
}

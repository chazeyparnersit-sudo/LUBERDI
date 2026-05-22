"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

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

/* SVG WhatsApp inline */
function WhatsAppIcon({ className = "w-5 h-5" }) {
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

/* Icono Facebook inline */
function FacebookIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const SERVICES_OPTIONS = [
  "Puertas Blindadas",
  "Cerraduras Digitales",
  "Sistemas Mul-T-Lock",
  "Automatización",
  "Cortinas Metálicas",
  "Otro servicio",
];

const COVERAGE_ZONES = [
  "Bogotá Norte",
  "Bogotá Sur",
  "Bogotá Centro",
  "Bogotá Occidente",
  "Soacha",
  "Chía",
  "Cajicá",
  "Mosquera",
];

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
    privacidad: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setForm((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero/Banner ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[60vh] flex items-end overflow-hidden bg-ink-900"
        aria-label="Banner de contacto"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${BASE}/background.png`}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          {/* Overlay oscuro — ratio ≥7:1 garantizado para texto blanco */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          {/* Tinte cálido sutil */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2C1A0E]/35 via-transparent to-transparent" />
          {/* Fade inferior */}
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-cream-deep to-transparent" />
        </div>

        <div className="relative z-10 container-site pb-20 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {/* Eyebrow — texto champagne sobre oscuro */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-cream-champagne block mb-4">
              <span className="w-6 h-px bg-cream-dark" aria-hidden="true" />
              Estamos aquí para ti
            </span>
            {/* H1 — blanco con sombra, máximo contraste */}
            <h1 className="text-white mb-4 max-w-2xl [text-shadow:_0_2px_10px_rgba(0,0,0,0.4)]">
              Contáctanos
            </h1>
            {/* Descripción — blanco/85 con sombra, WCAG AA ≥4.5:1 */}
            <p className="text-body-lg text-white/85 max-w-xl [text-shadow:_0_1px_6px_rgba(0,0,0,0.3)]">
              ¿Preguntas, cotizaciones o emergencias? Nuestro equipo responde en
              menos de 24 horas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sección principal: formulario + info ─────────────────────────── */}
      <section className="section-base" aria-labelledby="contacto-heading">
        <div className="container-site">
          <h2 id="contacto-heading" className="sr-only">
            Formulario de contacto e información
          </h2>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* ── Formulario (7 columnas) ──────────────────────────────── */}
            <FadeUp className="lg:col-span-7">
              <div className="card p-8 md:p-10">
                <h2 className="font-display text-display-sm font-bold text-ink-900 mb-2">
                  Envíanos un mensaje
                </h2>
                <p className="text-body-sm text-ink-500 mb-8">
                  Completa el formulario y nos pondremos en contacto contigo a
                  la brevedad posible.
                </p>

                {submitted ? (
                  /* ── Estado de éxito ──────────────────────────────────── */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center py-10"
                    role="alert"
                    aria-live="polite"
                  >
                    <div className="icon-circle mx-auto mb-6 w-16 h-16">
                      <CheckCircle
                        className="w-8 h-8 text-ink-brown"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-display text-display-sm font-bold text-ink-900 mb-3">
                      ¡Mensaje recibido, {form.nombre.split(" ")[0]}!
                    </h3>
                    <p className="text-body-md text-ink-500 mb-8 max-w-sm mx-auto">
                      Hemos recibido tu solicitud y te contactaremos a la
                      brevedad. También puedes escribirnos directamente por
                      WhatsApp.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <a
                        href="https://wa.me/573015449252?text=Hola%2C%20acabo%20de%20enviar%20un%20formulario%20de%20contacto"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cta"
                        aria-label="Continuar por WhatsApp"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        Continuar por WhatsApp
                      </a>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            nombre: "",
                            email: "",
                            telefono: "",
                            servicio: "",
                            mensaje: "",
                            privacidad: false,
                          });
                        }}
                        className="btn-secondary"
                      >
                        Nuevo mensaje
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* ── Formulario ───────────────────────────────────────── */
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      {/* Nombre */}
                      <div>
                        <label
                          htmlFor="nombre"
                          className="block text-body-sm font-semibold text-ink-700 mb-2"
                        >
                          Nombre completo
                          <span
                            className="text-ink-brown ml-1"
                            aria-hidden="true"
                          >
                            *
                          </span>
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          value={form.nombre}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          placeholder="Tu nombre"
                          className="input-warm"
                          autoComplete="name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-body-sm font-semibold text-ink-700 mb-2"
                        >
                          Correo electrónico
                          <span
                            className="text-ink-brown ml-1"
                            aria-hidden="true"
                          >
                            *
                          </span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          placeholder="correo@ejemplo.com"
                          className="input-warm"
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      {/* Teléfono */}
                      <div>
                        <label
                          htmlFor="telefono"
                          className="block text-body-sm font-semibold text-ink-700 mb-2"
                        >
                          Teléfono / WhatsApp
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={form.telefono}
                          onChange={handleChange}
                          placeholder="+57 300 000 0000"
                          className="input-warm"
                          autoComplete="tel"
                        />
                      </div>

                      {/* Servicio */}
                      <div>
                        <label
                          htmlFor="servicio"
                          className="block text-body-sm font-semibold text-ink-700 mb-2"
                        >
                          Tipo de servicio
                        </label>
                        <div className="relative">
                          <select
                            id="servicio"
                            name="servicio"
                            value={form.servicio}
                            onChange={handleChange}
                            className="input-warm appearance-none pr-10 cursor-pointer"
                          >
                            <option value="">Seleccionar servicio</option>
                            {SERVICES_OPTIONS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          {/* Chevron decorativo */}
                          <div
                            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-ink-300"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mensaje */}
                    <div className="mb-6">
                      <label
                        htmlFor="mensaje"
                        className="block text-body-sm font-semibold text-ink-700 mb-2"
                      >
                        Mensaje
                        <span
                          className="text-ink-brown ml-1"
                          aria-hidden="true"
                        >
                          *
                        </span>
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={form.mensaje}
                        onChange={handleChange}
                        required
                        aria-required="true"
                        rows={5}
                        placeholder="Cuéntanos qué necesitas. Por ejemplo: tipo de puerta, ubicación, tipo de cerradura..."
                        className="input-warm resize-none"
                      />
                    </div>

                    {/* Checkbox de privacidad */}
                    <div className="flex items-start gap-3 mb-8">
                      <div className="relative flex items-center mt-0.5">
                        <input
                          type="checkbox"
                          id="privacidad"
                          name="privacidad"
                          checked={form.privacidad}
                          onChange={handleChange}
                          required
                          aria-required="true"
                          className="w-4 h-4 rounded border-cream-dark accent-[#8b7355] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
                        />
                      </div>
                      <label
                        htmlFor="privacidad"
                        className="text-body-sm text-ink-500 cursor-pointer leading-relaxed"
                      >
                        He leído y acepto la{" "}
                        <span className="text-ink-darkbrown underline underline-offset-2 hover:text-ink-brown transition-colors cursor-pointer">
                          Política de Privacidad
                        </span>{" "}
                        de Luberdi Seguridad.
                      </label>
                    </div>

                    {/* Botón enviar */}
                    <button
                      type="submit"
                      disabled={
                        !form.privacidad ||
                        !form.nombre ||
                        !form.email ||
                        !form.mensaje
                      }
                      className="btn-cta w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Enviar mensaje a Luberdi Seguridad"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      Enviar mensaje
                    </button>

                    <p className="mt-4 text-caption text-ink-300 text-center">
                      <span aria-hidden="true">*</span> Campos obligatorios
                    </p>
                  </form>
                )}
              </div>
            </FadeUp>

            {/* ── Información de contacto (5 columnas) ─────────────────── */}
            <FadeUp delay={0.1} className="lg:col-span-5">
              <div className="bg-cream-ivory border border-cream-dark rounded-card p-8 h-full">
                <h3 className="font-display text-display-sm font-bold text-ink-900 mb-6">
                  Información de contacto
                </h3>

                {/* Datos de contacto */}
                <ul className="space-y-5 mb-8" role="list">
                  <li role="listitem">
                    <a
                      href="tel:+573015449252"
                      className="flex items-start gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown rounded-sm"
                      aria-label="Llamar al +57 301 544 9252"
                    >
                      <div className="icon-circle shrink-0 group-hover:bg-cream-dark transition-colors duration-200">
                        <Phone className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-caption font-semibold text-ink-300 uppercase tracking-wide mb-1">
                          Teléfono / WhatsApp
                        </p>
                        <p className="text-body-md font-semibold text-ink-700 group-hover:text-ink-900 transition-colors">
                          +57 301 544 9252
                        </p>
                      </div>
                    </a>
                  </li>

                  <li role="listitem">
                    <a
                      href="mailto:luberdipuertasdeseguridad@gmail.com"
                      className="flex items-start gap-4 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown rounded-sm"
                      aria-label="Enviar correo a luberdipuertasdeseguridad@gmail.com"
                    >
                      <div className="icon-circle shrink-0 group-hover:bg-cream-dark transition-colors duration-200">
                        <Mail className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-caption font-semibold text-ink-300 uppercase tracking-wide mb-1">
                          Correo electrónico
                        </p>
                        <p className="text-body-sm font-semibold text-ink-700 group-hover:text-ink-900 transition-colors break-all">
                          luberdipuertasdeseguridad@gmail.com
                        </p>
                      </div>
                    </a>
                  </li>

                  <li role="listitem">
                    <div className="flex items-start gap-4">
                      <div className="icon-circle shrink-0">
                        <MapPin className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-caption font-semibold text-ink-300 uppercase tracking-wide mb-1">
                          Ubicación
                        </p>
                        <address className="not-italic text-body-md font-semibold text-ink-700">
                          Bogotá D.C., Colombia
                        </address>
                      </div>
                    </div>
                  </li>

                  <li role="listitem">
                    <div className="flex items-start gap-4">
                      <div className="icon-circle shrink-0">
                        <Clock className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-caption font-semibold text-ink-300 uppercase tracking-wide mb-1">
                          Horario
                        </p>
                        <dl className="space-y-0.5">
                          <div className="flex gap-2">
                            <dt className="text-body-sm text-ink-500 w-20">
                              Lun – Vie
                            </dt>
                            <dd className="text-body-sm font-semibold text-ink-700">
                              8:00 am – 6:00 pm
                            </dd>
                          </div>
                          <div className="flex gap-2">
                            <dt className="text-body-sm text-ink-500 w-20">
                              Sábado
                            </dt>
                            <dd className="text-body-sm font-semibold text-ink-700">
                              8:00 am – 1:00 pm
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="divider mb-8" aria-hidden="true" />

                {/* Botones de acceso directo */}
                <div className="space-y-3" aria-label="Contacto directo">
                  <a
                    href="https://wa.me/573015449252?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20puertas%20de%20seguridad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-btn text-body-sm font-semibold text-white bg-[#25D366] hover:bg-[#1db954] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
                    aria-label="Contactar por WhatsApp ahora"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp
                  </a>

                  <a
                    href="https://www.facebook.com/LuberdiSeguridad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-5 py-3.5 rounded-btn text-body-sm font-semibold text-white bg-[#1877F2] hover:bg-[#1565d8] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-darkbrown"
                    aria-label="Visitar Facebook de Luberdi Seguridad"
                  >
                    <FacebookIcon className="w-5 h-5" />
                    Facebook
                  </a>

                  <a
                    href="mailto:luberdipuertasdeseguridad@gmail.com?subject=Consulta%20de%20seguridad&body=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20sus%20servicios"
                    className="btn-secondary w-full justify-center gap-3"
                    aria-label="Enviar correo electrónico"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    Correo electrónico
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Zonas de cobertura ────────────────────────────────────────────── */}
      <section
        className="section-accent border-t border-cream-dark"
        aria-labelledby="cobertura-heading"
      >
        <div className="container-site text-center max-w-3xl mx-auto">
          <FadeUp>
            <span className="eyebrow block mb-4">¿Dónde trabajamos?</span>
            <h2 id="cobertura-heading" className="text-ink-900 mb-5">
              Cobertura en Bogotá y alrededores
            </h2>
            <p className="text-body-md text-ink-500 mb-10">
              Atendemos toda la ciudad de Bogotá y sus municipios aledaños.
              Nuestros técnicos se desplazan sin costo adicional dentro de la
              zona metropolitana.
            </p>

            {/* Grid de zonas */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {COVERAGE_ZONES.map((zone) => (
                <div
                  key={zone}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-ivory border border-cream-dark"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-cream-cta"
                    aria-hidden="true"
                  />
                  <span className="text-body-sm text-ink-700 font-medium">
                    {zone}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cream-dark border border-cream-hover">
                <span
                  className="w-1.5 h-1.5 rounded-full bg-ink-brown"
                  aria-hidden="true"
                />
                <span className="text-body-sm text-ink-700 font-medium">
                  y más...
                </span>
              </div>
            </div>

            <div className="divider mb-8" aria-hidden="true" />

            <p className="text-caption text-ink-300">
              ¿Fuera de estas zonas?{" "}
              <a
                href="tel:+573015449252"
                className="text-ink-darkbrown underline underline-offset-2 hover:text-ink-brown transition-colors"
              >
                Contáctanos
              </a>{" "}
              y evaluamos sin compromiso.
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Fondos y Superficies (Crema / Blancos Cálidos) ──────────────────
        cream: {
          deep: "#FAF9F6", // Blanco Cálido Profundo — fondo principal
          bone: "#F5F5F5", // Blanco Hueso — fondos alternos
          base: "#FFFDD0", // Crema Base — secciones destacadas
          linen: "#FAF0E6", // Lino — secciones alternas / hover cards
          beige: "#F5F5DC", // Beige (Cosmic Latte) — nav cards / footer
          ivory: "#FFFFF0", // Marfil — modales glassmorphism
          champagne: "#F7E7CE", // Champagne — highlights sutiles
          dark: "#E8DCC4", // Crema Oscuro — bordes, separadores, btn primario
          cta: "#D4B896", // CTA — botón llamada a la acción
          hover: "#D4C4A8", // Hover — estado hover de botones primarios
        },
        // ── Textos y Contraste ───────────────────────────────────────────────
        ink: {
          "900": "#1A1A1A", // Negro Suave — H1 / titulares principales
          "700": "#2D2D2D", // Gris Oscuro — H2, H3, texto principal
          "500": "#5A5A5A", // Gris Medio — texto secundario (≥4.5:1 vs #FAF9F6)
          "300": "#8A8A8A", // Gris Claro — etiquetas, placeholders
          brown: "#8B7355", // Marrón Suave — links decorativos / accents (uso solo en texto grande)
          darkbrown: "#6b5541", // Marrón Oscuro — links en texto normal (≥4.5:1 vs cream)
        },
      },

      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },

      fontSize: {
        // Escala tipográfica refinada con line-height de 1.5-1.6
        "display-2xl": [
          "4.5rem",
          { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-xl": [
          "3.75rem",
          { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "display-lg": [
          "3rem",
          { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "700" },
        ],
        "display-md": [
          "2.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "700" },
        ],
        "display-sm": [
          "1.875rem",
          { lineHeight: "1.25", letterSpacing: "-0.01em" },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.6" }],
        "body-md": ["1rem", { lineHeight: "1.6" }],
        "body-sm": ["0.875rem", { lineHeight: "1.55" }],
        caption: ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.04em" }],
      },

      spacing: {
        // Sistema de 8px
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
      },

      borderRadius: {
        card: "12px",
        "card-sm": "8px",
        btn: "8px",
      },

      boxShadow: {
        card: "0 2px 12px rgba(139, 115, 85, 0.08), 0 1px 3px rgba(0,0,0,0.04)",
        "card-hover":
          "0 8px 28px rgba(139, 115, 85, 0.14), 0 2px 8px rgba(0,0,0,0.06)",
        "cream-sm": "0 2px 8px rgba(230, 220, 200, 0.4)",
        cream: "0 4px 20px rgba(230, 220, 200, 0.5)",
        "cream-lg": "0 12px 40px rgba(200, 180, 150, 0.25)",
        warm: "0 8px 32px rgba(212, 184, 150, 0.3)",
        focus: "0 0 0 3px rgba(139, 115, 85, 0.35)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "warm-gradient":
          "linear-gradient(135deg, #FAF9F6 0%, #FAF0E6 50%, #F5F5DC 100%)",
        "cream-subtle": "linear-gradient(180deg, #FFFFFF 0%, #FAF9F6 100%)",
        "separator-gradient":
          "linear-gradient(90deg, transparent 0%, #E8DCC4 50%, transparent 100%)",
      },

      animation: {
        float: "floatY 6s ease-in-out infinite",
        "float-slow": "floatY 10s ease-in-out infinite",
        "fade-up": "fadeUp 0.55s cubic-bezier(0.16,1,0.3,1) forwards",
        "scale-in": "scaleIn 0.4s cubic-bezier(0.16,1,0.3,1) forwards",
        shimmer: "shimmer 2s linear infinite",
      },

      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },

      transitionDuration: {
        "250": "250ms",
      },
    },
  },
  plugins: [],
};

export default config;

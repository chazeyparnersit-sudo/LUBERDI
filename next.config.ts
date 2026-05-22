import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Imágenes del repositorio oficial de Luberdi Seguridad
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/robertpuente000/luberdi-seguridad/**",
      },
      // Unsplash (respaldo)
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

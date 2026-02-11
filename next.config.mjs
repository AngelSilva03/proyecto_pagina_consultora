/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← AGREGAR ESTO
  basePath: '/proyecto_pagina_consultora',  // ← AGREGAR ESTO (nombre de tu repo)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
export default nextConfig

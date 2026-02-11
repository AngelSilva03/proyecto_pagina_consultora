/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  basePath: '/proyecto_pagina_consultora',  //  repo)
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
export default nextConfig

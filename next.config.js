/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["aronshire.com.tr", "/", "media.discordapp.net", "i.pinimg.com","user-images.githubusercontent.com","cdn.discordapp.com","i.imgur.com","raw.githubusercontent.com","sperovita.gallerycdn.vsassets.io","softwareer.net","www.coreldraw.com","ph-files.imgix.net","cdns.iconmonstr.com","avatars.githubusercontent.com",],
    unoptimized: true,
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    return config;
  },
  trailingSlash: true,
} 


module.exports = nextConfig

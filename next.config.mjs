/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

    output: 'export',
    distDir: 'dist' ,

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.dummyjson.com',
        },
      ],
      unoptimized:true
    },

};



export default nextConfig;

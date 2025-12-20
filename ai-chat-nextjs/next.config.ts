import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  
  // Vercel优化配置
  experimental: {
    // 启用服务器组件优化
    serverComponentsExternalPackages: [],
  },
  
  // 输出配置
  output: 'standalone',
  
  // 图片优化
  images: {
    domains: [],
    formats: ['image/webp', 'image/avif'],
  },
  
  // 压缩配置
  compress: true,
  
  // 环境变量配置
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
};

export default nextConfig;

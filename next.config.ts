import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes:true,
  experimental:{
    typedEnv:true,
    testProxy:true
  }

};

export default nextConfig;

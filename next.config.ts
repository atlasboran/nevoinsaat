  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
    output: "export",
      images: {
    unoptimized: true,
  },

  Başlangıç şöyle görünmeli:

  const nextConfig: NextConfig = {
    output: "export",
    images: {
      unoptimized: true,
    },
    allowedDevOrigins: ["192.168.1.106", "localhost", "127.0.0.1"],
  };
    allowedDevOrigins: ["192.168.1.106", "localhost", "127.0.0.1"],
  };

  export default nextConfig;

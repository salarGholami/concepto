import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // موقت برای خطایابی (بعد از پیدا کردن ارور، حذفش کن)
  },
  webpack: (config) => {
    config.module?.rules?.push({
      test: /\.(png|jpe?g|gif|svg)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

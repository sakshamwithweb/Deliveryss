// next.config.mjs

const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'ReactRefreshWebpackPlugin'
      );
    }

    return config;
  },
};

export default nextConfig;

const themeUISvgrTemplate = require('./config/themeUISvgrTemplate');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    outputStandalone: true,
  },
  webpack: (config) => {
    const imageLoaderRule = config.module.rules.findIndex(
      (rule) => rule.loader === 'next-image-loader',
    );

    config.module.rules[imageLoaderRule].test =
      /\.(png|jpg|jpeg|gif|webp|avif|ico|bmp)$/i;

    config.module.rules.unshift({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
      options: {
        prettier: false,
        titleProp: true,
        svgo: true,
        template: themeUISvgrTemplate,
        svgoConfig: {
          plugins: [{ name: 'removeViewBox', active: false }],
        },
      },
      issuer: { and: [/\.(ts|tsx|js|jsx|md|mdx)$/] },
    });

    return config;
  },
};

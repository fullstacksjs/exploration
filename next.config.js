const themeUISvgrTemplate = require('./config/themeUiSvgrTemplate');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
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
      },
    });

    return config;
  },
};

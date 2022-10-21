/** @type {import('next').NextConfig} */
const dotenvLoad = require('dotenv-load');
const styledJSX = require(`styled-jsx/webpack`).loader;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withPWA = require('next-pwa');
dotenvLoad(process.env.NODE_ENV === 'production' ? 'production' : 'development');

const nextConfig = {
  webpack5: true,
  eslint: {
    dirs: ['.']
  },
  basePath: '',
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx'],
  trailingSlash: true,
  poweredByHeader: false,
  env: {
    NEXT_SITE_URL: process.env.NEXT_SITE_URL || 'https://localhost'
  },
  devIndicators: {
    autoPrerender: false
  },
  pwa: {
    disable: process.env.NODE_ENV === 'production' ? false : true,
    dest: 'public',
    register: true,
    skipWaiting: true
  },

  webpack: (config, { dev, defaultLoaders }) => {
    if (dev) {
      config.watchOptions.poll = 1000;
      config.watchOptions.aggregateTimeout = 300;
      config.module.rules.push({
        test: /\.(ts|tsx|js|jsx)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              failOnError: true,
              emitWarning: true
            }
          }
        ]
      });
    }

    config.module.rules.push({
      test: /\.(css|scss|sass)$/,
      use: [
        defaultLoaders.babel,
        {
          loader: styledJSX,
          options: {
            type: (fileName, options) => {
              return options.query.type || 'global';
            }
          }
        },

        {
          loader: 'postcss-loader'
        },
        {
          loader: 'sass-loader'
        }
      ]
    });
    return config;
  }
};

module.exports = withBundleAnalyzer(withPWA(nextConfig));

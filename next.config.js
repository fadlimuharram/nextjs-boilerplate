const withOffline = require('next-offline');
const withSass = require('@zeit/next-sass')

const nextConfig = {
  workboxOpts: {
    runtimeCaching: [
      {
        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'images',
          expiration: {
            maxEntries: 10,
          },
        },
      },
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }

    ]
  }
};

module.exports = withSass(withOffline(nextConfig));
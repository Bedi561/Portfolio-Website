// next.config.js
module.exports = {
  reactStrictMode: true,
  // Next.js automatically detects the App Router from the `app/` folder
  webpack(config) {
    config.resolve.modules.push(__dirname + '/src');
    return config;
  },
};

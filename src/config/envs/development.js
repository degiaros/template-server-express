export default {
  version: process.env.APP_VERSION,
  port: process.env.PORT || 4000,
  timezone: process.env.TIMEZONE,
  domain: process.env.DOMAIN || 'localhost',
  corsDomain: process.env.CORS_DOMAIN || '*',
  logging: {
    maxsize: 100 * 1024, // 100mb
    maxFiles: 2,
    colorize: false,
  },
};

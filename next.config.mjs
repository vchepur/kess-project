import i18n from './next-i18next.config.js';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    ...i18n,
};

export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    backendPath: 'http://localhost:5000',
  },
  async redirects() {
    return [
      // if the header `x-redirect-me` is present,
      // this redirect will be applied
      {
        source: '/',
        permanent: false,
        destination: '/adverts',
      },
      
    ]
  },
}

module.exports = nextConfig

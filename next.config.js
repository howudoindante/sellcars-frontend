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
      // {
      //   source: '/user/:id/config',
      //   // has: [
      //   //   {
      //   //     type: 'header',
      //   //     key: 'x-redirect-me',
      //   //   },
      //   // ],
      //   permanent: false,
      //   destination: '/auth/login',
      // },
      
    ]
  },
}

module.exports = nextConfig

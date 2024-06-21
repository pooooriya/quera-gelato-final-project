/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{
            hostname:"static.delino.com",
            protocol:"https"
        }]
    },
    reactStrictMode:false,
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "bwydpccvhcjsycrnaxjq.supabase.co",
      },

      {
        protocol: "https",
        hostname: "images.ctfassets.net",
      },
    ],
  },
  async headers() {
    return [
      {
        // 対象APIのパスパターン
        // 今回は src/app/api/ 配下にAPIを作っているので下記のようにする
        source: "/api/:path*",
        headers: [
          {
            // CORSを許可するオリジン
            key: "Access-Control-Allow-Origin",
            // すべてのオリジンを許可するなら * (アスタリスク)
            // ただセキュリティ的にはよろしくないので注意
            value: `${process.env.NEXT_PUBLIC_API_PREFIX}${process.env.NEXT_PUBLIC_VERCEL_URL}`,
          },
          {
            // 許可するメソッド
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,POST,PUT,DELETE",
          },
          {
            // 許可するリクエストヘッダ
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { webpack }) => {
    config.externals["node:fs"] = "commonjs node:fs";
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    };
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, "");
      }),
    );

    return config;
  },
  redirects: async () => {
    return [
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: false,
      },
      {
        source: "/work",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/jammming",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/ravenous",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/confessions-of-a-wavy-girl",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/salem-baptist-church",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/chick-fil-a",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/ctipath",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/the-garden-church",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/bolt",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/work/first-baptist-douglasville",
        destination: "/#work",
        permanent: false,
      },
      {
        source: "/covid-19",
        destination: "/",
        permanent: false,
      },
      {
        source: "/resume",
        destination: "/assets/resume.pdf",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;

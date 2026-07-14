import type { NextConfig } from "next";

const repoName = "madofinds";
const isProd = process.env.NODE_ENV === "production";
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isProd && isGithubPages ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { i18n } = require("./i18n.config");
const nextConfig = {
  // i18n,
};

export default nextConfig;

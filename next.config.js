const { PHASE_PRODUCTION_SERVER } = require("next/constants");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// .BundleAnalyzerPlugin;

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return defaultConfig;
  }

  return defaultConfig;
};

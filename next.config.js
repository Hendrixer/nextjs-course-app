const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const nextEnv = require("next-env");
const dotenvLoad = require("dotenv-load");

// look for env file and grab every variable and inject
dotenvLoad();

// {
//   env: {
//     HELP_APP_URL = https://frontendmasters.com
//   }
// }
const withNextEnv = nextEnv();

module.exports = withNextEnv({});

// module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     console.log("I'm in dev mode");

//     return defaultConfig;
//   }
//   return defaultConfig;
// };

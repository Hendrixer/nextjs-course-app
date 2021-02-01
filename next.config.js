const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')

dotenvLoad()

const withEnv = nextEnv()

module.exports = withEnv()

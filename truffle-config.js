require('dotenv').config()
const HDWalletProvider = require('truffle-hdwallet-provider-privkey')
const privateKeys = process.env.PRIVATE_KEYS || ''

module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*',
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          privateKeys.split(','),
          `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 4,
    },
  },
  plugins: ['truffle-plugin-verify'],
  api_keys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
  },
  compilers: {
    solc: {
      version: '0.6.12',
    },
  },
}

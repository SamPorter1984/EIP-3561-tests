require('@nomicfoundation/hardhat-toolbox')
require('solidity-coverage')
module.exports = {
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {},
    ganache: {
      url: 'http://127.0.0.1:7545',
    },
  },
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 6824,
          },
        },
      },
    ],
  },
}

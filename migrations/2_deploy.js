const SushiToken = artifacts.require('SushiToken')
const MasterChef = artifacts.require('MasterChef')

module.exports = async function (deployer) {
  // Deploy Sushi Token
  await deployer.deploy(SushiToken)
  const sushiToken = await SushiToken.deployed()

  // Deploy Masterchef Contract
}

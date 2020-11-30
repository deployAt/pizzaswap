const SushiToken = artifacts.require('SushiToken')
const MasterChef = artifacts.require('MasterChef')

const { DEV_ADDRESS, TOKENS_PER_BLOCK, START_BLOCK, BONUS_END_BLOCK, ALLOCATION_POINT, LP_TOKEN_ADDRESS } = process.env

module.exports = async function (deployer) {
  // Deploy Sushi Token
  await deployer.deploy(SushiToken)
  const sushiToken = await SushiToken.deployed()

  // Deploy Masterchef
  await deployer.deploy(
    MasterChef,
    sushiToken.address,
    DEV_ADDRESS,
    web3.utils.toWei(TOKENS_PER_BLOCK),
    START_BLOCK,
    BONUS_END_BLOCK
  )

  const masterChef = await MasterChef.deployed()
  await sushiToken.transferOwnership(masterChef.address)

  // Add Liquidity ETH/DAI Pool for sushi
  await masterChef.add(ALLOCATION_POINT, LP_TOKEN_ADDRESS, false)
}

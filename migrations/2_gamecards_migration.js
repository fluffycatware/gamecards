const GameCards = artifacts.require("./GameCards.sol");

module.exports = function(deployer, network, accounts) {
  console.log("Deploying to: ", network, accounts)
  // We deploy the contract with the owner being the first address from accounts
  const owner = accounts[0]
  deployer.deploy(GameCards, owner)
}

const MyContract = artifacts.require("MyContract");
const SupplyChain = artifacts.require("SupplyChain");

module.exports = function (deployer) {
  deployer.deploy(MyContract);
  deployer.deploy(SupplyChain);
};

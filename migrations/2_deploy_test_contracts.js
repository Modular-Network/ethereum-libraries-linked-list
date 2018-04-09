var LinkedListLib = artifacts.require("./LinkedListLib.sol")
var LinkedListTestContract = artifacts.require("./LinkedListTestContract.sol");

module.exports = function(deployer, network) {
  deployer.deploy(LinkedListLib, {overwrite: false})
  deployer.link(LinkedListLib, LinkedListTestContract)
  deployer.deploy(LinkedListTestContract)
};

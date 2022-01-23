const Decaf = artifacts.require("Decaf");
const Verification = artifacts.require("Verification")
module.exports = function (deployer) {
  deployer.deploy(Decaf);
  deployer.deploy(Verification);
};

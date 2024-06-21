
// Tests that containt contract function must only be runned with
// truffle test command. You will get and error if you run it 
// with mocha
var MyContract = artifacts.require("./MyContract.sol")

contract("MyToken", function (accounts) {
  it("It should accept unsigned number", () => {
    return MyContract.deployed()
      .then((instance) => {
        instance.setNumber(5, {from: accounts[0]})
        return instance.getNumber()
      })
      .then(function (number) {
        assert.equal(number.toNumber(), 5, "The provided number is not unsigned")
      })
  })

})

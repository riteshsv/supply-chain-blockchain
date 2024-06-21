const SupplyChain = artifacts.require("./SupplyChain.sol");

contract("SupplyChain", accounts => {
  it("should add a product", async () => {
    let instance = await SupplyChain.deployed();
    await instance.addProduct("Product1", "Origin1",{from:accounts[0]});
    let product = await instance.products(1);
    assert.equal(product.name, "Product1", "The product name was not stored correctly.");
  });

  it("should ship a product", async () => {
    let instance = await SupplyChain.deployed();
    await instance.addProduct("Product2", "Origin2");
    await instance.shipProduct(2, "Location2");
    let product = await instance.products(2);
    assert.equal(product.currentLocation, "Location2", "The product location was not updated correctly.");
  });

  it("should deliver a product", async () => {
    let instance = await SupplyChain.deployed();
    await instance.addProduct("Product3", "Origin3");
    await instance.deliverProduct(3);
    let product = await instance.products(3);
    assert.equal(product.isDelivered, true, "The product delivery status was not updated correctly.");
  });
});


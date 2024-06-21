pragma solidity >=0.4.5 < 0.9.0;

contract SupplyChain {
    struct Product {
        uint256 id;
        string name;
        string origin;
        string currentLocation;
        bool isDelivered;
    }

    mapping(uint256 => Product) public products;
    uint256 public productCounter;

    event ProductAdded(uint256 id, string name, string origin);
    event ProductShipped(uint256 id, string currentLocation);
    event ProductDelivered(uint256 id);

    function addProduct(string memory _name, string memory _origin) public {
        productCounter++;
        products[productCounter] = Product(productCounter, _name, _origin, _origin, false);
        emit ProductAdded(productCounter, _name, _origin);
    }

    function shipProduct(uint256 _id, string memory _currentLocation) public {
        Product storage product = products[_id];
        product.currentLocation = _currentLocation;
        emit ProductShipped(_id, _currentLocation);
    }

    function deliverProduct(uint256 _id) public {
        Product storage product = products[_id];
        product.isDelivered = true;
        emit ProductDelivered(_id);
    }
}


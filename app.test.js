const {deleteItem, findItemName, updateItem} = require("./app")

items = [{"name":"popsicle", "price": "1.45"}, {"name":"meat", "price": "1.45"}, {"name":"hammer", "price": "1.45"}]

describe("findItem", function () {
    test('with valid inputs', function () { 
        let result = findItemName("popsicle", items); 
        expect(result).toEqual({"name":"popsicle", "price": "1.45"});
    });
});

    test('name not found', function () {
        let sum = add(-2, 3);
    expect(sum).toEqual(1);
    });
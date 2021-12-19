// Declaring a class 
// class Product {
//     constructor(itemName,price,discount,productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }
// }

// let pencil = new Product('Pencil',20,2,'P10');

// const Product1 = class Product {
//     constructor(itemName,price,discount,productCode){
//         this.itemName = itemName;
//         this.price = price;
//         this.discount = discount;
//         this.productCode = productCode;
//     }

//     get getDiscountValue()
//     {
//         return this.discount;
//     }

//     set setDiscountValue(value)
//     {
//         this.discount = value;
//     }

//     discountValue()
//     {
//         return this.discount * this.price/100;
//     }
// };

// let chair = new Product1('chair',499,15,'C10')


class Product {
    constructor(itemName)
    {
        this.itemName = itemName;
    }

    getItemName()
    {
        return this.itemName + " is a Product";
    }
}

class Furniture extends Product 
{
    constructor(itemName)
    {
        super(itemName);
    }
    
    getItemName()
    {
        return this.itemName + " is a Furniture"
    }
}

let pencil = new Product('Pencil');
let chair = new Furniture('chair');


"use strict";
let mountains = [
    {
        name: "Kilimanjaro",
        height: 19341,
    },
    {
        name: "Everest",
        height: 29029,
    },
    {
        name: "Denali",
        height: 20310,
    },
];
let products = [
    {
        name: "Dog Food",
        price: 35,
    },
    {
        name: "Collar",
        price: 10,
    },
    {
        name: "Leash",
        price: 15,
    },
    {
        name: "Squeaker Toy",
        price: 7,
    },
];
const calcAverageProductPrice = (arrayOfProducts) => {
    return arrayOfProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0) / arrayOfProducts.length;
};
console.log(calcAverageProductPrice(products));
let inventory = [
    {
        product, : .name, "motor": ,
        product, : .price, "10.00": ,
        quantity: 10,
    },
    {
        product, : .name, "sensor": ,
        product, : .price, "12.50": ,
        quantity: 4,
    },
    {
        product, : .name, "LED": ,
        product, : .price, "1.00": ,
        quantity: 0,
    },
];
const calcInventoryValue = (arrayOfInventoryItems) => {
    let total = 1;
    product.price.forEach((item) => {
        product.price *= item.quantity;
    });
    return total;
};
// const calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number => {
//     return // xxxx
// }
// console.log(xxxx)

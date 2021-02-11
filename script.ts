interface Mountain {
  name: string;
  height: number;
}

let mountains: Mountain[] = [
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

// const findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string | "" => {
//   let tallestMountain = 0;
//   return arrayOfMountains.forEach((mountain) => {
//     if (tallestMountain < mountain) mountain = tallestMountain;
//     return name.tallestMountain;
//   });
// };

// findNameOfTallestMountain[];

// const findNameOfTallestMountain = (arrayOfMountains: Mountain[]): string | "" => {
//     for (tallest = 0; tallest < ){}    
// }

// var arr }= [2,3,4];
// var largest = 0;

// arr.forEach(function(elem){
//   if(largest < elem)
//   largest = elem;
// });

// console.log(largest);

interface Product {
  name: string;
  price: number;
}

let products: Product[] = [
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
]

const calcAverageProductPrice = (arrayOfProducts: Product[]): number | 0 => {
    return arrayOfProducts.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0) / arrayOfProducts.length;   
}
console.log(calcAverageProductPrice(products))

interface InventoryItem {
    product: Product,
    quantity: number,
}

let inventory: InventoryItem[] = [
    {
        product.name: "motor",
        product.price: "10.00",
        quantity: 10,
    },
    {
        product.name: "sensor",
        product.price: "12.50",
        quantity: 4,
    },
    {
        product.name: "LED",
        product.price: "1.00",
        quantity: 0,
    },
]

const calcInventoryValue = (arrayOfInventoryItems: InventoryItem[]): number | 0  => {
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

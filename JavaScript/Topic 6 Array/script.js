// /*// example of push method
// const arr = [1, 2, 3, 4, 5];
// arr.push(6); 
// console.log(arr); 

// // example of splice method inserting an element at a specific index
// const lang = ["python", "java" , "c++"];
// lang.splice(1, 0, "javascript");
// console.log(lang);

// //
// const skills = ["html", "react", "js", "css", "next"];

// skills.splice(1, 3, "css", "js", "react");
// console.log(skills);*/

// //problem in map
// const arr = [1, 2, 3, 4, 5];
// const x = arr.map(element => {
//     if(element > 3){
//         return element;
//     }
// });
// console.log("x", x); // [undefined, undefined, undefined, 4, 5]

// // filter method problem solved
// const arr1 = [1, 2, 3, 4, 5];
// const x1 = arr1.filter(element => {
//     if(element > 3){
//         return element;
//     }
// });
// console.log("x1", x1); // [4, 5]

// //Example 2 
// const product = [
//     { id:1, item: "Samsung FE Tab", price: 90000 },
//     { id:2, item: "MacBook", price: 149000 },
//     { id:3, item: "Sangung s26", price: 134000 },
//     { id:4, item: "iphone", price: 179000 },
//     { id:5, item: "ipad pro", price: 85000 }
// ];

// const x2 = product.filter(element => {
//     if(element.price < 150000){
//         return element;
//     }
// });
// console.log("x2", x2); // [ { id: 1, item: "Samsung FE Tab", price: 90000 }, { id: 3, item: "Sangung s26", price: 134000 }, { id: 5, item: "ipad pro", price: 85000 } ]

// //OR

// const x3 = product.filter(element => element.price < 150000);
// console.log("x3", x3); // [ { id: 1, item: "Samsung FE Tab", price: 90000 }, { id: 3, item: "Sangung s26", price: 134000 }, { id: 5, item: "ipad pro", price: 85000 } ]

// const product1 = [
//     { id:1, item: "Samsung FE Tab", price: 90000 , category: "samsung"},
//     { id:2, item: "MacBook", price: 149000 , category: "apple"},
//     { id:3, item: "Sangung s26", price: 134000 , category: "samsung"},
//     { id:4, item: "iphone", price: 179000 , category: "apple"},
//     { id:5, item: "ipad pro", price: 85000 , category: "apple"},
//     { id:6, item: "Samsung s23", price: 134000 , category: "samsung"}
// ];

// const x4 = product1.filter(element => element.category === "samsung");
// console.log("x4", x4); // [ { id: 1, item: "Samsung FE Tab", price: 90000 , category: "samsung"}, { id: 3, item: "Sangung s26", price: 134000 , category: "samsung"}, { id: 6, item: "Samsung s23", price: 134000 , category: "samsung"} ]

// const product2 = [
//     { id:1, item: "Samsung FE Tab", price: 90000 , category: "samsung"},
//     { id:2, item: "MacBook", price: 149000 , category: "apple"},
//     { id:3, item: "Sangung s26", price: 134000 , category: "samsung"},
//     { id:4, item: "iphone", price: 179000 , category: "apple"},
//     { id:5, item: "ipad pro", price: 85000 , category: "apple"},
//     { id:6, item: "Samsung s23", price: 134000 , category: "samsung"}
// ];

// const x5 = product2.filter(element => element.category === "apple" && element.price > 150000);
// console.log("x5", x5); // [ { id: 6, item: "Samsung s23", price: 134000 , category: "samsung"} ]


// const product3 = {
//    samsung: { item: "Samsung FE Tab", price: 90000 , category: "samsung"},
//     apple: { item: "MacBook", price: 149000 , category: "apple"},
// }

// product3.vivo = { item: "Vivo s26", price: 134000 , category: "vivo"};
// console.log(product3); // { samsung: { item: "Samsung FE Tab", price: 90000 , category: "samsung"}, apple: { item: "MacBook", price: 149000 , category: "apple"}, vivo: { item: "Vivo s26", price: 134000 , category: "vivo"} }
// example of reduce method
// const arr = [1, 2, 3, 4, 5];
// const total = arr.reduce((acc, curr) => acc + curr, 0); 
// console.log("total", total); // 15 


const product4 = [
    
    { id:1, item: "MacBook M5", price: 149000 , qty: 1},   
    { id:2, item: "Sangung s26 pro max", price: 140000 , qty: 3}, 
    { id:3, item: "iphone 18 pro max", price: 180000 , qty: 2},
    { id:4, item: "ipad pro", price: 192000 , qty: 4},    
]

const totalqty = product4.reduce((acc, element) => {
    acc = acc + element.qty*element.price;
    return acc;
}, 0);
console.log("totalqty", totalqty); // 10
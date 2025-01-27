// function greeting() {
//   console.log("Hello, World!");
// }
// console.log(greeting());

// function greeting(){
//     let a = 8;
//     let b = 9;
//     return a+b;
// }
// console.log(greeting());

// function greeting(a, b){
//     return a+b;
// }
// console.log(greeting(4, 6));

// function greeting(visal){
//     return visal;
// }
// console.log(greeting("Hello, World!"));

// function sum(){
//     return 13 * count
// }
// console.log(sum(4));


// function discount(count, discount) {
//     let short = 10;
//     let priceDisc = 10 - (10 * discount / 100);
//     return priceDisc * count;
// }
// console.log(discount(3, 50,));

function discount(price, discount) {
    let discounts = price - (price * discount / 100);
    return discounts
}
console.log(discount(3, 50,10));
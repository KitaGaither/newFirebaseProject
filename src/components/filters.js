let bootcamps = [
    {name: 'Bootstrap', weekLength: '5 weeks', price: 1000},
    {name: 'React', weekLength: '5 weeks', price: 500},
    {name: 'React Native', weekLength: '4 weeks', price: 700},
    {name: 'Node', weekLength: '4 weeks', price: 900},
];

// let expensiveBootcamps = [];
// for (let i = 0; i < bootcamps.length; i++) {
//     if (bootcamps[i].price >= 1000) {
//         expensiveBootcamps.push(bootcamps[i]);
//     }
// }
// console.log(expensiveBootcamps);

let expensiveBootcamps = bootcamps.filter(bootcamp => bootcamp.price >= 1000);
console.log(expensiveBootcamps);

// let inexpensiveBootcamps = [];
// for (let i = 0; i < bootcamps.length; i++) {
//     if (bootcamps[i].price < 1000) {
//         inexpensiveBootcamps.push(bootcamps[i]);
//     }
// }
// console.log(inexpensiveBootcamps);

let inexpensiveBootcamps = bootcamps.filter(bootcamp => bootcamp.price < 1000);
console.log(inexpensiveBootcamps);


// let shortBootcamps = [];
// for (let i = 0; i < bootcamps.length; i++) {
//     if (bootcamps[i].weekLength <= '4 weeks') {
//         shortBootcamps.push(bootcamps[i]);
//     }
// }
// console.log(shortBootcamps);

let shortBootcamps = bootcamps.filter(bootcamp => bootcamp.weekLength <= '4 weeks');
console.log(shortBootcamps);

// let longBootcamps = [];
// for (let i = 0; i < bootcamps.length; i++) {
//     if (bootcamps[i].weekLength >= '5 weeks') {
//         longBootcamps.push(bootcamps[i]);
//     }
// }
// console.log(shortBootcamps);

let longBootcamps = bootcamps.filter(bootcamp => bootcamp.weekLength >= '5 weeks');
console.log(longBootcamps);

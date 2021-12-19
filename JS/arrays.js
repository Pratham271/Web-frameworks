const names = ['Amal','Dhanvan','Akash','Akshit','Neha','Supriya']
// names.indexOf('Akash')
// console.log(names.indexOf('Akash'))

// names.lastIndexOf('Akash')
// console.log(names.lastIndexOf('Akash'))

// names.includes('Akshit')
// console.log(names.includes('Akshit'))

let channels = [{
    name : 'Apna College',
    subscriber : 10000
}, {
    name : 'Apni Kaksha',
    subscriber : 20000
}, {
    name : 'Aman Dhattarwal',
    subscriber : 50000  
}];

// console.log(channels.find(function (element){
//     return element.name === 'Apni Kaksha';
// }))

 console.log(channels.find(element => element.name === 'Apni Kaksha'))

 let cities = [
     {name : 'Mumbai', population : 3792621},
     {name : 'Delhi', population : 8175133},
     {name : 'Bangalore', population : 2695598},
     {name : 'Chennai', population : 2099451},
     {name : 'Lucknow', population : 1526006}
 ];

//  console.log(cities.filter(city => city.population > 3000000))
console.log(cities.map(city => city.population * 2))

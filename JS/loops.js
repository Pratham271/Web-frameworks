// for in loop
let animal = {
    name : "Zebra",
    legs : 4
};  

for (let key in animal){
        console.log(key),animal[key];
}

// using arrays
let names = ["Rahul","Neha","Aman","Rishabh"];
for(let index in names){
    console.log(index,names[index])
}

// for of loop
for (let name of names)
{
    console.log(name)
}
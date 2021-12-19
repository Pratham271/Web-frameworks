//constructor Function

// function Course(title){
//     this.title = title,
//     this.enroll = function()
//     {
        
//     console.log('you are successfully enrolled');
//     }
// }

// const Course_1 = new Function('title',`
// this.title = title,
// this.enroll = function()
// {   
//     console.log('you are successfully enrolled');
// }`
// )
 
// const course_2 = new Course_1('JavaScript');
// course_2.enroll();

// // Primitive Datatype
// let number = 10;
// // Pass by value
// let number_2 = number;
// number = 15;

// console.log(number);
// console.log(number_2);

// // Reference Datatype
// let obj = {number : 10};
// // Pass by Reference
// let obj2 = obj;

// obj.number = 15;

// console.log(obj);
// console.log(obj2);

const course = 
{
       title : 'JavaScript',
       enroll()
    {
            
        console.log('you are successfully enrolled');
    }
}

const course_1 = {...course}
course_1.title = "C++"

console.log(course);
console.log(course_1);

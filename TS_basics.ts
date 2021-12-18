let myVar:string = "Hello World";
console.log(myVar);
//myfun();
// abc = myfun();
var o = Object.create({});
o.course1 = 76;
o.course2 = 82;
console.log(o);
let arr:number[] = [34,454,676,43,546,87,90];
console.log(toString.call(o)===['object Array']);
console.log(arr.join()[2]);
console.log(arr.slice(2,5));
class complexNum{
    real : number;
    img : number;
    fun1:complexNum (c:complexNum){
        let result : complexNum ;
        result.real = this.real + c.real;
        result.img = this.img + c.img;
    

    }
}
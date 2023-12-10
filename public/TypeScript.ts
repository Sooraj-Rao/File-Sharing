// const Data = (name: string, email: String, age: number=20) => console.log({Name:name,Email: email,Age: age});
//                                                 //Default value like this given
// Data("Sooraj", "soora@g.com");

// //Accecpt  parameter with type specific and also get return specified type value

// const Data = (num1: number, num2: number): number => {
//   return num1 + num2;
// };
// console.log(Data(20, 10));

// Use Void if nothing is getting returned

// const abc=(name:string):void=>{
//     console.log(name);
//     // return 2              <--  will give Error
// }

//Use never if wanna throw error ..same like void

// const abc=(err:string):never=>{
//     throw new Error(err);
// }

// This means the function is expecting object in return
// const course=():{}=>{
//     return {}
// }

// This means the function is expecting object with key value in return
// const course = (): { name: string; price: number } => {
//   return { name: "Sooraj", price: 300 };
// };

// course();

// const User = {
//   name: " hitesh",
//   email: "hitesh@tco.dev",
//   isActive: true,
// };

//This wont give error as pasing object ,but giving properies direvtly gives error
// const User = ({ name: string, age: number }) => {}
// const obj = { name: "Sooraj", age: 30, class: "MCA" };
// User(obj)
// User({ name: "Sooraj", age: 30, class: "MCA" })  //gives error since accept only 2 arguemnts

//Using a object as refrer like that for function parameter type

// type User = {
//   name: string;
//   age: number;
//   isLogged: boolean;
// };

// // type MyUser=string      Not so useful can use as name:MyUser

// const fun = (user: User) => {}; also can use (user: User):User

// fun({ name: "", age: 29, isLogged: true }); //so while calling i should pass same fileds as in User

// Another Ex

// type Point = {
//   x: number;
//   y: number;
// };

// const fun = (pt: Point) => {
//   return pt.x + pt.y;
// };
// console.log(fun({ x: 10, y: 20 }));

// ? and readonly in TypeScript

// type User = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   age: number;
//   creditCard?: number; ////   ? so that this field is optional.
// };

// type Add = User & {
//   //Just like inheritance obtaining propety from another type
//   addres: string;
// };

// const MyUser: Add = {
//   //here used add which has both Add and User ..Misiing one filed like address wil give error
//   _id: "kfdnkaslksakd223ew",
//   name: "Sooraj",
//   age: 30,
//   email: "sj@g.com",
//   addres: "dsd",
// };

//  MyUser._id='62binwjs'    //This gives error since id is readonly..Like const which cant be modified

// Array

//way of defining array

// const superHeros: string[] =[] //also can use like string[][] in some other case not here 
//  const heroPower: number[] =[]
// const heroPower: Array<number> =[]

// type user = {
//   name: string;
//   age: number;
// // };

// const data: user[] = []; //Empty array which may contain object of type user

// data.push({ name: "S", age: 3 });

// console.log(data);

// Union

// let score: string | number = 1; //like or

// const fun = (id: number | string) => {
//   // id.toLowerCase()               //give error since it require validation

//   if (typeof id === "string") {
//     id.toLowerCase();
//   }
//   if (typeof id === "number") {
//     id.toFixed(2);
//   }
// };

// Union in array

// const data: (string | number)[] = ['hi',377,9,'helo'];      //array can have either elemts string or number

//Accept only specific values

// let nation:'Cloud'|'Rain'|'Sunny';

// nation='Moon'   //This give error since we should chooose out of those 3 values.

// Tuples
//It will meants to follow specific order.

// let user:[string,string,number];
// user=['Sooraj','Rao',30]                 // values should be given acc. to order

// type user=[string,string,number];
// const My:user=['Sooraj','Rao',30]        // Also like this

//Enum

// enum choice {
//   first,
//   second,
//   third,
//   fourth,
// }
// const neww = choice.first; //Like choosing out of 4

// Interface

// interface user {
//   name: string;
//   trail: () => string; //also ca use like this trial():string
//   Coupon(value: string, amt: number): string;
// }

// const me: user = {
//   name: "Sooraj",
//   trail: () => {
//     return "helo";
//   },
//   Coupon: (value: "Soora", amt: 33) => {
//     return value;                     //retruning amt will give error since numer as coupon acepet above string..Can use | in above if we need num also in
//   },
// };

// Updating Interface

// interface abc {
//   name: string;
// }

// interface abc {
//   email: string;
// }
// //Writing same interface 2 times will add new values wit older ones

// let user: abc = {
//   name: "ss",
//   email: "Sooraj",
// };

// Interface Inheritance

// interface User {
//   name: string;
//   email: string;
//   password: string;
// }

// interface Admin extends User {
//   id: string;
//   role: 'Manager'|'Worker'|'Intern'|'Tester';
// }

// const User: User = {
//   name: "Sooraj",
//   email: "sid",
//   password: "fasj",
// };

// const Admin: Admin = {
//   id: "rgv",
//   role:"Manager",
//   name: "Sooraj",
//   email: "sid",
//   password: "fasj",
// };

export {};

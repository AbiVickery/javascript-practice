console.log('Hello world!');
null 
undefined
{ name: "Abigail" }
/* VREyeParameters(100% isFinite);
VRFieldOfView(100% isFinite);
VRFrameData(isFinite);
VRPose(isFinite);
VRDisplayEvent(isFinite);
VRDisplayCapabilities(Infinity);
VRDisplay(Infinity); */
// space
typeof 22; // "number"

typeof "Abigail"; // "string"

typeof true; // "boolean"

typeof undefined; // "undefined"

typeof { age: 18 }; // "object"


typeof null;  // "object" !?!?
typeof [1,2,3]; // "object"
// space

var name = "Abigail Vickery";

var age;
age = 18;

var friends = [ "Fabian", "Hallie", "TJ" ];

console.log( friends.length );
console.log( friends[1] );

function VRDisplay() {
    var vrp;
    vrp = VRPose;
    for (let i = 0; i < vrp.length; i++) {
        const element = vrp[i];
        
    }
}
// {PointerEvent}


var foo = 'hello';
{
    var faz = 'hola';
    let bar = 'world';
    const yo = 'yoyo';
    console.log(faz);
    console.log(bar);
}

console.log(foo); // hello
console.log(faz); 
// console.log(bar); // not defined
// console.log(yo); // not defined

var pay = 0;
{
    var payRate = 18;
    let weeklyPay = payRate * 40;
    let monthlyPay = weeklyPay * 4;
    var yearlyPay = monthlyPay * 12;
    pay = yearlyPay;
}

console.log(pay);

var hello = 'world';
let world = 'hello';
const helloWorld = 'hello world!';

{
    console.log(world);
    console.log(hello);
    let foo = helloWorld;
    console.log(foo);
}

let fooBar = foo + hello + world;
console.log(fooBar);

// data types
let string = 'string'; // string
let anotherString = "another string"; // string
let intString = '0';
let escapeChar = "We can't put a single quote in a string"; 
let escapeChar2 = "He said 'this would work'";
let escapeChar2 = "he said\"this would work\"";
let int = 0; // integer
let int = 2.1; // integer
let bool = false; // boolean
let bool2 = true; // boolean

let arr = []; // array
let obj = {}; // object

let gasRate = 2.20;
let milesPerGal = 16;
let milesToHome = 6.3;
let tankSize = 13;

let costOfTank = gasRate * tankSize;
let roundTrip = milesToHome * 2;
let weekDist = roundTrip * 5;
let monthDist = weekDist * 4;
let totalDistance = monthDist * 11;
debugger;

let totalMilesPerGal = totalDistance/milesPerGal;
let totalCost = totalMilesPerGal * gasRate;
console.log(totalCost);
debugger;


// var date1 = new Date();
// console.log('date1',date1);

// setTimeout(() => {
//     var date2 = new Date();
//     console.log('date2',date2);

//     var diff = date2 - date1;
//     console.log(diff);
// }, 2000);



// let c = [];
// c[2] = 10;
// c[5] = 15;
// console.log(c);
// for (const i in c) {
//     console.log(c[i]);
// }

// for (const i of c) {
//     console.log(i);
// }

// thisPlayer = !thisPlayer;

// Arrays and objects review


let arr = [1,2,3,4];
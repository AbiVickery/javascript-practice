Clipboard(document.writeIn('Test1'));

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


var date1 = new Date();
console.log('date1',date1);

setTimeout(() => {
    var date2 = new Date();
    console.log('date2',date2);

    var diff = date2 - date1;
    console.log(diff);
}, 2000);



let c = [];
c[2] = 10;
c[5] = 15;
console.log(c);
for (const i in c) {
    console.log(c[i]);
}

for (const i of c) {
    console.log(i);
}

thisPlayer = !thisPlayer;

// Arrays and objects review

let arr = [];
let arr2 = [1,2,3,4];
console.log(arr2[0]); // 1
console.log(arr2[4]); // undefined
let arr3 = [];
arr3[2] = 'hello';
arr3[5] = 'world';
console.log(arr3);
console.log(arr3[0]); // undefined

let arr4 = new Array(10).fill(0);
console.log(arr4);
console.log(arr2[arr2.length - 1]);

let arr5 = [2+3, 5-1, 6*2];
console.log(arr5);

let arr6 = [
    [1,2,3],
    [4,5,6]
];

console.log(arr6[0][0]); // 1
console.group(arr6);
console.log(arr6[1][1]); // 2

for (let i = 0; i < arr6.length; i++) {
    // arr6[0] == [1,2,3]
    for (let j = 0; j < arr6[i].length; j++) {
        // arr6[0][0]
        if (j == 2) {
            break;
        }
        console.log(arr6[i][j]);
    }
}

let arr7 = [
    [
        [1,2,3],
        [1,2,3]
    ],
    [
        [1,2,3],
        [1,2,3]
    ]
];
console.log(arr7[1][0]); // 4

for (let i = 0; i < arr7.length; i++) {
    // arr7[0] == [1,2,3,4,5,6]
    for (let j = 0; j < arr7.length; j++) { // arr7[0].length
        // arr7[1][0] == 7
        console.log(arr7[i][j]);
    }
}

console.log('here');

// objects

// let obj = {};
let obj = {
    keyString: 'value',
    keyInt: 2,
    keyArr: [1,2,3],
    keyObj: {
        key: 'value'
    }
}

let person = {
    fname: 'Abby',
    lname: 'Vickery',
    lang: ['HTML', 'CSS', 'Python', 'JavaScript', 'Swift'],
    address: {
        street: 'Carolwood',
        number: '5432'
    },
    'hello world': '你好，世界' // chinese for hello world: [Nǐ hǎo, shìjiè]
}
// dot or bracket notation
console.log(person['fname']);
// console.log(person[]);
console.log(person.fname);
console.log(person['lang'][0]);
console.log(person.lang[0]);
console.log(person.address);
console.log(person['hello world']);

let obj3 = {}
    obj3[0] = '你好';
    obj3[1] = '世界';

console.log(obj3);
console.log(obj3[0]);

let obj4 = {
    fname: 'Abby',
    lname: 'Vickery'
}
let name = 'fname';
console.log(obj4.name); // undefined obj4.name
console.log(obj4[name]); // Abby obj4['fname']

let arr10 = [];
arr10.push('unicorn');
console.log('unicorn');
arr10.push('pegasus', 'earth', 'alicorn');
console.log(arr10)
let temp = arr10.push('unicorn', 'pegasus', 'earth', 'alicorn');
console.log(temp, arr10);

let temp1 = arr10.pop();
console.log(arr10.length);
console.log(temp1); // alicorn

// const ponies = ['unicorn', 'pegasus', 'earth'];

let arr11 = ['Abby', 'Vickery', 'Python', 'Carolwood']
let obj5 = {
    fname: 'Abby',
    lname: 'Vickery',
    lang: ['HTML', 'CSS', 'Python'],
    address: 'Carolwood Dr.'
}

let obj6 = {
    fname0: 'Abby',
    fname1: 'Ingot',
    fname2: 'Luvfle',
    //...
}

let arr13 = ['Abby', 'Ingot', 'Luvfle'];

let arr14 = [
    ['Abby', 'Python', 'Jackson'],
    ['Luvfle', 'Art', 'Ridgeland'],
    ['Dani', 'Drama', 'Jackson'],
    ['Rayla', 'Assasain', 'Xadia']
];

console.log(arr11[arr11.length - 1]);
console.log(arr11.length - 1);


let obj7 = {
    animal0: ['Tripod Fish', 'Pterodactyl', 'Tasmanien Tiger'],
    animal1: ['Dragon Fish', 'Teranedon', 'Tasmanien Devil'],
    animal2: ['Puffer Fish', 'T-Rex', 'Ball Python']
    //...
}

let obj8 = {
    fname: 'Abby',
    lname: 'Vickery',
    lang: ['HTML', 'CSS', 'Python'],
    // lang: {
    //     lang1: 'HTML',
    //     lang2: 'Python'
    // }

}

let arr15 = [
    {
        fname: 'Abby',
        lname: 'Vickery',
        lang: ['HTML', 'CSS', 'Python'],
        city: 'Jackson',
        familyID: 325
    },
    {
        fname: 'Dani',
        lname: 'Vickery',
        lang: 'none',
        city: 'Jackson',
        familyID: 325
    },
    {
        fname: 'Hallie',
        lname: 'Stricklen',
        lang: 'Python',
        city: 'Ridgeland',
        familyID: 234
    },
    {
        fname: 'Clara',
        lname: 'Qualls',
        lang: 'none',
        city: 'Dallas',
        familyID: 521
    },
    {
        fname: 'Adele',
        lname: 'Qualls',
        lang: 'none',
        city: 'Dallas',
        familyID: 521
    },
    {
        fname: 'Brendan',
        lname: 'Qualls',
        lang: 'none',
        city: 'Dallas',
        familyID: 521
    },
    {
        fname: 'Rayla',
        lname: 'Moonshadow',
        lang: 'none',
        city: 'Xadia',
        familyID: 739
    },
    {
        fname: 'Callum',
        lname: 'insertlastname',
        lang: 'none',
        city: 'Katolis',
        familyID: 738
    },
    {
        fname: 'Ezran',
        lname: 'insertlastname',
        lang: 'none',
        city: 'Katolis',
        familyID: 738
    },
    {
        fname: 'Claudia',
        lname: 'insertlastname',
        lang: 'none',
        city: 'Katolis',
        familyID: 737
    },
    {
        fname: 'Soren',
        lname: 'insertlastname',
        lang: 'none',
        city: 'Katolis',
        familyID: 737
    }
];

for (let arr15 = 0; arr15 < arr15.length; arr15++) {
    const person = array[i];
    if (person.familyID == 234) {
        console.log(person.fname, person.lname, person.lang, person.city. person.familyID);
    }
    
}



/*
Assignment Operator
=
---------------------------------------------
**Comparision Operators**
== Loosely
!= Loose not equal
=== Strict -> Same Data Type as well as equal
!== Strict not equal
< Less than
> Greater than
<= Less than or equal to
>= Greater than or equal to
-------------------------------------------
*/
var two = '2';
var result = ('2' * 1) + 3; // 5
console.log(result);

console.log(2 == '2', "2 == '2'"); // true
console.log(2 === '2', "2 === '2'"); // false
console.log(2 >= '2');
console.log(2 >= '2');

/*
String multiple comparisions together
&& -> AND
|| -> OR
*/
console.log(2 == 2 && 2 === 2); // true
console.log(2 == 2 && 2 === '2'); // false
console.log(2 === 2 || 2 === '2'); // true

// The only symbol that doesnt convert a string to an interger is the plus symbol (+)

// Boolean
var foo = false;
var bar = true;

// NOT !
var baz = !false; // true
var boo = !true; // false

console.log( !(2===2) ); // false
console.log( !(2==='2') ); // true

// Conditionals
if (true) {
    // do stuff
}

if (2 == 2) { // true
    console.log("2 == 2", 2 == 2);
}

// TRUTHY/ FALSEY
/*
false == false
0 == false
'' == false
NaN == false
undefined == false
Null == false
*/

if (2 == 3) { // false
    console.log('NOOO!!!!');
    console.log("2 == 3", 2 == 3);
}

// FALSEY
if ('' || 0 || NaN || null || undefined || false) { // false
    console.log('Not here!');
}

if (true) {
    // do stuff
} else {
    // do other stuff
}

if (5 < 10) { // true
    console.log("5 < 10", 5 < 10);
} else {
    console.log("other stuff");
}

if (10 < 10) { // false
    console.log("10 < 10", 10 < 10);
} else {
    console.log("other stuff");
}

if (true) {
    // do stuff
} else if (true) {
    // do this stuff
} else {
    // do other stuff
}

if (false) {
    // do stuff
} else if (false) {
    // do this stuff
} else {
    // do other stuff
}

if (5 < 3) { // false
    // do stuff
    console.log("do stuff");
} else if (5 == 5) { // true
    // do this stuff
    console.log("do this stuff");
} else {
    // do other stuff
    console.log("do other stuff");
}

var num = 4;
if (num < 3) { // false
    // do stuff
    console.log("do stuff");
} else if (num == 5) { // false
    // do this stuff
    console.log("do this stuff");
} else if (num == 4) { // true
    console.log("We made it here!");
}

/* Pet Finder
------------------------------
|_1.Spider 2.Parrot
|
|_3.Snake 4.Fish
-----------------------------
|
-----------------------------
|_5.Hamster 6.Rabbit
|
|_7.Dog 8.Cat
----------------- */
// if(fur === 'Yes') {
//     // POSSIBLE choices Hamster, Rabbit, Dog, Cat
//     if(cage = 'Yes') {
//         // other stuff
//     }
// }

var animals = {
    dog: {
        fur: true,
        cage: false,
        independent: false,
        scales: false,
        feathes: false
    },

}

var choices = {
    fur: false,
    scalse: true,
    feathers: false
}


//functions

// functions with no parameters

function hellowWorld() {
    console.log('Hello World');
}

hellowWorld();

function heyYall(name) {
    console.log('Hey Y\'all');
    name = 'user';
    console.log('Hey ' + name);
}

heyYall();

function additionByTwo(num) {
    let result = parseInt(num) + 2;
    console.log(result);
    return result;
}

additionByTwo('2');

function multiply(num1 = 6, num2 = 7) {
    let result = num1 * num2;
    console.log(result);
    return result;
}

multiply(5);

function layers(a, b) {
    let test1 = multiply(a, b);
    let test2 = additionByTwo(test1);
    console.log(test2);
    return test2;
}

layers(6, 5); // 32

// const subtractFrom100 = ()=> {
//     let sub1 = subtract(5);
//     console.log(sub1);
//     return sub1;
// }

// subtractFrom100(7);

const subtractFrom100 = ()=> {
    // do stuff
    let result = 100 - num;
    console.log(result);
    return result;
}

subtractFrom100(78);

// build your own adventrue
// at least 4 stages


// var result = 1 / 0;

// function vrCapabilites() {
//     VRFrameData(num) {
//         let vrp = VRPose;
//     }
// }

// function aditionByTwo(num) {

// }

/* 

C# no keyword
python def
java static
php function
swift function

*/

// function
function name(params) {
    // do stuff
    console.log('hello');
}

// function with -
const hello = function (params) {
    // do stuff
    console.log('world');
}
/*
const moo = () => 'Cow';
console.log(moo());
const moo = () => {
    return 'Cow';
}
const moo = function() {
    return 'Cow';
}
*/

// const animalSays = (animal, sound) => `${animal} says ${sound}`;
const animalSays = (a, s) => `${a} says ${s}`;
console.log(animalSays('cow', 'moo'));
/*
setTimeout(() => {
    
}, timeout);
*/
function hola() {
    foo = 'Hello';
    let bar = 'World';

    return `${foo} ${bar}`;
}

console.log(foo);
console.log(hola());

/*
function hola() {
    foo = 'Hello';
    let bar = 'World';
    return foo + " " + bar;
}
*/

// return 'The population of' + city + 'is' + pop + 'and';
return `The population of ${city} is ${pop} and`;

// var temp = "This is what I was talking about ", "Just do this.";

function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

var quayHotel = new Hotel('Quay', 40, 25);
console.log(quayHotel.rooms);
console.log(quayHotel.checkAvailability());


// isUnique = (arr) => {
//     const breadcrumbs = {};
//     let result = true;

//     for (let i = 0; i < arr.length; i++) {
//         console.log(~~~~ LOOP ~~~~ i === ${i}`);
//         if (breadcrumbs[arr[i]]) {
//             result = false;
//         } else {
//             breadcrumbs[arr[i]] = true;
//         }
//     }

//     return result;
// };

// console.log(isUnique([1,2,3]) === true);
// // console.log(isUnique([1,1,3]) === false);



//Task: Transform this simple sorting algorithm into a unique sort.
// It should not return any duplicate values in the sorted array.

// input: [1,5,2,1] => output: [1,2,5]
// input: [4,2,2,3,2,2,2] => output: [2,3,4]

/* const uniqSort = function(arr) {
    const breadcrumbs = {};

    return arr.sort((a, b) => a - b);
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
*/

/*
const uniqSort = function(arr) {
    const breadcrumbs = {};

    return arr.sort((a, b) => a - b);
};

uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
console.log(uniqSort);  */

const uniqSort = function(arr) {
    const breadcrumbs = {arr};

    // do stuff below
    for (let i = 0; i < arr.length; i++) {
        return arr.sort((a, b) => a - b);
    };
    console.log(arr);
};
uniqSort([4,2,2,3,2,2,2]); // => [2,3,4]
console.log(uniqSort);
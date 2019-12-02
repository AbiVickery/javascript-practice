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
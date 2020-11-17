
function log(message) {
    console.log(message)
}

var message = 'Hello World!';

log(message);

// TYPES //

// Number can be integer or floating point
// Any type can take on any type but has to be specifically typed as 'any'
let a: number;
let b: boolean;
let c: string;
let d: any;

// Arrays structured like other statically typed c langs
let strArr: number[]
// can also assign at dec
let strArr2: number[] = [2,54,88];
// Any type array can do just that
let anyArr: any[] = [5, true, 'Hello'];
// Enum type:  All related constants can go in a container

enum Color { Red, Green, Blue };
// You might see the values explicitly set like enum Color { Red = 0, Green = 1, ...}

let backgroundColor = Color.Red;

// Type Assertions

let message2 = 'abc';
//message2.endsWith('c');  // true

// If a variable is declared and not typed.. It will default to an 'any' type. 
// Later on. You can assert it's type like so:
let message3;

message3 = 'abc';

//let endsWmsg = (<string>message).endsWith('c') // true

// It's important to remember that the above does NOT change the type at runtime. this merely allows intellisense to be used on type later after de

// Arrow Functions (Same as you've already learned)
let arrowLog = (message) => {
    console.log(message);
}

// Arrow functions with only one return value can be written on one line, if there is also only 1 parameter, the parenthesis can
// be removed, but keeping it is pretty good practice:
let arrowlog2 = message2 => console.log(message2);

// INTERFACES IN TYPESCRIPT

//define the shape of a point object

interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    console.log(point);
}

drawPoint({
    x: 4,
    y: 6
})

// CLASSES //

// In the above example, it would make sense cohesion wise to keep the drawPoint method with it's interface

// A class groups properties and functions that are highly related

class Point2 {
    x: number;  // FIELD
    y: number;  // FIELD

    // In other C langs you can overload constructors .. Typescript doesn't allow that, but you can 
    // add optionality of the constructor parameters by adding a '?' to them
    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {        // METHOD
        console.log('X: ' + this.x + ' Y: ' + this.y);
    }  
}

let pointB = new Point2(3, 5);

// pointB.x = 3;   // Unecessary after constructor added
// pointB.y = 8;

pointB.draw();

// CONSTRUCTORS //

// Add a constructor to the above class to allow initialization of x & y fields at object instantiation

// ACCESS MODIFIERS //
// By default all members are public 
// If you want to prevent a field or method from being reassigned later. Add private keyword
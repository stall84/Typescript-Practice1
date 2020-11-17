
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

let drawPoint = (point: Point) => {     // This is essentially the same thing as C-languages'
    console.log(point);                 // public static void drawPoint (Object<Point> point) { /... }
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

let pointB = new Point2(3, 5);      // Same structurally as:   Point2 pointB = new Point2();

// pointB.x = 3;   // Unecessary after constructor added
// pointB.y = 8;

pointB.draw();

// CONSTRUCTORS //

// Add a constructor to the above class to allow initialization of x & y fields at object instantiation

// ACCESS MODIFIERS //
// By default all members are public 
// If you want to prevent a field or method from being reassigned later. Add private keyword
// Example of a new class using private field modifiers AND simplified/stremalined constructor syntax
// that will create the necessary fields and initialize their values, all out of the constructor 

class StreamPoint {
    constructor(private x?: number, private y?: number) {
        // The above constructor does two things that the first class example we wrote above does verbosely
        // It automatically creates the private fields ex: private x; private y; . Opens the constructor,
        // Then it automatically assigns this.x = x; and this.y = y;
        // This is a much perferred and simpler way of writing classes
    }

    draw() {
        console.log("You've used the most modern class syntax to set points" + " X: " + this.x + ", and " + "Y: " + this.y ); 
    }
}

let streamPoint = new StreamPoint(4, 2);

streamPoint.draw();

// PROPERTIES //

// Getters and Setters essentially. There are times when we want to allow display or setting of 'fields'.. 
// So we'll use getter-setter methods

class PointProp {

    // similar to c# property variables are prefixed with underscore

    constructor(private _x?: number, private _y?: number) {

    }

    draw() {
        console.log('Drawing Point of ' + 'X: ' + this._x + ', Y: ' + this._y);
    }

    get x() {
        return this._x;
    }

    get y() {
        return this._y;
    }

    // These getter and setter properties allow STRUCTURED/CONTROLLED Access to private fields/methods
    // NOTE: Properties are quasi-methods that you can use as fields
    // These will allow you to later access these propreties the same way you could an unprotected field.. 
    // using dot notation e.g. point.X 

    set x(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0.');
        }
        this._x = value;
    }

    set y(value) {
        if (value < 0) {
            throw new Error('Value cannot be less than 0.');
        }
        this._y = value;
    }
}

let pointProp = new PointProp(5,8);


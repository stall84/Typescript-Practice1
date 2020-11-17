function log(message) {
    console.log(message);
}
var message = 'Hello World!';
log(message);
// TYPES //
// Number can be integer or floating point
// Any type can take on any type but has to be specifically typed as 'any'
var a;
var b;
var c;
var d;
// Arrays structured like other statically typed c langs
var strArr;
// can also assign at dec
var strArr2 = [2, 54, 88];
// Any type array can do just that
var anyArr = [5, true, 'Hello'];
// Enum type:  All related constants can go in a container
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
// You might see the values explicitly set like enum Color { Red = 0, Green = 1, ...}
var backgroundColor = Color.Red;
// Type Assertions
var message2 = 'abc';
//message2.endsWith('c');  // true
// If a variable is declared and not typed.. It will default to an 'any' type. 
// Later on. You can assert it's type like so:
var message3;
message3 = 'abc';
//let endsWmsg = (<string>message).endsWith('c') // true
// It's important to remember that the above does NOT change the type at runtime. this merely allows intellisense to be used on type later after de
// Arrow Functions (Same as you've already learned)
var arrowLog = function (message) {
    console.log(message);
};
// Arrow functions with only one return value can be written on one line, if there is also only 1 parameter, the parenthesis can
// be removed, but keeping it is pretty good practice:
var arrowlog2 = function (message2) { return console.log(message2); };
var drawPoint = function (point) {
    console.log(point); // public static void drawPoint (Object<Point> point) { /... }
};
drawPoint({
    x: 4,
    y: 6
});
// CLASSES //
// In the above example, it would make sense cohesion wise to keep the drawPoint method with it's interface
// A class groups properties and functions that are highly related
var Point2 = /** @class */ (function () {
    // In other C langs you can overload constructors .. Typescript doesn't allow that, but you can 
    // add optionality of the constructor parameters by adding a '?' to them
    function Point2(x, y) {
        this.x = x;
        this.y = y;
    }
    Point2.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point2;
}());
var pointB = new Point2(3, 5); // Same structurally as:   Point2 pointB = new Point2();
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
var StreamPoint = /** @class */ (function () {
    function StreamPoint(x, y) {
        this.x = x;
        this.y = y;
        // The above constructor does two things that the first class example we wrote above does verbosely
        // It automatically creates the private fields ex: private x; private y; . Opens the constructor,
        // Then it automatically assigns this.x = x; and this.y = y;
        // This is a much perferred and simpler way of writing classes
    }
    StreamPoint.prototype.draw = function () {
        console.log("You've used the most modern class syntax to set points" + " X: " + this.x + ", and " + "Y: " + this.y);
    };
    return StreamPoint;
}());
var streamPoint = new StreamPoint(4, 2);
streamPoint.draw();
// PROPERTIES //
// Getters and Setters essentially. There are times when we want to allow display or setting of 'fields'.. 
// So we'll use getter-setter methods
var PointProp = /** @class */ (function () {
    // similar to c# property variables are prefixed with underscore
    function PointProp(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    PointProp.prototype.draw = function () {
        console.log('Drawing Point of ' + 'X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(PointProp.prototype, "x", {
        get: function () {
            return this._x;
        },
        // These getter and setter properties allow STRUCTURED/CONTROLLED Access to private fields/methods
        // NOTE: Properties are quasi-methods that you can use as fields
        // These will allow you to later access these propreties the same way you could an unprotected field.. 
        // using dot notation e.g. point.X 
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0.');
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PointProp.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be less than 0.');
            }
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return PointProp;
}());
var pointProp = new PointProp(5, 8);

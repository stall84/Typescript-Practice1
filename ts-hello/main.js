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
    console.log(point);
};
drawPoint({
    x: 4,
    y: 6
});
// CLASSES //
// In the above example, it would make sense cohesion wise to keep the drawPoint method with it's interface
// A class groups properties and functions that are highly related
var Point2 = /** @class */ (function () {
    function Point2() {
    }
    Point2.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    return Point2;
}());
var pointB = new Point2;
pointB.x = 3;
pointB.y = 8;
pointB.draw();

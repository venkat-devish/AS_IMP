// Function declaration or function definition or function statement
function square(num) {
    return num * num
}

// Function expression (assigns to variable)
const sum = function square(num) {
    return num * num
}

//First class functions (Function can be treated as a variable and returned in any other function)

function square(num) {
    return num * num
}

function squared() {
    console.log(square(5))
}

squared();

//IIFE

(function number(x) {
    return (function (y) {
        console.log(x)
    })(2)
})(1)

// FUnction scope
var num1 = 20,
    num2 = 30,
    name = 'Venkat'

function multiply() {
    return num1 * num2
}

console.log(multiply())

function multiply2() {
    return function add() {
        num1 = 2;
        num2 = 4;
        return num1 + num2 + ' ' + 'name'
    }
}
console.log(multiply2()())

// for (let i = 1; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000 * i)
// }

var x = 21

var fun = function () {
    console.log(x)
    var x = 20;
}

fun()

// Callback function (A function which is passed into an other function as an argument)

let user = {
    username: 'Venakat',
    rc1: () => {
        console.log(this.username)
    },
    rc2: function () {
        console.log(this.username)
    }
}

user.rc1();
user.rc2();

function x() {
    for (var i = 1; i <= 5; i++) {
        function newRef(i) {
            setTimeout(() => {
                console.log(i)
            }, 1000 * i);
        }
        newRef(i)
    }
}

x();

function a() {
    var x = 10;
    return function b() {
        console.log(x)
    }
}

a()()
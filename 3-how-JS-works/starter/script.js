///////////////////////////////////////
// Lecture: Hoisting
// C_39
//function
/*
calculateAge(1982);
function calculateAge(year) {
    console.log(2020 - year);
}

//retairment(1982);
var retairment = function(year) {
    console.log(65 - (2020-year));
}


//Variables
console.log(age);
var age = 23;
//console.log(age);

function foo() {
    var age = 65;
    console.log(age);
}

foo();
console.log(age);

*/


// C_40
// scoping and scope chain

var a = 'Hello!';
first();

function first() {
    var b = 'Hi';
    second();

    function second() {
        var c = 'Hey';
        // console.log(a + b + c);
        third();
    }
}

function third() {
    var d = 'John';
    // console.log(c);
    console.log(a+d);
}


















///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword










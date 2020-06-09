// console.log('Hello World!!!');

/* 
Variables and data type
*/
// var firstName = 'Mahi';
// console.log(firstName);

// var lastName = 'Chowdhury';
// var age = 30;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job)

//Variable name rules
// var _3year = 3;
// var mahiOshim = 'Mahi and Oshim is a same person';
// var if = 23;

//Variables mutation and type coercion


/*
var firstName = 'John';
var age = 28;

// Type Coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName +' is '+ age +' years old '+ job + ' is he married? '+ isMarried);

// Variable Mutation

age = 'twenty eight';
job = 'driver';

alert(firstName +' is '+ age +' years old '+ job + ' is he married? '+ isMarried);

var lastName = prompt('What is his lastName?');
console.log(lastName);
*/

/********Basic Operators****************/

/*var year, yearJhon, yearMark;

now = 2020;
birthYear = 1982;
ageJhon = 28;
ageMark = 33;

// Math Operators
yearJhon = now -ageJhon;
yearMark = now -ageMark;

console.log(yearJhon);
console.log(yearMark);

console.log(now + 2);


// Logical Operators

var jhonOlder = ageJhon > ageMark;
console.log(jhonOlder);


// Typeof  Operator
console.log(typeof jhonOlder);
console.log(typeof ageJhon);
console.log(typeof yearMark);
console.log(typeof birthYear);
console.log(typeof 'What is the age of Jhon?');
 var x;
 console.log(typeof x); 

 */

 /**************Operator Precedence***************************/

//  var now = 2020;
//  var yearJhon = 1989;
//  var fullAge = 18;
// // Multipal Operator
//  var isFullAge = now - yearJhon >= fullAge;
//  console.log(isFullAge);


// // Grouping
//  var ageJhon = now - yearJhon;
//  console.log(ageJhon);
//  var ageMark = 35;
//  var average = (ageJhon + ageMark) / 2;
//  console.log(average);

//  console.log(ageJhon + ageMark); 

// // Multiple Assignments

// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More Operators

// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);



// Class_12 Coading challange solution 

/*
var massMark = 78; // kg
var hightMark = 1.69; // meters


var massJhon = 92; //kg
var hightJhon = 1.95; //meters

var BMIMark = massMark / (hightMark * hightMark);
var BMIJhon = massJhon / (hightJhon * hightJhon);
console.log(BMIMark, BMIJhon);


var markHigherBMI =  BMIMark > BMIJhon;
console.log('is Mark\'s BMI higher than jhon\'s?' + markHigherBMI )
 */



 /******************************
		if / else statements 
 *****************************************/




/*
var firstName = 'Jhon';
var civilStatus = 'single';

if (civilStatus === 'married') {
	console.log(firstName + ' is married!')
} else {
	console.log(firstName + ' we hopefully married soon :-)')
}

var isMarried = false;
if (isMarried) {
	console.log(firstName + ' is Married!')
} else {
	console.log(firstName + ' will hopefully married very soooon:-)')
}



var massMark = 278; // kg
var hightMark = 1.69; // meters


var massJhon = 192; //kg
var hightJhon = 1.95; //meters

var BMIMark = massMark / (hightMark * hightMark);
var BMIJhon = massJhon / (hightJhon * hightJhon);

if (BMIMark > BMIJhon){
	console.log(' Mark\'s BMI is higher than Jhon\'s ')
}else {
	console.log(' Jhon\'s BMI is higher than Mark\'s ')
}



var ageMahi = 28;
var ageMark = 30;



if (ageMahi > ageMark){
	console.log('Mahi\'s is ager than Mark' );
}else {
	console.log('Mark\'s is ager than Mahi');
}

*/


 /******************************
		Boolean logic 
 *****************************************/

/*
var firstName = 'Jhon';
var age = 30;

if (age < 15){
	console.log(firstName + ' is a boy.')
}else if (age >= 13 && age < 20 ){ // Between 13 and 20 === age >= 13 AND  age < 20.
	console.log( firstName + ' is a teenager.')
}else if (age >= 20 && age < 30 ){
	console.log(firstName + 'is a young man.')
}
else {
	console.log( firstName + ' is a man.')
}

*/


 /******************************
		16. The Ternary Operator and Switch
 *****************************************/

 var firstName = 'Jhon';
 var age = 17;
//ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks Juice.')


var drink = age >=18 ? 'Beer' : 'Juice'
console.log(drink);

/*
if (age >=18){
	var drink = 'Beer';
}else {
	var drink = 'Juice';
} 
console.log(drink);
*/

//Switch Statement

var job = 'cop';
switch(job) {
	case 'teacher':
	console.log(firstName + ' teaches kids how to code.');
	break;
	case 'driver':
	console.log(firstName + ' drives an ubar at Lisbon.');
	break;
	case 'designer':
	console.log(firstName + ' designe beautiful websites.');
	break;
	case 'paninter':
	console.log(firstName + ' paints really awesome.');
	break;
	default:
	console.log(firstName + ' does something else.');

}


age = 18;

switch(true){
	case age < 15:
		console.log(firstName + ' is a boy.');
		break;
	case age >= 13 && age < 20:
		 console.log( firstName + ' is a teenager.');
		 break;
	case age >= 20 && age < 30:
		 console.log(firstName + 'is a young man.');
		 break;
		 default:
		 console.log(firstName + ' is a man.')
}



























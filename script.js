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
/*
 var firstName = 'Jhon';
 var age = 17;
//ternary operator
 age >= 18 ? console.log(firstName + ' drinks beer.')
 : console.log(firstName + ' drinks Juice.')


var drink = age >=18 ? 'Beer' : 'Juice'
console.log(drink);


if (age >=18){
	var drink = 'Beer';
}else {
	var drink = 'Juice';
} 
console.log(drink);
*/

//Switch Statement



/*
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

*/






/* **************************
Class_17 Truthy and Falsy Values and Equality
Operators
******************************/

// falsy values: undefiend, null, 0, '', NaN
// truthy values: NOT falsy values



/*
var height;
height = 23;

if (height || height ===0){
	console.log('Variable is defiend');
} else {
	console.log('Variable is NOT been defiend')
}


// equelity operator

if (height == '23') {
	console.log ('The == operator does type coercion')
}

*/




/*****************************
Class_19
* CODING CHALLENGE 2 Solution
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/


/*
var scoreJohn = (89 + 120 + 103) / 3; 
var scoreMike = (116 + 94 + 123) / 3;
var scoreMarry = (97 + 134 + 105) / 3;

console.log( scoreJohn, scoreMike, scoreMarry);


if (scoreJohn > scoreMike && scoreJohn > scoreMarry){
	console.log('John\'s team wins with ' + scoreJohn + ' points');
	} else if (scoreMike > scoreJohn && scoreMike > scoreMarry) {
		console.log ( 'Mike\'s team wins with ' + scoreMike +  ' points' );
	}else if (scoreMarry > scoreJohn && scoreMarry > scoreMike) {
		console.log ( 'Marry\'s team wins with ' + scoreMarry +  ' points' );
	} else {
		console.log('There is a draw.')
	}


*/



/*
if (scoreJohn > scoreMike) {
	console.log('John\'s team wins with ' + scoreJohn + ' points');
} else if (scoreMike > scoreJohn) {
	console.log ( 'Mike\'s team wins with ' + scoreMike +  ' points' );
} else {
	console.log('There is a draw.');
}

*/


/*****************************
Class_20
* Functions
*/


function calculateAge(birthYear) {
	return  2018 - birthYear;
}

var ageJhon = calculateAge(1990); 
var ageMike = calculateAge(1948); 
var ageJane = calculateAge(1969); 
console.log(ageJhon, ageMike, ageJane);


function yearsUntilRetairment(year, firstName) {
	var age = calculateAge(year);
	var retirement = 65 - age;

	if (retirement > 0) {	
		console.log(firstName + ' retires in ' + retirement + ' years.')
		} else {
			console.log( firstName + ' already retired.')
		}
}

yearsUntilRetairment(1990, 'Jhon');
yearsUntilRetairment(1948, 'Mike');
yearsUntilRetairment(1969, 'Jane');


























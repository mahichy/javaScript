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
 


 /*

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


*/


/*****************************
Class_21
* Function Statements and Expressions
*/

// function declaration
// function whatDoYouDo(job, firstName) {}

// function expration





/*
var whatDoYouDo = function(job, firstName) {
	switch(job) {
		case 'teacher':
			return firstName + ' teaches kids how to code.';
			case 'driver':
			return firstName + ' drive a cab in UK.';
			case 'designer':
			return firstName + ' designe beautiful websites';
			default: 
			return firstName + ' does something else.';

	}
}

console.log( whatDoYouDo('teacher', 'Jhon'));
console.log( whatDoYouDo('driver', 'Jane'));
console.log( whatDoYouDo('designer', 'Mark'));
console.log( whatDoYouDo('retire', 'Martin'));
*/



/*****************************
Class_22
* Arrays
*/




/*


// Initialize New Array
var names = ['Jhon', 'Mark', 'Jane'];
var years = [1990, 1969, 1948];

console.log(names[2]);
console.log(names.length);


// mutated array data
names[1]= 'Ben';
names[names.length] = 'Marry';
console.log(names);

// Difference Data type


var jhon =['Jhon', 'Smith', 1990, 'designer', false];

jhon.push('blue');
jhon.unshift('Mr.')
console.log(jhon);

jhon.pop(); 
jhon.pop(); 
jhon.shift(); 
console.log(jhon);


console.log(jhon.indexOf(1990));
console.log(jhon.indexOf(120));


var isDesigner = jhon.indexOf('designer')=== -1 ? 'Jhon is not a designer.' : "Jhon is a designer."
console.log(isDesigner);





*/

/*****************************
* CODING CHALLENGE 3
*/

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/


/*****************************
* CODING CHALLENGE 3 Solution
*/




/*



function tipCalculator(bill){
	var percentage;
	if (bill < 50) {
		percentage = .2;
	} else if (bill >= 50 && bill < 200 ) {
		percentage = .15;
	} else {
		percentage = .1;
	} return percentage * bill;
}

// console.log(tipCalculator(250));

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
			tipCalculator(bills[1]),
			tipCalculator(bills[2])];

			

var finalValues = [ bills[0] + tips[0],
					bills[1] + tips[1],
					bills[2] + tips[2] ];

console.log(tips, finalValues );


*/













/*****************************
* Class_25
 Objects and Properties
*/


/*
var john = {
	firstName : 'John',
	lastName : 'Smith',
	birthYear : 1980 ,
	family : ['Jane', 'Mark', 'Bob', 'Emily'],
	job : 'Teacher',
	isMarried : false
};

console.log(john);
console.log(john.lastName);
console.log(john.firstName);
console.log(john['job']);
console.log(john['birthYear']);
var x = 'birthYear';
console.log(john[x]);

john.firstName = 'Jane';
john['isMarried'] = true;
console.log(john);

// New Object syntex

var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1968;
jane.job = 'designer';

console.log(jane);
*/




/*****************************
* Class_26
 Objects and Methods
*/


/*

var john = {
	firstName : 'John',
	lastName : 'Smith',
	birthYear : 1992 ,
	family : ['Jane', 'Mark', 'Bob', 'Emily'],
	job : 'Teacher',
	isMarried : false,
	calcAge : function() {
		this.age =  2020 - this.birthYear;
	}
};

john.calcAge();
console.log(john)



*/



/*****************************
* Class_27 
CODING CHALLENGE 4
*/

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// C_28 Solution.......>>>>>>>

/*


var john = {
	fullName: 'John Smith',
	mass : 92,
	height : 1.95,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

var mark = {
	fullName: 'Mark Miller',
	mass : 78,
	height : 1.69,
	calcBMI: function() {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
} 






if (john.calcBMI() > mark.calcBMI()) {
	console.log(john.fullName + ' has a higher BMI of ' + john.bmi);
} else if (mark.bmi > john.bmi) {
	console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi);
} else {
	console.log( ' They have the smae BMI.');
};


*/












/****************************************
	C_ 29
	Loops and iteration
*************************************************/
 



// for loop

/*

for (var i = 0; i <= 10; i++) {
	console.log(i)
}


var jhon =['Jhon', 'Smith', 1990, 'designer', false];

for (var i = 0; i < jhon.length; i++) {
	console.log(jhon[i]);
}


// While loop

var i = 0;
while (i < jhon.length) {
	console.log(jhon[i]);
	i++
}






// Continue and break statements



var jhon =['Jhon', 'Smith', 1990, 'designer', 'false', 'blue'];

for (var i = 0; i < jhon.length; i++) {
	if (typeof jhon[i] !== 'string') continue;
	console.log(jhon[i]);
}


for (var i = 0; i < jhon.length; i++) {
	if (typeof jhon[i] !== 'string') break;
	console.log(jhon[i]);
}


// Looping Backwards

for (var i = jhon.length - 1; i >= 0; i-- ) {
	console.log(jhon[i]);
}

var i = jhon.length - 1;
while (i >= 0) {
	console.log(jhon[i]);
	i--;
}





*/





/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK 😀
*/


// Solution


/*
var john = {
	fullName: 'John Smith',
	bills: [124, 48, 268, 180, 42],
	calcTips: function() {
		this.tips = [];
		this.finalValues = [];


		for (var i = 0; i < this.bills.length; i++) {
			
			// Determine percentege based on tipping rules
			var percentege;
			var bill = this.bills[i];

			if (bill < 50) {
				percentege = .2;
			}else if(bill >= 50 && bill < 200) {
				percentege = .15;
			}else {
				percentege = .1;
			}




			// Add result to the corresponding arrays
			this.tips[i] = bill * percentege;
			this.finalValues[i] = bill + bill * percentege;
		}
	}
}

john.calcTips();
console.log(john);

*/

var john = {
	fullName : 'John Smith',
	bills : [124, 48, 268, 180, 42 ],
	calcTips: function(){
		this.tips = [];
		this.finalValues = [];


		for (var i = 0; i < this.bills.length; i ++ )
		{
			var percentege;
			var bill = this.bills[i];

			if (bill < 50) {
				percentege = .2;
			}else if (bill >=50 && bill < 200) {
				percentege = .15;
			}else {
				percentege = .1;
			}

			this.tips[i] = bill + percentege;
			this.finalValues[i] = bill + bill * percentege;
		}
	}
}


var mark = {
	fullName : 'Mark Miller',
	bills : [77, 475, 110, 45],
	calcTips: function(){
		this.tips = [];
		this.finalValues = [];


		for (var i = 0; i < this.bills.length; i ++ )
		{
			var percentege;
			var bill = this.bills[i];

			if (bill < 100) {
				percentege = .2;
			}else if (bill >=100 && bill < 300) {
				percentege = .10;
			}else {
				percentege = .25;
			}

			this.tips[i] = bill + percentege;
			this.finalValues[i] = bill + bill * percentege;
		}
	}
}


function calcAverage(tips) {
	var sum = 0;
	for (var i = 0; i < tips.length; i++) {
		sum = sum + tips[i];
	}
	return sum / tips.length;
}
// [2, 6, 4]

// Do the calculation

john.calcTips();
mark.calcTips();

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);






console.log(john, mark);

















































































































































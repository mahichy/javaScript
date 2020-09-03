// Function canstractor

var john = {
	name: 'john',
	yearOfBirth: 1990,
	job: 'teacher'
};

var Person = function(name, yearOfBirth, job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
	
}

Person.prototype.lastName = 'Mahi'


Person.prototype.calculateAge = function() {
		console.log(2020 - this.yearOfBirth);
	}

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1960, 'designer');
var mark = new Person('Mark', 1948, 'retired' );

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);
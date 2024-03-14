"use strict";

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello ${this.name}`;
};

const human = new Person("Rocky");
const value = human.greet();
console.log(value);

function Dog(name, breed) {
  Person.call(this, name);
  this.breed = breed;
}

Dog.prototype = Person.prototype;
// Dog.prototype = Object.create(Person.prototype);
// Dog.prototype.constructor = Dog;

const Dogs = new Dog("Rocky", "Tot");
const value2 = Dogs.greet();
console.log(value2);

const value44 = {
  name: "Rocky",
  method() {
    console.log(this.name);
  },
};

const value33 = Object.create(value44);

value33.method2 = function () {
  console.log(this.name);
};

value33.method();
value33.method2();

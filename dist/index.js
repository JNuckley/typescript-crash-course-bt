"use strict";
let id = 5;
let company = "Some company";
let isPublished = true;
let x = "Anything";
let ids = [1, 2, 3, 4, 5];
ids.push("Hello");
let arr = [1, true, "something"];
console.log("ID:", id);
//tuple - can assign the exact types in any array (array of known types)
let person = [1, "Brad", false];
//tuple array (array of arrays with known types)
let employee;
employee = [
    [1, "Brad"],
    [2, "Jo"],
    [2, "Simone"],
];
//unions - variable to hold more than one type
let pid = 22;
// enums - enumerated types - allow you to define a set of constants
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up); // will number them 0,1,2,3 by default
var Direction2;
(function (Direction2) {
    Direction2[Direction2["North"] = 1] = "North";
    Direction2[Direction2["East"] = 2] = "East";
    Direction2[Direction2["South"] = 3] = "South";
    Direction2[Direction2["West"] = 4] = "West";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.South); // because assigned 1 for first, will default 1,2,3,4
// to strings
var Direction3;
(function (Direction3) {
    Direction3["Up"] = "Up";
    Direction3["Down"] = "Down";
    Direction3["Left"] = "Left";
    Direction3["Right"] = "Right";
})(Direction3 || (Direction3 = {}));
console.log(Direction3.Up);
//define types like above or in the object definition below
const user = {
    id: 1,
    name: "Brad",
};
// type assertion
let cid = 7;
let customerId = cid;
console.log(customerId);
// type assertion 2
let firstName = "Jo";
let customerName = firstName;
console.log(customerName);
// Function - will complain if you dont give the arguments a type unless you uncomment noimplicitAny
// (): number will define the return type
function addNum(x, y) {
    return x + y;
}
console.log(addNum(2, 8));
// void type return - it won't actually return anything
function log(message) {
    console.log(message);
}
console.log(log("message"));
const user1 = {
    id: 1,
    name: "John",
};
const p1 = 1;
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    subscribe() {
        return `${this.name} is now registered`;
    }
}
const jo = new Person(1, "Jo", 37);
const brad = new Person(2, "Brad", 32);
console.log(jo, brad);
console.log(jo.subscribe());
class Employee extends Person {
    constructor(id, name, role) {
        super(id, name);
        this.role = role;
    }
}
const emp = new Employee(3, "Bob", "dev");
console.log(emp);

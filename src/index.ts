let id: number = 5;
let company: string = "Some company";
let isPublished: boolean = true;
let x: any = "Anything";

let ids: number[] = [1, 2, 3, 4, 5];
ids.push("Hello");

let arr: any[] = [1, true, "something"];
console.log("ID:", id);

//tuple - can assign the exact types in any array (array of known types)
let person: [number, string, boolean] = [1, "Brad", false];
//tuple array (array of arrays with known types)
let employee: [number, string][];

employee = [
  [1, "Brad"],
  [2, "Jo"],
  [2, "Simone"],
];

//unions - variable to hold more than one type
let pid: string | number = 22;

// enums - enumerated types - allow you to define a set of constants
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up); // will number them 0,1,2,3 by default

enum Direction2 {
  North = 1,
  East,
  South,
  West,
}

console.log(Direction2.South); // because assigned 1 for first, will default 1,2,3,4

// to strings
enum Direction3 {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

console.log(Direction3.Up);

// Objects
type User = {
  id: number;
  name: string;
};
//define types like above or in the object definition below
const user: { id: number; name: string } = {
  id: 1,
  name: "Brad",
};

// type assertion
let cid: any = 7;
let customerId = <number>cid;
console.log(customerId);

// type assertion 2
let firstName: string = "Jo";
let customerName = firstName as string;
console.log(customerName);

// Function - will complain if you dont give the arguments a type unless you uncomment noimplicitAny
// (): number will define the return type
function addNum(x: number, y: number): number {
  return x + y;
}
console.log(addNum(2, 8));

// void type return - it won't actually return anything
function log(message: string | number): void {
  console.log(message);
}
console.log(log("message"));

// Interfaces - custom type. Used for objects rather than type
// optional values can be added with ?
interface UserInterface {
  id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "John",
};

// interfaces cannot be a union or primatives
type Point = number | string;
const p1: Point = 1;

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

// Classes - constructors run as soon as the class is instantiated

interface PersonInterface {
  id: number;
  name: string;
  age: number;
  subscribe(): string;
}

class Person implements PersonInterface {
  //public by default
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
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
  role: string;

  constructor(id: number, name: string, role: string) {
    super(id, name);
    this.role = role;
  }
}

const emp = new Employee(3, "Bob", "dev");
console.log(emp);

// generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["Jo", "Matt", "Brad"]);

numArray.push(6);
strArray.push(6);

function Lesson_06() {
let user: string = "John";
// user = 3; // Type 'number' is not assignable to type 'string'           
let hello = `Hallo ${user}`;
// hello = 3; // Type 'number' is not assignable to type 'string'
/////////////////////////////////
let age: number = 30;
// age = "30"; // Type 'string' is not assignable to type 'number'
////////////////////////////////
let isAdmin: boolean = true;
// isAdmin = "true"; // Type 'string' is not assignable to type 'boolean'
///////////////////////////////////
const numbers: number[] = [1, 2, 3];
// numbers.push("4"); // Argument of type 'string' is not assignable to parameter of type 'number'
////////////////////////////////////
const userInfo: { name: string; age: number } = { name: "Alice", age: 25 };
// userInfo.name = 123; // Type 'number' is not assignable to type 'string'
// userInfo.age = "25"; // Type 'string' is not assignable to type 'number'
let userName: string | null = "Bob";
userName = null; // Type 'null' is not assignable to type 'string'
//////////////////////////////////
const userNames: (string | null)[] = ["Alice", "Bob", null];
// userNames.push(123); // Argument of type 'number' is not assignable to parameter of type 'string | null'
//////////////////////////////////
const add = (a: number, b: number): number => {
  return a + b;
};
// console.log(add("5", "10")); // Argument of type 'string' is not assignable to parameter of type 'number'
/////////////////////////////////
const anexample: any = "This can be anything";
// anexample = 42; // No error, but it can lead to runtime errors
//////////////////////////////
   interface Admin {
    isAdmin: boolean;
  }
  interface User extends Admin {
    fullName: string;
    age: number;
    job: string;
    pet: string;
  }
          // Можно дописать св-ва в интерфейсе User, не нарушая его структуру
  interface User {
    isFamily: boolean;
  }
  const user1: User = {
    fullName: "John Johnson",
    age: 30,
    job: "QA",
    pet: "Max",
    isAdmin: true,
    isFamily: true,
  };
  /////////////////////////////////
  const animal = {
    name: "Max",
    age: 5,
    type: "Dog",
  };
    type Animal = {
      name: string;
      age: number;
      type: string;
    };
    type Dog = Animal & {
      breed: string;
    };
      const dog1: Dog = { 
        name: "Max",
        age: 5,
        type: "Dog",
        breed: "Golden Retriever"
      };
      // dog1.breed = 123; // Type 'number' is not assignable to type 'string'
return <div>Lesson_06</div>;
}
export default Lesson_06;
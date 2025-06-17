let num = 123;
let name = "tony";
let isActive = false;
const age = 24;
let undef;
console.log(undef);

//print statement
console.log(typeof num + typeof name + typeof isActive);
console.log(num + " " + name + " " + isActive + " " + age);

//try...catch
/*try {
  age = 28;
} catch (err) {
  console.log(err);
}*/
//Statement

//using symbol - Here both are different because symbols are immutable
const symb1 = Symbol("value1");
const symb2 = Symbol("value2");
if (symb1 === symb2) console.log("same");
else console.log("different");

const obj = {
  firstName: "geek",
  lastName: null,
  batch: 2,
};
console.log(obj);

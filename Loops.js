// For Loop - to iterate

for (var a = 1; a < 10; a++) {
  console.log(a);
}
// For In :- loops through the properties of an Object:
const person = { fname: "John", lname: "Doe", age: 25 };

let text = "";
for (let x in person) {
  text += person[x];
}
console.log(text);

// For Of :-over iterable data structures such as Arrays, Strings, Maps etc:
let language = "JavaScript";

for (let x of language) {
  console.log(x);
}
// While Loop :- loops goes on until condition is satisfy

var n = 1;
while (n < 10) {
  console.log(n);
  n++;
}

// do while :-The do...while is used when you want to run a code block at least one time.

x = 1;
do {
  console.log(x);
} while (x < 0);

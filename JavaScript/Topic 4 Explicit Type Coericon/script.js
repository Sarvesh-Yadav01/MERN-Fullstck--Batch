/*// Number to string converion
const m = 10;
const n = String(m);
console.log(n);
console.log(typeof n);

//normal string to normal converion

const a = "1000";
const b = Number(a);
console.log(b);
console.log(typeof b);


// Actual String to number Converion
const c = "10";
const d = Number(c);
console.log(b);
console.log(typeof b);

/*convert any data into boolean
Falsy 
  1. 0 
  2. -0
  3. 0.0
  4. 0n
  5. null
  6. undefined
  7. NaN
  8. ""(empty sting)

  Truthly
  1. []
  2. {}
  3. " "
  4. -1


const x = 0;
const y = Boolean(x);
console.log(y);
console.log(typeof y);
*/

const username = prompt("Enter fullname");
const age = +prompt("Enter your age");

console.log(username, typeof username);
console.log(age, typeof age);

//typeof null is object

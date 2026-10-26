// ! object.keys()
// ! object.values()
// ! obejct.entries()


const emp = {
     fullname: "Sarvesh",
     age:21,
     city:"Jaunpur",
     pincode: 222001
}

const k = Object.keys(emp);
const v = Object.values(emp);
const u = Object.entries(emp);

console.log("keys:", k);
console.log("values:", v);
console.log("entries:", u);


// ! object.assign(target, source)

const company = {
    name: "Google",
    location: "USA"
}

const hiring = {
    position: "Software Engineer",
    salary: 100000
}

const person = {
    name: "John Doe",
    age: 30
}

const employee = Object.assign({}, company, hiring, person);
console.log(employee);
console.log(company);

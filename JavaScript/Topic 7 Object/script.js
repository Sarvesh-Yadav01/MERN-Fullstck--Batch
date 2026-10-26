const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

//insertion
user.address = "123 Main St, Anytown, USA";
console.log(user); // { name: "John Doe", age: 30, email: "

//updatetion
user.age = 31;
console.log(user); // { name: "John Doe", age: 31, email: "

//deletion
delete user.email;
console.log(user); // { name: "John Doe", age: 31, address: "123 Main St, Anytown, USA" }

//find any key present or not
console.log("name" in user); // true
console.log("email" in user); // false
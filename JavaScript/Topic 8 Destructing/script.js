//!Destructuring andNested Destructuring
// const user = {
//     name: "Sarvesh",
//     age: 22,
//     email: "sarvesh@example.com"
// };

// const { name, age, email } = user;
// console.log(name);
// console.log(age);
// console.log(email);

// const user = {
//     name: "Sarvesh",
//     age: 22,
//     address: {
//         city: "Jaunpur",
//         pincode: 222001
//     }
// };

// const { name, age, address } = user;
// const { city, pincode } = address;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(pincode);

// ! Array Destructuring and nested destructuring
// const movies = ["Inception", "Interstellar", "The Dark Knight", ["KGF", "Avengers"]];
// const [first, second, third] = movies;
// console.log(first);
// console.log(second);
// console.log(third);

// const skills = [["Angular", "React", "Vue"], "java", "Sql"];
// const [[fronted], backend, bd] = skills;

// console.log(fronted);
// console.log(backend);
// console.log(bd);

//! Shallow Copy and Deep Copy
// const jack = {
//     bike : "KTM"}
// const oggy = structuredClone(jack); //deep copy
//  oggy.bike = "Royal Enfield";
//  console.log(jack.bike);
//  console.log(oggy.bike);    
//  const oggy = jack; //shallow copy
// oggy.bike = "Royal Enfield";
// console.log(jack.bike);
// console.log(oggy.bike);

const jack = {
    bike: "david putra",
    dialogs: {
          d1: "Tod dunga fod dunga",
          d2: "papa"
    }
}

const oggy = structuredClone(jack); //deep copy
oggy.bike = "Royal Enfield";
oggy.dialogs.d1 = "lullu beta";
console.log(jack.dialogs.d1);
console.log(oggy.dialogs.d1);

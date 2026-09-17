console.log("start");

setTimeout(A=() => {
    console.log("Async task 1")
}, 2000);

setTimeout(B=() => {
    console.log("Async task 2")
}, 2000);



process.nextTick(()=>{
    console.log("nextTrick")
});

Promise.resolve("promise pura hua")
.then(D=(val) => console.log(val));

console.log("end");

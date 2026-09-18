const http = require("http");

// create a server
const server = http.createServer((req, res) =>{

//how to handle post request
if (req.method === "POST" && req.url ==="/greet"){
    let obj = "";

    req.on("data", (chunk) => {
        obj = obj + chunk.toString();
    })

    req.on("end", ()=>{
        let {fullname} = JSON.parse(obj);
        return res. end(`good morning ${fullname}`);
    })
    return;
}


   if(req.method === "GET" && req.url ==="/"){
    return res.end("server chal raha hai")
   }    
})

// to run the server
server.listen(3000, () =>{
    console.log("server is running");
})

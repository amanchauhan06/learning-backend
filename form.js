const http= require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url)
    console.log(method)
    if( url ===`/registration`){
        res.write('<html>');
        res.write('<head><title>New User Form</title><head>');
        res.write('<body><form action="/userDetails" method="POST"> <input type="text" name="message" placeholder="enter you name"><button>Submit</button></form></body>');
        res.write('</html>');
        return res.end("Details Entered");
    }
    if( url===`/userDetails` && method ===`POST`){
        const body=[];
        req.on("data",(chunk)=>{
            body.push(chunk);
            console.log(body)
        })
        req.on("end",()=>{
            const finalValue = body.toString();
            console.log(finalValue);
            fs.writeFileSync("User_Details.json",finalValue);
            res.end("data entered")
        })
        return res.end("Hello world");
    }

})
server.listen(4000);
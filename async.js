console.log("hello world")
const https=require("https");
const fs=require("fs")

https.get("https://dummyjson.com/products/1",(res)=>{
    console.log("data fetched")
})

fs.readFile("./file.txt","utf8",(data)=>{
    console.log("file data:", data)
})

setTimeout(()=>{
    console.log("after 5 sec")
},5000)
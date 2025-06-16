const fs=require("node:fs")
const a=100;

setImmediate(()=>{
    console.log("setImmediate")
})

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading")
})

setTimeout(() => {
    console.log("setTimeout")
}, 0);

function PrintA(){
    console.log("a=",a)
}
PrintA();
console.log("last line of the code")


//output
//a=100
//last line of the code
//setTimeout
//setImmediate
//file reading
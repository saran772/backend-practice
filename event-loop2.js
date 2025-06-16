const fs=require("node:fs");
const a=100;

setImmediate(()=>{
    console.log("setImmediate")
})

fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading")
})

setTimeout(() => {
    setTimeout(()=>{
        setTimeout(() => {
             console.log("inner timeout-2")
        }, );
        console.log("inner timeout")
    })
    console.log("setTimeout")
}, )

process.nextTick(()=>{
    process.nextTick(()=>{
        console.log("inner tick")
    })
    console.log("next tick")
})

Promise.resolve("promise").then(console.log)


function PrintA(){
    console.log("a=",a)
}
PrintA();
console.log("last line of the code")

/*a= 100
last line of the code
next tick
inner tick
promise
setTimeout
setImmediate
inner timeout
inner timeout-2
file reading
*
*
*/
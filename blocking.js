console.log("hello world")
const crypto=require("node:crypto")//module in nodejs

//sync operatn(dont have a callback)
crypto.pbkdf2Sync("password","salt",50000,50,"sha512");
console.log("1st key is generated")


console.log("hello")

//async operatn(callback is compulsory)
crypto.pbkdf2("password","salt",5000000,50,"sha512",(key)=>{
    console.log("2nd key is generated")
})

setTimeout(()=>{
    console.log("fine") //EXECUTE AFTER 10 S
},10000)

//again printing sync oprtn
crypto.pbkdf2Sync("password","salt",5000,50,"sha512");
console.log("1st key is generated")
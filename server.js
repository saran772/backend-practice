const http=require("http")
const server=http.createServer(function(req,res){
    if(req.url === '/getdata'){
        res.end("no data found")
    }
    res.end("hello world!")
})
server.listen(7777)
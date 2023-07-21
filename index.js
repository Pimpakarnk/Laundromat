const http = require('http')
const fs = require('fs')
const loginPage = fs.readFileSync(`${__dirname}/webpages/login.html`,'utf-8')
const processPage =fs.readFileSync(`${__dirname}/webpages/process.html`,'utf-8')
const homePage =fs.readFileSync(`${__dirname}/webpages/home.html`,'utf-8')
const profilePage =fs.readFileSync(`${__dirname}/webpages/profile.html`,'utf-8')
const editPage =fs.readFileSync(`${__dirname}/webpages/edit.html`,'utf-8')
const receiptPage =fs.readFileSync(`${__dirname}/webpages/receipt.html`,'utf-8')
const server = http.createServer((req,res)=>{
    const pathName = req.url
    console.log("url = ",pathName)
    if(pathName==="/" || pathName==="/login"){
        res.end(loginPage)
    }else if ( pathName==="/process"){
        res.end(processPage)
    }else if ( pathName==="/home"){
        res.end(homePage)
    }else if ( pathName==="/profile"){
        res.end(profilePage)
    }else if ( pathName==="/edit"){
        res.end(editPage)
    }else if ( pathName==="/receipt"){
        res.end(receiptPage)
    }else {
        res.writeHead(404)
        res.end("<h1>Not Found</h1>")
    }
})
server.listen(8080,"localhost",()=>{
    console.log("start sever in port 8080")
})
const express = require('express')

const app=express();

const allbooks = ( req,res,next ) =>{
console.log(req.method,req.path)
next()
}
app.use(allbooks)

app.get('/books',(req,res)=>{
    console.log('fetched')
    res.send("Fetching all books")
})

app.get('/books/:bookname',(req,res)=>{
    const name=req.params
    console.log(name)
    res.send(name)
})
app.listen(7000)

// http://localhost:7000/
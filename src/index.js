const express = require('express')
const app = express()

// app.get('/', function (req, res){
//     res.send('Hello World')
// })
 app.get('/', (req, res) => {
    res.send('Hello World 2')
 })

app.listen(3000, () => console.log(`ONLINE em localhost:3000`))

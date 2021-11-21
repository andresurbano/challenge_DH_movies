const express = require('express')
const app = express()

//routes
const routes = require("./src/routes/index.routes")
app.use(routes)


app.listen(3000, () =>{
    console.log('listening on')
})
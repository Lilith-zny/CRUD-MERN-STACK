const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

const { readdirSync } = require('fs')

const app = express()



app.get('/', (req, res) => {
    res.json({
        message: "Hello"
    })
})


app.listen(5000, () => console.log(`Server is running at http://localhost:5000`))
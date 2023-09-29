const express = require('express')
const mongoose = require('mongoose')
const cors=require('cors')
const url = 'mongodb://127.0.0.1:27017/CBIT'
const app = express()
mongoose.connect(url)
const con = mongoose.connection
con.on('open', () =>
{
console.log('connected...')
})
app.use(cors())

app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use('/aliens',alienRouter)
app.listen(9000, () =>
{
console.log('Server started')
})
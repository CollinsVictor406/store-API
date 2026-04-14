require('dotenv').config()
const connect = require('./connect')
const route = require('./route')
const cors = require('cors')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json());
app.use(cors())
app.use('/api/v1',route)
const start = async ()=>{
 try {
    await connect(process.env.URL)
    app.listen(PORT,(()=>{
    console.log(`App is running on: PORT ${PORT}`);
    
}))
 } catch (error) {
    console.log(error);
    
 }
}
start()
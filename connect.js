const mogoose = require('mongoose')
const connect = (url)=>{
    return mogoose.connect(url)
}
module.exports = connect;
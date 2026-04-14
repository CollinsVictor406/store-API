const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    businessType:{
        type:String,
        required:[true,'Business type is required','Other'],
        enum:{
            values:['Fashion','Food','Electronics','Service','Other']
        },
    },
    otherBusinessType:{
      type:String,
      required:function () {
        return this.businessType === 'Other'
      }
    },
    notes:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('UserDetails',userSchema)
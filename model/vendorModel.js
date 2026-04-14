const mongoose = require('mongoose')
const schema = mongoose.Schema

const userSchema = new schema({
    name:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    businessType:{
        type:String,
        required:true,
        enum:['Vendor','Retailer','Whoseler','Artisan','Service Provider','Reseller']
    },
    currentPlatform:{
        type:String,
        enum:['WhatsApp','Instagram','Facebook','Twitter/X','Tiktok']
    },

    notes:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('UserDetails',userSchema)
const vendorModel = require('../model/vendorModel')

exports.createInfo = async (req,res)=>{
  try {
   const { name,phone,businessType,currentPlatform,notes,otherBusinessType } = req.body
    if(!name || !phone || !businessType || !notes){
        return res.status(400).json({message:'Please fill in the necessary fields'})
    }
    if(businessType === 'Other' && !otherBusinessType){
     return res.status(400).json({message:'Please specify your business field'})
    }
    const info = await vendorModel.create({ name,phone,businessType,currentPlatform,notes,otherBusinessType })
    return res.status(201).json({info,message:'Info saved successfully'})
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}

exports.getAllUsers = async(req,res)=>{
  try {
    const users = await vendorModel.find()
    if(users.length < 1){
      return res.status(401).json({message:"No user found"})
    }
    return  res.status(200).json({users,count:users.length,messsage:'All users'})

  } catch (error) {
    
  }
}
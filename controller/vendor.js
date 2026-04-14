const vendorModel = require('../model/vendorModel')

exports.createInfo = async (req,res)=>{
  try {
   const { name,phoneNumber,businessType,currentPlatform,notes,otherBusinessType } = req.body
    if(!name || !phoneNumber || !businessType || !notes){
        return res.status(400).json({message:'Please fill in the necessary fields'})
    }
    if(businessType === 'Other' && !otherBusinessType){
     return res.status(400).json({message:'Please specify your business field'})
    }
    const userData = { name, phoneNumber,businessType,currentPlatform,notes,otherBusinessType}
    if(businessType === 'Other'){
      userData.otherBusinessType = otherBusinessType
    }
    const newUser = await vendorModel.create(userData)
    console.log(newUser);
    
    return res.status(201).json({newUser,message:'Info saved successfully'})
  } catch (error) {
    return res.status(500).json({error:error.message})
  }
}

exports.getAllUsers = async(req,res)=>{
  try {
    const users = await vendorModel.find().select('name phoneNumber businessType createdAt')
    console.log();
    
    if(users.length < 1){
      return res.status(401).json({message:"No user found"})
    }
    return  res.status(200).json({users,count:users.length,messsage:'All users'})

  } catch (error) {
    
  }
}
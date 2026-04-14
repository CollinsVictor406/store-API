const vendorModel = require('../model/vendorModel')

// exports.createInfo = async (req,res)=>{
//   try {
//    const { name,phoneNumber,businessType,currentPlatform,notes,otherBusinessType } = req.body
//     if(!name || !phoneNumber || !businessType || !notes){
//         return res.status(400).json({message:'Please fill in the necessary fields'})
//     }
//     if(businessType === 'Other' && !otherBusinessType){
//      return res.status(400).json({message:'Please specify your business field'})
//     }
//     const userData = { name, phoneNumber,businessType,currentPlatform,notes,otherBusinessType}

//     const newUser = await vendorModel.create(userData)
//     console.log(newUser);
    
//     return res.status(201).json({newUser,message:'Info saved successfully'})
//   } catch (error) {
//     return res.status(500).json({error:error.message})
//   }
// }


exports.createInfo = async (req, res) => {
  try {
    const {
      name,
      phoneNumber,
      businessType,
      currentPlatform,
      notes,
      otherBusinessType
    } = req.body

    // 1. Required fields check
    if (!name || !phoneNumber || !businessType || !notes) {
      return res.status(400).json({
        message: 'Please fill in the necessary fields'
      })
    }

    // 2. Handle "Other" case properly
    let finalBusinessType = businessType

    if (businessType === 'Other') {
      if (!otherBusinessType) {
        return res.status(400).json({
          message: 'Please specify your business field'
        })
      }

      finalBusinessType = otherBusinessType
    }

    // 3. Create clean data object
    const userData = {
      name,
      phoneNumber,
      businessType: finalBusinessType,
      currentPlatform,
      notes
    }

    // 4. Save to database
    const newUser = await vendorModel.create(userData)

    return res.status(201).json({
      newUser,
      message: 'Info saved successfully'
    })

  } catch (error) {
    return res.status(500).json({
      error: error.message
    })
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
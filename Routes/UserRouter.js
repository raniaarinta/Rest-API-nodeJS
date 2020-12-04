const express= require('express');
const User = require('../models/user');
const UserModel = require('../models/user');
const UserRouter = express.Router();

UserRouter.get('/',async (req,res)=>{
    try{
        const ViewUser= await UserModel.find();
        res.json(ViewUser)
    }
    catch(err)
    {
        res.json({message:err})
    }

});
UserRouter.post('/post-user',async (req,res)=>{
   const MyUser = new UserModel({
        username:req.body.username,
        password:req.body.password,
        email:req.body.email,
   });
   try{
    const saveposted= await MyUser.save()
    res.json(saveposted);

   }catch(err)
   {
       res.json(err);

   }

});
UserRouter.get('/:id',async (req,res)=>{
    try{
        const ViewUserId = await UserModel.findById(req.params.id);
        res.json(ViewUserId);
    }
    catch(err)
    {
        res.json({message:err})
    }

});

UserRouter.delete('/:id', async(res,req)=>{
    try{
        const deleteUser=await UserModel.remove({_id: req.params.museumid})
        res.json(deleteUser);

    }
    catch(err)
    {
        res.json({message:err})
    }
})

museumRouter.patch('/:id', async (res,req)=>{
    try{
        const updateUser = await UserModel.updateOne({_id: req.params.id},
            {$set:{name:req.body.username}})
        res.json(updateUser)

    }
    catch(err)
    {
        res.json({message:err})
    }
})



module.exports=  UserRouter;
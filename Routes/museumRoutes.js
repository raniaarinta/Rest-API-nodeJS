const express = require('express');
const MuseumModel= require('../models/museum');

const museumRouter = express.Router();
//museum routes
museumRouter.get('/',async (req,res)=>{
    try{
        const ViewMuseum= await MuseumModel.find();
        res.json(ViewMuseum)
    }
    catch(err)
    {
        res.json({message:err})
    }

});
museumRouter.post('/post-museum',async (req,res)=>{
   const Mymuseum = new MuseumModel({
       name:req.body.name,
       description:req.body.description,
       address:req.body.address,
       city:req.body.city,
       country:req.body.country
   });
   try{
    const saveposted= await Mymuseum.save()
    res.json(saveposted);

   }catch(err)
   {
       res.json(err);

   }

});
museumRouter.get('/:museumid',async (req,res)=>{
    try{
        const Viewmuseumid = await MuseumModel.findById(req.params.museumid);
        res.json(Viewmuseumid);
    }
    catch(err)
    {
        res.json({message:err})
    }

});

museumRouter.delete('/:museumid', async(res,req)=>{
    try{
        const deletemuseum =await MuseumModel.remove({_id: req.params.museumid})
        res.json(deletemuseum);

    }
    catch(err)
    {
        res.json({message:err})
    }
})

museumRouter.patch('/:museumid', async (res,req)=>{
    try{
        const updatemuseum = await MuseumModel.updateOne({_id: req.params.museumid},
            {$set:{name:req.body.name}})
        res.json(updatemuseum)

    }
    catch(err)
    {
        res.json({message:err})
    }
})


module.exports=museumRouter;
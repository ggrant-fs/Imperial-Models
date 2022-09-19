const Model = require('./../models/models');
//getAllModels
//getModel
//getAllMaleModels
//getAllFemaleModels

exports.getAllModels = async(req,res) =>{
    try{
         const models = await Model.find();

         res.status(200).json({
            status:'success',
            total: models.length,
            data:{
                models
            }
         })
    }catch(err){
        res.status(500).json({
            status:'fail',
            message:err
        });
    }
}
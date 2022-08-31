const Model = require('./../models/models');

exports.getAllModels = (req,res)=>{
    res.status(500).json({
        status:'pending all model data'
    });
}

exports.getModel =(req,res)=>{
    res.status(500).json({
        status:'pending model data'
    });
}

exports.getAllMaleModels = (req,res)=>{
    res.status(500).json({
       status:'pending male model data'
    });
}

exports.getAllFemaleModels = (req,res)=>{
    res.status(500).json({
        status:'pending female model data'
    });
}

const express = require('express');
const morgan = require('morgan');

const app = express();
//import routes from routes folders


// if(process.env.NODE_ENV === 'development'){
//     app.use(morgan('dev'));
// }

//middleware
app.use(express.json());
app.use(express.static(`${__dirname}/client/public`));

app.get('/api/v1/models',(req,res)=>{
    res.status(500).json({
        status:''
    });
});

app.get('/api/v1/models/:id',(req,res)=>{
    res.status(500).json({
        status:''
    });
});

app.get('/api/v1/models/male-models',(req,res)=>{
    res.status(500).json({

    });
});

app.get('/api/v1/models/female-models',(req,res)=>{
    res.status(500).json({
        status:''
    });
});


app.get('/api/v1/blogpost',(req,res)=>{
    res.status(500).json({
        status:''
    });
});

app.get('/api/v1/blogpost/:id',(req,res)=>{
    res.status(500).json({
        status:''
    })
})



module.exports = app; // allows for use to use middlewere in other files
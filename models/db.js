const mongoose = require('mongoose');
const url = "mongodb+srv://qsld:qsld@cluster0.fjzaw.mongodb.net/productDB"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./product.model');

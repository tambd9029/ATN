const mongoose = require('mongoose');
const url = "mongodb+srv://tamdb2732:<Tam27320>@bdt.eghtw.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(url,{useNewUrlParser:true},(err) => {
    if(!err){ console.log("MongoDB Connection Succeeded");}
    else{
        console.log("An Error Occured");
    } 
})

require('./product.model');
require('./employee.model');

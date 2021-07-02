const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    id: {
        type: String,
        required: 'This field is required'
    },
    productName: {
        type: String,
        required: 'This field is required'
    },
    productCategory: {
        type: String,
        required: 'This field is required'

    },
    amount: {
        type: String,
        required: 'This field is required'

    }
})

// custom validation for email


mongoose.model('Product', productSchema);
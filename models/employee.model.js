const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    id: {
        type: String,
        required: 'This field is required'
    },
    employeeName: {
        type: String,
        required: 'This field is required'
    },
    employeeCity: {
        type: String,
        required: 'This field is required'

    },
    mobile: {
        type: String,
        required: 'This field is required'

    }
})

// custom validation for email


mongoose.model('Employee', employeeSchema);
const express = require('express');
const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert product"
    })
})

router.post("/", (req, res) => {
    if (req.body._id == "") {
        insertRecord(req, res);
    }
    else {
        updateRecord(req, res);
    }
})

function insertRecord(req, res) {
    var employee = new Employee();
    employee.id = req.body.id;
    employee.employeeName = req.body.employeeName;
    employee.employeeCity = req.body.employeeCity;
    employee.mobile = req.body.mobile;

    employee.save((err, doc) => {
        if (!err) {
            res.redirect('employee/list');
        }
        else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: "Insert product",
                    employee: req.body
                })
            }
            console.log("Error occured during record insertion" + err);
        }
    })
}

function updateRecord(req, res) {
    Employee.findOneAndUpdate({ _id: req.body._id, }, req.body, { new: true }, (err, doc) => {
        if (!err) {
            res.redirect('employee/list');
        }
        else {
            if (err.name == "ValidationError") {
                handleValidationError(err, req.body);
                res.render("employee/addOrEdit", {
                    viewTitle: 'Update product',
                    employee: req.body
                });
            }
            else {
                console.log("Error occured in Updating the records" + err);
            }
        }
    })
}


router.get('/list', (req, res) => {
    Employee.find((err, docs) => {
        if (!err) {
            res.render("employee/list", {
                list: docs
            })
        }
    })
})

router.get('/:id', (req, res) => {
    Employee.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.render("employee/addOrEdit", {
                viewTitle: "Update product",
                employee: doc
            })
        }
    })
})

router.get('/delete/:id', (req, res) => {
    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/employee/list');
        }
        else {
            console.log("An error occured during the Delete Process" + err);
        }
    })
})

function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'id':
                body['idError'] = err.errors[field].message;
                break;
            case 'employeeName':
                body['employeeNameError'] = err.errors[field].message;
                break;
                case 'employeeCity':
                    body['employeeCityError'] = err.errors[field].message;
                    break;
                    case 'mobile':
                body['mobileError'] = err.errors[field].message;
                break;

            default:
                break;
        }
    }
}

module.exports = router;
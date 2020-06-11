// import modules
const mongoose = require('mongoose');
const employee = require('./../models/Employee');

// import Employee model
const EmployeeModel = mongoose.model('Employee');

// create employee method
let createEmployee = (req, res) => {
    // create new employee model
    let newEmployee = new EmployeeModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile
    });

    // save newly created employee model into database
    try {
        newEmployee.save((err, result) => {
            if (err) {
                res.send({error: err});
            } else {
                res.status(201).send(result);
            }
        })
    }
    catch (err) {
        res.status(500).send({error: 'Internal server error'});
    }
}

// get all employees
let getAllEmployees = (req, res) => {
    try {
        EmployeeModel.find()
            .select('-__v -_id')
            .lean()
            .exec((err, result) => {
                if (err) {
                    res.send({error: err});
                } else if (result == undefined || result == null || result == '') {
                    res.send({status: 'No employee found'});
                } else {
                    res.send(result);
                }
            });
    }
    catch (err) {
        res.status(500).send({error: 'Internal server error'});
    }
}

// get employee by Id
let getEmplyeeById = (req, res) => {
    try {
        EmployeeModel.findOne({ 'empId': req.params.empId }, (err, result) => {
            if (err) {
                res.send({error: err});
            } else if (result == undefined || result == null || result == '') {
                res.send({ 'status': 'No Employee Found' });
            } else {
                res.send(result);
            }
        });
    }
    catch (err) {
        res.status(500).send({error: 'Internal server error'});
    }
}

// edit employee
let editEmployee = (req, res) => {
    try {
        EmployeeModel.update({ 'empId': req.params.empId }, req.body, { multi: true }, (err, result) => {
            if (err) {
                res.send({ 'status': 'employee update failed', 'error message': err });
            } else if (result == undefined || result == null || result == '' || result.n == 0) {
                res.send({ 'status': 'No Employee Found' });
            }else if (result.n == 1 && result.nModified == 0){
                res.send({ 'status': 'Employee not modified' });
            } else {
                res.send({ 'status': 'Employee updated successfully' });
            }
        });
    }
    catch (err) {
        res.status(500).send({error: 'Internal server error'});
    }
}

// delete employee
let deleteEmployee = (req, res) => {
    try {
        EmployeeModel.remove({ 'empId': req.params.empId }, (err, result) => {
            if (err) {
                res.send({ 'status': 'employee delete failed', 'error message': err });
            } else if (result == undefined || result == null || result == '' || result.n == 0) {
                res.send({ 'status': 'No Employee Found' });
            } else {
                res.send({ 'status': 'Employee deleted successfully' });
            }
        });
    }
    catch (err) {
        res.status(500).send({error: 'Internal server error'});
    }
}

// export controller
module.exports = {
    createEmployee: createEmployee,
    getAllEmployees: getAllEmployees,
    getEmplyeeById: getEmplyeeById,
    editEmployee: editEmployee,
    deleteEmployee: deleteEmployee
}
// importing mongoose module
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const appConfig = require('./../../config/appConfig');
const Schema = mongoose.Schema;

let employeeSchema = new Schema(
    {
        empId: {
            type: String,
            unique: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            index: true, 
            unique: true, 
            required: true
        },
        mobile: {
            type: Number,
            index: true, 
            unique: true, 
            required: true
        }
    }
)

// set empId auto-incremented
var connection = mongoose.createConnection(appConfig.db.uri);
autoIncrement.initialize(connection);
employeeSchema.plugin(autoIncrement.plugin, {
    model: 'Employee',
    field: 'empId',
    startAt: 1000,
    incrementBy: 1
});

mongoose.model('Employee', employeeSchema);

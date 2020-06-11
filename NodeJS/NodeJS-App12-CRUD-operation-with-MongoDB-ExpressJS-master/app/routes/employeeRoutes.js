// import controllers
const employeeController = require('../controllers/employeeController');
const notFoundController = require('../controllers/notFoundController');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.post('/employee', employeeController.createEmployee); 
    app.get('/employee', employeeController.getAllEmployees);
    app.get('/employee/:empId', employeeController.getEmplyeeById);
    app.put('/employee/:empId', employeeController.editEmployee);
    app.use('/employee/:empId', employeeController.deleteEmployee);
    app.use('*', notFoundController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}
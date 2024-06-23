const Employees = require('../models/employeesModel');
const messages = require('../helpers/messages');
const { response } = require('../helpers/response');
const { statusCodes } = require('../helpers/constants');
const DepartEmploye = require('../models/departEmployeModel');
const DeptManger = require('../models/deptMangerModel');
const EmployeSalary = require('../models/employeSalaryModel');
const EmployeTitle = require('../models/employeTitleModel');


const employeAdd = async(req, res) => {
    try{
        const { birth_date, first_name, last_name, gender, hire_date } = req.body;
        if(!first_name || !last_name || !gender || !hire_date || !birth_date){
            return response(res, statusCodes.NOT_FOUND, "enter birth_date, first_name, last_name, gender, hire_date")
        }
        let employe = await Employees.findOne({
            attributes: ["id", "first_name", "last_name", "gender", "hire_date"],
            where: {
                first_name
            }
        })
        if(employe){
            return response(res, statusCodes.BAD_REQUEST, "employe alreadyExist", employe)
        }
        const create = await Employees.create({
            birth_date,
            first_name, 
            last_name, 
            gender, 
            hire_date
        })
        if(create){
            return response(res, statusCodes.SUCCESS, "new employees successfully", create)
        } else{
            return response(res, statusCodes.SERVER_ERROR, "server error")
        }
    }catch(err){
        console.log(err);
    }
} 

const employeGet = async(req, res) => {
    try{
        const employees = await Employees.findAll();
        if(employees){
            return response(res, statusCodes.SUCCESS, "employees Get successfully", employees)
        } else{
            return response(res, statusCodes.BAD_REQUEST, "not found")
        }
    }catch(err){
        console.log(err);
    }
}

const updateEmployeDetail = async(req, res) => {
    try{
        const { birth_date, first_name, last_name, gender, hire_date } = req.body;
        if(!first_name || !last_name || !gender || !hire_date || !birth_date){
            return response(res, statusCodes.NOT_FOUND, "enter birth_date, first_name, last_name, gender, hire_date")
        }
        let id = req.params.id;
        const task = await Employees.findOne({ where: { id, } });
        if(task){
            const result = await Employees.update({
                birth_date, 
                first_name, 
                last_name, 
                gender, 
                hire_date
            },{
                where: {
                    id
                }
            });
            return response(res, statusCodes.SUCCESS, "details update successfully", result)
        } else{
            return response(res, statusCodes.NOT_FOUND, "id not match")
        }
    }catch(err){
        console.log(err);
    }
}

const deletEmploye = async(req, res) => {
    try{
        let id = req.params.id;
        const task = await Employees.findOne({ where: { id } });
        if (task) {
            const result = await Employees.destroy({
                where: {
                    id
                }
            });
            return response(res, statusCodes.SUCCESS, "employe delete successfully", result);
        }else{
            return response(res, statusCodes.NOT_FOUND, "employe not found")
        }
    }catch(err){
        console.log(err);
    }
}

const departEmployeAdd = async(req, res) => {
    try{
        const { employees_id, from_date, to_date } = req.body;
        if(!employees_id || !from_date || !to_date){
            return response(res, statusCodes.NOT_FOUND, "enter employees_id, from_date, to_date");
        }
        let id = req.params.id;
        const task = await DepartEmploye.findOne({ where: { id } });
        let employe = await DepartEmploye.findOne({
            attributes: ["id"],
            where: {
                employees_id
            }
        })
        if(employe){
            return response(res, statusCodes.BAD_REQUEST, "employe alreadyExist", employe)
        }
        const create = await DepartEmploye.create({
            employees_id, 
            from_date, 
            to_date
        })
        if(create){
            return response(res, statusCodes.SUCCESS, "new employees successfully", create)
        } else{
            return response(res, statusCodes.SERVER_ERROR, "server error")
        }
    }catch(err){
        console.log(err);
    }
}

const departGetEmploye = async(req, res) => {
    try{
        let id = req.params.id;
        const task = await DepartEmploye.findOne({ where: { id } });
        if (task) {
            const result = await DepartEmploye.destroy({
                where: {
                    id
                }
            });
        }
        const employees = await DepartEmploye.findAll();
        
        if(employees){
            return response(res, statusCodes.SUCCESS, "employees Get successfully", employees)
        } else{
            return response(res, statusCodes.BAD_REQUEST, "not found")
        }
    }catch(err){
        console.log(err);
    }
}

const deptMangerAdd = async(req, res) => {
    try{
        const { employees_id, from_date, to_date } = req.body;
        if(!employees_id || !from_date || !to_date){
            return response(res, statusCodes.NOT_FOUND, "enter employees_id, from_date, to_date");
        }
        let id = req.params.id;
        const task = await DeptManger.findOne({ where: { id } });
        let employe = await DeptManger.findOne({
            attributes: ["id"],
            where: {
                employees_id
            }
        })
        if(employe){
            return response(res, statusCodes.BAD_REQUEST, "employe alreadyExist", employe)
        }
        const create = await DeptManger.create({
            employees_id, 
            from_date, 
            to_date
        })
        if(create){
            return response(res, statusCodes.SUCCESS, "new employees successfully", create)
        } else{
            return response(res, statusCodes.SERVER_ERROR, "server error")
        }
    }catch(err){
        console.log(err);
    }
}

const employeSalary = async(req, res) => {
    try{
        const { employees_id, salary, from_date, to_date } = req.body;
        if(!employees_id || !salary || !from_date || !to_date){
            return response(res, statusCodes.NOT_FOUND, "enter employees_id, from_date, to_date");
        }
        let id = req.params.id;
        const Salary = await EmployeSalary.findOne({ where: { id } });
        let employe = await EmployeSalary.findOne({
            attributes: ["id"],
            where: {
                employees_id
            }
        })
        if(employe){
            return response(res, statusCodes.BAD_REQUEST, "employe alreadyExist", employe)
        }
        const create = await EmployeSalary.create({
            employees_id, 
            salary,
            from_date, 
            to_date
        })
        if(create){
            return response(res, statusCodes.SUCCESS, "new employees successfully", create)
        } else{
            return response(res, statusCodes.SERVER_ERROR, "server error")
        }
    }catch(err){
        console.log(err);
    }
}

const employeTitle = async(req, res) => {
    try{
        const { employees_id, title, from_date, to_date } = req.body;
        if(!employees_id || !title || !from_date || !to_date){
            return response(res, statusCodes.NOT_FOUND, "enter employees_id, from_date, to_date");
        }
        let id = req.params.id;
        const Title = await EmployeTitle.findOne({ where: { id } });
        let employe = await EmployeTitle.findOne({
            attributes: ["id"],
            where: {
                employees_id
            }
        })
        if(employe){
            return response(res, statusCodes.BAD_REQUEST, "employe alreadyExist", employe)
        }
        const create = await EmployeTitle.create({
            employees_id, 
            title,
            from_date, 
            to_date
        })
        if(create){
            return response(res, statusCodes.SUCCESS, "new employees successfully", create)
        } else{
            return response(res, statusCodes.SERVER_ERROR, "server error")
        }
    }catch(err){
        console.log(err);
    }
}

const employeTitleGet = async(req, res) => {
    try{
        let id = req.params.id;
        const task = await EmployeTitle.findOne({ where: { id } });
        if (task) {
            const result = await EmployeTitle.destroy({
                where: {
                    id
                }
            });
        }
        const employees = await EmployeTitle.findAll();
        
        if(employees){
            return response(res, statusCodes.SUCCESS, "employees Get successfully", employees)
        } else{
            return response(res, statusCodes.BAD_REQUEST, "not found")
        }
    }catch(err){
        console.log(err);
    }
}

const employeTitleUpdate = async(req, res) => {
    try{
        const { employees_id, title, from_date, to_date } = req.body;
        if(!employees_id || !title || !from_date || !to_date){
            return response(res, statusCodes.NOT_FOUND, "enter employees_id, title, from_date, to_date")
        }
        let id = req.params.id;
        const task = await EmployeTitle.findOne({ where: { id, } });
        if(task){
            const result = await EmployeTitle.update({
                employees_id, 
                title, 
                from_date, 
                to_date
            },{
                where: {
                    id
                }
            });
            return response(res, statusCodes.SUCCESS, "details update successfully", result)
        } else{
            return response(res, statusCodes.NOT_FOUND, "id not match")
        }
    }catch(err){
        console.log(err);
    }
}

module.exports = { employeAdd, employeGet, updateEmployeDetail, deletEmploye, departEmployeAdd, departGetEmploye, deptMangerAdd, employeSalary, employeTitle, employeTitleGet, employeTitleUpdate }
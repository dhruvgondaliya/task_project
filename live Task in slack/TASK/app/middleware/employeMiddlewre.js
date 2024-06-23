const { verifyToken } = require("../helpers/auth");
const { response } = require("../helpers/response");
const { statusCodes } = require("../helpers/constants");
const Employe = require('../models/employeesModel');
const messages = require("../helpers/messages");
const Employees = require("../models/employeesModel");

const authMiddleware = async (req, res, next) => {
    try{
        if(!req.headers["authorization"]){
            return response(res, statusCodes.UNAUTHORIZE, "No token provided!");
        }
        let decodedToken = verifyToken(req.headers["authorization"]);
        let userId = decodedToken["id"];
        let user = await Employe.findOne({
            id: userId
        })
        if(!user){
            return response(res, statusCodes.UNAUTHORIZE, "Unauthorized");
        }
        req.headers.userId = userId;
        next();
    }catch(err){

        return response(res, statusCodes.UNAUTHORIZE, "Token Invalid!");
    }
};

module.exports = {
    authMiddleware
}
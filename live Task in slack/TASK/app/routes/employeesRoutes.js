const express = require('express');
const router = express.Router();

const {
    employeAdd,
    employeGet,
    updateEmployeDetail,
    deletEmploye,
    departEmployeAdd,
    departGetEmploye,
    deptMangerAdd,
    employeSalary,
    employeTitle,
    employeTitleGet,
    employeTitleUpdate
} = require('../controllers/employees');

router.post('/employees',employeAdd);
router.get('/employees', employeGet);
router.put('/employees/:id', updateEmployeDetail);
router.delete('/employees/:id', deletEmploye);
router.post('/departments/:id/employees', departEmployeAdd);
router.get('/departments/:id/employees', departGetEmploye);
router.post('/departments/:id/manager', deptMangerAdd);
router.post('/employees/:id/salaries', employeSalary);
router.post('/employees/:id/titles', employeTitle);
router.get('/employees/:id/titles', employeTitleGet);
router.put('/employees/:id/titles', employeTitleUpdate);


module.exports = router;
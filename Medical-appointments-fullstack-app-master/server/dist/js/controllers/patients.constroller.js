"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.createPatient = exports.getPatient = exports.getPatients = void 0;
const utils_1 = require("../utils");
const getPatients = (req, res) => {
    try {
        res.send('Getting patients');
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.getPatients = getPatients;
const getPatient = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.getPatient = getPatient;
const createPatient = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.createPatient = createPatient;
const updatePatient = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.updatePatient = updatePatient;
const deletePatient = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.deletePatient = deletePatient;
//# sourceMappingURL=patients.constroller.js.map
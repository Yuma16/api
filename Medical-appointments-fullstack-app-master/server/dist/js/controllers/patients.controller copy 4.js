"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.createPatient = exports.getPatient = exports.getPatients = void 0;
const utils_1 = require("../utils");
const Patient_1 = __importDefault(require("../models/Patient"));
const getPatients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const patients = yield Patient_1.default.findAll({
            order: [['id', 'ASC']]
        });
        res.json(patients);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
});
exports.getPatients = getPatients;
const getPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const patient = yield Patient_1.default.findByPk(id);
        if (!patient)
            return res.status(404).json({
                message: `User with id: ${id}, was not found!`
            });
        res.json(patient);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
});
exports.getPatient = getPatient;
const createPatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const patient = yield Patient_1.default.create(body);
        yield patient.save();
        res.json({
            message: 'Patient was created successfully!',
            new_patient: patient
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'creating',
            object: 'users'
        }, res);
    }
    ;
});
exports.createPatient = createPatient;
const updatePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const patient = yield Patient_1.default.findByPk(id);
        if (!patient) {
            return res.status(404).json({
                message: `Patient with ID: ${id} is not exist!`
            });
        }
        ;
        yield patient.update(body);
        yield patient.save();
        res.json({
            message: 'Patient was updated successfully!',
            patient
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'updating',
            object: 'users'
        }, res);
    }
    ;
});
exports.updatePatient = updatePatient;
const deletePatient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const patient = yield Patient_1.default.findByPk(id);
        if (!patient) {
            return res.status(404).json({
                message: `Patient with ID: ${id} is not exist!`
            });
        }
        ;
        yield patient.destroy();
        res.json({
            message: 'Patient was deleted successfully!'
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'deleting',
            object: 'users'
        }, res);
    }
    ;
});
exports.deletePatient = deletePatient;
//# sourceMappingURL=patients.controller%20copy%204.js.map
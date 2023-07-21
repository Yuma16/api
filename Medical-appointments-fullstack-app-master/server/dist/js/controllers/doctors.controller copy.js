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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletedoctor = exports.updatedoctor = exports.createdoctor = exports.getdoctor = exports.getDoctors = void 0;
const utils_1 = require("../utils");
const getDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctors = yield Doctor.findAll({
            order: [['id', 'ASC']]
        });
        res.json(doctors);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'doctors'
        }, res);
    }
    ;
});
exports.getDoctors = getDoctors;
const getdoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const doctor = yield Doctor.findByPk(id);
        if (!doctor)
            return res.status(404).json({
                message: `Doctor with id: ${id}, was not found!`
            });
        res.json(doctor);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'doctors'
        }, res);
    }
    ;
});
exports.getdoctor = getdoctor;
const createdoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const doctor = yield Doctor.create(body);
        yield doctor.save();
        res.json({
            message: 'Doctor was created successfully!',
            new_doctor: doctor
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'creating',
            object: 'doctors'
        }, res);
    }
    ;
});
exports.createdoctor = createdoctor;
const updatedoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const doctor = yield Doctor.findByPk(id);
        if (!doctor) {
            return res.status(404).json({
                message: `doctor with ID: ${id} is not exist!`
            });
        }
        ;
        yield doctor.update(body);
        yield doctor.save();
        res.json({
            message: 'Doctor was updated successfully!',
            doctor
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'updating',
            object: 'doctors'
        }, res);
    }
    ;
});
exports.updatedoctor = updatedoctor;
const deletedoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const doctor = yield Doctor.findByPk(id);
        if (!doctor) {
            return res.status(404).json({
                message: `doctor with ID: ${id} is not exist!`
            });
        }
        ;
        yield doctor.destroy();
        res.json({
            message: 'doctor was deleted successfully!'
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'deleting',
            object: 'doctors'
        }, res);
    }
    ;
});
exports.deletedoctor = deletedoctor;
//# sourceMappingURL=doctors.controller%20copy.js.map
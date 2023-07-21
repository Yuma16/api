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
exports.deleteStatus = exports.updateStatus = exports.createStatus = exports.getStatus = exports.getStates = void 0;
const utils_1 = require("../utils");
const AppointmentStates_1 = __importDefault(require("../models/AppointmentStates"));
const object = 'appointment states';
const getStates = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const states = yield AppointmentStates_1.default.findAll({
            order: [['id', 'ASC']]
        });
        res.json(states);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getStates = getStates;
const getStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const status = yield AppointmentStates_1.default.findByPk(id);
        if (!status)
            return res.status(404).json({
                message: `Status with id: ${id}, was not found!`
            });
        res.json(status);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getStatus = getStatus;
const createStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const status = yield AppointmentStates_1.default.create(body);
        yield status.save();
        res.status(201).json({
            message: 'Status was created successfully!',
            new_specilaity: status
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'creating',
            object
        }, res);
    }
    ;
});
exports.createStatus = createStatus;
const updateStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const status = yield AppointmentStates_1.default.findByPk(id);
        if (!status) {
            return res.status(404).json({
                message: `Speciality with ID: ${id} is not exist!`
            });
        }
        ;
        yield status.update(body);
        yield status.save();
        res.json({
            message: 'speciality was updated successfully!',
            status
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'updating',
            object
        }, res);
    }
    ;
});
exports.updateStatus = updateStatus;
const deleteStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const status = yield AppointmentStates_1.default.findByPk(id);
        if (!status) {
            return res.status(404).json({
                message: `Patient with ID: ${id} is not exist!`
            });
        }
        ;
        yield status.destroy();
        res.json({
            message: 'Speciality was deleted successfully!'
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'deleting',
            object
        }, res);
    }
    ;
});
exports.deleteStatus = deleteStatus;
//# sourceMappingURL=appointmentStates.controller.js.map
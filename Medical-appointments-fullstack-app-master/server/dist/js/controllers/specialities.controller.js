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
exports.deleteSpeciality = exports.updateSpeciality = exports.createSpecilaity = exports.getSpeciality = exports.getSpecialities = void 0;
const utils_1 = require("../utils");
const Speciality_1 = __importDefault(require("../models/Speciality"));
const object = 'specialities';
const getSpecialities = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const specialities = yield Speciality_1.default.findAll({
            order: [['id', 'ASC']]
        });
        res.json(specialities);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getSpecialities = getSpecialities;
const getSpeciality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const speciality = yield Speciality_1.default.findByPk(id);
        if (!speciality)
            return res.status(404).json({
                message: `User with id: ${id}, was not found!`
            });
        res.json(speciality);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getSpeciality = getSpeciality;
const createSpecilaity = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const specilaity = yield Speciality_1.default.create(body);
        yield specilaity.save();
        res.status(201).json({
            message: 'specilaity was created successfully!',
            new_specilaity: specilaity
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
exports.createSpecilaity = createSpecilaity;
const updateSpeciality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const speciality = yield Speciality_1.default.findByPk(id);
        if (!speciality) {
            return res.status(404).json({
                message: `Speciality with ID: ${id} is not exist!`
            });
        }
        ;
        yield speciality.update(body);
        yield speciality.save();
        res.json({
            message: 'speciality was updated successfully!',
            speciality
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
exports.updateSpeciality = updateSpeciality;
const deleteSpeciality = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const speciality = yield Speciality_1.default.findByPk(id);
        if (!speciality) {
            return res.status(404).json({
                message: `Patient with ID: ${id} is not exist!`
            });
        }
        ;
        yield speciality.destroy();
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
exports.deleteSpeciality = deleteSpeciality;
//# sourceMappingURL=specialities.controller.js.map
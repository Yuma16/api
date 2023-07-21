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
exports.deleteDoctor = exports.updateDoctor = exports.createDoctor = exports.getDoctor = exports.getDoctors = void 0;
const utils_1 = require("../utils");
const Doctor_1 = __importDefault(require("../models/Doctor"));
const Speciality_1 = __importDefault(require("../models/Speciality"));
const ConsultingRoom_1 = __importDefault(require("../models/ConsultingRoom"));
const Floor_1 = __importDefault(require("../models/Floor"));
const object = 'doctors';
const getDoctors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const doctors = yield Doctor_1.default.findAll({
            include: [
                {
                    model: ConsultingRoom_1.default,
                    attributes: ['id', 'office_code'],
                    include: [
                        { model: Floor_1.default, attributes: ['id', 'level'] },
                    ]
                },
                { model: Speciality_1.default, attributes: ['id', 'speciality_name'] }
            ],
            attributes: { exclude: ['id_office_number', 'id_speciality'] },
            order: [['id', 'ASC']]
        });
        res.json(doctors);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getDoctors = getDoctors;
const getDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const doctor = yield Doctor_1.default.findByPk(id, {
            include: [
                {
                    model: ConsultingRoom_1.default,
                    attributes: ['id', 'office_code'],
                    include: [
                        { model: Floor_1.default, attributes: ['id', 'level'] }
                    ]
                },
                { model: Speciality_1.default, attributes: ['id', 'speciality_name'] }
            ],
            attributes: { exclude: ['id_office_number', 'id_speciality'] }
        });
        if (!doctor)
            return res.status(404).json({
                message: `Doctor with id: ${id}, was not found!`
            });
        res.json(doctor);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getDoctor = getDoctor;
const createDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { first_name, last_name, email, id_office_number, id_speciality } = body;
    try {
        if (!first_name || !last_name || !email || !id_office_number || !id_speciality) {
            res.sendStatus(400);
        }
        ;
        const doctor = yield Doctor_1.default.create(body);
        yield doctor.save();
        res.status(201).json({
            message: 'Doctor was created successfully!',
            new_doctor: doctor
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
exports.createDoctor = createDoctor;
const updateDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const doctor = yield Doctor_1.default.findByPk(id);
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
            object
        }, res);
    }
    ;
});
exports.updateDoctor = updateDoctor;
const deleteDoctor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const doctor = yield Doctor_1.default.findByPk(id);
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
            object
        }, res);
    }
    ;
});
exports.deleteDoctor = deleteDoctor;
//# sourceMappingURL=doctors.controller.js.map
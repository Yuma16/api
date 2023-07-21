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
exports.deleteAppointment = exports.updateAppointment = exports.createAppointment = exports.getAppointment = exports.getAppointments = void 0;
const utils_1 = require("../utils");
const Appointment_1 = __importDefault(require("../models/Appointment"));
const Doctor_1 = __importDefault(require("../models/Doctor"));
const ConsultingRoom_1 = __importDefault(require("../models/ConsultingRoom"));
const Floor_1 = __importDefault(require("../models/Floor"));
const Speciality_1 = __importDefault(require("../models/Speciality"));
const Patient_1 = __importDefault(require("../models/Patient"));
const AppointmentStates_1 = __importDefault(require("../models/AppointmentStates"));
const object = 'appointment states';
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const appointments = yield Appointment_1.default.findAll({
            include: [
                {
                    model: Doctor_1.default,
                    attributes: ['id', 'first_name', 'last_name', 'email'],
                    include: [
                        {
                            model: ConsultingRoom_1.default,
                            attributes: ['id', 'office_code'],
                            include: [
                                { model: Floor_1.default, attributes: ['id', 'level'] }
                            ]
                        },
                        {
                            model: Speciality_1.default,
                            attributes: ['id', 'speciality_name'],
                        }
                    ]
                },
                {
                    model: Patient_1.default,
                    attributes: ['id', 'first_name', 'last_name', 'birth_date', 'phone']
                },
                {
                    model: AppointmentStates_1.default,
                    attributes: ['id', 'status']
                },
            ],
            attributes: {
                exclude: ['id_patient', 'id_doctor', 'id_status_appointment']
            },
            order: [['id', 'ASC']]
        });
        res.json(appointments);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getAppointments = getAppointments;
const getAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const appointment = yield Appointment_1.default.findByPk(id, {
            include: [
                {
                    model: Doctor_1.default,
                    attributes: ['id', 'first_name', 'last_name', 'email'],
                    include: [
                        {
                            model: ConsultingRoom_1.default,
                            attributes: ['id', 'office_code'],
                            include: [
                                { model: Floor_1.default, attributes: ['id', 'level'] }
                            ]
                        },
                        {
                            model: Speciality_1.default,
                            attributes: ['id', 'speciality_name'],
                        }
                    ]
                },
                {
                    model: Patient_1.default,
                    attributes: ['id', 'first_name', 'last_name', 'birth_date', 'phone']
                },
                {
                    model: AppointmentStates_1.default,
                    attributes: ['id', 'status']
                },
            ],
            attributes: {
                exclude: ['id_patient', 'id_doctor', 'id_status_appointment']
            }
        });
        if (!appointment)
            return res.status(404).json({
                message: `Appointment with id: ${id}, was not found!`
            });
        res.json(appointment);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getAppointment = getAppointment;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const appointment = yield Appointment_1.default.create(body);
        yield appointment.save();
        res.status(201).json({
            message: 'Appointment was created successfully!',
            new_appointment: appointment
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
exports.createAppointment = createAppointment;
const updateAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const appointment = yield Appointment_1.default.findByPk(id);
        if (!appointment) {
            return res.status(404).json({
                message: `Speciality with ID: ${id} is not exist!`
            });
        }
        ;
        yield appointment.update(body);
        yield appointment.save();
        res.json({
            message: 'Appointment was updated successfully!',
            appointment
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
exports.updateAppointment = updateAppointment;
const deleteAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const appointment = yield Appointment_1.default.findByPk(id);
        if (!appointment) {
            return res.status(404).json({
                message: `Appointment with ID: ${id} is not exist!`
            });
        }
        ;
        yield appointment.destroy();
        res.json({
            message: 'Appointment was deleted successfully!'
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
exports.deleteAppointment = deleteAppointment;
//# sourceMappingURL=appointments.controller.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointments_controller_1 = require("../controllers/appointments.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const isNumber_1 = __importDefault(require("../middlewares/isNumber"));
const validDate_1 = __importDefault(require("../middlewares/validDate"));
const router = (0, express_1.Router)();
router.get("/", appointments_controller_1.getAppointments);
router.get("/:id", appointments_controller_1.getAppointment);
router.post("/", [
    (0, express_validator_1.check)('id_doctor', 'Id doctor could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_doctor').custom(isNumber_1.default),
    (0, express_validator_1.check)('id_patient', 'Id patient could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_patient').custom(isNumber_1.default),
    (0, express_validator_1.check)('appointment_date', 'Appointment date could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('appointment_date').custom(validDate_1.default),
    (0, express_validator_1.check)('id_status_appointment').custom(isNumber_1.default),
    validateFields_1.default
], appointments_controller_1.createAppointment);
router.put("/:id", [
    (0, express_validator_1.check)('id_doctor', 'Id doctor could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_doctor').custom(isNumber_1.default),
    (0, express_validator_1.check)('id_patient', 'Id patient could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_patient').custom(isNumber_1.default),
    (0, express_validator_1.check)('appointment_date', 'Appointment date could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('appointment_date').custom(validDate_1.default),
    (0, express_validator_1.check)('id_status_appointment').custom(isNumber_1.default),
    validateFields_1.default
], appointments_controller_1.updateAppointment);
router.delete("/:id", appointments_controller_1.deleteAppointment);
exports.default = router;
//# sourceMappingURL=appointments.routes.js.map
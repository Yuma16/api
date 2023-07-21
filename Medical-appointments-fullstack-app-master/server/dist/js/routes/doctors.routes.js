"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const doctors_controller_1 = require("../controllers/doctors.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const isNumber_1 = __importDefault(require("../middlewares/isNumber"));
const hasOnlyCharacters_1 = __importDefault(require("../middlewares/hasOnlyCharacters"));
const router = (0, express_1.Router)();
router.get("/", doctors_controller_1.getDoctors);
router.get("/:id", doctors_controller_1.getDoctor);
router.post("/", [
    (0, express_validator_1.check)('first_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('first_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('last_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('last_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('email', 'Email date could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is not valid!').isEmail(),
    (0, express_validator_1.check)('id_office_number', 'Id office number could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_office_number').custom(isNumber_1.default),
    (0, express_validator_1.check)('id_speciality', 'Id speciality could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_speciality').custom(isNumber_1.default),
    validateFields_1.default
], doctors_controller_1.createDoctor);
router.put("/:id", [
    (0, express_validator_1.check)('first_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('first_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('last_name', 'Last name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('last_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('email', 'Email could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is not valid!').isEmail(),
    (0, express_validator_1.check)('id_office_number', 'Id office number could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_office_number').custom(isNumber_1.default),
    (0, express_validator_1.check)('id_speciality', 'Id speciality could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_speciality').custom(isNumber_1.default),
    validateFields_1.default
], doctors_controller_1.updateDoctor);
router.delete("/:id", doctors_controller_1.deleteDoctor);
exports.default = router;
//# sourceMappingURL=doctors.routes.js.map
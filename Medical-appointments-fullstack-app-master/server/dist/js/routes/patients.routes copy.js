"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patients_controller_1 = require("../controllers/patients.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const isNumber_1 = __importDefault(require("../middlewares/isNumber"));
const validDate_1 = __importDefault(require("../middlewares/validDate"));
const hasOnlyCharacters_1 = __importDefault(require("../middlewares/hasOnlyCharacters"));
const router = (0, express_1.Router)();
router.get("/", patients_controller_1.getPatients);
router.get("/:id", patients_controller_1.getPatient);
router.post("/", [
    (0, express_validator_1.check)('first_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('first_name', 'Field must be a string!').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('last_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('last_name', 'Field must be a string!').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('birth_date', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('birth_date', 'First name could not be empty!').custom(validDate_1.default),
    (0, express_validator_1.check)('phone', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('phone').custom(isNumber_1.default),
    validateFields_1.default
], patients_controller_1.createPatient);
router.put("/:id", [
    (0, express_validator_1.check)('first_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('first_name', 'Field must be a string!').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('last_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('last_name', 'Field must be a string!').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('birth_date', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('birth_date', 'First name could not be empty!').custom(validDate_1.default),
    (0, express_validator_1.check)('phone', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('phone').custom(isNumber_1.default),
    validateFields_1.default
], patients_controller_1.updatePatient);
router.delete("/:id", patients_controller_1.deletePatient);
exports.default = router;
//# sourceMappingURL=patients.routes%20copy.js.map
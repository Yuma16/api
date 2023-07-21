"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specialities_controller_1 = require("../controllers/specialities.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const isNumber_1 = __importDefault(require("../middlewares/isNumber"));
const validDate_1 = __importDefault(require("../middlewares/validDate"));
const hasOnlyCharacters_1 = __importDefault(require("../middlewares/hasOnlyCharacters"));
const router = (0, express_1.Router)();
router.get("/", specialities_controller_1.getSpecialities);
router.get("/:id", specialities_controller_1.getSpeciality);
router.post("/", [
    (0, express_validator_1.check)('first_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('first_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('last_name', 'Last name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('last_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('birth_date', 'Birth date could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('birth_date').custom(validDate_1.default),
    (0, express_validator_1.check)('phone', 'Phone could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('phone').custom(isNumber_1.default),
    validateFields_1.default
], specialities_controller_1.createspecilaity);
router.put("/:id", [
    (0, express_validator_1.check)('first_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('first_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('last_name', 'Last name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('last_name').custom(hasOnlyCharacters_1.default),
    (0, express_validator_1.check)('birth_date', 'Birth date could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('birth_date').custom(validDate_1.default),
    (0, express_validator_1.check)('phone', 'Phone could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('phone').custom(isNumber_1.default),
    validateFields_1.default
], specialities_controller_1.updatespeciality);
router.delete("/:id", specialities_controller_1.deleteSpeciality);
exports.default = router;
//# sourceMappingURL=patients.routes%20copy%206.js.map
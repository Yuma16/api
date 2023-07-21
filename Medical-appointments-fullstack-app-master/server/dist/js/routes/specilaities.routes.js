"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specialities_controller_1 = require("../controllers/specialities.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const hasOnlyCharacters_1 = __importDefault(require("../middlewares/hasOnlyCharacters"));
const router = (0, express_1.Router)();
router.get("/", specialities_controller_1.getSpecialities);
router.get("/:id", specialities_controller_1.getSpeciality);
router.post("/", [
    (0, express_validator_1.check)('speciality_name', 'First name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('speciality_name').custom(hasOnlyCharacters_1.default),
    validateFields_1.default
], specialities_controller_1.createSpecilaity);
router.put("/:id", [
    (0, express_validator_1.check)('speciality_name', 'Speciality name could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('speciality_name').custom(hasOnlyCharacters_1.default),
    validateFields_1.default
], specialities_controller_1.updateSpeciality);
router.delete("/:id", specialities_controller_1.deleteSpeciality);
exports.default = router;
//# sourceMappingURL=specilaities.routes.js.map
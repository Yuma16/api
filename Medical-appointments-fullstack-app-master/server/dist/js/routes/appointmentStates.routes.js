"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentStates_controller_1 = require("../controllers/appointmentStates.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const hasOnlyCharacters_1 = __importDefault(require("../middlewares/hasOnlyCharacters"));
const router = (0, express_1.Router)();
router.get("/", appointmentStates_controller_1.getStates);
router.get("/:id", appointmentStates_controller_1.getStatus);
router.post("/", [
    (0, express_validator_1.check)('status', 'Status could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('status').custom(hasOnlyCharacters_1.default),
    validateFields_1.default
], appointmentStates_controller_1.createStatus);
router.put("/:id", [
    (0, express_validator_1.check)('status', 'Status could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('status').custom(hasOnlyCharacters_1.default),
    validateFields_1.default
], appointmentStates_controller_1.updateStatus);
router.delete("/:id", appointmentStates_controller_1.deleteStatus);
exports.default = router;
//# sourceMappingURL=appointmentStates.routes.js.map
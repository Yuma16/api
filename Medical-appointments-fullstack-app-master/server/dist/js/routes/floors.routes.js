"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const floors_controller_1 = require("../controllers/floors.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const isNumber_1 = __importDefault(require("../middlewares/isNumber"));
const router = (0, express_1.Router)();
router.get("/", floors_controller_1.getFloors);
router.get("/:id", floors_controller_1.getFloor);
router.post("/", [
    (0, express_validator_1.check)('level', 'Level could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('level').custom(isNumber_1.default),
    validateFields_1.default
], floors_controller_1.createFloor);
router.put("/:id", [
    (0, express_validator_1.check)('level', 'Level could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('level').custom(isNumber_1.default),
    validateFields_1.default
], floors_controller_1.updateFloor);
router.delete("/:id", floors_controller_1.deleteFloor);
exports.default = router;
//# sourceMappingURL=floors.routes.js.map
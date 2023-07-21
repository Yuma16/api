"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consultingRooms_controller_1 = require("../controllers/consultingRooms.controller");
const express_validator_1 = require("express-validator");
const validateFields_1 = __importDefault(require("../middlewares/validateFields"));
const isNumber_1 = __importDefault(require("../middlewares/isNumber"));
const router = (0, express_1.Router)();
router.get("/", consultingRooms_controller_1.getRooms);
router.get("/:id", consultingRooms_controller_1.getRoom);
router.post("/", [
    (0, express_validator_1.check)('office_code', 'Office code could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_floor', 'Id floor could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_floor').custom(isNumber_1.default),
    validateFields_1.default
], consultingRooms_controller_1.createRoom);
router.put("/:id", [
    (0, express_validator_1.check)('office_code', 'Office code could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_floor', 'Id floor could not be empty!').not().isEmpty(),
    (0, express_validator_1.check)('id_floor').custom(isNumber_1.default),
    validateFields_1.default
], consultingRooms_controller_1.updateRoom);
router.delete("/:id", consultingRooms_controller_1.deleteRoom);
exports.default = router;
//# sourceMappingURL=consultingRooms.routes.js.map
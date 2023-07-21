"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateFields = (req, res, next) => {
    const err = (0, express_validator_1.validationResult)(req);
    if (!err.isEmpty())
        return res.status(400).json(err);
    next();
};
exports.default = validateFields;
//# sourceMappingURL=validateFields.js.map
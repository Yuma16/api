"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_constroller_1 = require("../controllers/users.constroller");
const router = (0, express_1.Router)();
router.get('/', users_constroller_1.getUsers);
router.get('/:id', users_constroller_1.getUser);
router.post('/', users_constroller_1.postUser);
router.get('/:id', users_constroller_1.updateUser);
router.get('/:id', users_constroller_1.deleteUser);
exports.default = express_1.Router;
//# sourceMappingURL=users.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const utils_1 = require("../utils");
const getUsers = (req, res) => {
    try {
        res, send('Getti');
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.getUser = getUser;
const postUser = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.postUser = postUser;
const updateUser = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.updateUser = updateUser;
const deleteUser = (req, res) => {
    try {
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'users'
        }, res);
    }
    ;
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.constroller.js.map
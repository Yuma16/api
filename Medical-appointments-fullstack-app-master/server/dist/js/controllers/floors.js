"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletefloor = exports.updatefloor = exports.createfloor = exports.getfloor = exports.getFloors = void 0;
const utils_1 = require("../utils");
const Floor_1 = __importDefault(require("../models/Floor"));
const getFloors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const floors = yield Floor_1.default.findAll({
            order: [['id', 'ASC']]
        });
        res.json(floors);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'floors'
        }, res);
    }
    ;
});
exports.getFloors = getFloors;
const getfloor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const floor = yield Floor_1.default.findByPk(id);
        if (!floor)
            return res.status(404).json({
                message: `Floor with id: ${id}, was not found!`
            });
        res.json(floor);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object: 'floor'
        }, res);
    }
    ;
});
exports.getfloor = getfloor;
const createfloor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const floor = yield Floor_1.default.create(body);
        yield floor.save();
        res.json({
            message: 'Floor was created successfully!',
            new_floor: floor
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'creating',
            object: 'floor'
        }, res);
    }
    ;
});
exports.createfloor = createfloor;
const updatefloor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const floor = yield Floor_1.default.findByPk(id);
        if (!floor) {
            return res.status(404).json({
                message: `floor with ID: ${id} is not exist!`
            });
        }
        ;
        yield floor.update(body);
        yield floor.save();
        res.json({
            message: 'Floor was updated successfully!',
            floor
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'updating',
            object: 'floor'
        }, res);
    }
    ;
});
exports.updatefloor = updatefloor;
const deletefloor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const floor = yield Floor_1.default.findByPk(id);
        if (!floor) {
            return res.status(404).json({
                message: `Floor with ID: ${id} is not exist!`
            });
        }
        ;
        yield floor.destroy();
        res.json({
            message: 'Floor was deleted successfully!'
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'deleting',
            object: 'floor'
        }, res);
    }
    ;
});
exports.deletefloor = deletefloor;
//# sourceMappingURL=floors.js.map
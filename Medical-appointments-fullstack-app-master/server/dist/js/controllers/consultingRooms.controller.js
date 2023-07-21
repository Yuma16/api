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
exports.deleteRoom = exports.updateRoom = exports.createRoom = exports.getRoom = exports.getRooms = void 0;
const utils_1 = require("../utils");
const ConsultingRoom_1 = __importDefault(require("../models/ConsultingRoom"));
const Floor_1 = __importDefault(require("../models/Floor"));
const object = 'consulting rooms';
const getRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield ConsultingRoom_1.default.findAll({
            include: [
                { model: Floor_1.default, attributes: ['level'] }
            ],
            order: [['id', 'ASC']]
        });
        res.json(rooms);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getRooms = getRooms;
const getRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const room = yield ConsultingRoom_1.default.findByPk(id, {
            include: [
                { model: Floor_1.default, attributes: ['id', 'level'] }
            ],
            attributes: {
                exclude: ['id_floor']
            }
        });
        if (!room)
            return res.status(404).json({
                message: `Consulting room with id: ${id}, was not found!`
            });
        res.json(room);
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'getting',
            object
        }, res);
    }
    ;
});
exports.getRoom = getRoom;
const createRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const room = yield ConsultingRoom_1.default.create(body);
        yield room.save();
        res.status(201).json({
            message: 'Consulting room was created successfully!',
            new_room: room
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'creating',
            object
        }, res);
    }
    ;
});
exports.createRoom = createRoom;
const updateRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body, params: { id } } = req;
    try {
        const room = yield ConsultingRoom_1.default.findByPk(id);
        if (!room) {
            return res.status(404).json({
                message: `Consulting room with ID: ${id} is not exist!`
            });
        }
        ;
        yield room.update(body);
        yield room.save();
        res.json({
            message: 'Consulting room was updated successfully!',
            room
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'updating',
            object
        }, res);
    }
    ;
});
exports.updateRoom = updateRoom;
const deleteRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const room = yield ConsultingRoom_1.default.findByPk(id);
        if (!room) {
            return res.status(404).json({
                message: `Consulting room with ID: ${id} is not exist!`
            });
        }
        ;
        yield room.destroy();
        res.json({
            message: 'Consulting room was deleted successfully!'
        });
    }
    catch (error) {
        (0, utils_1.showErrors)(error, {
            message: 'deleting',
            object
        }, res);
    }
    ;
});
exports.deleteRoom = deleteRoom;
//# sourceMappingURL=consultingRooms.controller.js.map
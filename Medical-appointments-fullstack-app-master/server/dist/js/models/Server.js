"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
// Routes
const users_1 = __importDefault(require("../routes/users"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.PORT = process.env.PORT || '3000';
        this.PATH = '/api/v1';
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
    }
    ;
    middlewares() {
        // body-parser
        this.app.use(express_1.default.json());
    }
    ;
    routes() {
        this.app.use(`${this.PATH}/users`, users_1.default.router);
    }
    ;
    listener() {
        this.app.listen(this.PORT, () => {
            console.log(`Listeing in port http://localhost:${this.PORT}`);
        });
    }
    ;
}
;
exports.default = Server;
//# sourceMappingURL=Server.js.map
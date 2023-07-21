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
const app_1 = __importDefault(require("./app"));
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const postgres_1 = __importDefault(require("./config/postgres"));
// App initialization
const PORT = process.env.PORT || '3000';
app_1.default.listen(PORT, () => console.log(`Listening in port http://localhost:${PORT}`));
// Database Connection
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield postgres_1.default.authenticate();
        console.log('Postgres database is working!');
    }
    catch (error) {
        console.log(error);
        console.log('Something went wrong while connecting the database!');
    }
    ;
}))();
//# sourceMappingURL=index.js.map
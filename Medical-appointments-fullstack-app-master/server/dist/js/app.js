"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
// Middlewares
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
// Routes
const patients_routes_1 = __importDefault(require("./routes/patients.routes"));
const floors_routes_1 = __importDefault(require("./routes/floors.routes"));
const consultingRooms_routes_1 = __importDefault(require("./routes/consultingRooms.routes"));
const specilaities_routes_1 = __importDefault(require("./routes/specilaities.routes"));
const doctors_routes_1 = __importDefault(require("./routes/doctors.routes"));
const appointmentStates_routes_1 = __importDefault(require("./routes/appointmentStates.routes"));
const appointments_routes_1 = __importDefault(require("./routes/appointments.routes"));
const PATH = '/api/v1';
app.use(`${PATH}/patients`, patients_routes_1.default);
app.use(`${PATH}/floors`, floors_routes_1.default);
app.use(`${PATH}/consulting-routes`, consultingRooms_routes_1.default);
app.use(`${PATH}/specialities`, specilaities_routes_1.default);
app.use(`${PATH}/doctors`, doctors_routes_1.default);
app.use(`${PATH}/appointment-states`, appointmentStates_routes_1.default);
app.use(`${PATH}/appointments`, appointments_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
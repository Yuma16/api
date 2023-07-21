"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.showErrors = void 0;
const showErrors = (err, message, res) => {
    console.log(err);
    res.status(500).json({
        message: `Something went wrong while ${message.message} the ${message.object}!`,
        err
    });
};
exports.showErrors = showErrors;
//# sourceMappingURL=index.js.map
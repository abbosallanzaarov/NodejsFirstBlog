"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.checkToken = exports.generateToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function generateToken(data) {
    var token = jsonwebtoken_1["default"].sign(data, 'secret');
    return token;
}
exports.generateToken = generateToken;
function checkToken(token) {
    var data = jsonwebtoken_1["default"].verify(token, 'secret');
    return data;
}
exports.checkToken = checkToken;
//# sourceMappingURL=jwt.js.map
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
exports.usersModel = exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('database connect...');
        mongoose_1.default.connect('mongodb://localhost:27018/nodeblog');
    });
}
exports.connectDB = connectDB;
const usersSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    data: {
        type: Number,
        require: true
    },
    month: {
        type: String,
        require: true
    },
    year: {
        type: Number,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    }
});
//data, month, year, password, phone
exports.usersModel = mongoose_1.default.model('users', usersSchema);

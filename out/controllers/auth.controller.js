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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.login = exports.register = exports.signup = exports.signin = void 0;
var auth_servic_1 = require("../service/auth.servic");
var bcrypt_1 = require("../service/bcrypt");
var jwt_1 = require("../service/jwt");
function signin(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.render('signin', { error: "", name: req.name });
            }
            catch (err) {
                res.render('signin', { error: "gachchi", name: req.name });
            }
            return [2 /*return*/];
        });
    });
}
exports.signin = signin;
function signup(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                res.render('signup', { error: 'Error Lardan Saqlaning va Barcha ustunlarni to\'ldiring iltimos' });
            }
            catch (error) {
                res.render('signup', { error: "gachchi" });
            }
            return [2 /*return*/];
        });
    });
}
exports.signup = signup;
function register(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, name, email, data, month, year, password, phone, findUserEmailOr, user, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 4, , 5]);
                    _a = req.body, name = _a.name, email = _a.email, data = _a.data, month = _a.month, year = _a.year, password = _a.password, phone = _a.phone;
                    if (!(name && email && data && month && year && password && phone)) {
                        throw new Error("Hamma ustunlarni to'ldiring iltimos!!!");
                    }
                    return [4 /*yield*/, (0, auth_servic_1.findUser)(email)];
                case 1:
                    findUserEmailOr = _c.sent();
                    if (findUserEmailOr) {
                        throw new Error('This name already taken');
                    }
                    if (password.length < 5) {
                        throw new Error('Password must at leart five Charaschet');
                    }
                    _b = {
                        id: 0,
                        name: name,
                        email: email,
                        data: Number(data),
                        year: Number(year),
                        month: month
                    };
                    return [4 /*yield*/, (0, bcrypt_1.generateHash)(password)];
                case 2:
                    user = (_b.password = _c.sent(),
                        _b.phone = phone,
                        _b);
                    return [4 /*yield*/, (0, auth_servic_1.createUser)(user)];
                case 3:
                    _c.sent();
                    res.redirect('/auth/signin');
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _c.sent();
                    res.render('signup', {
                        error: error_1,
                        name: req.name
                    });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.register = register;
function login(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, email, password, findUseremail, confrimHashPassword, token, err_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = req.body, email = _a.email, password = _a.password;
                    if (!(email && password)) {
                        throw new Error('iltimos ustunlarni to\'ldiring ');
                    }
                    return [4 /*yield*/, (0, auth_servic_1.findUser)(email)];
                case 1:
                    findUseremail = _b.sent();
                    if (!findUseremail) {
                        throw new Error('email or password not Found!');
                    }
                    return [4 /*yield*/, (0, bcrypt_1.confirmHash)(password, findUseremail.password)];
                case 2:
                    confrimHashPassword = _b.sent();
                    if (confrimHashPassword == false) {
                        throw new Error('password or email not Found');
                    }
                    token = (0, jwt_1.generateToken)(findUseremail.email);
                    res.cookie('token', token).redirect('/profil');
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _b.sent();
                    res.render('signin', {
                        error: err_1,
                        name: req.name
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.login = login;
//# sourceMappingURL=auth.controller.js.map
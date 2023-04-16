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
exports.updatePost = exports.updatePage = exports.deletePost = exports.createPost = exports.allPost = void 0;
var post_servic_1 = require("../service/post.servic");
var jwt_1 = require("../service/jwt");
var auth_servic_1 = require("../service/auth.servic");
function allPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var token, userEmail, posts, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    token = req.cookies.token;
                    return [4 /*yield*/, (0, jwt_1.checkToken)(token)];
                case 1:
                    userEmail = _a.sent();
                    return [4 /*yield*/, (0, post_servic_1.getAllPost)()];
                case 2:
                    posts = _a.sent();
                    res.render('profil', {
                        posts: posts,
                        name: req.name
                    });
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    res.render('addpost', {
                        name: req.name
                    });
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.allPost = allPost;
function createPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, text, token, userEmail, user, newpost, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 4, , 5]);
                    _a = req.body, title = _a.title, text = _a.text;
                    if (!title) {
                        throw new Error('Title ustunini to\'ldiring');
                    }
                    if (!text) {
                        throw new Error('Decription ustunini to\'ldiring');
                    }
                    token = req.cookies.token;
                    return [4 /*yield*/, (0, jwt_1.checkToken)(token)];
                case 1:
                    userEmail = _b.sent();
                    return [4 /*yield*/, (0, auth_servic_1.findUser)(userEmail)];
                case 2:
                    user = _b.sent();
                    newpost = {
                        id: 0,
                        title: title,
                        desc: text,
                        userId: user.id
                    };
                    return [4 /*yield*/, (0, post_servic_1.postCreate)(newpost)];
                case 3:
                    _b.sent();
                    res.redirect('/profil');
                    return [3 /*break*/, 5];
                case 4:
                    err_2 = _b.sent();
                    res.render('addpost', {
                        error: err_2 + '',
                        name: req.name
                    });
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.createPost = createPost;
function deletePost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var destroy, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, post_servic_1.destroyPost)(Number(req.params.id))];
                case 1:
                    destroy = _a.sent();
                    console.log(destroy);
                    res.redirect('/profil');
                    return [3 /*break*/, 3];
                case 2:
                    err_3 = _a.sent();
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.deletePost = deletePost;
function updatePage(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var findPost, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, post_servic_1.findById)(Number(req.params.id))];
                case 1:
                    findPost = _a.sent();
                    res.render('updatapost', {
                        name: req.name,
                        post: findPost
                    });
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _a.sent();
                    console.log(err_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updatePage = updatePage;
function updatePost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var post, newUpdate, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    post = {
                        id: 0,
                        title: req.body.title,
                        desc: req.body.text
                    };
                    return [4 /*yield*/, (0, post_servic_1.update)(Number(req.params.id), post)];
                case 1:
                    newUpdate = _a.sent();
                    if (newUpdate) {
                        res.redirect("/profil");
                    }
                    else {
                        res.render('updatapost', {
                            name: req.name
                        });
                    }
                    return [3 /*break*/, 3];
                case 2:
                    err_5 = _a.sent();
                    console.log(err_5);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.updatePost = updatePost;
//# sourceMappingURL=post.controler.js.map
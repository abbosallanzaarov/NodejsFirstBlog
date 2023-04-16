"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var home_controller_1 = __importDefault(require("../controllers/home.controller"));
var router = (0, express_1.Router)();
router.get('/', home_controller_1["default"]);
exports["default"] = router;
//# sourceMappingURL=home.route.js.map
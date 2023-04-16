"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = require("express");
var about_controller_1 = __importDefault(require("../controllers/about.controller"));
var profil_middleware_1 = require("../middleware/profil.middleware");
var router = (0, express_1.Router)();
router.get('/', profil_middleware_1.profiProtection, about_controller_1["default"]);
exports["default"] = router;
//# sourceMappingURL=about.route.js.map
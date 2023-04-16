"use strict";
exports.__esModule = true;
var express_1 = require("express");
var auth_controller_1 = require("../controllers/auth.controller");
var router = (0, express_1.Router)();
router.get('/signin', auth_controller_1.signin);
router.get("/signup", auth_controller_1.signup);
router.post('/register', auth_controller_1.register);
router.post('/login', auth_controller_1.login);
exports["default"] = router;
//# sourceMappingURL=auth.route.js.map
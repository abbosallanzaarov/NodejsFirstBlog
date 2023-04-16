"use strict";
exports.__esModule = true;
var express_1 = require("express");
var route = (0, express_1.Router)();
route.get('/', function (req, res) {
    res
        .clearCookie('token')
        .redirect('/');
});
exports["default"] = route;
//# sourceMappingURL=logout.route.js.map
"use strict";
exports.__esModule = true;
var express_1 = require("express");
var post_controler_1 = require("../controllers/post.controler");
var route = (0, express_1.Router)();
route.post('/add', post_controler_1.createPost);
route.get('/delete/:id', post_controler_1.deletePost);
route.get('/updatePage/:id', post_controler_1.updatePage);
route.post('/update/:id', post_controler_1.updatePost);
exports["default"] = route;
//# sourceMappingURL=post.route.js.map
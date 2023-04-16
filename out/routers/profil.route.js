"use strict";
exports.__esModule = true;
var express_1 = require("express");
var post_controler_1 = require("../controllers/post.controler");
var profil_middleware_1 = require("../middleware/profil.middleware");
var router = (0, express_1.Router)();
router.get('/', profil_middleware_1.profiProtection, post_controler_1.allPost);
exports["default"] = router;
//# sourceMappingURL=profil.route.js.map
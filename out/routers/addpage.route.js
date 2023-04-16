"use strict";
exports.__esModule = true;
var express_1 = require("express");
var addpage_controller_1 = require("../controllers/addpage.controller");
var profil_middleware_1 = require("../middleware/profil.middleware");
var router = (0, express_1.Router)();
router.get('/', profil_middleware_1.profiProtection, addpage_controller_1.addPage);
exports["default"] = router;
//# sourceMappingURL=addpage.route.js.map
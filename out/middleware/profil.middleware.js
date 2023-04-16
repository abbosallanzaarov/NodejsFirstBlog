"use strict";
exports.__esModule = true;
exports.profiProtection = void 0;
function profiProtection(req, res, next) {
    var _a;
    if (!((_a = req === null || req === void 0 ? void 0 : req.cookies) === null || _a === void 0 ? void 0 : _a.token)) {
        res.redirect('/');
    }
    next();
}
exports.profiProtection = profiProtection;
//# sourceMappingURL=profil.middleware.js.map
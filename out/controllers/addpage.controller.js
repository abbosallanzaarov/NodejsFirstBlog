"use strict";
exports.__esModule = true;
exports.addPage = void 0;
function addPage(req, res) {
    res.render('addpost', {
        name: req.name,
        error: 'agar Ustunlarni to\'ldirishda xatolik bolsa bu yerda habar beriladi'
    });
}
exports.addPage = addPage;
//# sourceMappingURL=addpage.controller.js.map
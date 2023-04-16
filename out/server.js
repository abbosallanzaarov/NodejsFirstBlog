"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var cors_1 = __importDefault(require("cors"));
var express_1 = __importDefault(require("express"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var env_1 = __importDefault(require("./env"));
var auth_middleware_1 = require("./middleware/auth.middleware");
var app = (0, express_1["default"])();
//exress config and body 
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true }));
app.use((0, cors_1["default"])());
app.use((0, cookie_parser_1["default"])());
//middleware
app.use(auth_middleware_1.checkAuth);
//router import
var home_route_1 = __importDefault(require("./routers/home.route"));
var about_route_1 = __importDefault(require("./routers/about.route"));
var contact_route_1 = __importDefault(require("./routers/contact.route"));
var auth_route_1 = __importDefault(require("./routers/auth.route"));
var profil_route_1 = __importDefault(require("./routers/profil.route"));
var logout_route_1 = __importDefault(require("./routers/logout.route"));
var addpage_route_1 = __importDefault(require("./routers/addpage.route"));
var post_route_1 = __importDefault(require("./routers/post.route"));
//ejs setting 
app.set('view engine', 'ejs');
//router register
app.use('/', home_route_1["default"]);
app.use('/about', about_route_1["default"]);
app.use('/contact', contact_route_1["default"]);
app.use('/auth', auth_route_1["default"]);
app.use('/profil', profil_route_1["default"]);
app.use('/logout', logout_route_1["default"]);
app.use('/addpost', addpage_route_1["default"]);
app.use('/post', post_route_1["default"]);
//404 not fount page
app.use(function (req, res, next) {
    res.render('404', { name: req.name });
    next();
});
//port setting
var port = env_1["default"].obj.PORT || 3030;
app.listen(port, function () {
    console.log('server is running ' + port);
});
//# sourceMappingURL=server.js.map
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./components/app.component');
var commonService_1 = require("./services/commonService");
var app_routes_1 = require('./app.routes');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [app_routes_1.APP_ROUTER_PROVIDERS, commonService_1.Common]).catch(function (err) { return console.error(err); });
//# sourceMappingURL=main.js.map
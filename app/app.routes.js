"use strict";
var router_1 = require('@angular/router');
var address_list_component_1 = require('./components/address-list.component');
var address_detail_component_1 = require('./components/address-detail.component');
exports.routes = [
    { path: '', component: address_list_component_1.AddressListComponent },
    //{ path: 'list', component: AddressListComponent },
    { path: 'detail/:id', component: address_detail_component_1.AddressDetailComponent }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map
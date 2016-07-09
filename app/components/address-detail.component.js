"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var commonService_1 = require("../services/commonService");
var edit_address_component_1 = require("./edit-address.component");
var AddressDetailComponent = (function () {
    function AddressDetailComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    AddressDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params
            .subscribe(function (params) {
            if (params['id']) {
                _this.selectedContact = _this.service.getById(parseInt(params['id']));
            }
        });
    };
    AddressDetailComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    AddressDetailComponent.prototype.backToList = function () {
        this.router.navigate(['/']);
    };
    AddressDetailComponent = __decorate([
        core_1.Component({
            selector: 'contact-detail',
            templateUrl: '../app/components/address-detail.component.html',
            directives: [edit_address_component_1.EditAddress]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, commonService_1.Common])
    ], AddressDetailComponent);
    return AddressDetailComponent;
}());
exports.AddressDetailComponent = AddressDetailComponent;
//# sourceMappingURL=address-detail.component.js.map
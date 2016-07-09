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
var AddAddress = (function () {
    function AddAddress(router, service) {
        this.router = router;
        this.service = service;
    }
    AddAddress.prototype.add = function () {
        if (this.name && this.address && this.email) {
            this.service.add({
                id: Math.floor((Math.random() * 100) + 10),
                name: this.name,
                profile: this.profile,
                address: this.address,
                email: this.email
            });
            this.name = '';
            this.address = '';
            this.email = '';
            //alert(this.service.getContacts().length);
            this.router.navigate(['/']);
        }
    };
    AddAddress = __decorate([
        core_1.Component({
            selector: 'add-address',
            templateUrl: '../app/components/add-address.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, commonService_1.Common])
    ], AddAddress);
    return AddAddress;
}());
exports.AddAddress = AddAddress;
//# sourceMappingURL=add-address.component.js.map
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
var add_address_component_1 = require("./add-address.component");
var AddressListComponent = (function () {
    function AddressListComponent(router, service) {
        this.addresses = service.getContacts();
        this.service = service;
        this.router = router;
    }
    AddressListComponent.prototype.onSelect = function (address) {
        this.router.navigate(['/detail', address.id]);
    };
    AddressListComponent.prototype.getDefault = function () {
        return this.service.getContacts();
    };
    AddressListComponent.prototype.onKey = function (event) {
        if (event.target.value == '') {
            this.addresses = this.getDefault();
            return;
        }
        var addresses = [];
        this.getDefault().forEach(function (item) {
            if (item.name.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
                addresses.push(item);
            }
        });
        this.addresses = addresses;
    };
    AddressListComponent = __decorate([
        core_1.Component({
            selector: 'contact-list',
            templateUrl: '../app/components/address-list.component.html',
            directives: [add_address_component_1.AddAddress]
        }), 
        __metadata('design:paramtypes', [router_1.Router, commonService_1.Common])
    ], AddressListComponent);
    return AddressListComponent;
}());
exports.AddressListComponent = AddressListComponent;
//# sourceMappingURL=address-list.component.js.map
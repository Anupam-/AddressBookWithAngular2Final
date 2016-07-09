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
var EditAddress = (function () {
    function EditAddress(router, service) {
        this.router = router;
        this.service = service;
        this.show = false;
    }
    EditAddress.prototype.edit = function (id) {
        if (this.show) {
            this.show = false;
        }
        else {
            var contact = this.service.getById(id);
            this.id = contact.id;
            this.name = contact.name;
            this.profile = contact.profile,
                this.address = contact.address;
            this.email = contact.email;
            this.show = true;
        }
    };
    EditAddress.prototype.update = function () {
        if (this.id > 0 && this.name && this.address && this.email) {
            this.service.update({
                id: this.id,
                name: this.name,
                profile: this.profile,
                address: this.address,
                email: this.email
            });
            this.name = '';
            this.profile = '';
            this.address = '';
            this.email = '';
            this.router.navigate(['/']);
        }
    };
    EditAddress = __decorate([
        core_1.Component({
            selector: 'edit-address',
            templateUrl: '../app/components/edit-address.component.html',
            inputs: ['id']
        }), 
        __metadata('design:paramtypes', [router_1.Router, commonService_1.Common])
    ], EditAddress);
    return EditAddress;
}());
exports.EditAddress = EditAddress;
//# sourceMappingURL=edit-address.component.js.map
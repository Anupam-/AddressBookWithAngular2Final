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
var Common = (function () {
    function Common() {
        this.contacts = [
            { id: 1, name: "Anupam Singh", profile: "UX Developer", address: "New Delhi 110045", phone: "001 8753-3648-002", email: "anupamsingh@abc.com" },
            { id: 2, name: "Mohit", profile: "Software Developer", address: "Dwarka, New Delhi 110045", phone: "001 8753-3648-002", email: "mohit@abc.com" },
            { id: 3, name: "Anurag", profile: "Software engineer", address: "Gurgaon, Haryana", phone: "001 8753-3648-002", email: "anrag@abc.com" }
        ];
    }
    Common.prototype.getContacts = function () {
        return this.contacts;
    };
    Common.prototype.getById = function (id) {
        var selected = null;
        this.contacts.forEach(function (contact) {
            if (contact.id == id) {
                selected = contact;
            }
        });
        return selected;
    };
    Common.prototype.add = function (contact) {
        this.contacts.push(contact);
    };
    Common.prototype.update = function (contact) {
        var ct = this.getById(contact.id);
        ct.name = contact.name;
        ct.profile = contact.profile;
        ct.address = contact.address;
        ct.email = contact.email;
    };
    Common.prototype.get = function () {
        return this.contacts;
    };
    Common = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], Common);
    return Common;
}());
exports.Common = Common;
//# sourceMappingURL=commonService.js.map
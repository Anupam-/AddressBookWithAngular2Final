import { Component } from '@angular/core';
import { Router } from '@angular/router';

import forEach = require("core-js/fn/array/for-each");
import {Common} from "../services/commonService";

import {AddAddress} from "./add-address.component"; 

@Component({
    selector: 'contact-list',
    templateUrl:'../app/components/address-list.component.html',   
    directives:[AddAddress]
})
export class AddressListComponent{

    private addresses:Array<any>;
    private router;
    private service;

    constructor(router : Router, service:Common){
        this.addresses = service.getContacts();
        this.service=service;
        this.router=router;
     }

    onSelect(address){
        this.router.navigate(['/detail',address.id])
    }

    getDefault(){
    return this.service.getContacts();
    }

    onKey(event:any) {
        if(event.target.value==''){
            this.addresses = this.getDefault();
            return;
        }

        var addresses = [];
        this.getDefault().forEach(function (item){
            if(item.name.toLowerCase().indexOf(event.target.value.toLowerCase())>-1) {
                addresses.push(item);
            }
        });

        this.addresses = addresses;
    }
}
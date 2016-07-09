import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Common} from "../services/commonService";

@Component({
    selector: 'add-address',
    templateUrl:'../app/components/add-address.component.html'
})
export class AddAddress{
    public id: Number;
    public name: string;
    public profile:string;
    public address: string;
    public email: string;

    constructor(
        private router:Router,
        private service: Common
    ){}

    add(){
        if(this.name && this.address && this.email) {
            this.service.add({
                id: Math.floor((Math.random() * 100) + 10),
                name: this.name,
                profile:this.profile,
                address: this.address,
                email: this.email
            });
            this.name='';
            this.address='';
            this.email='';
            //alert(this.service.getContacts().length);

            this.router.navigate(['/']);
        }
    }

}
import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import {Common} from "../services/commonService";

@Component({
    selector: 'edit-address',
    templateUrl:'../app/components/edit-address.component.html',
    inputs:['id']
})
export class EditAddress{

    public id: number;
    public name: string;
    public profile:string;
    public address: string;
    public email: string;

    public show:boolean=false;
    
    constructor(
        private router:Router,
        private service: Common
    ){}

    edit(id){
        if(this.show){this.show=false;}
        else{ 
            var contact= this.service.getById(id);
            this.id=contact.id;
            this.name=contact.name;
            this.profile=contact.profile,
            this.address=contact.address;
            this.email=contact.email;
            this.show=true; 
        }
    }
    update(){
        if( this.id > 0 && this.name && this.address && this.email) {
            this.service.update({
                id: this.id,
                name: this.name,
                profile:this.profile,
                address: this.address,
                email: this.email
            });            
            this.name='';
            this.profile='';
            this.address='';
            this.email='';

            this.router.navigate(['/']);
        }
    }

}
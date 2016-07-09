import { Component,Input,OnInit,OnDestroy } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import {Common} from "../services/commonService";
import {EditAddress} from "./edit-address.component";

@Component({
    selector: 'contact-detail',
    templateUrl:'../app/components/address-detail.component.html',
    directives:[EditAddress]
})
export class AddressDetailComponent implements OnInit, OnDestroy{

    private selectedContact;
    private sub;
    constructor( 
        private route: ActivatedRoute,
        private router :Router,
        private service:Common
    ){}
    ngOnInit() {
        this.sub = this.route
            .params
            .subscribe(params => {
                if(params['id']){
                    this.selectedContact = this.service.getById(parseInt(params['id']));
                }
            });
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
    backToList(){
        this.router.navigate(['/'])
    }
}


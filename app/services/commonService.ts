import { Injectable} from '@angular/core';

@Injectable()
export class Common{
    public contacts= [
        {id:1,name:"Anupam Singh",profile:"UX Developer", address: "New Delhi 110045",phone:"001 8753-3648-002" ,email:"anupamsingh@abc.com" },
        {id:2,name:"Mohit",profile:"Software Developer", address: "Dwarka, New Delhi 110045",phone:"001 8753-3648-002" ,email:"mohit@abc.com"},
        {id:3,name:"Anurag",profile:"Software engineer", address: "Gurgaon, Haryana",phone:"001 8753-3648-002" ,email:"anrag@abc.com"}

    ];

    public getContacts(){        
        return this.contacts;
    }
    
    getById(id:number){
        var selected =  null;
        this.contacts.forEach(function (contact) {
            if(contact.id==id){
                selected = contact;
            }
        });

        return selected;
    }
    
    public add(contact):void{
        this.contacts.push(contact);
    }
    public update(contact):void{
        var ct= this.getById(contact.id);
        ct.name=contact.name;
        ct.profile=contact.profile;
        ct.address=contact.address;
        ct.email=contact.email;
    }
    public get(){
        return this.contacts;
    }

}
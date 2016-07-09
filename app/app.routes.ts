import {Component, ViewMetadata} from '@angular/core';

import { provideRouter, RouterConfig } from '@angular/router';
import {AppComponent} from './components/app.component'
import { AddressListComponent} from './components/address-list.component'
import { AddressDetailComponent} from './components/address-detail.component'

export const routes: RouterConfig = [
    { path: '', component: AddressListComponent },
    //{ path: 'list', component: AddressListComponent },
    { path: 'detail/:id', component: AddressDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
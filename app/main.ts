import { bootstrap }    from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';

import { AppComponent } from './components/app.component';
import {Common} from "./services/commonService";
import { APP_ROUTER_PROVIDERS } from './app.routes'

bootstrap(AppComponent,[APP_ROUTER_PROVIDERS, Common ]).catch(err => console.error(err));
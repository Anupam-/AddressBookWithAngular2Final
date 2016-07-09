import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

// import { DialogService }  from './dialog.service';
// import { HeroService }    from './heroes/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: '../app/components/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}
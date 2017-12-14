import {
    Component,
    OnInit
} from '@angular/core';
import { Route } from '@angular/router';
import { routes } from '../../layout.routes';

@Component({
    selector: 'cmp-admin-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

    baseRoutes: Array<Route> = routes;

    constructor() {
    }

    ngOnInit() {
    }
}

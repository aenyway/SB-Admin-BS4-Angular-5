import {
    Component,
    OnInit
} from '@angular/core';

import { Route } from '@angular/router';
import { routes } from './layout.routes';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    baseRoutes: Array<Route> = routes;

    constructor() {
    }

    ngOnInit() {
    }

}

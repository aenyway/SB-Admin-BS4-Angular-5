import {
    Component,
    OnInit
} from '@angular/core';

import { Route } from '@angular/router';
import { routes } from './core.routes';

@Component({
    selector: 'app-layout',
    templateUrl: './core.component.html',
    styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

    baseRoutes: Array<Route> = routes;

    constructor() {
    }

    ngOnInit() {
    }

}

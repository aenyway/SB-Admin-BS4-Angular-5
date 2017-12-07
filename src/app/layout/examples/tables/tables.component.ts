import {
    Component,
    OnInit
} from '@angular/core';
import { routerLayoutTransition } from '../../../router.animations';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerLayoutTransition()]
})
export class TablesComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}

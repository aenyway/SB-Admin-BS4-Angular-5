import {
    Component,
    OnInit
} from '@angular/core';
import { routerLayoutTransition } from '../../../../router.animations';

@Component({
    selector: 'cmp-admin-emi',
    templateUrl: './emi.component.html',
    styleUrls: ['./emi.component.scss'],
    animations: [routerLayoutTransition()]
})
export class EmiComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }
}

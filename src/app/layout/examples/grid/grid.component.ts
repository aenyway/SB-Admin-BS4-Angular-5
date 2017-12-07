import {
    Component,
    OnInit
} from '@angular/core';
import { routerLayoutTransition } from '../../../router.animations';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerLayoutTransition()]
})
export class GridComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}

import {
    Component,
    OnInit
} from '@angular/core';
import { routerLayoutTransition } from '../../../router.animations';

@Component({
    selector: 'app-bs-element',
    templateUrl: './bs-element.component.html',
    styleUrls: ['./bs-element.component.scss'],
    animations: [routerLayoutTransition()]
})
export class BsElementComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}

import {
    Component,
    OnInit
} from '@angular/core';
import { routerLayoutTransition } from '../../../router.animations';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
    animations: [routerLayoutTransition()]
})
export class FormComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}

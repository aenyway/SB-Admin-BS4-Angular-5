import {
    Component,
    OnInit
} from '@angular/core';
import {
    generateMockedSideBarConfig,
    sideBarElementConfig
} from './components';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    sideBarConfig: Array<sideBarElementConfig> = generateMockedSideBarConfig();

    constructor() {
    }

    ngOnInit() {
    }

}

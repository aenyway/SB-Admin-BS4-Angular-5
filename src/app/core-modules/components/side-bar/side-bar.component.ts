import {
    Component,
    Input
} from '@angular/core';
import { sideBarElementConfig } from '../side-bar-element/side-bar-element-config';

@Component({
    selector: 'cmp-admin-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

    @Input() config: Array<sideBarElementConfig>;

    // TODO: move to state control
    isActive: boolean = false;

    eventCalled() {
        this.isActive = !this.isActive;
    }
}

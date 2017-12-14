import {
    Component,
    Input
} from '@angular/core';
import { Route } from '@angular/router';

@Component({
    selector: 'cmp-admin-side-bar',
    templateUrl: './side-bar.component.html',
    styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

    @Input() baseRoutes: Array<Route>;

    // TODO: move to state control
    isActive: boolean = false;

    eventCalled() {
        this.isActive = !this.isActive;
    }
}

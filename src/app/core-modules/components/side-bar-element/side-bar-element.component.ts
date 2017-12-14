import {
    Component,
    Input
} from '@angular/core';
import { Route } from '@angular/router';

@Component({
    selector: 'cmp-admin-side-bar-element',
    templateUrl: './side-bar-element.component.html',
    styleUrls: ['./side-bar-element.component.scss']
})
export class SideBarElementComponent {
    showMenu: string = '';

    @Input() baseRoute: Route;

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}

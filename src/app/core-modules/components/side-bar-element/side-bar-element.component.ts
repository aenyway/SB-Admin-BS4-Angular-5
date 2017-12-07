import {
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'cmp-admin-side-bar-element',
    templateUrl: './side-bar-element.component.html',
    styleUrls: ['./side-bar-element.component.scss']
})
export class SideBarElementComponent {
    showMenu: string = '';

    @Input() configElement: any;

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}

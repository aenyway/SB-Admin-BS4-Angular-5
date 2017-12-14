import {
    Component,
    Input,
} from '@angular/core';
import { Route } from '@angular/router';

@Component({
    selector: 'cmp-admin-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() baseRoute: Route;
}

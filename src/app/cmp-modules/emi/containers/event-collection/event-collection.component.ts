import {
    Component,
    OnInit
} from '@angular/core';
import { Event } from '../../../dataStore/models';
import { EventModelService } from '../../../dataStore/models/services';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'cmp-admin-event-collection',
    templateUrl: './event-collection.component.html',
    styleUrls: ['./event-collection.component.scss']
})
export class EventCollectionComponent implements OnInit {

    eventCollection$: Observable<Array<Event>>;

    constructor(private eventModelService: EventModelService) {
        this.eventCollection$ = this.eventModelService.findAll();
    }

    ngOnInit() {
    }
}

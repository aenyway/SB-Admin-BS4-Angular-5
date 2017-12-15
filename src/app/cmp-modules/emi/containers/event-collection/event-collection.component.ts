import {
    Component,
    OnInit
} from '@angular/core';
import { EventModelService } from '../../../dataStore/models/services';
import { Observable } from 'rxjs/Observable';
import { EventType } from '../../../dataStore/models/event/event';
import { BaseModelService } from '../../../dataStore/baseModel.service';
import { Event } from '../../../dataStore/models/';

@Component({
    selector: 'cmp-admin-event-collection',
    templateUrl: './event-collection.component.html',
    styleUrls: ['./event-collection.component.scss']
})
export class EventCollectionComponent implements OnInit {

    eventCollection$: Observable<Array<EventType>>;

    constructor(private eventModelService: EventModelService) {
        // this.eventCollection$ = this.eventModelService.findAll();
    }

    ngOnInit() {
        this.eventCollection$ = this.eventModelService.findAll();
        this.eventModelService.findAll().subscribe(
            (events: Event[]) => console.log(events)
        );        
        // this.eventCollection$ =
    }
}

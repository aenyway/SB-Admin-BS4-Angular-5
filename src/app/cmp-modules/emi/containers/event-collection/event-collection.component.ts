import {
    Component,
    OnInit
} from '@angular/core';
import { EventModelService } from '../../../dataStore/models/services';
import { Observable } from 'rxjs/Observable';
import { Event } from '../../../dataStore/models/';

@Component({
    selector: 'cmp-admin-event-collection',
    templateUrl: './event-collection.component.html',
    styleUrls: ['./event-collection.component.scss']
})
export class EventCollectionComponent implements OnInit {

    eventCollection$: Observable<Array<Event>>;

    constructor(private eventModelService: EventModelService) {
        this.eventCollection$ = this.eventModelService.findAll({include: 'toc'});
        this.eventCollection$
            .subscribe((data) => {
                console.log("data", data);
            });
    }

    ngOnInit() {
    }
}

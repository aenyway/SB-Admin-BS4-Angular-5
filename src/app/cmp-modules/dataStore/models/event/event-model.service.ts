import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { Event } from './';
import { Datastore } from '../../datastore';

@Injectable()
export class EventModelService extends BaseModelService<Event> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Event;
    }
}

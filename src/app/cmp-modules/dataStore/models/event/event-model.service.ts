import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Event,
    EventType
} from './';

@Injectable()
export class EventModelService extends BaseModelService<Event, EventType> {
}

import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import { EventType } from './event';

@Injectable()
export class EventModelService extends BaseModelService<EventType> {
}

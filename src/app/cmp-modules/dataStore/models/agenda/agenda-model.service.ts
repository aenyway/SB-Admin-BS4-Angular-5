import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Agenda,
    AgendaItem
} from './';
import { Datastore } from '../../datastore';

@Injectable()
export class AgendaModelService extends BaseModelService<Agenda> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Agenda;
    }
}

@Injectable()
export class AgendaItemModelService extends BaseModelService<AgendaItem> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = AgendaItem;
    }
}

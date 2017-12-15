import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Agenda,
    AgendaItem,
    AgendaItemType,
    AgendaType
} from './';

@Injectable()
export class AgendaModelService extends BaseModelService<Agenda> {
    modeltype = Agenda;
}

@Injectable()
export class AgendaItemModelService extends BaseModelService<AgendaItem> {
    modeltype = AgendaItem;
}

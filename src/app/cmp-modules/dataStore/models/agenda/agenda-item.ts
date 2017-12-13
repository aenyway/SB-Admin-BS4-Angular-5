import { Agenda } from './agenda';
import {
    Attribute,
    BelongsTo,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export interface AgendaItemType {
    title: string;
    agendaItemType: string;
    subTitle: string;
    timeType: string;
    timeStart: string;
    timeEnd: string;
    timeLabel: string;
    agenda: Agenda;
}

@JsonApiModelConfig({
    type: 'agendaItems'
})

export class AgendaItem extends JsonApiModel {
    @Attribute()
    title: string;
    @Attribute()
    agendaItemType: string;
    @Attribute()
    subTitle: string;
    @Attribute()
    timeType: string;
    @Attribute()
    timeStart: string;
    @Attribute()
    timeEnd: string;
    @Attribute()
    timeLabel: string;

    @BelongsTo()
    agenda: Agenda;
}

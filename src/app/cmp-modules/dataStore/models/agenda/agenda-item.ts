import { Agenda } from './agenda';
import {
    Attribute,
    BelongsTo,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

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

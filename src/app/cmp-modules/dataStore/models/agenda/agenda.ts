import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { AgendaItem } from './agenda-item';

export interface AgendaType {
    title: string;
    agendaItems: AgendaItem[];
}

@JsonApiModelConfig({
    type: 'agendas'
})

export class Agenda extends JsonApiModel {
    @Attribute()
    title: string;

    @HasMany({"key": "agenda-items"})
    agendaItems: AgendaItem[];

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.agendaItems != undefined && this.agendaItems.length > 0;
    }
}

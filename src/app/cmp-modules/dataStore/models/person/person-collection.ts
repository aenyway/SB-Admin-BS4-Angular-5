import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { Person } from './';

export interface PersonCollectionType {
    title: string;
    people: Person[];
}

@JsonApiModelConfig({
    type: 'person-collections'
})

export class PersonCollection extends JsonApiModel {
    @Attribute()
    title: string;

    @HasMany()
    people: Person[];

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.people != undefined && this.people.length > 0;
    }
}

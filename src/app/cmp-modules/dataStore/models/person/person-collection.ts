import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { Person } from './';

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

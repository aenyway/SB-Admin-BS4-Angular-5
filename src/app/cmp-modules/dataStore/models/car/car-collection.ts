import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';
import { Car } from './';

export class CarCollectionType extends JsonApiModel {
    title: string;
    cars: Car[];
}

@JsonApiModelConfig({
    type: 'car-collections'
})

export class CarCollection extends JsonApiModel {
    @Attribute()
    title: string;

    @HasMany()
    cars: Car[];

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.contentBlocks != undefined && this.contentBlocks.length > 0;
    }
}

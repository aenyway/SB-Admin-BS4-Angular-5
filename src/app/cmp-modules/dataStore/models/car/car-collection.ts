import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { Car } from './car';

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

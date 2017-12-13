import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export class CarType extends JsonApiModel {
    title: string;
}

@JsonApiModelConfig({
    type: 'cars'
})

export class Car extends JsonApiModel {
    @Attribute()
    title: string;
}

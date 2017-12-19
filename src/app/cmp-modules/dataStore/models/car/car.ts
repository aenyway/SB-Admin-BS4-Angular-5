import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

@JsonApiModelConfig({
    type: 'cars'
})

export class Car extends JsonApiModel {
    @Attribute()
    title: string;
}

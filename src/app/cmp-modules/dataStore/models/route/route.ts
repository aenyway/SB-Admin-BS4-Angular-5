import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

@JsonApiModelConfig({
    type: 'routes'
})

export class Route extends JsonApiModel {
    @Attribute()
    title: string;
}

import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export interface RouteType extends JsonApiModel {
    title: string;
}

@JsonApiModelConfig({
    type: 'routes'
})

export class Route extends JsonApiModel {
    @Attribute()
    title: string;
}

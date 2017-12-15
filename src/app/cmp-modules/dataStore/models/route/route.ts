import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

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

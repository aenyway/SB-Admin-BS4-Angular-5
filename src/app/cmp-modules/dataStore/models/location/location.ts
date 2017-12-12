import {
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'location'
})

export interface LocationType {
}

export class Location extends JsonApiModel {
}

import {
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export interface LocationType {
}

@JsonApiModelConfig({
    type: 'location'
})

export class Location extends JsonApiModel {
}

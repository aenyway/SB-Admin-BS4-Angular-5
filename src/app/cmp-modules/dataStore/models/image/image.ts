import {
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

@JsonApiModelConfig({
    type: 'image'
})

export interface ImageType {
}

export class Image extends JsonApiModel {
}

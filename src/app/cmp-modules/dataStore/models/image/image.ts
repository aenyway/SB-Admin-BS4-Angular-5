import {
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export interface ImageType {
}

@JsonApiModelConfig({
    type: 'image'
})

export class Image extends JsonApiModel {
}

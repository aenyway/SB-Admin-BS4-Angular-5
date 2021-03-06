import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export class ImageType extends JsonApiModel {
    location: string;
}

@JsonApiModelConfig({
    type: 'images'
})

export class Image extends JsonApiModel {
    @Attribute()
    location: string;
}

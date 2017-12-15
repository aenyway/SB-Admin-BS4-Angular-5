import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

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

import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

@JsonApiModelConfig({
    type: 'images'
})

export class Image extends JsonApiModel {
    @Attribute()
    location: string;
}

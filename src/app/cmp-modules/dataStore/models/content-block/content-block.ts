import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

export class ContentBlockType extends JsonApiModel {
    title: string;
}

@JsonApiModelConfig({
    type: 'content-blocks'
})

export class ContentBlock extends JsonApiModel {
    @Attribute()
    title: string;
}

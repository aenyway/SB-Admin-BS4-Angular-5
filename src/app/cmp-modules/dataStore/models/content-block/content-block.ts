import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

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

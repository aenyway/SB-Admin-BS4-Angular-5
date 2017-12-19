import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

@JsonApiModelConfig({
    type: 'content-blocks'
})

export class ContentBlock extends JsonApiModel {
    @Attribute()
    title: string;
}

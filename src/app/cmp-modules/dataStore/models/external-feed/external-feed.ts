import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

export class ExternalFeedType extends JsonApiModel {
    location: string;
}

@JsonApiModelConfig({
    type: 'external-feeds'
})

export class ExternalFeed extends JsonApiModel {
    @Attribute()
    location: string;
}

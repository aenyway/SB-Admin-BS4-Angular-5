import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

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

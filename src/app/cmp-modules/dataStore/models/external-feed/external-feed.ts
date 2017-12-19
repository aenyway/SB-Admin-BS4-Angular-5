import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

@JsonApiModelConfig({
    type: 'external-feeds'
})

export class ExternalFeed extends JsonApiModel {
    @Attribute()
    location: string;
}

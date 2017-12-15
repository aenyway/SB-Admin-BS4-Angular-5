import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

export class LocationType extends JsonApiModel {
    title: string;
    locationType: string;
    subtitle: string;
    headline: string;
    text: string;
    street: string;
    city: string;
    postal: string;
    country: string;
    telephone: string;
    website: string;
    lat: string;
    lng: string;
    warningVisibility: string;
    warningText: string;
}

@JsonApiModelConfig({
    type: 'locations'
})

export class Location extends JsonApiModel {
    @Attribute()
    title: string;
    @Attribute({"serializedName": "location-type"})
    locationType: string;
    @Attribute({"serializedName": "sub-title"})
    subtitle: string;
    @Attribute()
    headline: string;
    @Attribute()
    text: string;
    @Attribute()
    street: string;
    @Attribute()
    city: string;
    @Attribute()
    postal: string;
    @Attribute()
    country: string;
    @Attribute()
    telephone: string;
    @Attribute()
    website: string;
    @Attribute()
    lat: string;
    @Attribute()
    lng: string;
    @Attribute({"serializedName": "warning-visibility"})
    warningVisibility: string;
    @Attribute({"serializedName": "warning-text"})
    warningText: string;
}

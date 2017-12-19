import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

@JsonApiModelConfig({
    type: 'people'
})

export class Person extends JsonApiModel {
    @Attribute({"serializedName": "first-name"})
    firstName: string;
    @Attribute({"serializedName": "last-name"})
    lastName: string;
    @Attribute()
    role: string;
    @Attribute()
    mail: string;
    @Attribute()
    phone: string;
    @Attribute()
    mobile: string;
    @Attribute()
    fax: string;
}

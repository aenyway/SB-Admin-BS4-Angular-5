import {
    Attribute,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';

export class PersonType extends JsonApiModel {
    firstName: string;
    lastName: string;
    role: string;
    mail: string;
    phone: string;
    mobile: string;
    fax: string;
}

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

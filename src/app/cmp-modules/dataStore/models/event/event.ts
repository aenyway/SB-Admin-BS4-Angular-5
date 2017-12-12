import {
    Attribute,
    HasMany,
    HasOne,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';

import {
    Image,
    Location,
    Toc
} from '../';

@JsonApiModelConfig({
    type: 'events'
})

export interface EventType {
    title: string;
    eventType: string;
    subtitle: string;
    startDate: Date;
    endDate: Date;
    embargoDate: Date;
    emergencyPhone: string;
    hashtag: string;
    toc: Toc;
    events: Event[];
    headerImage: Image;
    location: Location;
}

export class Event extends JsonApiModel {
    @Attribute()
    title: string;
    @Attribute({"serializedName": "event-type"})
    eventType: string;
    @Attribute({"serializedName": "sub-title"})
    subtitle: string;
    @Attribute({"serializedName": "start-date"})
    startDate: Date;
    @Attribute({"serializedName": "end-date"})
    endDate: Date;
    @Attribute({"serializedName": "embargo-date"})
    embargoDate: Date;
    @Attribute({"serializedName": "emergency-phone"})
    emergencyPhone: string;
    @Attribute({"serializedName": "hashtag"})
    hashtag: string;

    @HasOne({"key": "toc"})
    toc: Toc;
    @HasMany({"key": "events"})
    events: Event[];
    @HasOne({"key": "header-image"})
    headerImage: Image;
    @HasOne({"key": "location"})
    location: Location;

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.events != undefined && this.events.length > 0;
    }
}

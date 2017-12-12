import { Injectable } from '@angular/core';
import {
    Headers,
    Http
} from '@angular/http';
import {
    DatastoreConfig,
    JsonApiDatastore,
    JsonApiDatastoreConfig
} from 'angular2-jsonapi';
import { Observable } from 'rxjs/Observable';

// Models
import {
    Event,
    Location,
    Image,
    Toc,
    // Agenda,
    // Person,
    // TocEntry,
    // AppState,
    // Article,
    // ArticleCollection,
    // Car,
    // CarCollection,
    // RouteCollection,
    // ExternalFeed,
    // PersonCollection,
    // Route,
    // ContentBlock,
    // AgendaItem,
} from './models';


const config: DatastoreConfig = {
    baseUrl: 'http://memedia-fake-erm.dev/api/v1',
    models: {
        'events': Event,
        'locations': Location,
        'images': Image,
        'header-images': Image,
        'tocs': Toc,
        // 'agendas': Agenda,
        // 'articles': Article,
        // 'article-collections': ArticleCollection,
        // 'car-collections': CarCollection,
        // 'cars': Car,
        // 'content-blocks': ContentBlock,
        // 'agenda-items': AgendaItem,
        // 'people': Person,
        // 'toc-entries': TocEntry,
        // 'routes': Route,
        // 'route-collections': RouteCollection,
        // 'person-collections': PersonCollection,
        // 'external-feeds': ExternalFeed
    }
};

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    // public appState: AppState;

    constructor(http: Http) {
        super(http);
        this.headers = new Headers({'Content-Type': 'application/vnd.api+json'});

        // this.appState = this.createRecord(AppState, {});

    }

    public getSelectedEvent(): Observable<Event> {
        let event: Event;
        //event = this.peekRecord(Event, '5');
        if (!event) {
            return this.findRecord(Event, '5', {
                include: 'toc.toc-entries'
            });
        }
        return Observable.of(event);
    }
}

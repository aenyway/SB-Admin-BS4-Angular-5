import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    // AgendaItemModelService,
    // AgendaModelService,
    // ArticleCollectionModelService,
    // ArticleModelService,
    // CarCollectionModelService,
    // CarModelService,
    // ContentBlockModelService,
    EventModelService,
    // ExternalFeedModelService,
    // ImageModelService,
    // LocationModelService,
    // PersonCollectionModelService,
    // PersonModelService,
    // RouteCollectionModelService,
    // RouteModelService,
    // TocModelService,
    // TocEntryModelService,
} from './models/services';
import { Datastore } from './datastore';
import {
    HttpModule
} from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    providers: [
        // AgendaItemModelService,
        // AgendaModelService,
        // ArticleCollectionModelService,
        // ArticleModelService,
        // CarCollectionModelService,
        // CarModelService,
        // ContentBlockModelService,
        EventModelService,
        // ExternalFeedModelService,
        // ImageModelService,
        // LocationModelService,
        // PersonCollectionModelService,
        // PersonModelService,
        // RouteCollectionModelService,
        // RouteModelService,
        // TocModelService,
        // TocEntryModelService,
        //
        Datastore,
    ],
    declarations: []
})
export class DatastoreModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    AgendaItemModelService,
    AgendaModelService,
    ArticleCollectionModelService,
    ArticleModelService,
    CarCollectionModelService,
    CarModelService,
    ContentBlockModelService,
    EventModelService,
    ExternalFeedModelService,
    ImageModelService,
    LocationModelService,
    PersonCollectionModelService,
    PersonModelService,
    RouteCollectionModelService,
    RouteModelService,
    TocModelService,
    TocEntryModelService,
} from './models/services';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        AgendaItemModelService,
        AgendaModelService,
        ArticleCollectionModelService,
        ArticleModelService,
        CarCollectionModelService,
        CarModelService,
        ContentBlockModelService,
        EventModelService,
        ExternalFeedModelService,
        ImageModelService,
        LocationModelService,
        PersonCollectionModelService,
        PersonModelService,
        RouteCollectionModelService,
        RouteModelService,
        TocModelService,
        TocEntryModelService,
    ],
    declarations: []
})
export class DatastoreModule {
}

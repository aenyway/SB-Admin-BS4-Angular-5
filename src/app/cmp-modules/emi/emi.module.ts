import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmiRoutingModule } from './emi-routing.module';
import { EmiComponent } from './containers/emi/emi.component';
import { EventCollectionComponent } from './containers/event-collection/event-collection.component';
import { EventComponent } from './containers/event/event.component';
import { DatastoreModule } from '../dataStore/datastore.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        EmiRoutingModule,
        DatastoreModule,
        TranslateModule,
    ],
    declarations: [
        EmiComponent,
        EventCollectionComponent,
        EventComponent
    ]
})
export class EmiModule {
}

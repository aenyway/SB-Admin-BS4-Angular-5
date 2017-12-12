import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmiRoutingModule } from './emi-routing.module';
import { EmiComponent } from './containers/emi/emi.component';
import { EventCollectionComponent } from './containers/event-collection/event-collection.component';
import { EventComponent } from './containers/event/event.component';

@NgModule({
    imports: [
        CommonModule,
        EmiRoutingModule
    ],
    declarations: [EmiComponent, EventCollectionComponent, EventComponent]
})
export class EmiModule {
}

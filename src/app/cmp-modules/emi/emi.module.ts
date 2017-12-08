import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmiRoutingModule } from './emi-routing.module';
import { EmiComponent } from './containers/emi/emi.component';

@NgModule({
    imports: [
        CommonModule,
        EmiRoutingModule
    ],
    declarations: [EmiComponent]
})
export class EmiModule {
}

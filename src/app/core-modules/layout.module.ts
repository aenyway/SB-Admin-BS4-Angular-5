import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import {
    HeaderComponent,
    SideBarComponent,
    SideBarElementComponent
} from './components';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SideBarComponent,
        SideBarElementComponent,
    ]
})
export class LayoutModule {
}

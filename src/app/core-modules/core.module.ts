import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import {
    HeaderComponent,
    SideBarComponent,
    SideBarElementComponent
} from './components';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [
        CoreComponent,
        HeaderComponent,
        SideBarComponent,
        SideBarElementComponent,
        LandingPageComponent,
        CardComponent,
    ]
})
export class CoreModule {
}

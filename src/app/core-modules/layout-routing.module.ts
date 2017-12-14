import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { routes } from './layout.routes';

const _routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            ...[
                {
                    path: '',
                    redirectTo: 'start',
                },
                {
                    path: 'start',
                    component: LandingPageComponent,
                }
            ],
            ...routes
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(_routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}

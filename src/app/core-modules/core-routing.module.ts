import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { CoreComponent } from './core.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { routes } from './core.routes';

const _routes: Routes = [
    {
        path: '',
        component: CoreComponent,
        children: [
            ...[
                {
                    path: '',
                    redirectTo: 'start',
                    pathMatch: 'full'
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
export class CoreRoutingModule {
}

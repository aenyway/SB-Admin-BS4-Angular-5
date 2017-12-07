import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { EmiComponent } from './containers/emi/emi.component';

const routes: Routes = [
    {
        path: '',
        component: EmiComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EmiRoutingModule {
}

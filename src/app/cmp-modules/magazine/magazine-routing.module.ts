import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { MagazineComponent } from './containers/magazine/magazine.component';

const routes: Routes = [
    {
        path: '',
        component: MagazineComponent,
        children: []
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MagazineRoutingModule {
}

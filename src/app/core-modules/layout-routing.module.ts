import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {path: '', redirectTo: 'x-dashboard'},

            {path: 'emi', loadChildren: '../cmp-modules/emi/emi.module#EmiModule'},
            {path: 'management', loadChildren: '../cmp-modules/management/management.module#ManagementModule'},
            {path: 'magazine', loadChildren: '../cmp-modules/magazine/magazine.module#MagazineModule'},
            {path: 'dashboard', loadChildren: '../cmp-modules/dashboard/dashboard.module#DashboardModule'},
            {
                path: 'notifications',
                loadChildren: '../cmp-modules/notifications/notifications.module#NotificationsModule'
            },

            {path: 'x-dashboard', loadChildren: './examples/dashboard/dashboard.module#DashboardModule'},
            {path: 'x-charts', loadChildren: './examples/charts/charts.module#ChartsModule'},
            {path: 'x-tables', loadChildren: './examples/tables/tables.module#TablesModule'},
            {path: 'x-forms', loadChildren: './examples/form/form.module#FormModule'},
            {path: 'x-bs-element', loadChildren: './examples/bs-element/bs-element.module#BsElementModule'},
            {path: 'x-grid', loadChildren: './examples/grid/grid.module#GridModule'},
            {path: 'x-components', loadChildren: './examples/bs-component/bs-component.module#BsComponentModule'},
            {path: 'x-blank-page', loadChildren: './examples/blank-page/blank-page.module#BlankPageModule'}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}

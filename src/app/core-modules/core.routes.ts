import { Route } from '@angular/router';

export const routes: Array<Route> = [
    {
        path: 'dashboard',
        loadChildren: '../cmp-modules/dashboard/dashboard.module#DashboardModule',
        data: {
            title: 'Dashboard',
            subtitle: 'Dashboard',
            icon: 'fa fa-fw fa-dashboard',
        },
    },
    {
        path: 'emi',
        loadChildren: '../cmp-modules/emi/emi.module#EmiModule',
        data: {
            title: 'EMI / Events',
            subtitle: 'EMI / Events',
            icon: 'fa fa-fw fa-flag-checkered',
        },
    },
    {
        path: 'notifications',
        loadChildren: '../cmp-modules/notifications/notifications.module#NotificationsModule',
        data: {
            title: 'Notifications',
            subtitle: 'Notifications',
            icon: 'fa fa-fw fa-bell-o',
        },
    },
    {
        path: 'magazine',
        loadChildren: '../cmp-modules/magazine/magazine.module#MagazineModule',
        data: {
            title: 'Magazine',
            subtitle: 'Magazine',
            icon: 'fa fa-fw fa-newspaper-o',
        },
    },
    {
        path: 'management',
        loadChildren: '../cmp-modules/management/management.module#ManagementModule',
        data: {
            title: 'App-Management',
            subtitle: 'App-Management',
            icon: 'fa fa-fw fa-gear',
        },
    },

    {path: 'x-dashboard', loadChildren: './examples/dashboard/dashboard.module#DashboardModule'},
    {path: 'x-charts', loadChildren: './examples/charts/charts.module#ChartsModule'},
    {path: 'x-tables', loadChildren: './examples/tables/tables.module#TablesModule'},
    {path: 'x-forms', loadChildren: './examples/form/form.module#FormModule'},
    {path: 'x-bs-element', loadChildren: './examples/bs-element/bs-element.module#BsElementModule'},
    {path: 'x-grid', loadChildren: './examples/grid/grid.module#GridModule'},
    {path: 'x-components', loadChildren: './examples/bs-component/bs-component.module#BsComponentModule'},
    {path: 'x-blank-page', loadChildren: './examples/blank-page/blank-page.module#BlankPageModule'}
];

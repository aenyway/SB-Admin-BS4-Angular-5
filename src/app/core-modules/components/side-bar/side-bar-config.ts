import { sideBarElementConfig } from '../side-bar-element/side-bar-element-config';

export function generateMockedSideBarConfig(): Array<sideBarElementConfig> {
    return [
        {
            title: 'Dashboard',
            routes: ['/dashboard'],
            icon: 'fa fa-fw fa-dashboard',
        },
        {
            title: 'EMI / Events',
            routes: ['/emi'],
            icon: 'fa fa-fw fa-flag-checkered',
        },
        {
            title: 'Notifications',
            routes: ['/notifications'],
            icon: 'fa fa-fw fa-bell-o',
        },
        {
            title: 'Magazine',
            routes: ['/magazine'],
            icon: 'fa fa-fw fa-newspaper-o',
        },
        {
            title: 'App-Management',
            routes: ['/management'],
            items: [
                {
                    title: 'Info',
                    routes: ['/management/info'],
                    icon: 'fa fa-fw fa-info',
                },
                {
                    title: 'Killswitches',
                    routes: ['/management/kill-switches'],
                    icon: 'fa fa-fw fa-window-close-o',
                },
                {
                    title: 'MyContent',
                    routes: ['/management/my-content'],
                    icon: 'fa fa-fw fa-book',
                },
                {
                    title: 'Events',
                    routes: ['/management/events'],
                    icon: 'fa fa-fw fa-flag-checkered',
                },
            ]
        },
        {
            divider: true
        },
        {
            title: 'X Dashboard',
            routes: ['/x-dashboard'],
            icon: 'fa fa-fw fa-dashboard'
        },
        {
            title: 'X Charts',
            routes: ['/x-charts'],
            icon: 'fa fa-fw fa-bar-chart-o'
        },
        {
            title: 'X Tables',
            routes: ['/x-tables'],
            icon: 'fa fa-fw fa-table'
        },
        {
            title: 'X forms',
            routes: ['/x-forms'],
            icon: 'fa fa-fw fa-edit'
        },
        {
            title: 'X bs-element',
            routes: ['/x-bs-element'],
            icon: 'fa fa-fw fa-desktop'
        },
        {
            title: 'X grid',
            routes: ['/x-grid'],
            icon: 'fa fa-fw fa-wrench'
        },
        {
            title: 'X components',
            routes: ['/x-components'],
            icon: 'fa fa-fw fa-th-list'
        },
        {
            title: 'X blank-page',
            routes: ['/x-blank-page'],
            icon: 'fa fa-fw fa-file-o'
        },
    ];
}

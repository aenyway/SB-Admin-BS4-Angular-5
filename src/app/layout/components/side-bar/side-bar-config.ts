import { sideBarElementConfig } from '../side-bar-element/side-bar-element-config';

export function generateMockSideNavConfig(): Array<sideBarElementConfig> {
    return [
        {
            title: 'Dashboard',
            routes: ['/dashboard'],
            icon: 'fa fa-fw fa-dashboard'
        },
        {
            title: 'notifications',
            routes: ['/notifications'],
            items: [
                {
                    title: 'notifications/sub1',
                    routes: ['/notifications/sub1'],
                },
                {
                    title: 'notifications/sub2',
                    routes: ['/notifications/sub2'],
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
            icon: 'fa fa-th-list'
        },
        {
            title: 'X blank-page',
            routes: ['/x-blank-page'],
            icon: 'fa fa-file-o'
        },
    ];
}

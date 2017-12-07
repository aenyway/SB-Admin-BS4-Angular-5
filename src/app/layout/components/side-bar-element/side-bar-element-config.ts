export interface sideBarDivider {
    divider: boolean;
}

export interface sideBarRouteElement {
    title: string;
    routes: Array<string>;
    icon?: string;
    items?: Array<sideBarElementConfig>;
}

export type sideBarElementConfig = sideBarRouteElement | sideBarDivider;

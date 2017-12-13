import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular2-jsonapi';
import { Route } from './';

export class RouteCollectionType extends JsonApiModel {
    title: string;
    routes: Route[];
}

@JsonApiModelConfig({
    type: 'route-collections'
})

export class RouteCollection extends JsonApiModel {
    @Attribute()
    title: string;

    @HasMany()
    routes: Route[];

    private _hasChildren: boolean = false;
    get hasChildren(): boolean {
        return this.routes != undefined && this.routes.length > 0;
    }
}

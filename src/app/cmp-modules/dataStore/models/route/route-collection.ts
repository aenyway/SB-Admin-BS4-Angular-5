import {
    Attribute,
    HasMany,
    JsonApiModel,
    JsonApiModelConfig
} from 'angular-jsonapi-client';
import { Route } from './';

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

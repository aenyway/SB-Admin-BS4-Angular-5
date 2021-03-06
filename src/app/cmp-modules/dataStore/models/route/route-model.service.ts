import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Route,
    RouteCollection,
    RouteCollectionType,
    RouteType
} from './';

@Injectable()
export class RouteModelService extends BaseModelService<Route, RouteType> {
}

@Injectable()
export class RouteCollectionModelService extends BaseModelService<RouteCollection, RouteCollectionType> {
}

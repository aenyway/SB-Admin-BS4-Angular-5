import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Route,
    RouteCollection
} from './';
import { Datastore } from '../../datastore';

@Injectable()
export class RouteModelService extends BaseModelService<Route> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Route;
    }
}

@Injectable()
export class RouteCollectionModelService extends BaseModelService<RouteCollection> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = RouteCollection;
    }
}

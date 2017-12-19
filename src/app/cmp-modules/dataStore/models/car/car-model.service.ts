import { Injectable } from '@angular/core';
import { BaseModelService } from '../../baseModel.service';
import {
    Car,
    CarCollection
} from './';
import { Datastore } from '../../datastore';

@Injectable()
export class CarModelService extends BaseModelService<Car> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = Car;
    }
}

@Injectable()
export class CarCollectionModelService extends BaseModelService<CarCollection> {
    constructor(private _datastore: Datastore) {
        super(_datastore);
        this.modelType = CarCollection;
    }
}
